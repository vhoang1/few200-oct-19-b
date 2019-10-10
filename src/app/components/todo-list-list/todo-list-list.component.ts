import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItem } from '../../models';
@Component({
  selector: 'app-todo-list-list',
  templateUrl: './todo-list-list.component.html',
  styleUrls: ['./todo-list-list.component.css']
})
export class TodoListListComponent implements OnInit {

  @Input() items: TodoListItem[] = [];
  @Output() markedComplete = new EventEmitter<TodoListItem>();
  constructor() { }

  ngOnInit() {
  }

  markComplete(item: TodoListItem) {

    this.markedComplete.emit(item);
  }

}
