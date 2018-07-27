import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import * as Factory from 'factory.ts';
import { RichLink } from '../../models/rich-link';
import { RichLinkGridComponent } from './rich-link-grid.component';

@Component({
  template:
    '<app-rich-link-grid [richLinks]="getLinks()" (gridBoxClicked)="goToUrl($event)"></app-rich-link-grid>',
})
class HostComponent {
  @ViewChild(RichLinkGridComponent) testedComponent: RichLinkGridComponent;
  getLinks(): RichLink[] {
    return [];
  }
  goToUrl(): void {}
}

describe('RichLinkGridComponent', () => {
  let hostComponent: HostComponent;
  let hostFixture: ComponentFixture<HostComponent>;
  let richLinkFactory: Factory.Factory<RichLink>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RichLinkGridComponent, HostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(HostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();

    richLinkFactory = Factory.makeFactory<RichLink>({
      url: Factory.each(i => '/policeforce' + i),
      imageUrl: Factory.each(i => '/policeforce' + i + '.jpg'),
      text: Factory.each(i => 'force' + i),
    });
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });

  describe('boxes in the grid', () => {
    let boxes: DebugElement[];
    let expectedLinks: RichLink[];

    beforeEach(() => {
      expectedLinks = richLinkFactory.buildList(4);
      spyOn(hostComponent, 'getLinks').and.returnValue(expectedLinks);

      hostFixture.detectChanges();

      boxes = hostFixture.debugElement.queryAll(By.css('.box'));
    });

    it('should be generated from an input list of RichLinks', () => {
      expect(boxes.length).toBe(4);
    });

    it(`should emit an event containing the url specified in its RichLink`, () => {
      spyOn(hostComponent, 'goToUrl').and.stub();

      const expectedUrls: string[] = expectedLinks.map(link => link.url);

      boxes.forEach((box, index) => {
        box.nativeElement.click();

        expect(hostComponent.goToUrl).toHaveBeenCalledWith(expectedUrls[index]);
      });
    });

    it(`should display the text in its RichLink`, () => {
      const expectedTexts: string[] = expectedLinks.map(link => link.text);

      boxes.forEach((box, index) => {
        hostFixture.detectChanges();

        expect(box.nativeNode.innerText).toContain(expectedTexts[index]);
      });
    });
  });
});
