import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShwoPdfPage } from './shwo-pdf.page';

describe('ShwoPdfPage', () => {
  let component: ShwoPdfPage;
  let fixture: ComponentFixture<ShwoPdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShwoPdfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShwoPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
