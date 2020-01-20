import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from '../../animations/fade-in-out.animation';
import { ModalService } from '../../services/modal.service';
import { ModalConfiguration } from '../../models/modal-configuration';
import { Router } from '@angular/router';
import { SlideRight } from '../../animations/slide-right';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    fadeInOutAnimation(),
    SlideRight()
  ]
})
export class ModalComponent implements OnInit {

  current: ModalConfiguration;
  
  constructor(public modal: ModalService, private router: Router) {
    this.modal.current.subscribe((configuration: ModalConfiguration) => {
      this.current = configuration;
    });
  }

  ngOnInit() {
  }

}
