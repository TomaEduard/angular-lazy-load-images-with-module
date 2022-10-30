import { Injector, Directive, ElementRef } from '@angular/core';
import { ImagesLazyloadService } from './images-lazyload.service';

@Directive({
  // Make use of "loading" attribute as directive selector
  // You can use any other name
  selector: '[loading]',
})
export class ImagesLazyloadDirective {

  constructor(
    private injector: Injector,
    private el: ElementRef,
  ) {
    const img = this.el.nativeElement;

    // If the browser already supports the "loading" attribute, we don't  need to do anything more, let it do its job.
    // However if the element is not an img (it's a background image), then fallback to intersection observable
    if ('loading' in HTMLImageElement.prototype && img.tagName.toLowerCase() === 'img') {
      img.src = img.dataset?.src;
    } else {
      // fallback uses intersection observable API
      const lazyService = this.injector.get(ImagesLazyloadService);
      lazyService.observe(img);
    }
  }
}