import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksFeatureState } from '../../reducers';
import { bookAdded } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<BooksFeatureState>) { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, authorEl: HTMLInputElement) {
    const title = titleEl.value;
    const author = authorEl.value;
    this.store.dispatch(bookAdded({ title, author }));
    titleEl.value = '';
    authorEl.value = '';
    titleEl.focus();
  }

}
