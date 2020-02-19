import { Component, OnInit } from '@angular/core';
import {ShortTermRentApartment} from '../../../../../shared/contracts/short-term-rent-apartment';
import {ActivatedRoute} from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  screen: string;
  apartments: ShortTermRentApartment[];

  config: SwiperConfigInterface;

  constructor(private route: ActivatedRoute, public responsive: ResponsiveService) { }

  ngOnInit() {
    
    this.apartments = this.route.snapshot.data['apartments'];

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;

      if (screen !== 'md' && screen !== 'lg' && screen !== 'xl') {
        this.config = {
          slidesPerView: 1,
          observer: true,
          observeParents: true,
          pagination: {
            el: '.apartments-pagination',
            type: 'bullets',
          }
        };
      } 
    });
  }

}
