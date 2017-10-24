import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenProfileComponent } from './full-screen-profile.component';

describe('FullScreenProfileComponent', () => {
  let component: FullScreenProfileComponent;
  let fixture: ComponentFixture<FullScreenProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScreenProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
