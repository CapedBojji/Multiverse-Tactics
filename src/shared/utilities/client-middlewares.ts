import { Networking } from "@flamework/networking";
import { EventMiddleware } from "@flamework/networking/out/middleware/types";
import Log from "@rbxts/log";
import serializer from "./serializer";

export function eventLoggingMiddleware(): Networking.EventMiddleware {
	return (processEvent, event) => {
		const Logger = Log.ForContext({
			toString() {
				return event.name;
			},
		});
		Logger.Info(`Registered event ${event.name}`);
		return (...args) => {
			const serializedData = serializer.serializeTableDeep(args);
			Logger.Info(`Received event ${event.name} with args ${serializedData}`);
			processEvent(...args);
		};
	};
}
