import type { StateType, ReducerType } from '../types/types';
import constants from '../types/constants';

function ContextReducer(state: StateType, action: ReducerType) {
  switch (action.type) {
    case constants.CHANGE_BACKGROUND_COLOR:
      return { ...state, backGroundColor: action.payload };
    case constants.CHANGE_COLOR:
      return { ...state, color: action.payload };
    case constants.CHANGE_TEST:
      return { ...state, test: action.payload };
    default:
      return state;
  }
}
export default ContextReducer;
