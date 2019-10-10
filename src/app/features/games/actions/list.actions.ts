import { createAction, props } from '@ngrx/store';
import { BookEntity } from '../reducers/list.reducer';

let currentId = 99;

export const bookAdded = createAction(
  '[books] book added',
  ({ title, author }: { title: string, author: string }) => ({
    entity: {
      id: 'T' + currentId++,
      title,
      author
    } as BookEntity
  })
);


export const loadBookData = createAction(
  '[books] load the book data'
);

export const bookDataLoadedSuccessfully = createAction(
  '[books] loaded the book data successfully',
  props<{ books: BookEntity[] }>()
);


export const bookAddedSuccessfully = createAction(
  '[books] book added successfully',
  props<{ oldId: string, book: BookEntity }>()
);

export const bookAddedFailure = createAction(
  '[books] book added failure',
  props<{ book: BookEntity, message: string }>()
);
