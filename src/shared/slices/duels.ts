import { createProducer } from "@rbxts/reflex";

interface Duel {
	matchId: string;
}

export type DuelsState = {
	duels: Duel[];
};

const initialState: DuelsState = {
	duels: [],
};

export const duelsSlice = createProducer(initialState, {});
