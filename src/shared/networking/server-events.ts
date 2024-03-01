import { BroadcastAction } from "@rbxts/reflex";

export interface ServerToClientEvents {
	reflex: {
		dispatch(actions: BroadcastAction[]): void;
	};
}
