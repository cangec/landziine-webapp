import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioTextComponent } from '../../shared/portfolio-text/portfolio-text.component';

@Component({
  selector: 'app-scroll-profile',
  templateUrl: './scroll-profile.component.html',
  styleUrls: ['./scroll-profile.component.less']
})
export class ScrollProfileComponent implements OnInit {

  @ViewChild('container') container;

  constructor() { }

  ngOnInit() {

    console.log(this.container);

  }

}
