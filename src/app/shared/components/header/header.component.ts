import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages: Array<string> = ['Рус', 'Eng'];
  menuLinks: Array<string> = ['Номера', 'Акции', 'Долгосрочная аренда']

  constructor() { }

  ngOnInit() {
  }

}
