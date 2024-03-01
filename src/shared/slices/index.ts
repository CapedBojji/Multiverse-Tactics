import { CombineStates } from "@rbxts/reflex";
import { duelsSlice } from "./duels";

export type SharedState = CombineStates<typeof sharedSlices>;

export const sharedSlices = {
	duelsSlice: duelsSlice,
};
