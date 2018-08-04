import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RichLink } from '../../models/rich-link';

@Component({
  selector: 'app-rich-link-grid',
  templateUrl: './rich-link-grid.component.html',
  styleUrls: [ './rich-link-grid.component.css' ],
})
export class RichLinkGridComponent implements OnInit {
  @Input()
  richLinks: RichLink[] = [];
  @Output()
  gridBoxClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public onBoxClick(richLink: RichLink): void {
    this.gridBoxClicked.emit(richLink.url);
  }
}
