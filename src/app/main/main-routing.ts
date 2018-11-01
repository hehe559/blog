import { Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ]
  }
];