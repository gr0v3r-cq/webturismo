import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavActivitisComponent } from './nav-activitis.component';

describe('NavActivitisComponent', () => {
  let component: NavActivitisComponent;
  let fixture: ComponentFixture<NavActivitisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavActivitisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavActivitisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
