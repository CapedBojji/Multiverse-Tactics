import Log from "@rbxts/log";

// Const for the battle state
const CONTEXT = "BattleState";
const Logger = Log.ForContext({
	toString() {
		return CONTEXT;
	},
});
