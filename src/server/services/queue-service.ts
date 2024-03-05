import { Service, OnStart, OnInit } from "@flamework/core";
import { Logger } from "@rbxts/log";
import { ServerEvents } from "server/network";
import { gameState } from "server/state";
import { MatchMakingServer } from "server/test/services/matchmaking-server";

@Service({})
export class QueueService implements OnStart, OnInit {
	constructor(private readonly logger: Logger, private readonly mockQueue: MatchMakingServer) {}
	onInit() {}

	onStart() {
		// Bind to server events
		ServerEvents.queueController.joinQueue.connect((player) => this.onJoinQueue(player));
		// BInd to onMatched event
		this.mockQueue.onMatchedConnect((player1, player2, matchid) =>
			this.onMatched(player1, player2, matchid),
		);
	}

	private onJoinQueue(player: Player) {
		this.mockQueue.joinQueue(player);
	}

	private onMatched(player1: Player, player2: Player, matchId: string) {
        gameState.c
    }
}
