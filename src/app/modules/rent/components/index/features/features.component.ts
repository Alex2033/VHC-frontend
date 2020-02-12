import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  screen: string;

  constructor(public responsive: ResponsiveService, public modal: ModalService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  scrollToApartments() {
    const element = document.querySelector("#apartments-section");

    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
