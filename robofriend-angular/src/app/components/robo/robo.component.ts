import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../services/robo.service';

@Component({
  selector: 'app-robo',
  templateUrl: './robo.component.html',
  styleUrls: ['./robo.component.css'],
})
export class RoboComponent implements OnInit {
  @Input()
  robo: User;

  imageSrc: string;

  constructor() {}

  ngOnInit(): void {
    this.imageSrc = `https://robohash.org/${this.robo.id}?200x200`;
  }
}
