import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComerciosComponent } from './page-comercios.component';

describe('PageComerciosComponent', () => {
  let component: PageComerciosComponent;
  let fixture: ComponentFixture<PageComerciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComerciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
