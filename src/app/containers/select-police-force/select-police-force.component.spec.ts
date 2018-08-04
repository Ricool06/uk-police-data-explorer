/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { SelectPoliceForceComponent } from './select-police-force.component';
import { MockComponent } from 'ng-mocks';
import { RichLinkGridComponent } from '../../shared/components/rich-link-grid/rich-link-grid.component';

describe('SelectPoliceForceComponent', () => {
  let component: SelectPoliceForceComponent;
  let fixture: ComponentFixture<SelectPoliceForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockComponent(RichLinkGridComponent),
        SelectPoliceForceComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPoliceForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain one RichLinkGridComponent', () => {
    const allRichLinkGrids: DebugElement[] = fixture.debugElement.queryAll(
      By.css('app-rich-link-grid')
    );

    expect(allRichLinkGrids.length).toBe(1);
  });
});
