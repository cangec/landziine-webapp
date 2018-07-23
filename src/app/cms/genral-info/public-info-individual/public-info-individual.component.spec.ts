import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicInfoIndividualComponent } from './public-info-individual.component';

describe('PublicInfoIndividualComponent', () => {
  let component: PublicInfoIndividualComponent;
  let fixture: ComponentFixture<PublicInfoIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicInfoIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicInfoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
