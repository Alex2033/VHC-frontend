import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

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

  constructor() { }

  ngOnInit() {
  }

  entryDate(event: MatDatepickerInputEvent<Date>) {
    this.entryDateValue = event.value;
  }

  departureDate(event: MatDatepickerInputEvent<Date>) {
    this.departureDateValue = event.value;
  }

  increaseGuestsCounter() {
    this.guestsCounter += 1;
  }

  decreaseGuestsCounter() {
    if (this.guestsCounter <= 1) {
      return;
    } else {
      this.guestsCounter -= 1;
    }
  }

  increaseApartmentsCounter() {
    this.apartmentsCounter += 1;
  }

  decreaseApartmentsCounter() {
    if (this.apartmentsCounter <= 1) {
      return;
    } else {
      this.apartmentsCounter -= 1;
    }
  }
}
