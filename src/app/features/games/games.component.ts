import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameListModel } from './models';
// import { GamesFeatureState, selectBookDataLoaded, selectBookListItemModel } from './reducers';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
//   styleUrls: ['./books.component.css']
})
export class GamesComponent implements OnInit {

  games$: Observable<GameListModel[]>;
  loaded$: Observable<boolean>;
//   constructor(private store: Store<GamesFeatureState>) { }

  ngOnInit() {
    // this.games$ = this.store.select(selectBookListItemModel);
    // this.loaded$ = this.store.select(selectBookDataLoaded);
  }

}
