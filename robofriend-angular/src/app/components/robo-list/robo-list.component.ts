import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../services/robo.service';

@Component({
  selector: 'app-robo-list',
  templateUrl: './robo-list.component.html',
  styleUrls: ['./robo-list.component.css'],
})
export class RoboListComponent implements OnInit, OnDestroy {
  @Input()
  robos: User[];

  clickSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.clickSubscription = fromEvent<MouseEvent>(document, 'click')
      .pipe(map((event) => event.timeStamp))
      .subscribe((data) => console.log('click document at', data));
  }

  ngOnDestroy() {
    this.clickSubscription.unsubscribe();
  }

  trackById(_: number, item: User): number {
    return item.id;
  }
}
