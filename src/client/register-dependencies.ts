import { Dependency, Modding } from "@flamework/core";
import Log, { Logger } from "@rbxts/log";
import { RootProducer, gameState } from "./state";
import instanceManager, { InstanceManager } from "./manager/instance-manager";
import EventQueue, { TEventQueue } from "shared/modules/eventqueue";
import ClientPubSubEvents from "./client-events";
import { Components } from "@flamework/components";

export default function registerDependencies() {
	print("Registering all dependencies...");
	// Register log dependencies
	print("Registering Logger dependency...");
	Modding.registerDependency<Logger>((ctor) => {
		return Log.ForContext(ctor);
	});
	print("Registered Logger dependency.");
	// Register State dependencies
	print("Registering State dependency...");
	Modding.registerDependency<RootProducer>((ctor) => {
		return gameState;
	});
	print("Registered State dependency.");

	// Register Instance manager dependency
	print("Registering Instance manager dependency...");
	Modding.registerDependency<InstanceManager>((ctor) => {
		return instanceManager;
	});
	print("Registered Instance manager dependency.");

	// Register EventQueue dependency
	print("Registering EventQueue dependency...");
	const eventQueue = new EventQueue<ClientPubSubEvents>();
	Modding.registerDependency<TEventQueue<ClientPubSubEvents>>((ctor) => {
		return eventQueue;
	});
	print("Registered EventQueue dependency.");

	// Register Component dependency
	print("Registering Component dependency...");
	Modding.registerDependency<Components>((ctor) => {
		return Dependency<Components>();
	});
	print("Registered Component dependency.");

	// Finished registering all dependencies
	print("Registered all dependencies.");
}
