import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import {Event} from '../../../../shared/contracts/event';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @ViewChild(PerfectScrollbarComponent, {static: true}) componentRef?: PerfectScrollbarComponent;
  screen: string;
  months = {};

  config: SwiperConfigInterface = {
    slidesPerView: 'auto'
  };

  constructor(private route: ActivatedRoute, public responsive: ResponsiveService) { }

  ngOnInit() {
    const events = this.route.snapshot.data['events'].sort((a, b) => {
      return a.startedAt - b.startedAt;
    });

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;

      if (screen === 'md' || screen === 'lg' || screen === 'xl') {
        this.config.spaceBetween = 32;
      } else {
        this.config.spaceBetween = 16;
        this.config.pagination = {
          el: '.events-pagination',
          type: 'bullets',
        }
      }
    });

    events.map(event => {
      const date = new Date(event.startedAt * 1000);
      if(!this.months[date.getMonth()]) {
        this.months[date.getMonth()] = [];
      }
      this.months[date.getMonth()].push(event);
    });
    console.log(this.months);
  }

  scrollToElement(element: string) {
    this.componentRef.directiveRef.scrollToElement(element, null, 300);
  }

  getMonthName(index) {
    const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ];
    return months[index];
  }
}
