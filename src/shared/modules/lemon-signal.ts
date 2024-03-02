import { ReplicatedFirst, ReplicatedStorage } from "@rbxts/services";
import Tree from "../../../Packages/_Index/sleitnick_tree@1.1.0/tree";
import LemonSignalConstructor from "../../../types/LemonSignal";

const LemonSignal = require(Tree.Await(
	ReplicatedStorage,
	"Wally/lemonsignal",
) as ModuleScript) as LemonSignalConstructor;

export default LemonSignal;
