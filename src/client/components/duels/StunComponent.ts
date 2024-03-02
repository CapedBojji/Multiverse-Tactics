import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { OnCharacterAdded } from "shared/utilities/listeners";

interface Attributes {}

@Component({})
export class StunComponent extends BaseComponent<Attributes> implements OnStart, OnCharacterAdded {
	private character: Model | undefined;
	private oldWalkSpeed: number | undefined;
	private oldJumpPower: number | undefined;
	onStart() {}

	onCharacterAdded(character: Model) {
		this.character = character;
		this.stun();
	}

	private stun() {
		// Stun the character
		if (!this.character) {
			return;
		}
		const humanoid = this.character.FindFirstChildWhichIsA("Humanoid")!;
		this.oldJumpPower = humanoid.JumpPower;
		this.oldWalkSpeed = humanoid.WalkSpeed;
		humanoid.WalkSpeed = 0;
		humanoid.JumpPower = 0;
	}

	private unstun() {
		// Unstun the character
		if (!this.character) {
			return;
		}
		const humanoid = this.character.FindFirstChildWhichIsA("Humanoid")!;
		humanoid.WalkSpeed = this.oldWalkSpeed!;
		humanoid.JumpPower = this.oldJumpPower!;
	}

	override destroy(): void {
		super.destroy();
		this.unstun();
	}
}
