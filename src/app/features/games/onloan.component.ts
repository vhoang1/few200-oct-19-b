import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GamesFeatureState, selectLoanListItemModelUnsorted, selectLoanListItemModel, } from './reducers';
import { Observable } from 'rxjs';
import { GameListModel } from './models';

@Component({
    selector: 'app-onloangames',
    templateUrl: './onloan.component.html',
})
export class OnloanComponent implements OnInit {

    games$: Observable<GameListModel[]>;
    onloan = true;

    constructor(private store: Store<GamesFeatureState>) { }

    ngOnInit() {
        this.games$ = this.store.select(selectLoanListItemModel);
    }

}
