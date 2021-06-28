import { Component } from '@angular/core';

@Component({
  selector: 'app-maine',
  template: `
    <h2>Vacationland, USA</h2>

    <p>
      The US state of Maine is a beautiful place with a diverse landscape and
      culture. The license plate makes the claim "Vacationland", and it's hard
      to disagree!
    </p>
    <figure>
      <img
        src="assets/five-island.jpg"
        alt="Landscape photograph of Five Island, Maine from the shore of Georgetown Island"
      />
      <figcaption>
        A landscape photograph of Five Island, Maine from the shore of
        Georgetown Island.
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
export class MaineComponent {}
