import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollProfileComponent } from './scroll-profile.component';

describe('ScrollProfileComponent', () => {
  let component: ScrollProfileComponent;
  let fixture: ComponentFixture<ScrollProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
