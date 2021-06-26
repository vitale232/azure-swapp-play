import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TrianglesIconComponent } from './triangles-icon/triangles-icon.component';

const routes: Routes = [
  {
    path: 'maine',
    loadChildren: () =>
      import('./maine/maine.module').then((m) => m.MaineModule),
  },
  {
    path: 'new-york',
    loadChildren: () =>
      import('./new-york/new-york.module').then((m) => m.NewYorkModule),
  },
];

@NgModule({
  declarations: [AppComponent, TrianglesIconComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
