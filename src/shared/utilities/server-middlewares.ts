import { Networking } from "@flamework/networking";
import Log from "@rbxts/log";
import { BroadcastAction } from "@rbxts/reflex";
import serializer from "./serializer";

export function eventLoggingMiddleware(): Networking.EventMiddleware<unknown[]> {
	return (processEvent, event) => {
		const Logger = Log.ForContext({
			toString() {
				return event.name;
			},
		});
		Logger.Info(`Registered event ${event.name}`);
		return (player, ...args) => {
			const serializedData = serializer.serializeTableDeep(args);
			Logger.Info(
				`Received event ${event.name} from ${player!.Name} with args ${serializedData}`,
			);
			processEvent(player, ...args);
		};
	};
}
