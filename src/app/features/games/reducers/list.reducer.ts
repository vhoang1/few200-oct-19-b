import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';
export interface BookEntity {
  id: string;
  title: string;
  author: string;
}

export interface BookState extends EntityState<BookEntity> {
  listLoaded: boolean;
}

export const adapter = createEntityAdapter<BookEntity>();

const initialState = adapter.getInitialState({ listLoaded: false });


const reducerFunction = createReducer(
  initialState,
  on(actions.bookAdded, (state, action) => adapter.addOne(action.entity, state)),
  on(actions.bookDataLoadedSuccessfully, (state, action) => adapter.addAll(action.books, { ...state, listLoaded: true })),
  on(actions.loadBookData, (state) => ({ ...state, listLoaded: false })),
  on(actions.bookAddedSuccessfully, (state, action) => {
    const tempState = adapter.removeOne(action.oldId, state);
    return adapter.addOne(action.book, tempState);
  }),
  on(actions.bookAddedFailure, (state, action) => adapter.removeOne(action.book.id, state))

);

export function reducer(state: BookState = initialState, action: Action) {
  return reducerFunction(state, action);
}



