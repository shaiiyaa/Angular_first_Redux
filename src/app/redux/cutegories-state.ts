import CutegoriesModel from "../models/cutegories-model";


// workers State: 
export class CutegoriesState {
    public cutegories:CutegoriesModel[] = [];
}

//workers State:
export enum CutegorieActionType {
    cutegorieDownloaded = "cutegorieDownloaded"
}

//worker Action:
export interface CutegorieAction {
    type: CutegorieActionType;
    payload: any;
    // More specific type list:
    // payload: EmployeeModel[] | EmployeeModel | number;
}

//worker Action creators:
export function cutegorieDownloadedAction(cutegories: CutegoriesModel): CutegorieAction {
    return { type: CutegorieActionType.cutegorieDownloaded, payload: cutegories }
}

//workers Reducers:
export function cutegoriesReducer(currentState: CutegoriesState = new CutegoriesState(), action:CutegorieAction): CutegoriesState {
    
    const newState = { ...currentState };

    switch(action.type) {
        case CutegorieActionType.cutegorieDownloaded: // Here payload is all workers (WorkerModel[])
            newState.cutegories = action.payload;
            break;
       
        
    }

    return newState;
}