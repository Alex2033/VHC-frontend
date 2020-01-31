import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss']
})
export class FirstScreenComponent implements OnInit {

  constructor(public modal: ModalService) { }

  ngOnInit() {
  }

  scrollToApartments() {
    const element = document.querySelector("#apartments-section");

    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
