import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoboService, User } from 'src/app/services/robo.service';

@Component({
  selector: 'app-robo-app',
  templateUrl: './robo-app.component.html',
  styleUrls: ['./robo-app.component.css'],
})
export class RoboAppComponent implements OnInit, OnDestroy {
  robos: User[];
  filteredRobos: User[];
  loading: boolean;
  search: string;

  constructor(private roboService: RoboService) {
    this.loading = false;
    this.robos = [];
    this.filteredRobos = [];
    this.search = '';
  }

  ngOnInit() {
    this.fetchRobos();
  }

  ngOnDestroy() {}

  fetchRobos() {
    this.loading = true;
    this.roboService
      .getList()
      .then((users) => {
        this.robos = users;
        this.filteredRobos = users;
      })
      .catch(console.error)
      .finally(() => {
        this.loading = false;
      });
  }

  searchEvent(search: string) {
    this.search = search;
    this.filteredRobos = this.robos.filter(({ name }) =>
      name.match(new RegExp(search, 'gi'))
    );
  }

  refreshEvent() {
    this.search = '';
    this.fetchRobos();
  }
}
