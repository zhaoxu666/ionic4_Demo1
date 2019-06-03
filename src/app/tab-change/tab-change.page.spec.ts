import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabChangePage } from './tab-change.page';

describe('TabChangePage', () => {
  let component: TabChangePage;
  let fixture: ComponentFixture<TabChangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabChangePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
