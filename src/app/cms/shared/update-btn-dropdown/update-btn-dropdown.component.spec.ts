import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBtnDropdownComponent } from './update-btn-dropdown.component';

describe('UpdateBtnDropdownComponent', () => {
  let component: UpdateBtnDropdownComponent;
  let fixture: ComponentFixture<UpdateBtnDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBtnDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBtnDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
