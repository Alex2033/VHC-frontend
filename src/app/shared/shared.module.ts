// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

// components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { ServiceCardComponent } from './components/cards/service-card/service-card.component';
import { EventCardComponent } from './components/cards/event-card/event-card.component';
import { ApartmentCardComponent } from './components/cards/apartment-card/apartment-card.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { MainMenuComponent } from './components/side-panel/main-menu/main-menu.component';
import { ApartmentSliderComponent } from './components/apartment-slider/apartment-slider.component';
import { BusinessSliderComponent } from './components/business-slider/business-slider.component';
import { ModalComponent } from './components/modal/modal.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';

// material modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// plugins
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  loop: true
};

@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent, 
    MainMenuComponent, 
    BookingFormComponent, 
    ServiceCardComponent, 
    EventCardComponent, 
    ApartmentCardComponent, 
    SidePanelComponent,
    ApartmentSliderComponent,
    BusinessSliderComponent,
    ModalComponent,
    FeedbackFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatNativeDateModule,
    MatDatepickerModule,
    SwiperModule,
    PerfectScrollbarModule,
    AngularYandexMapsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FooterComponent,
    HeaderComponent,
    MainMenuComponent,
    BookingFormComponent,
    ApartmentCardComponent,
    ServiceCardComponent,
    EventCardComponent,
    MatDatepickerModule,
    SidePanelComponent,
    SwiperModule,
    PerfectScrollbarModule,
    ApartmentSliderComponent,
    BusinessSliderComponent,
    ModalComponent,
    FeedbackFormComponent,
    AngularYandexMapsModule
  ],
  providers: [
    MatNativeDateModule,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
