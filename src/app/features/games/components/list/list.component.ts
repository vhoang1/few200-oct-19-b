import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GameListModel } from '../../models';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() model: GameListModel[] = [];
  constructor() { }

  ngOnInit() {
  }

}
