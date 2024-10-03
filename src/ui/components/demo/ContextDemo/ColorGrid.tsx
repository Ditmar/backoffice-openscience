import { useContext } from 'react';
import ColorSquare from './ColorSquare';
import Context from './context/context';
import type { StateDataType } from './types/types';

function ColorGrid() {
  const context: StateDataType = useContext(Context) as StateDataType;
  const { state } = context;
  const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'purple',
    'pink',
    'yellow',
    'black',
    'white',
    'brown',
  ];

  return (
    <div>
      <h3>{state.backGroundColor}</h3>
      {colors.map((color) => (
        <ColorSquare key={color} color={color} />
      ))}
    </div>
  );
}

export default ColorGrid;
