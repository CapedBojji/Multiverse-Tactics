import { ReplicatedStorage } from "@rbxts/services";
import LemonSignalConstructor, { LemonConnection, LemonSignal } from "../../../types/LemonSignal";

const SIGNAL = require(ReplicatedStorage.WaitForChild("Wally").WaitForChild(
	"lemonsignal",
) as ModuleScript)! as LemonSignalConstructor;

export interface TEventQueue<T> {
	subscribe(message: T, handler: (...args: unknown[]) => void): LemonConnection;
	publish(message: T, ...args: unknown[]): void;
}

class EventQueue<T> {
	private readonly messageToHandlerMap: Map<T, LemonSignal>;
	private readonly handlerToConnectionMap: Map<
		(...args: unknown[]) => void,
		Array<[LemonConnection, T]>
	>;
	private readonly handlerToReconnectMap: Map<(...args: unknown[]) => void, [LemonConnection, T]>;
	constructor() {
		this.messageToHandlerMap = new Map();
		this.handlerToConnectionMap = new Map();
		this.handlerToReconnectMap = new Map();
	}

	subscribe(message: T, handler: (...args: unknown[]) => void) {
		let signal = this.messageToHandlerMap.get(message);
		if (!signal) {
			signal = new SIGNAL();
		}
		const connection = signal.Connect(handler);
		return connection;
	}

	publish(message: T, ...args: unknown[]) {
		const signal = this.messageToHandlerMap.get(message);
		if (!signal) {
			return;
		}
		signal.Fire(...args);
	}
}

export default EventQueue;
