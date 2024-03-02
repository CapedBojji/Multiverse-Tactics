import { TEventQueue } from "./../../../shared/modules/eventqueue";
import { OnRender, OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import ClientPubSubEvents from "client/client-events";
import { Players } from "@rbxts/services";

interface Attributes {
	cameraPosition: Vector3;
	cameraOrientation: Vector3;
	cameraFocus: Vector3;
	cameraFocusOrientation: Vector3;
}
@Component({
	defaults: {
		cameraPosition: new Vector3(120, 125, 125),
		cameraOrientation: new Vector3(-75, 0, 0),
		cameraFocus: new Vector3(120, 125, 125),
		cameraFocusOrientation: new Vector3(0, 0, 0),
	},
})
export class CameraComponent extends BaseComponent<Attributes> implements OnStart, OnRender {
	private readonly camera = game.Workspace.CurrentCamera!;
	constructor(private readonly eventQueue: TEventQueue<ClientPubSubEvents>) {
		super();
	}
	onStart() {
		this.camera.CameraType = Enum.CameraType.Scriptable;
	}

	onRender(dt: number): void {
		this.camera.Focus = new CFrame(this.attributes.cameraFocus).mul(
			CFrame.Angles(
				this.attributes.cameraFocusOrientation.X,
				this.attributes.cameraFocusOrientation.Y,
				this.attributes.cameraFocusOrientation.Z,
			),
		);
		this.camera.CFrame = new CFrame(this.attributes.cameraPosition).mul(
			CFrame.Angles(
				this.attributes.cameraOrientation.X,
				this.attributes.cameraOrientation.Y,
				this.attributes.cameraOrientation.Z,
			),
		);
		this.camera.Focus = new CFrame(this.attributes.cameraFocus).mul(
			CFrame.Angles(
				this.attributes.cameraFocusOrientation.X,
				this.attributes.cameraFocusOrientation.Y,
				this.attributes.cameraFocusOrientation.Z,
			),
		);
	}

	override destroy(): void {
		// Refocus the camera to the player's character
		this.camera.CameraType = Enum.CameraType.Custom;
		const player = Players.LocalPlayer;
		if (player.Character) {
			this.camera.CameraSubject = player.Character.FindFirstChildWhichIsA("Humanoid");
		}
	}
}
