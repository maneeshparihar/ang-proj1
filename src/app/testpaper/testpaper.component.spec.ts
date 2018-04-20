import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpaperComponent } from './testpaper.component';

describe('TestpaperComponent', () => {
  let component: TestpaperComponent;
  let fixture: ComponentFixture<TestpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
