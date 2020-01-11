import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { RoomCardComponent } from './components/cards/room-card/room-card.component';
import { ServiceCardComponent } from './components/cards/service-card/service-card.component';
import { EventCardComponent } from './components/cards/event-card/event-card.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, HeaderMenuComponent, BookingFormComponent, RoomCardComponent, ServiceCardComponent, EventCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FooterComponent,
    HeaderComponent,
    HeaderMenuComponent,
    BookingFormComponent,
    RoomCardComponent,
    ServiceCardComponent,
    EventCardComponent
  ]
})
export class SharedModule { }
