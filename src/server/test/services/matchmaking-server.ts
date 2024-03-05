import { Service, OnStart, OnInit, OnTick } from "@flamework/core";
import { Logger } from "@rbxts/log";

@Service({})
export class MatchMakingServer implements OnStart, OnInit, OnTick {
	private readonly queue: Array<Player> = [];
	private onMatched: ((player1: Player, player2: Player, matchId: string) => void) | undefined =
		undefined;
	constructor(private readonly logger: Logger) {}
	onInit() {}

	onStart() {}

	onTick(dt: number): void {
		if (this.queue.size() >= 2) {
			const player1 = this.queue.shift();
			const player2 = this.queue.shift();
			this.logger.Info(`Matched ${player1!.Name} with ${player2!.Name}`);
			const matchId = tostring(math.random());
			this.onMatched!(player1!, player2!, matchId);
		}
	}

	joinQueue(player: Player) {
		this.queue.push(player);
	}

	onMatchedConnect(callback: (player1: Player, player2: Player, matchId: string) => void) {
		this.onMatched = callback;
	}
}
