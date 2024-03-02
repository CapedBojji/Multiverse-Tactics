import duelsInstanceManager from "./duels";

const instanceManager = {
	...duelsInstanceManager,
};

export type InstanceManager = typeof instanceManager;

export default instanceManager;
