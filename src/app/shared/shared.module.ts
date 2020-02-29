import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { ServiceCardComponent } from './components/cards/service-card/service-card.component';
import { EventCardComponent } from './components/cards/event-card/event-card.component';
import { ApartmentCardComponent } from './components/cards/apartment-card/apartment-card.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ApartmentSliderComponent } from './components/apartment-slider/apartment-slider.component';
import { BusinessSliderComponent } from './components/business-slider/business-slider.component';
import { ModalComponent } from './components/modal/modal.component';
import { ApartmentViewRequestComponent } from './components/apartment-view-request/apartment-view-request.component';
import { DocCardComponent } from './components/cards/doc-card/doc-card.component';
import { ApartmentBlockComponent } from './components/apartment-block/apartment-block.component';
import { BusinessSpaceRequestComponent } from './components/business-space-request/business-space-request.component';
import { TextComponent } from './components/controls/text/text.component';
import { CheckboxComponent } from './components/controls/checkbox/checkbox.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { ExtensionPipe } from './pipes/extension.pipe';
import { ParagraphsPipe } from './pipes/paragraphs.pipe';
import { ResponsiveImageComponent } from './components/responsive-image/responsive-image.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormErrorsDirective } from './directives/form-errors.directive';
import { ErrorMessageComponent } from './components/controls/shared/error-message/error-message.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ClickOutsideModule } from 'ng-click-outside';
import { MobileInnerSliderComponent } from './components/mobile-inner-slider/mobile-inner-slider.component';
import { MobileApartmentCardComponent } from './components/mobile-apartment-card/mobile-apartment-card.component';
import { MobileBusinessCardComponent } from './components/mobile-business-card/mobile-business-card.component';
import { MobileApartmentBlockComponent } from './components/mobile-apartment-block/mobile-apartment-block.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
};

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  loop: false
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
    ApartmentViewRequestComponent,
    TextComponent,
    CheckboxComponent,
    DocCardComponent,
    ApartmentBlockComponent,
    ExtensionPipe,
    ParagraphsPipe,
    BusinessSpaceRequestComponent,
    ResponsiveImageComponent,
    FormErrorsDirective,
    ErrorMessageComponent,
    MobileInnerSliderComponent,
    MobileApartmentCardComponent,
    MobileBusinessCardComponent,
    MobileApartmentBlockComponent
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
    AngularYandexMapsModule,
    LazyLoadImageModule,
    ClickOutsideModule
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
    ApartmentViewRequestComponent,
    AngularYandexMapsModule,
    DocCardComponent,
    ApartmentBlockComponent,
    ExtensionPipe,
    ParagraphsPipe,
    BusinessSpaceRequestComponent,
    ResponsiveImageComponent,
    LazyLoadImageModule,
    FormErrorsDirective,
    ErrorMessageComponent,
    ClickOutsideModule,
    MobileInnerSliderComponent,
    MobileApartmentCardComponent,
    MobileBusinessCardComponent,
    MobileApartmentBlockComponent
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
export class SharedModule {
}
