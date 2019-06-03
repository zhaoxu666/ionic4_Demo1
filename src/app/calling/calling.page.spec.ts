import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingPage } from './calling.page';

describe('CallingPage', () => {
  let component: CallingPage;
  let fixture: ComponentFixture<CallingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
