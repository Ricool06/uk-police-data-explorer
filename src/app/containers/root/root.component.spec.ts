import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../modules/app-routing/app-routing.module';
import { RootComponent } from './root.component';
import { SelectPoliceForceComponent } from '../select-police-force/select-police-force.component';
import { MockComponent } from 'ng-mocks';
import { RichLinkGridComponent } from '../../shared/components/rich-link-grid/rich-link-grid.component';

describe('RootComponent', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(routes) ],
      declarations: [
        RootComponent,
        MockComponent(RichLinkGridComponent),
        SelectPoliceForceComponent,
      ],
    }).compileComponents();
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
