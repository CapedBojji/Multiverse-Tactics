import { createProducer } from "@rbxts/reflex";

export interface Duel {
	matchId: string;
	phase: "Init" | "Planning" | "Combat" | "End";
}

export type DuelsState = {
	duels: Duel[];
};

const initialState: DuelsState = {
	duels: [],
};

export const duelsSlice = createProducer(initialState, {});
