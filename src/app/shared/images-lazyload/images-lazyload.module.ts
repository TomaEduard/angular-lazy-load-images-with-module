import { NgModule } from '@angular/core';
import { ImagesLazyloadDirective } from './images-lazyload.directive';

@NgModule({
  declarations: [ImagesLazyloadDirective],

  // se just need to export the directive to use, no need to export the service
  exports: [ImagesLazyloadDirective],
})
export class ImagesLazyloadModule { }