import { Component, OnInit, Input } from '@angular/core';
import {ShortTermRentApartment} from '../../../contracts/short-term-rent-apartment';

@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.scss']
})
export class ApartmentCardComponent implements OnInit {

  @Input() apartment: ShortTermRentApartment;

  constructor() { }

  ngOnInit() {
  }

}
