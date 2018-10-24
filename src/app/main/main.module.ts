import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { routes } from './main-routing';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class MainModule { }
