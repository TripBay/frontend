import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherHotelsComponent } from './other-hotels.component';

describe('OtherHotelsComponent', () => {
  let component: OtherHotelsComponent;
  let fixture: ComponentFixture<OtherHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
