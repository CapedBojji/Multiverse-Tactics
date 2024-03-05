import { GlobalEvents } from "./../../../shared/networking/index";
import { Components } from "@flamework/components";
import { Controller, OnStart, OnInit } from "@flamework/core";
import { Logger } from "@rbxts/log";
import { InstanceManager } from "client/manager/instance-manager";
import { RootProducer } from "client/state";

@Controller({})
export class BattlePhaseController implements OnStart, OnInit {
	constructor(
		private readonly logger: Logger,
		private readonly gameState: RootProducer,
		private readonly instanceManager: InstanceManager,
	) {}

	onInit() {}

	onStart() {
		// this.logger.Info("BattlePhaseController started");
		// Observe the duels state
	}
}
