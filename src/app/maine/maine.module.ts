import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaineComponent } from './maine.component';


const routes: Routes = [
  { path: '', component: MaineComponent }
];

@NgModule({
  declarations: [MaineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MaineModule { }
