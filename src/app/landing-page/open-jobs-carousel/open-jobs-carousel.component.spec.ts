import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenJobsCarouselComponent } from './open-jobs-carousel.component';

describe('OpenJobsCarouselComponent', () => {
  let component: OpenJobsCarouselComponent;
  let fixture: ComponentFixture<OpenJobsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenJobsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenJobsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
