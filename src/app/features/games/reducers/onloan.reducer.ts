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
    ids: ['1'],
    entities: {
        1: { id: '1', title: 'Late Spring', publisher: 'SonyArt', platform: 'PC' }
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
    on(actions.gameOnloan, (state, action) => adapter.addOne(action.game, state))
);

export function reducer(state: GameState = initialState, action: Action) {
    return reducerFunction(state, action);
}



