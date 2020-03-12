import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  screen: string;
  languages: Array<string> = ['Рус', 'Eng'];
  menuLinks: Array<object> = [
    {
      text: 'Номера',
      url: 'apartments'
    },
    // {
    //   text: 'Акции',
    //   url: 'stocks'
    // },
    {
      text: 'Долгосрочная аренда',
      url: 'rent'
    },
  ]

  constructor(public responsive: ResponsiveService, public menu: MenuService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  rofl() {
    console.log('object');
  }

}
