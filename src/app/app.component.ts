import { Component } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute,RouterOutlet} from '@angular/router';
import {trigger, transition, group, query, style, animate} from '@angular/animations';
import {slider,fader,stepper,transformer,} from './route-animation';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    //transformer
    stepper
    //slider
    //fader
  ]
})
export class AppComponent {
  title = 'portfolio';
  ngOnInit(){
    // AOS.init();
  }

  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
