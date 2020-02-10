import { Component, OnInit } from '@angular/core';
import {ShortTermRentApartment} from '../../../../shared/contracts/short-term-rent-apartment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  apartments: ShortTermRentApartment[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.apartments = this.route.snapshot.data['apartments'];
  }

}
