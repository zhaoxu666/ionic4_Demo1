import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SildesPage } from './sildes.page';

describe('SildesPage', () => {
  let component: SildesPage;
  let fixture: ComponentFixture<SildesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SildesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SildesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
