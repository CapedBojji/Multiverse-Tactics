import SerializerUtil from "../../../types/SerializerUtil";
import Tree from "../../../types/Tree";

const replicatedStorage = game.GetService("ReplicatedStorage");

const tree: Tree = require(replicatedStorage
	.WaitForChild("Wally")
	.WaitForChild("tree") as ModuleScript) as Tree;
export default tree;
