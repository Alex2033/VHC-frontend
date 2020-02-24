import { Component, OnInit } from '@angular/core';
import {ShortTermRentApartment} from '../../../../shared/contracts/short-term-rent-apartment';
import {ActivatedRoute} from '@angular/router';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  apartments: ShortTermRentApartment[];

  screen: string;
  images: Array<string> = [
    'assets/images/apartments/apartment-1.jpg',
    'assets/images/apartments/apartment-2.jpg',
    'assets/images/apartments/apartment-3.jpg',
    'assets/images/apartments/apartment-4.jpg',
  ];

  constructor(private route: ActivatedRoute, public responsive: ResponsiveService) { }

  ngOnInit() {
    this.apartments = this.route.snapshot.data['apartments'];

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
