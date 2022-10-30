import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImagesLazyloadModule } from './shared/images-lazyload/images-lazyload.module';

@NgModule({
  imports:      [
    BrowserModule,
    ImagesLazyloadModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
