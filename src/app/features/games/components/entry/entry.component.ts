import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  // constructor(private store: Store<GamesFeatureState>) { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, authorEl: HTMLInputElement) {
    const title = titleEl.value;
    const author = authorEl.value;
    // this.store.dispatch(gameAdded({ title, author }));
    titleEl.value = '';
    authorEl.value = '';
    titleEl.focus();
  }

}
