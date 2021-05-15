import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticQRComponent } from './static-qr.component';

describe('StaticQRComponent', () => {
  let component: StaticQRComponent;
  let fixture: ComponentFixture<StaticQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticQRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
