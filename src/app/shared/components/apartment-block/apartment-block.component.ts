import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-apartment-block',
  templateUrl: './apartment-block.component.html',
  styleUrls: ['./apartment-block.component.scss']
})
export class ApartmentBlockComponent implements OnInit {

  @Input() apartment;

  months: number = 1;

  constructor(public modal: ModalService) { }

  ngOnInit() {
  }

  increaseMonths() {
    this.months += 1;
  }

  decreaseMonths() {
    if (this.months <= 1) {
      return;
    } else {
      this.months -= 1;
    }
  }

}
