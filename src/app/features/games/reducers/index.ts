import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { GameListModel } from '../models';
import * as fromList from './list.reducer';
import * as fromLoan from './onloan.reducer';
export const featureName = 'gamesFeature';

export interface GamesFeatureState {
  list: fromList.GameState;
  onLoan: fromList.GameState;
}

export const reducers: ActionReducerMap<GamesFeatureState> = {
  list: fromList.reducer,
  onLoan: fromLoan.reducer
};


// 1. Feature Selector
const selectGamesFeature = createFeatureSelector<GamesFeatureState>(featureName);

// 2. Selector per branch

const selectListBranch = createSelector(selectGamesFeature, b => b.list);
const selectLoanBranch = createSelector(selectGamesFeature, b => b.onLoan);
// const selectSorterBranch = createSelector(selectGamesFeature, b => b.sorter);


// 3. Helpers

const { selectAll: selectGameEntityArray } = fromList.adapter.getSelectors(selectListBranch);
const { selectAll: selectLoanEntityArray } = fromList.adapter.getSelectors(selectLoanBranch);

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

export const selectLoanListItemModelUnsorted = createSelector(
  selectLoanEntityArray,
  games => games.map(game => {
    return {
      ...game,
      isTemporary: game.id.startsWith('T')
    } as GameListModel;
  }));
export const selectGameListItemModel =
  selectGameListItemModelUnsorted;

export const selectLoanListItemModel =
  selectLoanListItemModelUnsorted;

// export const selectSortingByAuthor = createSelector(selectSortingBy, b => b === 'author');
// export const selectSortingByTitle = createSelector(selectSortingBy, b => b === 'title');

// export const selectGameDataLoaded = createSelector(selectListBranch, b => b.listLoaded);
