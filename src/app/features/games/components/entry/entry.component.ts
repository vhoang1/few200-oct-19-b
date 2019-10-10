import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GamesFeatureState } from '../../reducers';
import { gameAdded } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  myid = 99;
  constructor(private store: Store<GamesFeatureState>) { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, publisherEl: HTMLInputElement, platformEl: HTMLInputElement) {
    const title = titleEl.value;
    const publisher = publisherEl.value;
    const platform = platformEl.value;
    this.store.dispatch(gameAdded({ title, publisher, platform }));
    titleEl.value = '';
    publisherEl.value = '';
    platformEl.value = '';
    titleEl.focus();
  }

}
