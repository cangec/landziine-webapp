import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-carousel',
  templateUrl: './students-carousel.component.html',
  styleUrls: ['./students-carousel.component.less']
})
export class StudentsCarouselComponent implements OnInit {

  students = [
    {
      id: 1,
      title: 'Base',
      location: 'Ljubljana - Slovenia',
      imgUrl: '../../assets/images/samples/1.jpg'
    },
    {
      id: 2,
      title: 'Ilex',
      location: 'Lyon - France',
      imgUrl: '../../assets/images/samples/2.jpg'
    },
    {
      id: 3,
      title: 'Ateliers 2/3/4/',
      location: 'Berlin - Germany',
      imgUrl: '../../assets/images/samples/3.jpg'
    },
    {
      id: 4,
      title: 'Plecnik',
      location: 'Ljubljana - Slovenia',
      imgUrl: '../../assets/images/samples/4.jpg'
    },
    {
      id: 5,
      title: 'Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis',
      location: 'Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis',
      imgUrl: '../../assets/images/samples/5.jpg'
    },
    {
      id: 6,
      title: 'Base',
      location: 'Ljubljana - Slovenia',
      imgUrl: '../../assets/images/samples/6.jpeg'
    },
    {
      id: 7,
      title: 'Base',
      location: 'Ljubljana - Slovenia',
      imgUrl: '../../assets/images/samples/7.jpg'
    },
    {
      id: 8,
      title: 'Base',
      location: 'Ljubljana - Slovenia',
      imgUrl: '../../assets/images/samples/8.jpg'
    },
    {
      id: 9,
      title: 'Base',
      location: 'Ljubljana - Slovenia',
      imgUrl: '../../assets/images/samples/9.jpg'
    },
    {
      id: 10,
      title: 'Base',
      location: 'Ljubljana - Slovenia',
      imgUrl: '../../assets/images/samples/10.jpg'
    }

  ];

  swiperConfig: SwiperOptions = {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 8,
    slidesPerView: 'auto',
    loop: false
  };

  constructor() { }

  ngOnInit() {
  }

}
