import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { GamesFeatureState, selectGameListItemModelUnsorted, selectGameListItemModel, } from './reducers';
import { Observable } from 'rxjs';
import { GameListModel } from './models';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  //   styleUrls: ['./books.component.css']
})
export class GamesComponent implements OnInit {

  games$: Observable<GameListModel[]>;
  onloan = false;

  constructor(private store: Store<GamesFeatureState>) { }

  ngOnInit() {
    this.games$ = this.store.select(selectGameListItemModel);
  }

}
