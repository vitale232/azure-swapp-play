import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FloridaComponent } from './florida.component';


const routes: Routes = [
  { path: '', component: FloridaComponent }
];

@NgModule({
  declarations: [FloridaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FloridaModule { }
