import { useReducer } from 'react'
import BackgroundContext from './context'
import type { BackgroundContextType, StateType } from '../types/types';
import BackgroundReducer from '../reducer/BackfroundReducer';

function BackGroundProvider (props: BackgroundContextType) {
    const { children } = props;
    const initialState: StateType = { backGroundColor: '#fff', foreGround: '#000'}
    const [state, dispatch] = useReducer(BackgroundReducer, initialState);  
    return (<BackgroundContext.Provider value={{state, dispatch}}>
        {children}
    </BackgroundContext.Provider>)
}
export default BackGroundProvider;