import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.scss']
})
export class ApartmentCardComponent implements OnInit {

  @Input() apartment;

  constructor() { }

  ngOnInit() {
  }

}
