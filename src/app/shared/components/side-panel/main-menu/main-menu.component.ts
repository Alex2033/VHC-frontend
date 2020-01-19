import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  links: Array<object> = [
    {
      text: 'Номера',
      url: '/apartments'
    },
    {
      text: 'Акции',
      url: ''
    },
    {
      text: 'Долгосрочная аренда',
      url: ''
    },
    {
      text: 'Услуги и сервисы',
      url: ''
    },
    {
      text: 'Мероприятия',
      url: ''
    },
    {
      text: 'Пространства для бизнеса',
      url: ''
    },
    {
      text: 'Доходные программы',
      url: ''
    },
    {
      text: 'Документы',
      url: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
