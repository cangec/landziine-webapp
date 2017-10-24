import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenJobCardComponent } from './open-job-card.component';

describe('OpenJobCardComponent', () => {
  let component: OpenJobCardComponent;
  let fixture: ComponentFixture<OpenJobCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenJobCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
