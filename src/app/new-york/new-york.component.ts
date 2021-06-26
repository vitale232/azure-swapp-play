import { Component } from '@angular/core';

@Component({
  selector: 'app-new-york',
  template: `
    <h2>Empire State, USA</h2>

    <p>
      The US state of New York is a stupendous place! While it's best known for
      New York City (aka the Big Apple 🍏), it's home to numerous mountain
      ranges, wildlife, and cultural delights!
    </p>
    <figure>
      <img
        src="assets/adirondacks.jpg"
        alt="Landscape photograph of Vanderwhacker Mountain in the Adirondack Mountains of New York"
      />
      <figcaption>
        A landscape photograph of Vanderwhacker Mountain in the Adirondack
        Mountains of New York.
      </figcaption>
    </figure>
  `,
  styles: [
    `
      figure,
      img {
        max-width: 100%;
        height: auto;
      }
    `,
  ],
})
export class NewYorkComponent {}
