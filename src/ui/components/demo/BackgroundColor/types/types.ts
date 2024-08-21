export interface BackgroundContextType { 
    children?: React.ReactNode;
}

export interface ReducerType {
    type: string;
    payload: string;
}
export interface StateType {
    backGroundColor: string;
    foreGround: string;
}
export interface BackgroundUseContextType {
    state: StateType;
    dispatch: React.Dispatch<ReducerType>;
}