import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  config: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 64
  };

  cards: Array<object> = [
    {
      image: 'assets/images/service/restoran.jpg',
      title: 'Ресторан с банкетным залом'
    },
    {
      image: 'assets/images/service/kafe_i_bar.jpg',
      title: 'Кафе и бары'
    },
    {
      image: 'assets/images/service/fitness.jpg',
      title: 'Фитнес-клуб'
    },
    {
      image: 'assets/images/service/service-3.jpg',
      title: 'Бассейн и SPA'
    },
    {
      image: 'assets/images/service/himchistka.jpg',
      title: 'Химчистка'
    },
    {
      image: 'assets/images/service/prachechnaya.jpg',
      title: 'Прачечная'
    },
    {
      image: 'assets/images/service/konferenc_zal.jpg',
      title: 'Конференц-зал'
    },
    {
      image: 'assets/images/service/coworking.jpg',
      title: 'Коворкинг'
    },
    {
      image: 'assets/images/service/consierge.jpg',
      title: 'Консьерж-служба'
    },
    {
      image: 'assets/images/service/hranenie_bagaja.jpg',
      title: 'Хранение багажа'
    },
    {
      image: 'assets/images/service/cleaning.jpg',
      title: 'Служба клининга'
    },
    {
      image: 'assets/images/service/room_service.jpg',
      title: 'Room Service'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
