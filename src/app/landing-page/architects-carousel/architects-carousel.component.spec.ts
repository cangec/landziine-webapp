import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectsCarouselComponent } from './architects-carousel.component';

describe('ArchitectsCarouselComponent', () => {
  let component: ArchitectsCarouselComponent;
  let fixture: ComponentFixture<ArchitectsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
