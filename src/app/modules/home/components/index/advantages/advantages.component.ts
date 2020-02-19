import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {
  screen: string;

  config: SwiperConfigInterface = {
    slidesPerView: 'auto',
    spaceBetween: 140,
    observer: true,
    observeParents: true
  };

  icons: Array<object> = [
    { 
      src: 'assets/sprites/icons.svg#ico-subway', 
      size: {
        desktop: {
          width: 41, 
          height: 49
        },
        mobile: {
          width: 23.43, 
          height: 28
        }
      }
    },
    { 
      src: 'assets/sprites/icons.svg#ico-location', 
      size: {
        desktop: {
          width: 59, 
          height: 54
        },
        mobile: {
          width: 33.71, 
          height: 30.86
        }
      }
    },
    { 
      src: 'assets/sprites/icons.svg#24',
      size: {
        desktop: {
          width: 80, 
          height: 28
        },
        mobile: {
          width: 45.71, 
          height: 16
        }
      }
    },
    { 
      src: 'assets/sprites/icons.svg#ico-restraurant',
      size: {
        desktop: {
          width: 46, 
          height: 46
        },
        mobile: {
          width: 26.29, 
          height: 25.74
        }
      }
    },
    { 
      src: 'assets/sprites/icons.svg#ico-bar', 
      size: {
        desktop: {
          width: 43, 
          height: 56
        },
        mobile: {
          width: 23,
          height: 36
        }
      }
    },
    { 
      src: 'assets/sprites/icons.svg#ico-wash', 
      size: {
        desktop: {
          width: 56, 
          height: 40
        },
        mobile: {
          width: 36,
          height: 20
        }
      }
    },
    { 
      src: 'assets/sprites/icons.svg#ico-parking', 
      size: {
        desktop: {
          width: 47.6, 
          height: 38.43
        },
        mobile: {
          width: 27.6,
          height: 18.43
        }
      }
    },
  ];

  constructor(public responsive: ResponsiveService) { }

  ngOnInit() {

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;

      if (screen === 'md' || screen === 'lg' || screen === 'xl') {
        this.config.spaceBetween = 140;
      } else {
        this.config.spaceBetween = 52;
        this.config.pagination = {
          el: '.advantages-pagination',
          type: 'bullets',
        }
      }
    });
  }
}