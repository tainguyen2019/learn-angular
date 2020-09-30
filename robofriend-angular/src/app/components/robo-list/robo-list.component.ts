import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../services/robo.service';

@Component({
  selector: 'app-robo-list',
  templateUrl: './robo-list.component.html',
  styleUrls: ['./robo-list.component.css'],
})
export class RoboListComponent implements OnInit {
  @Input()
  robos: User[];

  constructor() {}

  ngOnInit(): void {}

  trackById(_: number, item: User): number {
    return item.id;
  }
}
