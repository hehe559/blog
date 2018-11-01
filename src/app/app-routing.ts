import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    redirectTo: '/main', 
    pathMatch: 'full'
  },
  {
    path:'main',
    loadChildren:'./main/main.module#MainModule'
  },
  {
    path:'**',
    redirectTo: '/main', 
    pathMatch: 'full'
  }
];