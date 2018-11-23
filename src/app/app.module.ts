import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app-routing';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ScrollerDirective } from './directive/scroller.directive';

registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    ScrollerDirective,
  ],
  imports: [
    BrowserModule,
    MainModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      //preloadingStrategy:PreloadAllModules
    }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule { }
