import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  links: Array<object> = [
    {
      text: 'Номера',
      url: '/apartments'
    },
    // {
    //   text: 'Акции',
    //   url: ''
    // },
    {
      text: 'Долгосрочная аренда',
      url: '/rent'
    },
    {
      text: 'Услуги и сервисы',
      url: '/service'
    },
    {
      text: 'Мероприятия',
      url: '/events'
    },
    {
      text: 'Пространства для бизнеса',
      url: '/business'
    },
    {
      text: 'Документы',
      url: '/docs'
    },
    {
      text: 'Контакты',
      url: '/contacts'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
