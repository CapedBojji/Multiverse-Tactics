
type effects = {
}[]

type attacks = {}[]

export interface DuelsBattleState {
    tick: number;
    data: {
        effects: effects;
        attacks: attacks;
    }[]
}