import { Networking } from "@flamework/networking";
import { ClientToServerEvents } from "./client-events";
import { ServerToClientEvents } from "./server-events";

const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export type GlobalEvents = typeof GlobalEvents;
export default GlobalEvents;
