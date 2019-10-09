import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAddMinusComponent } from './guest-add-minus.component';

describe('GuestAddMinusComponent', () => {
  let component: GuestAddMinusComponent;
  let fixture: ComponentFixture<GuestAddMinusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestAddMinusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestAddMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
