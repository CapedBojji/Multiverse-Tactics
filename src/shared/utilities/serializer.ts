import Repr from "shared/modules/repr";
import SerializerUtil from "../../../types/SerializerUtil";
import tree from "./tree";

const replicatedStorage = game.GetService("ReplicatedStorage");
const serializerUtil: SerializerUtil = require(replicatedStorage
	.WaitForChild("Wally")
	.WaitForChild("serializerutil") as ModuleScript) as SerializerUtil;

const serializer = {
	addClassDataTypes: serializerUtil.addClassDataTypes,
	deserialize: serializerUtil.deserialize,
	deserializeTableDeep: serializerUtil.deserializeTableDeep,
	serialize: serializerUtil.serialize,
	serializeTableDeep: (value: unknown) => {
		return Repr(value);
	},
};

export default serializer;
