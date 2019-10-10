import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-entry',
  templateUrl: './todo-list-entry.component.html',
  styleUrls: ['./todo-list-entry.component.css']
})
export class TodoListEntryComponent implements OnInit {

  @Output() addedItem = new EventEmitter<string>();
  @Input() title = 'Your Things To Do';
  constructor() { }

  ngOnInit() {
  }


  addItem(item: HTMLInputElement) {
    // console.log(item.value);
    this.addedItem.emit(item.value);
    item.value = ''; // clear it out...
    item.focus(); // put the cursor in there waiting for the next thing.
  }

}
