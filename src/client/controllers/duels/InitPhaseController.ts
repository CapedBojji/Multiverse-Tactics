import { Components } from "@flamework/components";
import { Controller, OnStart, OnInit } from "@flamework/core";
import { Janitor } from "@rbxts/better-janitor";
import { Logger } from "@rbxts/log";
import { CollectionService } from "@rbxts/services";
import { CameraComponent } from "client/components/duels/camera-component";
import instanceManager, { InstanceManager } from "client/manager/instance-manager";
import { MapEnum } from "client/manager/instance-manager/duels/create-map";
import { GameState, RootProducer } from "client/state";
import { Duel } from "shared/slices/duels";

@Controller({})
export class InitPhaseController implements OnStart, OnInit {
	constructor(
		private readonly logger: Logger,
		private readonly gameState: RootProducer,
		private readonly instanceManager: InstanceManager,
        private readonly components: Components,
	) {}
	onInit() {}

	onStart() {
		this.logger.Info("InitPhaseController started");
		const selectDuels = (state: GameState) => state.duelsSlice.duels;
		this.gameState.observe(selectDuels, (duel, index) => {
			return this.onNewDuel(duel, index);
		});
	}

	private onNewDuel(duel: Duel, index: number) {
		this.logger.Info(`New duel: ${duel.matchId} at index ${index}`);
		const duelJanitor = new Janitor<string>();

		// Check if the duel is in the init phase
		if (duel.phase !== "Init") {
			return;
		}

		// Subscribe to the duel's state changes
		const selectDuelPhase = (state: GameState) => state.duelsSlice.duels[index].phase;
		this.gameState.subscribe(selectDuelPhase, (state, previousState) => {
			// If state is now in the planning or combat phase,
			// Cleanup:
			// - Unsubscribe from the duel's state changes
			// If state is now in the end phase,
			// Cleanup:
			// - Delete the janitor
		});

		// Create a new duel UI

		// Create new duel map
		const duelMap = this.instanceManager.createNewMap(MapEnum.Default) as Model;
		duelMap.Parent = game.Workspace;
		duelMap.AddTag("DuelMap");

		duelJanitor.addFunction(() => {
			CollectionService.GetTagged("DuelMap").forEach((map) => {
				map.RemoveTag("DuelMap");
			});
		}, "Remove DuelMap tag");
		duelJanitor.addInstance(duelMap, "DuelMap");
		// Attach CameraComponent to the camera
		const camera = game.Workspace.CurrentCamera!;
        this.components.addComponent<CameraComponent>(camera)
        // Attach StunComponent to the player
        

		return () => {
			duelJanitor.cleanup();
		};
	}
}
