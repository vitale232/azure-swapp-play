import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      <app-triangles-icon></app-triangles-icon>
      <span>{{ greeting }} {{ value }}</span>
      <app-triangles-icon></app-triangles-icon>
    </h1>

    <div>Click the icon!</div>
    <div>
      Based on Fireship tutorial -
      <a href="https://github.com/fireship-io/animated-svg-demo">GitHub</a>
    </div>

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
      app-triangles-icon {
        margin: -10px 0;
      }
      span {
        margin-left: -50px;
      }
    `,
  ],
})
export class AppComponent {
  greeting = 'Hola';
  value = 'Mundo';
}
