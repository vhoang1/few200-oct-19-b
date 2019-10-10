import { createAction, props } from '@ngrx/store';
import { GameEntity } from '../reducers/list.reducer';

let currentId = 99;

export const gameAdded = createAction(
  '[games] game added',
  ({ title, publisher, platform }: { title: string, publisher: string, platform: string }) => ({
    entity: {
      id: 'T' + currentId++,
      title,
      publisher,
      platform
    } as GameEntity
  })
);


export const loadGameData = createAction(
  '[games] load the game data'
);

export const gameDataLoadedSuccessfully = createAction(
  '[games] loaded the game data successfully',
  props<{ games: GameEntity[] }>()
);


// export const gameAddedSuccessfully = createAction(
//   '[books] book added successfully',
//   props<{ oldId: string, book: BookEntity }>()
// );

export const gameOnloan = createAction(
  '[ games ] game on loan',
  props<{ game: GameEntity }>()
);
