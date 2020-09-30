import { Component, OnInit } from '@angular/core';
import { RoboService, User } from 'src/app/services/robo.service';

@Component({
  selector: 'app-robo-app',
  templateUrl: './robo-app.component.html',
  styleUrls: ['./robo-app.component.css'],
})
export class RoboAppComponent implements OnInit {
  robos: User[];
  filteredRobos: User[];
  loading: boolean;

  constructor(private roboService: RoboService) {
    this.loading = false;
  }

  ngOnInit() {
    this.fetchRobos();
  }

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
    this.filteredRobos = this.robos.filter(({ name }) =>
      name.match(new RegExp(search, 'gi'))
    );
  }
}
