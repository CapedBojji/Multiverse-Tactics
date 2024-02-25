import { MapState } from "client/controllers/duelscontroller/mapstate";
import { CanWrite } from ".";

export interface UnitPlacementManagerArgs {
    MapState: MapState,
}
class UnitPlacementManager  {
    private readonly mapState: MapState;
    private readonly playerHandState: PlayerHandState;
    private readonly emitOnPlanningPhaseTick: () => void;


    public onPlayerHandChanged() {
        
    }

    public onPlanningPhaseStart() {
        // Grab the gui

        // Attach hover components to the gui

        // Attach click components to the gui

        // Attach drag components to the gui

    }

    private onPlanningPhaseTick() {
        this.emitOnPlanningPhaseTick();
    }

    public onPlanningPhaseEnd() {

    }


    
}
