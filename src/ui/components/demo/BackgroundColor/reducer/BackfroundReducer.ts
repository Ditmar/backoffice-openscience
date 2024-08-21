import type {ReducerType, StateType } from "../types/types";
import constants from "../types/constants";
function BackgroundReducer (state: StateType, action: ReducerType) {
    console.log('-> ', state.backGroundColor, action.type);
    switch (action.type) {
        case constants.CHANGE_BACKGROUND:
            return { ...state, backGroundColor: action.payload}
        case constants.CHANGE_FOREGROUND:
            return { ...state, foreGround: action.payload}
        default:
            return state;
    }
}
export default BackgroundReducer;