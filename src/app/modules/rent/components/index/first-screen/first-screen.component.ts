import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss']
})
export class FirstScreenComponent implements OnInit {
  screen: string;

  constructor(public modal: ModalService, public responsive: ResponsiveService) { }

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
