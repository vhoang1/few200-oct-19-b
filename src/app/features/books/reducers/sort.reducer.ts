import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/sort.actions';

export interface SortState {
  by: string;
}

const initialState: SortState = {
  by: 'title'
};


const reducersFunction = createReducer(
  initialState,
  on(actions.sortedByAuthor, (state) => ({ by: 'author' })),
  on(actions.sortedByTitle, (state) => ({ by: 'title' }))
);

export function reducer(state: SortState = initialState, action: Action): SortState {
  return reducersFunction(state, action);
}
