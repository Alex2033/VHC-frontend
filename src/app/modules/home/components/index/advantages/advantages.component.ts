import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import {ApiService} from '../../../../../shared/services/api.service';
import {BookingComData} from '../../../../../shared/contracts/booking-com-data';

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
      title: 'Метро',
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
      title: 'Удобное местоположение',
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
      title: 'Лобби 24/7',
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
      title: 'Ресторан',
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
      title: 'Бар',
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
      title: 'Ванна',
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
      title: 'Паркинг',
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

  bookingComData: BookingComData;

  constructor(public responsive: ResponsiveService, private api: ApiService) {
    this.api.getBookingComData().subscribe(data => {
      this.bookingComData = data;
    })
  }

  ngOnInit() {

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;

      if (screen === 'md' || screen === 'lg' || screen === 'xl') {
        this.config.spaceBetween = 120;
      } else {
        this.config.spaceBetween = 52;
        this.config.pagination = {
          el: '.advantages-pagination',
          type: 'bullets',
        }
      }
    });
  }

  getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }
}
