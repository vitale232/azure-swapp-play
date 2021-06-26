import { Injectable } from '@angular/core';

const colors = [
  'darkred',
  'darkblue',
  'green',
  'orange',
  'hotpink',
  'purple',
  'darkslategray',
  'darksalmon',
  'dodgerblue',
  'lightskyblue',
  'coral',
  'darkgoldenrod',
];

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  private colors: string[] | null = null;

  constructor() {
    setTimeout(() => (this.colors = colors), 1000);
  }

  public randomColor(): string {
    return this.colors[Math.floor(Math.random() * colors.length)];
  }
}
