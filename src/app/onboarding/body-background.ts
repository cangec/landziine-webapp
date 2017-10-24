import { OnDestroy } from '@angular/core';

export class BodyBackground implements OnDestroy {
  constructor() {
    document.body.style.backgroundImage = 'url("./assets/images/sophia-baboolal.jpg")';
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }
  ngOnDestroy() {
    document.body.style.backgroundImage = 'none';
  }
}
