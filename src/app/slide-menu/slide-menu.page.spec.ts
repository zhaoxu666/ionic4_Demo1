import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMenuPage } from './slide-menu.page';

describe('SlideMenuPage', () => {
  let component: SlideMenuPage;
  let fixture: ComponentFixture<SlideMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
