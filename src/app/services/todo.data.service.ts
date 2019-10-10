import { TodoListItem } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

export class TodoDataService {


  private data: TodoListItem[] = [
    { id: 1, description: 'Clean Attic', complete: false },
    { id: 2, description: 'Fix Snowblower', complete: false }
  ];

  currentID = 3;

  private subject = new BehaviorSubject<TodoListItem[]>(this.data);

  getData(): Observable<TodoListItem[]> {
    return this.subject.asObservable();
  }

  addItem(description: string) {
    // do the api call, wait until the thing comes back with the right id, etc.
    const itemToAdd = { id: this.currentID++, description, complete: false };
    this.data = [itemToAdd, ...this.data];
    this.subject.next(this.data);
  }

  markComplete(item: TodoListItem) {
    // do your PUT to the api, or whatever.
    const stored = this.data.find(d => d.id === item.id);
    stored.complete = true;
    this.subject.next(this.data);

  }
}
