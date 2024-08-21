import { useContext } from "react";
import type { BackgroundUseContextType } from "./types/types";
import styles from './styles/MainColorGrid.module.scss';
import BackgroundContext from "./context/context";
import ColorGrid from "./ColorGrid";

function Container () {
    const context : BackgroundUseContextType = useContext(BackgroundContext) as BackgroundUseContextType;
    const { state } = context;
    return (
        <div className={styles['wrapper']} style={{background: state?.backGroundColor ?? '#fff', color: state?.foreGround ?? '#000'}}>
            <ColorGrid />
            <h1>test</h1>
        </div>
    );
}
export default Container