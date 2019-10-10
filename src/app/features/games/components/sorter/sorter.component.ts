import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent implements OnInit {

  sortingByTitle$: Observable<boolean>;
  sortingByAuthor$: Observable<boolean>;
  // constructor(private store: Store<GamesFeatureState>) { }

  ngOnInit() {
    // this.sortingByAuthor$ = this.store.select(selectSortingByAuthor);
    // this.sortingByTitle$ = this.store.select(selectSortingByTitle);
  }

  sortByTitle() {
    // this.store.dispatch(sortedByTitle());
  }

  sortByAuthor() {
    // this.store.dispatch(sortedByAuthor());
  }

}
