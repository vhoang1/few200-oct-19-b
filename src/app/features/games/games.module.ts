import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
// import { featureName, reducers } from './reducers';
// import { SorterComponent } from './components/sorter/sorter.component';
import { GamesComponent } from './games.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { OnloanComponent } from './onloan.component';
// import { EffectsModule } from '@ngrx/effects';
// import { AppEffects } from './effects/app.effects';
// import { ListEffects } from './effects/list.effects';


@NgModule({
  declarations: [GamesComponent, EntryComponent, ListComponent, OnloanComponent], // , SorterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    HttpClientModule,
    // EffectsModule.forFeature([AppEffects, ListEffects])
  ],
  exports: [GamesComponent]
})
export class GamesModule { }
