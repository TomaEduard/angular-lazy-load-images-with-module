import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesLazyloadService {
  private observer: IntersectionObserver;

  constructor() {
    this.init();
  }

  private init() {
    // init
    this.observer = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach(entry => {
        // Haven't reached the viewport yet, stop early to reduce suffering
        if (!entry.isIntersecting) {
          return;
        }

        // src is saved in data-src, we copy it to src and you're done.
        const lazyImage = entry.target as HTMLImageElement;
        const src = lazyImage.dataset.src;

        // safety, doesn't have data-src attribute, stop
        if (!src) {
          return;
        }

        // if image is img tag, copy to src
        // if image is background image, copy to background-image
        lazyImage.tagName.toLowerCase() === 'img'
          ? lazyImage.src = src
          : lazyImage.style.backgroundImage = 'url(\'' + src + '\')';

        // when you're done, you should clean up
        lazyImage.removeAttribute('lazy');

        // keep cleaning
        imgObserver.unobserve(lazyImage);
      });
    });
  }

  observe(target: Element) {
    // "trải chiếu nằm chờ" tấm ảnh scroll tới viewport
    this.observer.observe(target);
  }
}