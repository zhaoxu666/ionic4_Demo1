import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleButtonPage } from './little-button.page';

describe('LittleButtonPage', () => {
  let component: LittleButtonPage;
  let fixture: ComponentFixture<LittleButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleButtonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
