import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectCountingBy } from '../../reducers';
import { countBySet } from '../../actions/counter.actions';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-counter-by',
  templateUrl: './counter-by.component.html',
  styleUrls: ['./counter-by.component.css']
})
export class CounterByComponent implements OnInit, OnDestroy {

  by$: Observable<number>;
  subscription: Subscription;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log('initialized CounterByComponent');
    this.by$ = this.store.select(selectCountingBy);
    this.subscription = this.store.select(selectCountingBy)
      .subscribe((by) => {
        console.log('Just got a new by: ', by);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setCountBy(by: number) {

    this.store.dispatch(countBySet({ by }));
  }

}
