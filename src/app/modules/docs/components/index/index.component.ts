import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import {DocumentGroup} from '../../../../shared/contracts/document-group';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild(PerfectScrollbarComponent, {static: true}) componentRef?: PerfectScrollbarComponent;

  groups: DocumentGroup[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.groups = this.route.snapshot.data['document_groups'];
  }

  scrollToElement(element: string) {
    this.componentRef.directiveRef.scrollToElement(element, null, 300);
  }
  
  onScroll() {
    console.log(this.componentRef.directiveRef.position());
  }

  getChar(index) {
    return String.fromCharCode(65 + index);
  }

}
