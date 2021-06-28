import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-florida',
  template: `
    <h2>Sunshine State, USA</h2>

    <p>
      The US state of Florida is a wondrous land. While the title claims
      sunshine, the state of Florida is home to the largest quantity of
      lightning strikes of any US state. Be careful of the Alligators!
    </p>
    <figure>
      <img
        src="assets/alligator.jpg"
        alt="Photograph of an alligator in a Florida swamp outside of Orlando"
      />
      <figcaption>
        A photograph of an alligator in a Florida swamp outside of the Orlando
        Area.
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
export class FloridaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
