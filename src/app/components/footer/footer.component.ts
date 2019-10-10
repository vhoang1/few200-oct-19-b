import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListItem, FooterModel } from 'src/app/models';
import { TodoDataService } from 'src/app/services/todo.data.service';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  items$: Observable<FooterModel>;

  constructor(private service: TodoDataService) { }

  ngOnInit() {
    this.items$ = this.service.getData().pipe(
      tap(data => console.log('Got some data: ', data)),
      map(data => {
        return {
          totalTodos: data.length,
          completedTodos: data.filter(d => d.complete).length,
          remainingTodos: data.filter(d => !d.complete).length
        } as FooterModel;
      }),
      tap(result => console.log('Turned that into', result))
    );
  }

}
