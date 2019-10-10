import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectHasError, selectErrorMessage } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { clearApplicationError } from 'src/app/actions/app.actions';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css']
})
export class ErrorDisplayComponent implements OnInit {

  hasError$: Observable<boolean>;
  message$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.hasError$ = this.store.select(selectHasError);
    this.message$ = this.store.select(selectErrorMessage);
  }

  clearError() {
    this.store.dispatch(clearApplicationError());
  }

}
