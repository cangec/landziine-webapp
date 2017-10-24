import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosCarouselComponent } from './studios-carousel.component';

describe('StudiosCarouselComponent', () => {
  let component: StudiosCarouselComponent;
  let fixture: ComponentFixture<StudiosCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiosCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
