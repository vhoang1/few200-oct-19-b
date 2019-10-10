import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksFeatureState, selectSortingByAuthor, selectSortingByTitle } from '../../reducers';
import { sortedByTitle, sortedByAuthor } from '../../actions/sort.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent implements OnInit {

  sortingByTitle$: Observable<boolean>;
  sortingByAuthor$: Observable<boolean>;
  constructor(private store: Store<BooksFeatureState>) { }

  ngOnInit() {
    this.sortingByAuthor$ = this.store.select(selectSortingByAuthor);
    this.sortingByTitle$ = this.store.select(selectSortingByTitle);
  }

  sortByTitle() {
    this.store.dispatch(sortedByTitle());
  }

  sortByAuthor() {
    this.store.dispatch(sortedByAuthor());
  }

}
