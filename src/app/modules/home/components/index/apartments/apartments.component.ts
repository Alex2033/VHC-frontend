import { Component, OnInit } from '@angular/core';
import {ShortTermRentApartment} from '../../../../../shared/contracts/short-term-rent-apartment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  apartments: ShortTermRentApartment[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.apartments = this.route.snapshot.data['apartments'];
  }

}
