import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfoActividadComponent } from './page-info-actividad.component';

describe('PageInfoActividadComponent', () => {
  let component: PageInfoActividadComponent;
  let fixture: ComponentFixture<PageInfoActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInfoActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInfoActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
