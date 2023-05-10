import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentHero: Hero = {
    name: '',
    civil: '',
    universe: '',
    image: '',
    imagePath: ''
  };
  universes = ['Marvel', 'DC'];
  message = '';

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getHero(this.route.snapshot.params["id"]);
    }
  }

  getHero(id: string): void {
    this.heroService.get(id)
      .subscribe({
        next: (data) => {
          this.currentHero = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateHero(): void {
    this.message = '';

    this.heroService.update(this.currentHero.id, this.currentHero)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This hero was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteHero(): void {
    this.heroService.delete(this.currentHero.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/heroes']);
        },
        error: (e) => console.error(e)
      });
  }
}