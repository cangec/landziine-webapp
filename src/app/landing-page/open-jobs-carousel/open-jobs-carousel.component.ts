import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-jobs-carousel',
  templateUrl: './open-jobs-carousel.component.html',
  styleUrls: ['./open-jobs-carousel.component.less']
})
export class OpenJobsCarouselComponent implements OnInit {

  jobListings = [
    {
      id: 1,
      title: 'Base Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan porta massa',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan porta massa, sit amet lobortis massa suscipit quis. Sed massa lectus, ultrices eget eleifend nec, accumsan ac nisi. Integer a tortor arcu. Aliquam congue rutrum eros. Praesent in erat convallis massa pellentesque pulvinar. ',
      imgUrl: '../../assets/images/samples/1.jpg'
    },
    {
      id: 2,
      title: 'Ilex',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan porta massa, sit amet lobortis massa suscipit quis. Sed massa lectus, ultrices eget eleifend nec, accumsan ac nisi. Integer a tortor arcu. Aliquam congue rutrum eros. Praesent in erat convallis massa pellentesque pulvinar. ',
      imgUrl: '../../assets/images/samples/2.jpg'
    },
    {
      id: 3,
      title: 'Ateliers 2/3/4/',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan porta massa, sit amet lobortis massa suscipit quis. Sed massa lectus, ultrices eget eleifend nec, accumsan ac nisi. Integer a tortor arcu. Aliquam congue rutrum eros. Praesent in erat convallis massa pellentesque pulvinar. ',
      imgUrl: '../../assets/images/samples/3.jpg'
    },
    {
      id: 4,
      title: 'Plecnik',
      text: 'Ljubljana - Slovenia',
      imgUrl: '../../assets/images/samples/4.jpg'
    },
    {
      id: 5,
      title: 'Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis Lorem Ipsum Dolor Sit Amet Ful Dolgi Napis',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan porta massa, sit amet lobortis massa suscipit quis. Sed massa lectus, ultrices eget eleifend nec, accumsan ac nisi. Integer a tortor arcu. Aliquam congue rutrum eros. Praesent in erat convallis massa pellentesque pulvinar. , Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan porta massa, sit amet lobortis massa suscipit quis. Sed massa lectus, ultrices eget eleifend nec, accumsan ac nisi. Integer a tortor arcu. Aliquam congue rutrum eros. Praesent in erat convallis massa pellentesque pulvinar.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan porta massa, sit amet lobortis massa suscipit quis. Sed massa lectus, ultrices eget eleifend nec, accumsan ac nisi. Integer a tortor arcu. Aliquam congue rutrum eros. Praesent in erat convallis massa pellentesque pulvinar. ',
      imgUrl: '../../assets/images/samples/5.jpg'
    },
    {
      id: 6,
      title: 'Base',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan porta massa, sit amet lobortis massa suscipit quis. Sed massa lectus, ultrices eget eleifend nec, accumsan ac nisi. Integer a tortor arcu. Aliquam congue rutrum eros. Praesent in erat convallis massa pellentesque pulvinar. ',
      imgUrl: '../../assets/images/samples/6.jpeg'
    },
    {
      id: 7,
      title: 'Base',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan porta massa, sit amet lobortis massa suscipit quis. Sed massa lectus, ultrices eget eleifend nec, accumsan ac nisi. Integer a tortor arcu. Aliquam congue rutrum eros. Praesent in erat convallis massa pellentesque pulvinar. ',
      imgUrl: '../../assets/images/samples/7.jpg'
    },
    {
      id: 8,
      title: 'Base',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan porta massa, sit amet lobortis massa suscipit quis. Sed massa lectus, ultrices eget eleifend nec, accumsan ac nisi. Integer a tortor arcu. Aliquam congue rutrum eros. Praesent in erat convallis massa pellentesque pulvinar. ',
      imgUrl: '../../assets/images/samples/8.jpg'
    },
    {
      id: 9,
      title: 'Base',
      text: 'Ljubljana - Slovenia',
      imgUrl: '../../assets/images/samples/9.jpg'
    },
    {
      id: 10,
      title: 'Base',
      text: 'Ljubljana - Slovenia',
      imgUrl: '../../assets/images/samples/10.jpg'
    }

  ];

  swiperConfig: SwiperOptions = {
    nextButton: '.swiper-button-next-job',
    prevButton: '.swiper-button-prev-job',
    spaceBetween: 8,
    slidesPerView: 'auto',
    loop: false
  };

  constructor() { }

  ngOnInit() {
  }

}
