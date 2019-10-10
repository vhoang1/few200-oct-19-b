import { createAction } from '@ngrx/store';


export const sortedByAuthor = createAction(
  '[books] sort by author'
);

export const sortedByTitle = createAction(
  '[books] sort by title'
);
