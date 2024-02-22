export enum MapEffects {
	NoEffect,
}

export interface Unit {}

export interface PlayedUnit {
	Unit: Unit;
	Skill: {
		Skill1: boolean;
		Skill2: boolean;
		Skill3: boolean;
	};
}
