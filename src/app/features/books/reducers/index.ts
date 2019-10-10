import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import * as fromSorter from './sort.reducer';
import * as fromModels from '../models';
import { BookListModel } from '../models';

export const featureName = 'booksFeature';

export interface BooksFeatureState {
  list: fromList.BookState;
  sorter: fromSorter.SortState;
}

export const reducers: ActionReducerMap<BooksFeatureState> = {
  list: fromList.reducer,
  sorter: fromSorter.reducer
};


// 1. Feature Selector
const selectBooksFeature = createFeatureSelector<BooksFeatureState>(featureName);

// 2. Selector per branch

const selectListBranch = createSelector(selectBooksFeature, b => b.list);
const selectSorterBranch = createSelector(selectBooksFeature, b => b.sorter);


// 3. Helpers

const { selectAll: selectBookEntityArray } = fromList.adapter.getSelectors(selectListBranch);
const selectSortingBy = createSelector(selectSorterBranch, s => s.by);
// 4. For our components

//  -- Need an BookListItemModel[] for the list.

export const selectBookListItemModelUnsorted = createSelector(
  selectBookEntityArray,
  books => books.map(book => {
    return {
      ...book,
      isTemporary: book.id.startsWith('T')
    } as BookListModel;
  }));


export const selectBookListItemModel = createSelector(
  selectBookListItemModelUnsorted,
  selectSortingBy,
  (books, sortKey) => [...books.sort((lhs, rhs) => {
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
