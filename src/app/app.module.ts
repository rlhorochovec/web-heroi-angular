import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHeroComponent,
    HeroDetailsComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
