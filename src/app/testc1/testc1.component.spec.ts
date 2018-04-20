import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testc1Component } from './testc1.component';

describe('Testc1Component', () => {
  let component: Testc1Component;
  let fixture: ComponentFixture<Testc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
