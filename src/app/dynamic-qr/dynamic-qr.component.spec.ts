import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicQRComponent } from './dynamic-qr.component';

describe('DynamicQRComponent', () => {
  let component: DynamicQRComponent;
  let fixture: ComponentFixture<DynamicQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicQRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
