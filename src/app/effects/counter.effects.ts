import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import { applicationStarted } from '../actions/app.actions';
@Injectable()
export class CounterEffects {

  writeCountByToLs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap((theAction) => localStorage.setItem('by', theAction.by.toString()))
    ), { dispatch: false }
  );


  // ofType applicationSTarted? - see if the value is in local storage.
  // if it IS there, then turn it into an action to create a new state.
  // if it IS NOT there, do thing.
  readCountByFromLs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted),
      map(() => localStorage.getItem('by')), // ("1" | "3" | "5") || null
      filter(val => val !== null), // It stops here, or is passes on the value e.g "3"
      map(val => parseInt(val, 10)), // "3" => 3
      map(by => counterActions.countBySet({ by })) // an action back to the reducer
    ), { dispatch: true }
  );

  constructor(private actions$: Actions) { }
}
