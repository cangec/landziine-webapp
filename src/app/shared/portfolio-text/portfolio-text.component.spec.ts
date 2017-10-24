import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTextComponent } from './portfolio-text.component';

describe('PortfolioTextComponent', () => {
  let component: PortfolioTextComponent;
  let fixture: ComponentFixture<PortfolioTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
