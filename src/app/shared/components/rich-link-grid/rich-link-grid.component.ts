import { Component, OnInit, Input } from '@angular/core';
import { RichLink } from '../../models/rich-link';

@Component({
  selector: 'app-rich-link-grid',
  templateUrl: './rich-link-grid.component.html',
  styleUrls: ['./rich-link-grid.component.css']
})
export class RichLinkGridComponent implements OnInit {

  @Input() richLinks: RichLink[] = [];

  constructor() { }

  ngOnInit() {
  }

}
