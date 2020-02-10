import { Component, OnInit } from '@angular/core';
import {BusinessSpace} from '../../../../shared/contracts/business-space';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  spaces: BusinessSpace[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.spaces = this.route.snapshot.data['business_spaces'];
  }

}
