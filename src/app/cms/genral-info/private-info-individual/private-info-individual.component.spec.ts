import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateInfoIndividualComponent } from './private-info-individual.component';

describe('PrivateInfoIndividualComponent', () => {
  let component: PrivateInfoIndividualComponent;
  let fixture: ComponentFixture<PrivateInfoIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateInfoIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateInfoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
