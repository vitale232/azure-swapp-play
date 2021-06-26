import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  public colors: string[] | null = null;

  constructor(private http: HttpClient) {
    this.fetchColors();
  }

  public fetchColors(): void {
    this.http.get<string[]>('/api/colors').subscribe({
      next: (response) => (this.colors = response),
      error: console.error,
    });
  }

  public randomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
