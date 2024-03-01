import { Networking } from "@flamework/networking";
import { EventMiddleware } from "@flamework/networking/out/middleware/types";
import { BroadcastAction } from "@rbxts/reflex";
import GlobalEvents from "shared/networking";
import { eventLoggingMiddleware } from "shared/utilities/client-middlewares";

export const ClientEvents = GlobalEvents.createClient({
	middleware: {
		reflex: {
			dispatch: [eventLoggingMiddleware() as EventMiddleware<[BroadcastAction[]]>],
		},
	},
});
