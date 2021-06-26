import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TrianglesIconComponent } from './triangles-icon/triangles-icon.component';

@NgModule({
  declarations: [AppComponent, TrianglesIconComponent],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
