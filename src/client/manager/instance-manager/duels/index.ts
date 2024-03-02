import getNewMap from "./create-map";

interface DuelInstanceManager {
	readonly createNewMap: typeof getNewMap;
}

const duelsInstanceManager = {
	createNewMap: getNewMap,
} as DuelInstanceManager;

export default duelsInstanceManager;
