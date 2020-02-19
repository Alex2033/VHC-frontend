import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {Event} from '../../../../../shared/contracts/event';
import {ActivatedRoute} from '@angular/router';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  config: SwiperConfigInterface = {
    spaceBetween: 64
  };

  cards: Event[];

  constructor(private route: ActivatedRoute, public responsive: ResponsiveService) { }

  ngOnInit() {
    this.cards = this.route.snapshot.data['events'];

    this.responsive.screen.subscribe((screen) => {
      if (screen === 'md') {
        this.config.spaceBetween = 32;
      }

      if (screen !== 'md' && screen !== 'lg' && screen !== 'xl') {
        this.config.slidesPerView = 'auto';
        this.config.spaceBetween = 16;
        this.config.pagination = {
          el: '.events-pagination',
          type: 'bullets'
        }
      } else {
        this.config.slidesPerView = 3;
      }
    });
  }

}
