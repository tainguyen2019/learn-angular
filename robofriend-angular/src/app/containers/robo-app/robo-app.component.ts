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

  constructor(private roboService: RoboService) {}

  ngOnInit(): void {
    this.roboService
      .getList()
      .then((users) => {
        this.robos = users;
        this.filteredRobos = users;
      })
      .catch(console.error);
  }

  searchEvent(search: string) {
    this.filteredRobos = this.robos.filter(({ name }) =>
      name.match(new RegExp(search, 'gi'))
    );
  }
}
