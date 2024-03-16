import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      component: PagesComponent
    },
  ]
}];


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule.forChild(routes),
  ]
})
export class PagesModule { }
