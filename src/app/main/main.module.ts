import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { routes } from './main-routing';
import { HomeComponent } from './home/home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    NgZorroAntdModule,
    RouterModule.forChild(routes)
  ],
})
export class MainModule { }
