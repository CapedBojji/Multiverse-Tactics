import Log from "@rbxts/log";
import { InferState, combineProducers, createBroadcastReceiver } from "@rbxts/reflex";
import { ClientEvents } from "client/network";
import { sharedSlices } from "shared/slices";
import serializer from "shared/utilities/serializer";

// Create Logger
const Logger = Log.ForContext({
	toString() {
		return "GameState";
	},
});

// Create game state
export type RootProducer = typeof gameState;
export type GameState = InferState<RootProducer>;
export const gameState = combineProducers({
	...sharedSlices,
});

// Set up state synchronization
const reciever = createBroadcastReceiver({
	start: () => {
		print("Synchronization started: Client");
		Logger.Info(`Synchronization started`);
		ClientEvents.reflex.start.fire();
	},
});
ClientEvents.reflex.dispatch.connect((actions) => {
	const serializedData = serializer.serializeTableDeep(actions);
	Logger.Info(`Recieved actions ${serializedData} from server`);
	reciever.dispatch(actions);
});
gameState.applyMiddleware(reciever.middleware);
