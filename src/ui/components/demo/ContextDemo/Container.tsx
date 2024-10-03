import { useContext } from 'react';
import Context from './context/context';
import type { StateDataType } from './types/types';
import styles from './context.module.scss';
import ColorGrid from './ColorGrid';

function Container() {
  const context: StateDataType = useContext(Context) as StateDataType;
  const { state } = context;
  return (
    <div
      className={styles.wrapper}
      style={{ background: state.backGroundColor, color: state.color }}
    >
      <ColorGrid />
    </div>
  );
}
export default Container;
