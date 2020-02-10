import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../../../contracts/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() card: Event;

  constructor() { }

  ngOnInit() {
  }

}
