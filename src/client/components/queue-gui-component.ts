import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { Logger } from "@rbxts/log";
import { QueueController } from "client/controllers/queue-controller";

interface Attributes {}
interface IQueueGuiComponent extends Frame {}

const playerGui = game
	.GetService("Players")
	.LocalPlayer.FindFirstChildWhichIsA("PlayerGui") as PlayerGui;

@Component({
	tag: "QueueGuiButtonComponent",
	ancestorWhitelist: [playerGui],
})
export class QueueGuiButtonComponent
	extends BaseComponent<Attributes, IQueueGuiComponent>
	implements OnStart
{
	constructor(
		private readonly logger: Logger,
		private readonly queueController: QueueController,
	) {
		super();
	}

	onStart() {
		// Bind to the gui on click
		this.instance.InputBegan.Connect(() => {
			this.queueController.joinQueue();
		});
	}
}
