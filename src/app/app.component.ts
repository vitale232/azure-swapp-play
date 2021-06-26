import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ greeting }} {{ value }}</h1>

    <app-triangles-icon></app-triangles-icon>

    <h2>Pick a State to Learn More</h2>
    <nav>
      <a routerLink="maine">Maine</a>
      <a routerLink="new-york">New York</a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [
    `
      nav {
        display: flex;
        justify-content: space-between;
        width: 150px;
      }
    `,
  ],
})
export class AppComponent {
  greeting = 'Hola';
  value = 'Mundo';
}
