import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemons/pokemon';
import { POKEMONS } from './pokemons/mock-pokemons';
import { Title } from '@angular/platform-browser';
  
@Component({
  selector: 'pokemon-app',
  templateUrl: `./app/app.component.html`
})
export class AppComponent implements OnInit{

  public constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Formation Angular !")
  }
 }