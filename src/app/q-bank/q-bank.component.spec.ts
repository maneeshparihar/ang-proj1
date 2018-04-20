import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QBankComponent } from './q-bank.component';

describe('QBankComponent', () => {
  let component: QBankComponent;
  let fixture: ComponentFixture<QBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
