import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.less']
})
export class PortfolioProjectsComponent implements OnInit {

  projects = [
    {
      id: 1,
      title: 'Project name',
      location: 'Ljubljana - Slovenia',
      imgUrl: '../../assets/images/samples/p-1.jpg'
    },
    {
      id: 2,
      title: 'Ilex',
      location: 'Lyon - France',
      imgUrl: '../../assets/images/samples/p-2.jpg'
    },
    {
      id: 3,
      title: 'Ateliers 2/3/4/',
      location: 'Berlin - Germany',
      imgUrl: '../../assets/images/samples/p-3.jpg'
    },
    {
      id: 4,
      title: 'Plecnik',
      location: 'Ljubljana - Slovenia',
      imgUrl: '../../assets/images/samples/p-4.jpg'
    },
    {
      id: 5,
      title: 'Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis',
      location: 'Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis',
      imgUrl: '../../assets/images/samples/p-5.jpg'
    }
  ];


  swiperConfig: SwiperOptions = {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 5,
    slidesPerView: 'auto',
    loop: false
  };

  constructor() { }

  ngOnInit() {
  }

}
