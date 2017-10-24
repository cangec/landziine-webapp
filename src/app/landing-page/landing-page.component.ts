import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

  isShrunk: boolean = false;

  constructor(zone: NgZone) {
    window.onscroll = () => {
      zone.run(() => {
        if (window.pageYOffset > 0) {
          this.isShrunk = true;
          console.log('woot');
        } else {
          this.isShrunk = false;
          console.log('top');
        }
      });
    };
  }

  ngOnInit() {
  }

}
