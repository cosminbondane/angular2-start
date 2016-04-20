import { Component, OnInit } from 'angular2/core';

import {Hero} from './models/hero'
import {HeroService} from './services/hero.service';
import {HeroDetailsComponent} from './details/hero-details.component'

@Component({
    selector: 'heroes',
    templateUrl: 'scripts/heroes/heroes.html',
    styleUrls: ['scripts/heroes/heroes.style.css'],
    directives: [HeroDetailsComponent],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    // private members
    private something: boolean = true;

    // public members
    heroes: Hero[];
    title: string = 'Heroes';
    selectedHero: Hero = null;

    // constructor
    constructor(private _heroService: HeroService) { }

    // public methods
    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    // private methods
    private getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}