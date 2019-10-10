import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { GameListModel } from '../models';
import * as fromList from './list.reducer';

export const featureName = 'gamesFeature';

export interface GamesFeatureState {
  list: fromList.GameState;
//   sorter: fromSorter.SortState;
}

export const reducers: ActionReducerMap<GamesFeatureState> = {
  list: fromList.reducer,
//   sorter: fromSorter.reducer
};


// 1. Feature Selector
const selectGamesFeature = createFeatureSelector<GamesFeatureState>(featureName);

// 2. Selector per branch

const selectListBranch = createSelector(selectGamesFeature, b => b.list);
// const selectSorterBranch = createSelector(selectGamesFeature, b => b.sorter);


// 3. Helpers

const { selectAll: selectGameEntityArray } = fromList.adapter.getSelectors(selectListBranch);
// const selectSortingBy = createSelector(selectSorterBranch, s => s.by);
// 4. For our components

//  -- Need an BookListItemModel[] for the list.

export const selectGameListItemModelUnsorted = createSelector(
    selectGameEntityArray,
  games => games.map(game => {
    return {
      ...game,
      isTemporary: game.id.startsWith('T')
    } as GameListModel;
  }));


export const selectGameListItemModel = createSelector(
  selectGameListItemModelUnsorted,
  selectSortingBy,
  (games, sortKey) => [...games.sort((lhs, rhs) => {
    if (lhs[sortKey].toLowerCase() < rhs[sortKey].toLowerCase()) {
      return -1;
    } else if (lhs[sortKey].toLowerCase() > rhs[sortKey].toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  })]
);

export const selectSortingByAuthor = createSelector(selectSortingBy, b => b === 'author');
export const selectSortingByTitle = createSelector(selectSortingBy, b => b === 'title');

export const selectBookDataLoaded = createSelector(selectListBranch, b => b.listLoaded);
