import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterByComponent } from './components/counter-by/counter-by.component';
import { CounterComponent } from './components/counter/counter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoListEntryComponent } from './components/todo-list-entry/todo-list-entry.component';
import { TodoListListComponent } from './components/todo-list-list/todo-list-list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CounterEffects } from './effects/counter.effects';
import { BooksModule } from './features/books/books.module';
import { GamesModule } from './features/games/games.module';
import { reducers } from './reducers';
import { TodoDataService } from './services/todo.data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodoListComponent,
    TodoListEntryComponent,
    TodoListListComponent,
    FooterComponent,
    DashboardComponent,
    CounterComponent,
    CounterByComponent,
    ErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    GamesModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CounterEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    TodoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
