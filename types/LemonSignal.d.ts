export type LemonConnection = {
	Connected: boolean;
	Disconnect(): void;
	Reconnect(): void;
};

export interface LemonSignal {
	RBXScriptConnection?: RBXScriptConnection;
	Connect(fn: (...args: unknown[]) => void, ...args: unknown[]): LemonConnection;
	Once(fn: (...args: unknown[]) => void, ...args: unknown[]): LemonConnection;
	Wait(): unknown;
	Fire(...args: unknown[]): void;
	DisconnectAll(): void;
	Destroy(): void;
}

interface LemonSignalConstructor {
	new (): LemonSignal;
	wrap: (rbxScriptSignal: RBXScriptSignal) => LemonSignal;
}

export default LemonSignalConstructor;