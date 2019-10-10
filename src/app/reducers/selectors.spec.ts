import * as app from './index';
import * as counter from './counter.reducer';
import * as counterActions from '../actions/counter.actions';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';

describe('my selectors', () => {
  it('gives me the right count', () => {
    const initialState: app.AppState = {
      counter: {
        count: 52,
        by: 99
      }
    };

    const answer = app.selectCurrentCount(initialState);

    expect(answer).toBe(52);
  });
  it('testing a reducer', () => {
    const initialState: counter.CounterState = {
      count: 52,
      by: 99
    };

    const newState = counter.reducer(initialState, counterActions.countIncremented());

    expect(newState.count).toBe(53);
    expect(newState.by).toBe(99);
  });


})

