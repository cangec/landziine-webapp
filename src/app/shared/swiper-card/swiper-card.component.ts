import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper-card',
  templateUrl: './swiper-card.component.html',
  styleUrls: ['./swiper-card.component.less']
})
export class SwiperCardComponent implements OnInit {

  @Input() listing;

  constructor() { }

  ngOnInit() {


  }

}
