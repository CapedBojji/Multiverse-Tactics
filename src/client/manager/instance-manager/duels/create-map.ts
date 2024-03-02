import { ReplicatedStorage } from "@rbxts/services";

export enum MapEnum {
	Default = "Default",
}

const enumToModelMap = new Map<MapEnum, Model>();
// Loop through the maps folder children and add them to the map
// Each child should contain an attribute with the value of the enum
const maps = ReplicatedStorage.Maps;
for (const child of maps.GetChildren()) {
	const value = child.GetAttribute("MapEnum") as MapEnum;
	enumToModelMap.set(MapEnum[value], child as Model);
}

function getNewMap(map: MapEnum) {
	const model = enumToModelMap.get(map);
	if (model) {
		return model.Clone();
	}
	return undefined;
}

export default getNewMap;
