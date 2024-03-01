import { Networking } from "@flamework/networking";
import Log from "@rbxts/log";
import GlobalEvents from "shared/networking";
import { eventLoggingMiddleware } from "shared/utilities/server-middlewares";

export const ServerEvents = GlobalEvents.createServer({
	middleware: {
		reflex: {
			start: [eventLoggingMiddleware()],
		},
	},
});
