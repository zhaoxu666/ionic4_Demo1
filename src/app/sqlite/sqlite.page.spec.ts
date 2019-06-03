import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlitePage } from './sqlite.page';

describe('SqlitePage', () => {
  let component: SqlitePage;
  let fixture: ComponentFixture<SqlitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
