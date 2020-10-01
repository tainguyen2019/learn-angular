import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.css'],
})
export class RefreshButtonComponent implements OnInit {
  @Output()
  refreshEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  refreshRobots() {
    this.refreshEvent.emit();
  }
}
