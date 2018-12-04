import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUniqueplacesComponent } from './page-uniqueplaces.component';

describe('PageUniqueplacesComponent', () => {
  let component: PageUniqueplacesComponent;
  let fixture: ComponentFixture<PageUniqueplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUniqueplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUniqueplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
