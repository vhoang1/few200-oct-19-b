import * as fromCounter from './counter.reducer';
import * as fromErrors from './errors.reducer';
import { createSelector, ActionReducerMap } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState;
  errors: fromErrors.ErrorState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer,
  errors: fromErrors.reducer
}; // "reducer map"


// Selector Functions

// 1. Create a feature selector (we aren't in a feature, but we will be later. This is blank for now.)

// 2. Create a selector for each branch of the state

const selectCounterBranch = (state: AppState) => state.counter;
const selectErrorsBranch = (state: AppState) => state.errors;
// 3. (optional) helpers

// 4. For the components

// --- we need one that returns the current count

export const selectCurrentCount = createSelector(selectCounterBranch, b => b.count);
export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);

export const selectResetDisabled = createSelector(
  selectCurrentCount, // Given the current value of the count on the counter
  c => c === 0); // is it equal to zero? If it is, the reset button should be disabled.


export const selectHasError = createSelector(selectErrorsBranch,
  b => b.hasError);

export const selectErrorMessage = createSelector(selectErrorsBranch,
  b => b.errorMessage);
