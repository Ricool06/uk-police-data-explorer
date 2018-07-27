import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RootComponent } from './root.component';
import { By } from '@angular/platform-browser';
import { HomeComponent } from '../home/home.component';
import { routes } from '../../modules/app-routing/app-routing.module';

describe('RootComponent', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(routes) ],
      declarations: [ RootComponent, HomeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a router outlet', () => {
    expect(fixture.debugElement.query(By.css('router-outlet'))).not.toBeNull();
  });
});
