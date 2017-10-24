import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenralInfoComponent } from './genral-info.component';

describe('GenralInfoComponent', () => {
  let component: GenralInfoComponent;
  let fixture: ComponentFixture<GenralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenralInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
