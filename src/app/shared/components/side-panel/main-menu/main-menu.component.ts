import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  links: Array<string> = [
    'Номера',
    'Акции',
    'Долгосрочная аренда',
    'Услуги и сервисы',
    'Мероприятия',
    'Пространства для бизнеса',
    'Доходные программы',
    'Документы',
  ];

  constructor() { }

  ngOnInit() {
  }

}
