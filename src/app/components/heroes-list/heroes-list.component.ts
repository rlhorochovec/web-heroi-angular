import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes?: Hero[];
  currentHero: Hero = {};
  currentIndex = -1;
  title = '';

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.retrieveHeroes();
  }

  retrieveHeroes(): void {
    this.heroService.getAll()
      .subscribe({
        next: (data) => {
          this.heroes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveHeroes();
    this.currentHero = {};
    this.currentIndex = -1;
  }

  setActiveHero(hero: Hero, index: number): void {
    this.currentHero = hero;
    this.currentIndex = index;
  }
}