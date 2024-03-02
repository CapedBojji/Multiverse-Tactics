import { Controller, OnStart, OnInit, Modding } from "@flamework/core";
import { Janitor } from "@rbxts/better-janitor";
import { Players } from "@rbxts/services";
import LemonSignal from "shared/modules/lemon-signal";
import { OnCharacterAdded } from "shared/utilities/listeners";

@Controller({})
export class CharacterAdded implements OnStart, OnInit {
	private readonly signal = new LemonSignal();
	private readonly janitor = new Janitor<OnCharacterAdded>();
	constructor() {}
	onInit() {}

	onStart() {
		Modding.onListenerAdded<OnCharacterAdded>((listener) => {
			const connection = this.signal.Connect((character) => {
				listener.onCharacterAdded(character as Model);
			});
			this.janitor.addFn(() => connection.Disconnect(), listener);
		});
		Modding.onListenerRemoved<OnCharacterAdded>((listener) => {
			this.janitor.clean(listener);
		});

		const player = Players.LocalPlayer;
		player.CharacterAdded.Connect((character) => {
			this.signal.Fire(character);
		});

		if (player.Character) {
			this.signal.Fire(player.Character);
		}
	}
}
