import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichLinkGridComponent } from './rich-link-grid.component';
import { Component, ViewChild } from '@angular/core';
import { RichLink } from '../../models/rich-link';

import * as Factory from 'factory.ts';
import { By } from '@angular/platform-browser';

@Component({
  template: '<app-rich-link-grid [richLinks]="getLinks()"></app-rich-link-grid>',
})
class HostComponent {
  @ViewChild(RichLinkGridComponent) testedComponent: RichLinkGridComponent;
  getLinks(): RichLink[] { return []; }
}

describe('RichLinkGridComponent', () => {
  let hostComponent: HostComponent;
  let hostFixture: ComponentFixture<HostComponent>;
  let richLinkFactory: Factory.Factory<RichLink>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichLinkGridComponent, HostComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(HostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();

    richLinkFactory = Factory.makeFactory<RichLink>({
      url: Factory.each(i => i + '.com'),
      imageUrl: Factory.each(i => i + '.com/image.jpg'),
    });
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should generate a grid of boxes from an input list of RichLinks', () => {
    const expectedLinks: RichLink[] = richLinkFactory.buildList(4);
    spyOn(hostComponent, 'getLinks').and.returnValue(expectedLinks);

    hostFixture.detectChanges();

    const boxes = hostFixture.debugElement.queryAll(By.css('.box'));

    expect(boxes.length).toBe(4);
  });
});
