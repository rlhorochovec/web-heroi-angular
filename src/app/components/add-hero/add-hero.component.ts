import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  hero: Hero = {
    name: '',
    civil: '',
    universe: '',
    image: '',
    imagePath: ''
  };
  universes = ['Marvel', 'DC'];
  submitted = false;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  saveHero(): void {
    const data = {
      name: this.hero.name,
      civil: this.hero.civil,
      universe: this.hero.universe,
      image: this.hero.image,
      imagePath: this.hero.imagePath
    };

    this.heroService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newHero(): void {
    this.submitted = false;
    this.hero = {
      name: '',
      civil: '',
      universe: '',
      image: '',
      imagePath: ''
    };
  }
}