import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectAvatarComponent } from './architect-avatar.component';

describe('ArchitectAvatarComponent', () => {
  let component: ArchitectAvatarComponent;
  let fixture: ComponentFixture<ArchitectAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
