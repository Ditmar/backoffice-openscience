import { useContext } from "react";
import type { BackgroundUseContextType } from "./types/types";
import BackgroundContext from "./context/context";

function ColorGrid () {
    const context : BackgroundUseContextType = useContext(BackgroundContext) as BackgroundUseContextType;
    const { dispatch } = context;
    return (
        <div>
            <button onClick={() => dispatch({type: 'CHANGE_BACKGROUND', payload: '#f00'})}>Red</button>
            <button onClick={() => dispatch({type: 'CHANGE_BACKGROUND', payload: '#0f0'})}>Green</button>
            <button onClick={() => dispatch({type: 'CHANGE_BACKGROUND', payload: '#00f'})}>Blue</button>
            <button onClick={() => dispatch({type: 'CHANGE_FOREGROUND', payload: '#f00'})}>Red</button>
            <button onClick={() => dispatch({type: 'CHANGE_FOREGROUND', payload: '#0f0'})}>Green</button>
            <button onClick={() => dispatch({type: 'CHANGE_FOREGROUND', payload: '#00f'})}>Blue</button>
        </div>
    );
}
export default ColorGrid