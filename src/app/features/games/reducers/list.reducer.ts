import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';
import { GameListModel } from '../models/game-list.model';

export interface GameEntity {
  id: string;
  title: string;
  publisher: string;
  platform: string;
}

export interface GameState extends EntityState<GameEntity> {

}

export const adapter = createEntityAdapter<GameEntity>();

// const initialState = adapter.getInitialState({ listLoaded: false });

const initialState: GameState = {
  ids: ['1', '2', '3', '4'],
  entities: {
    1: { id: '1', title: 'Late Spring', publisher: 'SonyArt', platform: 'PC' },
    2: { id: '2', title: 'Tough Fight', publisher: 'PeakMountain', platform: 'Xbox' },
    3: { id: '3', title: 'Courage', publisher: 'RiverDale', platform: 'PS4' },
    4: { id: '4', title: 'No Choice', publisher: 'Chalenge', platform: 'DS' }
  }
};

const reducerFunction = createReducer(
  initialState,
  on(actions.gameAdded, (state, action) => adapter.addOne(action.entity, state)),
  // on(actions.bookDataLoadedSuccessfully, (state, action) => adapter.addAll(action.books, { ...state, listLoaded: true })),
  // on(actions.loadBookData, (state) => ({ ...state, listLoaded: false })),
  // on(actions.bookAddedSuccessfully, (state, action) => {
  //   const tempState = adapter.removeOne(action.oldId, state);
  //   return adapter.addOne(action.book, tempState);
  // }),
  on(actions.gameOnloan, (state, action) => adapter.removeOne(action.game.id, state))
);

export function reducer(state: GameState = initialState, action: Action) {
  return reducerFunction(state, action);
}



