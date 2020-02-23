import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-mobile-inner-slider',
  templateUrl: './mobile-inner-slider.component.html',
  styleUrls: ['./mobile-inner-slider.component.scss']
})
export class MobileInnerSliderComponent implements OnInit {
  @Input() content;

  screen: string;
  config: SwiperConfigInterface = {
    slidesPerView: 'auto'
  };

  constructor(public responsive: ResponsiveService) { }

  ngOnInit(): void {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;

      if (screen === 'md' || screen === 'lg' || screen === 'xl') {
        this.config.spaceBetween = 32;
      } else {
        this.config.spaceBetween = 16;
        this.config.pagination = {
          el: '.slider-info',
          type: 'bullets',
        }
      }
    });
  }

}
