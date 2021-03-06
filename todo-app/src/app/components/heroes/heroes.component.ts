import { Component, OnChanges, OnInit } from '@angular/core';
import {HeroService} from '../../services/hero.service';
import {Hero} from '../../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit, OnChanges {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}


  ngOnChanges(): void{

  }
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
