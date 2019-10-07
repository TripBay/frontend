import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTopDestinationComponent } from './homepage-top-destination.component';

describe('HomepageTopDestinationComponent', () => {
  let component: HomepageTopDestinationComponent;
  let fixture: ComponentFixture<HomepageTopDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageTopDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTopDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
