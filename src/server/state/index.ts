import { sharedSlices } from "shared/slices";
import { InferState, combineProducers, createBroadcaster } from "@rbxts/reflex";
import Log from "@rbxts/log";
import { ServerEvents } from "server/network";
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
const broadcaster = createBroadcaster({
	producers: sharedSlices,
	dispatch: (player, actions) => {
		Logger.Info(`Dispatching actions to ${player.Name}`);
		ServerEvents.reflex.dispatch.fire(player, actions);
	},
	beforeHydrate: (player, state) => {
		// Log the state before it is hydrated
		Logger.Info(`Hydrating state for ${player.Name}`);
		const serializedData = serializer.serializeTableDeep(state);
		Logger.Info(`State: ${serializedData}`);
		return state;
	},
});
ServerEvents.reflex.start.connect((player) => {
	Logger.Info(`Synchronization started for ${player.Name}`);
	broadcaster.start(player);
});
gameState.applyMiddleware(broadcaster.middleware);
