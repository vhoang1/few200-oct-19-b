import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/app.actions';
export interface ErrorState {
  hasError: boolean;
  errorMessage: string;
}

const initialState: ErrorState = {
  hasError: false,
  errorMessage: null
};


const reducerFunction = createReducer(
  initialState,
  on(actions.applicationFeatureError, (state, action) => ({ hasError: true, errorMessage: action.message })),
  on(actions.clearApplicationError, () => initialState)
);
export function reducer(state, action): ErrorState {
  return reducerFunction(state, action);
}
