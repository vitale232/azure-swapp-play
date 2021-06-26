import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import { ColorsService } from './colors.service';

@Component({
  selector: 'app-triangles-icon',
  templateUrl: './triangles-icon.component.html',
  styleUrls: ['./triangles-icon.component.css'],
})
export class TrianglesIconComponent implements AfterViewInit {
  @ViewChild('triangles', { static: true })
  private svg!: ElementRef<SVGElement>;

  constructor(
    private colorsService: ColorsService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
    this.svg.nativeElement.onclick = () => {
      this.document.documentElement.style.cssText = `
        --dark-color: ${this.colorsService.randomColor()};
        --light-color: ${this.colorsService.randomColor()};
      `;
    };
  }
}
