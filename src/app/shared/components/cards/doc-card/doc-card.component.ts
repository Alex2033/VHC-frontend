import { Component, OnInit, Input } from '@angular/core';
import {Document} from '../../../contracts/document';

@Component({
  selector: 'app-doc-card',
  templateUrl: './doc-card.component.html',
  styleUrls: ['./doc-card.component.scss']
})
export class DocCardComponent implements OnInit {

  @Input() card: Document;

  constructor() { }

  ngOnInit() {
  }

}
