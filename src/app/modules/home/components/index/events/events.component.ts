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
    slidesPerView: 3,
    spaceBetween: 64
  };

  cards: Event[];

  constructor(private route: ActivatedRoute, public responsive: ResponsiveService) { }

  ngOnInit() {
    this.cards = this.route.snapshot.data['events'];

    this.responsive.screen.subscribe((screen) => {
      if (screen === 'md') {
        this.config.spaceBetween = 32;
        this.config.slidesPerView = 'auto';
      }
    });
  }

}
