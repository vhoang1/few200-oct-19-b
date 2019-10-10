import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GameListModel } from '../../models';
import { GamesFeatureState } from '../../reducers';
import { GameEntity } from '../../reducers/list.reducer';
import { Store } from '@ngrx/store';
import { gameOnloan, gameAdded } from '../../actions/list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() model: GameListModel[] = [];
  @Input() onloan: boolean;
  constructor(private store: Store<GamesFeatureState>) { }

  ngOnInit() {
  }

  OnLoan(id: string, title: string, publisher: string, platform: string) {
    this.store.dispatch(gameOnloan({ game: { id, title, publisher, platform } }));

  }
}
