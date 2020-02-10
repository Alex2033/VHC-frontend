import { Component, OnInit, Input } from '@angular/core';
import {Service} from '../../../contracts/service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() card: Service;

  constructor() { }

  ngOnInit() {
  }

}
