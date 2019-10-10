import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterByComponent } from './counter-by.component';

describe('CounterByComponent', () => {
  let component: CounterByComponent;
  let fixture: ComponentFixture<CounterByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
