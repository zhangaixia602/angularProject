import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes-m',
  templateUrl: './heroes-m.component.html',
  styleUrls: ['./heroes-m.component.css']
})
export class HeroesMComponent implements OnInit {
  heroes = HEROES;

  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
