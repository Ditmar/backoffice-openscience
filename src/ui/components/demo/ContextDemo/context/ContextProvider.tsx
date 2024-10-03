import { useReducer, useMemo } from 'react';
import type { ChildComponentProps, StateType } from '../types/types';
import Context from './context';
import ContextReducer from '../reducer/contextReducer';

function ContextProvider(props: ChildComponentProps) {
  const { children } = props;
  const initialState: StateType = { backGroundColor: '#fff', color: '#000', test: 'Hola amigos' };
  const [state, dispatch] = useReducer(ContextReducer, initialState);

  const stateMemo = useMemo(() => ({ state, dispatch }), [state]);
  return <Context.Provider value={stateMemo}>{children}</Context.Provider>;
}
export default ContextProvider;
