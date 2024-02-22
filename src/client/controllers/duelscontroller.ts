import { Controller, OnStart, OnInit } from "@flamework/core";
import { MapEffects, PlayedUnit, Unit } from "shared/enums";

export enum EDuelsEvents {
	OnPlanningPhaseStart,
	OnPlanningPhaseEnd,
	OnPlanningPhaseForceEnd,
	OnBattlePhaseStart,
	OnBattlePhaseEnd,
	OnBattlePhaseForceEnd,
	OnDuelsStart,
	OnDuelsEnd,
	OnDuelsForceEnd,
	OnBattleTick,
	OnPlanningPhaseTick,
}

export type UnitId = number;
export type TMapState = {
	Effect: MapEffects;
	Unit: PlayedUnit;
	Region: Part;
}[][];

export enum EDuelsPhase {
	Planning,
	Battle,
}

export interface IRoundState {
	Phase: EDuelsPhase;
	RoundStart: number;
	RoundEnd: number;
}

export interface IPlayerState {
	Health: number;
	Units: PlayedUnit[];
	Rerolls: number;
	Hand: [Unit, Unit, Unit, Unit];
	Mana: number;
}

export interface IEnemyState {
	Health: number;
	Units: PlayedUnit[];
}

export interface IHistoryState {
	Damage: { [key: UnitId]: number };
	Healing: { [key: UnitId]: number };
	Tanking: { [key: UnitId]: number };
}


@Controller({})
export class Duelscontroller implements OnStart, OnInit {
	onInit() {}

	onStart() {}
}
