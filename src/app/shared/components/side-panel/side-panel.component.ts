import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  screen: string;

  constructor(public menu: MenuService, private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
