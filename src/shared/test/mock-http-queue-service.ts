import { RunService } from "@rbxts/services";

const queue: Array<Player> = [];

export function addPlayerToQueue(player: Player) {
	// Add player to queue
}

export function removePlayerFromQueue(player: Player) {
	// Remove player from queue
}

RunService.Heartbeat.Connect(() => {
	// Check for matches
	if (queue.size() > 1) {
		// Create match

	}
});
