import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageRecommendationsComponent } from './homepage-recommendations.component';

describe('HomepageRecommendationsComponent', () => {
  let component: HomepageRecommendationsComponent;
  let fixture: ComponentFixture<HomepageRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageRecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
