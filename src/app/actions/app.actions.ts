import { createAction, props } from '@ngrx/store';


export const applicationStarted = createAction(
  '[app] app_start'
);


export const applicationFeatureError = createAction(
  '[app] feature error',
  props<{ feature: string, message: string }>()
);

export const clearApplicationError = createAction(
  '[app] clear application error'
);
