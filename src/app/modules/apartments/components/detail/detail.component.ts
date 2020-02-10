import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {ShortTermRentApartment} from '../../../../shared/contracts/short-term-rent-apartment';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  index: number = 0;
  isFeaturesVisible: boolean = false;
  apartment: ShortTermRentApartment;
  config: SwiperConfigInterface = {
    slidesPerView: 1,
    observer: true,
    observeParents: true
  };

  constructor(public sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit() {
    this.apartment = this.route.snapshot.data['apartment'];
  }

}
