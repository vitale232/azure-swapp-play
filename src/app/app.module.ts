import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TrianglesIconComponent } from './triangles-icon/triangles-icon.component';

@NgModule({
  declarations: [AppComponent, TrianglesIconComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
