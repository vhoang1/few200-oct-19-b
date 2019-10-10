import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
export interface CounterState {
  count: number;
  by: number;
}

const initialState: CounterState = {
  count: 0,
  by: 1
};

// Reducer Function
// (currentState, Action) => newState

const myReducer = createReducer(
  initialState,
  on(actions.countDecremented, (state) => ({ count: state.count - state.by, by: state.by })),
  on(actions.countIncremented, (state) => ({ count: state.count + state.by, by: state.by })),
  on(actions.countReset, () => initialState),
  on(actions.countBySet, (state, action) => ({ count: state.count, by: action.by }))
);



export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}
