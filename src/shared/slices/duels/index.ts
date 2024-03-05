import { createProducer } from "@rbxts/reflex";

export interface Duel {
	readonly matchId: string;
	readonly phase: "Init" | "Planning" | "Combat" | "End";
	readonly players: number[];
}

export type DuelsState = {
	readonly duels: readonly Duel[];
};

const initialState: DuelsState = {
	duels: [],
};

export const duelsSlice = createProducer(initialState, {
	createNewDuel: (state, player1: Player, player2: Player, matchId: string) => {
		const newDuel: Duel = {
			matchId,
			phase: "Init",
			players: [player1.UserId, player2.UserId],
		}
		const x = {
			...state,
			 duels: [...state.duels, newDuel],
		}

		x.duels[1] = {
			...x.duels[1],
			phase: "Planning"
		}
	},
});
