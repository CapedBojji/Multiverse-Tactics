import { ReplicatedStorage } from "@rbxts/services";
import Tree from "../../../types/Tree";

const tree = require(ReplicatedStorage.WaitForChild("Wally").WaitForChild(
	"tree",
) as ModuleScript) as Tree;

export default tree;
