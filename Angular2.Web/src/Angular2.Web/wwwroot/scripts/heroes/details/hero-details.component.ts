import {Component, Input} from 'angular2/core';
import {Hero} from '../models/hero'

@Component({
    selector: 'hero-details',
    templateUrl: './scripts/heroes/details/hero-details.html'
})

export class HeroDetailsComponent {
    @Input()
    hero: Hero;
}
