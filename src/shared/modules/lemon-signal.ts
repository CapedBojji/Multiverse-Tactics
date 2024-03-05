import { ReplicatedFirst, ReplicatedStorage } from "@rbxts/services";
import LemonSignalConstructor from "../../../types/LemonSignal";
import Tree from "./tree";

const lemonSignal = require(Tree.Await(
	ReplicatedStorage,
	"Wally/lemonsignal",
) as ModuleScript) as LemonSignalConstructor;

export default lemonSignal;
