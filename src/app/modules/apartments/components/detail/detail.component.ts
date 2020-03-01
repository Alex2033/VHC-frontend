import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ShortTermRentApartment } from '../../../../shared/contracts/short-term-rent-apartment';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  screen: string;
  tabletIndex: number = 0;
  featureIndex: number = 0;
  isBooked: boolean = false;
  isFeaturesVisible: boolean = false;
  apartment: ShortTermRentApartment;
  config: SwiperConfigInterface = {
    slidesPerView: 1,
    observer: true,
    observeParents: true
  };

  infoblocks: SwiperConfigInterface = {
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    spaceBetween: 8
  };

  mobileFeatures: SwiperConfigInterface = {
    slidesPerView: 1,
    observer: true,
    observeParents: true
  };

  constructor(
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    public responsive: ResponsiveService
  ) { }

  ngOnInit() {
    this.apartment = this.route.snapshot.data['apartment'];
    this.apartment.features = this.apartment.features.map(feature => {
      feature.iconData = this.sanitizer.bypassSecurityTrustHtml(feature.iconData);
      return feature;
    });
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;

      if (screen !== 'md' && screen !== 'lg' && screen !== 'xl') {
        this.mobileFeatures.pagination = {
          el: '.mobile-features-pagination',
          type: 'bullets'
        }
      }
    });
  }

}
