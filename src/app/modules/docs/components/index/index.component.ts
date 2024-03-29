import { Component, OnInit } from '@angular/core';
import { DocumentGroup } from '../../../../shared/contracts/document-group';
import { ActivatedRoute } from '@angular/router';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  screen: string;

  groups: DocumentGroup[];

  constructor(private route: ActivatedRoute, public responsive: ResponsiveService) { }

  ngOnInit() {
    this.groups = this.route.snapshot.data['document_groups'];

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  getChar(index) {
    return String.fromCharCode(65 + index);
  }

}
