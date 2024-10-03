import { useContext } from 'react';
import type { StateDataType } from './types/types';
import Context from './context/context';
import constants from './types/constants';

function ColorSquare(props: { color: string }) {
  const { color } = props;
  const context: StateDataType = useContext(Context) as StateDataType;
  const { dispatch } = context;
  const handlerClick = () => {
    dispatch({ type: constants.CHANGE_BACKGROUND_COLOR, payload: color });
  };
  return (
    <div>
      <div
        style={{ width: '50px', height: '50px', backgroundColor: color }}
        onClick={handlerClick}
        onKeyDown={handlerClick}
      />
    </div>
  );
}

export default ColorSquare;
