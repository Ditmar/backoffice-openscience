import React from 'react';

export interface ChildComponentProps {
  children: React.ReactNode;
}
export interface StateType {
  backGroundColor: string;
  color: string;
  test: string;
}

export interface ReducerType {
  type: string;
  payload: string;
}

export interface StateDataType {
  state: StateType;
  dispatch: React.Dispatch<ReducerType>;
}
