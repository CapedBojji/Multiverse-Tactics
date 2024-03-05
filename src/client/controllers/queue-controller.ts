import { Controller, OnStart, OnInit } from "@flamework/core";
import { Logger } from "@rbxts/log";
import { ClientEvents } from "client/network";

@Controller({})
export class QueueController implements OnStart, OnInit {
	constructor(private readonly logger: Logger) {}
	onInit() {}

	onStart() {}

	joinQueue() {
		this.logger.Info("Joining queue");
		ClientEvents.queueController.joinQueue.fire();
	}
}
