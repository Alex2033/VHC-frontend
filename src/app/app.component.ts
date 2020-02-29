import { Component, OnInit } from '@angular/core';
import { MenuService } from './shared/services/menu.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'vhc';
  routingEnabled: boolean = false;

  constructor(public menu: MenuService) {}

  ngOnInit() {
    setTimeout(() => {
      this.routingEnabled = true;
    }, 650);

    AOS.init();
  }

}
