import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  index: number = 0;
  isFeaturesVisible: boolean = false;

  config: SwiperConfigInterface = {
    slidesPerView: 1,
    observer: true,
    observeParents: true
  };

  images: Array<string> = [
    'assets/images/pages/apartment/room.jpg',
    'assets/images/pages/apartment/room.jpg',
    'assets/images/pages/apartment/room.jpg',
    'assets/images/pages/apartment/room.jpg',
  ];

  features: Array<object> = [
    {
      iconSrc: 'assets/sprites/icons.svg#ico-video',
      iconWidth: 24,
      iconHeight: 24,
      title: 'видео/аудио',
      text: 'Спутниковое телевидение, телевизор, цифровое тв, телевизор с плоским экраном'
    },
    {
      iconSrc: 'assets/sprites/icons.svg#ico-img',
      iconWidth: 24,
      iconHeight: 24,
      title: 'окружение',
      text: 'Вид на город,  двор, достопримечательности города'
    },
    {
      iconSrc: 'assets/sprites/icons.svg#ico-lamp',
      iconWidth: 25.6,
      iconHeight: 32,
      title: 'электроника',
      text: 'Микроволновая печь, настольные лампы, плита для приготовления пищи, светильник, система безопасности, сплит- система, утюг, фен, холодильник'
    },
    {
      iconSrc: 'assets/sprites/icons.svg#ico-furniture',
      iconWidth: 26,
      iconHeight: 24,
      title: 'Мебель',
      text: 'Багажная тумба, вешалки, гардеробная, журнальный столик, зеркало, обеденный стол,  стулья, туалетный столик, кровать, шкаф-купе'
    },
    {
      iconSrc: 'assets/sprites/icons.svg#ico-internet',
      iconWidth: 24,
      iconHeight: 24,
      title: 'Интернет и телефония',
      text: 'Wi-Fi, интернет, телефон, внутренний телефон'
    },
    {
      iconSrc: 'assets/sprites/icons.svg#ico-bathroom',
      iconWidth: 24,
      iconHeight: 24,
      title: 'Ванная комната',
      text: 'Банные полотенца, банные принадлежности, раковина, санузел, туалет, туалетные средства, унитаз'
    },
    {
      iconSrc: 'assets/sprites/icons.svg#ico-video',
      iconWidth: 24,
      iconHeight: 24,
      title: 'видео/аудио',
      text: 'Спутниковое телевидение, телевизор, цифровое тв, телевизор с плоским экраном'
    },
    {
      iconSrc: 'assets/sprites/icons.svg#ico-img',
      iconWidth: 24,
      iconHeight: 24,
      title: 'окружение',
      text: 'Вид на город,  двор, достопримечательности города'
    },
    {
      iconSrc: 'assets/sprites/icons.svg#ico-lamp',
      iconWidth: 25.6,
      iconHeight: 32,
      title: 'электроника',
      text: 'Микроволновая печь, настольные лампы, плита для приготовления пищи, светильник, система безопасности, сплит- система, утюг, фен, холодильник'
    },
    {
      iconSrc: 'assets/sprites/icons.svg#ico-furniture',
      iconWidth: 26,
      iconHeight: 24,
      title: 'Мебель',
      text: 'Багажная тумба, вешалки, гардеробная, журнальный столик, зеркало, обеденный стол,  стулья, туалетный столик, кровать, шкаф-купе'
    },
    {
      iconSrc: 'assets/sprites/icons.svg#ico-internet',
      iconWidth: 24,
      iconHeight: 24,
      title: 'Интернет и телефония',
      text: 'Wi-Fi, интернет, телефон, внутренний телефон'
    },
    {
      iconSrc: 'assets/sprites/icons.svg#ico-lamp',
      iconWidth: 24,
      iconHeight: 24,
      title: 'электроника',
      text: 'Микроволновая печь, настольные лампы, плита для приготовления пищи, светильник, система безопасности, сплит- система, утюг, фен, холодильник'
    },
    {
      iconSrc: 'assets/sprites/icons.svg#ico-bathroom',
      iconWidth: 24,
      iconHeight: 24,
      title: 'Ванная комната',
      text: 'Банные полотенца, банные принадлежности, раковина, санузел, туалет, туалетные средства, унитаз'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
