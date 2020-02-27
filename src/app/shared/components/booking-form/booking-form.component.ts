import {Component, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  entryDateValue: Date = new Date();
  departureDateValue: Date = new Date();
  guestsCounter: number = 1;
  apartmentsCounter: number = 1;
  bookingUrl;
  constructor() {
  }

  ngOnInit() {
    this.updateBookingUrl();
  }

  entryDate(event: MatDatepickerInputEvent<Date>) {
    this.entryDateValue = event.value;
  }

  departureDate(event: MatDatepickerInputEvent<Date>) {
    this.departureDateValue = event.value;
  }

  increaseGuestsCounter() {
    this.guestsCounter += 1;
    this.updateBookingUrl();
  }

  decreaseGuestsCounter() {
    if (this.guestsCounter <= 1) {
      return;
    } else {
      this.guestsCounter -= 1;
    }
    this.updateBookingUrl();
  }

  increaseApartmentsCounter() {
    this.apartmentsCounter += 1;
    this.updateBookingUrl();
  }

  decreaseApartmentsCounter() {
    if (this.apartmentsCounter <= 1) {
      return;
    } else {
      this.apartmentsCounter -= 1;
    }
    this.updateBookingUrl();
  }

  checkDates() {
    if (new Date(this.departureDateValue) < new Date(this.entryDateValue)) {
      this.departureDateValue = this.entryDateValue;
    }
    this.updateBookingUrl();
  }

  updateBookingUrl() {
    const hotelId = environment.simpleBookingHotelId;
    const from = this.entryDateValue.getFullYear() + '-' + (this.entryDateValue.getMonth() + 1) + '-' + this.entryDateValue.getDate();
    const to = this.departureDateValue.getFullYear() + '-' + (this.departureDateValue.getMonth() + 1) + '-' + this.departureDateValue.getDate();
    let i = 0;
    const apartmentGuests = [];
    let guestsPerApart = Math.floor(this.guestsCounter / this.apartmentsCounter);
    const addToFirstApart = this.guestsCounter - (guestsPerApart * this.apartmentsCounter);
    while (i < this.apartmentsCounter) {
      let j = 0;
      while (j < guestsPerApart) {
        if(apartmentGuests[i])
        {
          apartmentGuests[i] += ',A';
        } else {
          apartmentGuests[i] = 'A';
        }
        j++;
      }
      i++;
    }
    if(addToFirstApart) {
      i = 0;
      while(i < addToFirstApart) {
        if(apartmentGuests[0])
        {
          apartmentGuests[0] += ',A';
        } else {
          apartmentGuests[0] = 'A';
        }
        i++;
      }
    }
    const guestsString = apartmentGuests.join('|');
    this.bookingUrl = `https://www.simplebooking.it/ibe/search?hid=${hotelId}&lang=RU&cur=RUB#/q&guests=${guestsString}&in=${from}&out=${to}&coupon=`;
  }
}
