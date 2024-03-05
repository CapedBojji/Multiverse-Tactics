export interface ClientToServerEvents {
	reflex: {
		start(): void;
	};
	queueController: {
		joinQueue(): void;
		leaveQueue(): void;
	};
}
