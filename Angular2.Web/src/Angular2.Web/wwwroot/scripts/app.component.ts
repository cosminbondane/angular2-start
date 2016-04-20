import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {HeroesComponent} from './heroes/heroes.component'
import {VillainsComponent} from './villains/villains.component'

@Component({
    selector: 'my-app',
    templateUrl: 'scripts/app.html',
    styleUrls: ['scripts/app.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent,
        useAsDefault: true
    },
    {
        path: '/villains',
        name: 'Villains',
        component: VillainsComponent
    }
])

export class AppComponent {
    // private here

    // public here
    title: string = 'My website';

    // constructor

    // public methods

    // private methods
}