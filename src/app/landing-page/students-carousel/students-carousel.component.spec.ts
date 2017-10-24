import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCarouselComponent } from './students-carousel.component';

describe('StudentsCarouselComponent', () => {
  let component: StudentsCarouselComponent;
  let fixture: ComponentFixture<StudentsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
