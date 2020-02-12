import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {Service} from '../../../../../shared/contracts/service';
import {ActivatedRoute} from '@angular/router';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  config: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 64
  };

  cards: Service[];

  constructor(private route: ActivatedRoute, private responsive: ResponsiveService) {
  }

  ngOnInit() {
    this.cards = this.route.snapshot.data['services'];

    this.responsive.screen.subscribe((screen) => {
      if (screen === 'md') {
        this.config.spaceBetween = 32;
        this.config.slidesPerView = 'auto';
      }
    });
  }

}
