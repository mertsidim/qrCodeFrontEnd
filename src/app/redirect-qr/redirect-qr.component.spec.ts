import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectQRComponent } from './redirect-qr.component';

describe('RedirectQRComponent', () => {
  let component: RedirectQRComponent;
  let fixture: ComponentFixture<RedirectQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectQRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
