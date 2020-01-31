import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {

  config: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 64
  };

  cards: Array<object> = [
    {
      image: 'assets/images/pages/rent/repairs/repairs-1.jpg',
      title: 'Спальное место'
    },
    {
      image: 'assets/images/pages/rent/repairs/repairs-2.jpg',
      title: 'Зоны отдыха и работы'
    },
    {
      image: 'assets/images/pages/rent/repairs/repairs-3.jpg',
      title: 'Кухня'
    },
    {
      image: 'assets/images/pages/rent/repairs/repairs-2.jpg',
      title: 'Зоны отдыха и работы'
    },
    {
      image: 'assets/images/pages/rent/repairs/repairs-3.jpg',
      title: 'Кухня'
    },
    {
      image: 'assets/images/pages/rent/repairs/repairs-1.jpg',
      title: 'Спальное место'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
