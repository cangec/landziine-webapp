import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeammateComponent } from './add-teammate.component';

describe('AddTeammateComponent', () => {
  let component: AddTeammateComponent;
  let fixture: ComponentFixture<AddTeammateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeammateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeammateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
