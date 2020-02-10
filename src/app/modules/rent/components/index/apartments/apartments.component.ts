import { Component, OnInit } from '@angular/core';
import { LongTermRentApartment } from '../../../../../shared/contracts/long-term-rent-apartment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  apartments: LongTermRentApartment[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.apartments = this.route.snapshot.data['apartments'];
  }

}
