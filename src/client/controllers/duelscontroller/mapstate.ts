import { MapEffects, PlayedUnit } from "shared/enums";
import { Duels } from ".";
import { DUELS_MAP_SIZE } from "./constants";
import { createProducer } from "@rbxts/reflex";
import Point2D from "@capedbojji/utils/src/Point";

export interface DuelsMapCellState {
	readonly Unit: PlayedUnit | undefined;
	readonly Cell: Part;
	readonly Effect: MapEffects;
}

export interface MapState {
	readonly Cells: readonly DuelsMapCellState[][];
}

function hydrateMapState(): MapState {
	const collectionService = game.GetService("CollectionService");
	const cellParts = collectionService.GetTagged("DuelsMapCell") as Part[];
	const cellParent = game.Workspace.WaitForChild("DuelsMap");
	cellParts.filter((part) => part.IsA("BasePart") && part.IsDescendantOf(cellParent));

	const cells = new Array<Array<DuelsMapCellState>>(DUELS_MAP_SIZE.getX());
	cells.forEach((_, x) => {
		cells[x] = new Array<DuelsMapCellState>(DUELS_MAP_SIZE.getY());
		cells[x].forEach((_, y) => {
			let index = undefined;
			const cell = cellParts.find((part, idx) => {
				index = idx;
				return (
					x === (part.GetAttribute("CellPositionX") as number) &&
					y === (part.GetAttribute("CellPositionY") as number)
				);
			});
			cells[x][y] = {
				Unit: undefined,
				Cell: cell!,
				Effect: MapEffects.NoEffect,
			};
			cellParts.remove(index!);
		});
	});
	return {
		Cells: cells,
	};
}

export const mapStateProducer = createProducer(hydrateMapState(), {
	resetMap: (state) => hydrateMapState(),
	addEffect: (state, cell: Point2D, effect: MapEffects) => {
		const mutable = { ...state };
		mutable.Cells[cell.getX()][cell.getY()] = {
			...mutable.Cells[cell.getX()][cell.getY()],
			Effect: effect,
		};
		return mutable;
	},
    
});
