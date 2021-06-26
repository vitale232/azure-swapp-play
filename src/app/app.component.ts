import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';

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
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  greeting = 'Hola';
  value = 'Mundo';

  @ViewChild('triangles', { static: true })
  private svg!: ElementRef<SVGElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    this.svg.nativeElement.onclick = () => {
      const rando = () => colors[Math.floor(Math.random() * colors.length)];
      this.document.documentElement.style.cssText = `
        --dark-color: ${rando()};
        --light-color: ${rando()};
      `;
    };
  }
}
