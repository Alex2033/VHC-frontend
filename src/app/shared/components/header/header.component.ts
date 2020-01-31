import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  languages: Array<string> = ['Рус', 'Eng'];
  menuLinks: Array<object> = [
    {
      text: 'Номера',
      url: 'apartments'
    },
    {
      text: 'Акции',
      url: 'stocks'
    },
    {
      text: 'Долгосрочная аренда',
      url: 'rent'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
