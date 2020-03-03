import { Component, OnInit } from '@angular/core';
import { MenuService } from './shared/services/menu.service';
import * as AOS from 'aos';
import { LoadingAnimationService } from './shared/services/loading-animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'vhc';
  routingEnabled: boolean = false;
  showWhiteBlock: boolean = true;
  showTitle: boolean = true;

  constructor(public menu: MenuService, public animationLoading: LoadingAnimationService) {}

  ngOnInit() {
    setTimeout(() => {
      this.animationLoading.animationLoading = false;
    }, 2550);

    setTimeout(() => {
      this.showWhiteBlock = false;
    }, 1800);

    setTimeout(() => {
      this.showTitle = false;
    }, 2200);

    AOS.init({
      once: true
    });
  }

}
