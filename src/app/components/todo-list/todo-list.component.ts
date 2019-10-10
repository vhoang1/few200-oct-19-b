import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../../models';
import { Observable } from 'rxjs';
import { TodoDataService } from '../../services/todo.data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  entryTitle = 'Add Your Stuff';

  stuff$: Observable<TodoListItem[]>;
  nextId = 3;
  constructor(private service: TodoDataService) { }

  ngOnInit() {
    this.stuff$ = this.service.getData();
  }

  addThingToList(description: string) {
    this.service.addItem(description);
  }

  markComplete(item: TodoListItem) {
    this.service.markComplete(item);
  }
}
