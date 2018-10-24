import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    redirectTo: '/main', 
    pathMatch: 'full'
  },
  {
    path:'main',
    loadChildren:'./main/main.module#MainModule'
  }
];