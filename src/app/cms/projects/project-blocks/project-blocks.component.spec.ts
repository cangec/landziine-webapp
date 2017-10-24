import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBlocksComponent } from './project-blocks.component';

describe('ProjectBlocksComponent', () => {
  let component: ProjectBlocksComponent;
  let fixture: ComponentFixture<ProjectBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
