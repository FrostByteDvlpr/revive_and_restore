import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer';
import { NavComponent } from '../nav/nav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, NavComponent, RouterOutlet],
  template: `
    <app-nav />

    <router-outlet></router-outlet>

    <app-footer />
  `,
  styles: ``,
})
export class App {}
