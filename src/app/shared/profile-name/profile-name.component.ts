import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-name',
  templateUrl: './profile-name.component.html',
  styleUrls: ['./profile-name.component.less']
})
export class ProfileNameComponent implements OnInit {

  isShrunk: boolean = false;

  constructor(zone: NgZone) {
    window.onscroll = () => {
      zone.run(() => {
        if (window.pageYOffset > 100) {
          this.isShrunk = true;
        } else {
          this.isShrunk = false;
        }
      });
    };
  }

  ngOnInit() {
  }

}
