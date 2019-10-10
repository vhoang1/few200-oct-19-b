import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListEntryComponent } from './todo-list-entry.component';

describe('TodoListEntryComponent', () => {
  let component: TodoListEntryComponent;
  let fixture: ComponentFixture<TodoListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
