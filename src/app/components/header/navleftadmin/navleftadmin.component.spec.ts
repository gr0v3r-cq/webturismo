import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavleftadminComponent } from './navleftadmin.component';

describe('NavleftadminComponent', () => {
  let component: NavleftadminComponent;
  let fixture: ComponentFixture<NavleftadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavleftadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavleftadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
