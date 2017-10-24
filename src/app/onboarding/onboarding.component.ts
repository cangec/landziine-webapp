import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BodyBackground} from './body-background';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.less'],
  providers: [BodyBackground],
  encapsulation: ViewEncapsulation.None
})
export class OnboardingComponent implements OnInit {

  showJoin = true;

  constructor(
    private background: BodyBackground
  ) { }

  ngOnInit() {

  }



}
