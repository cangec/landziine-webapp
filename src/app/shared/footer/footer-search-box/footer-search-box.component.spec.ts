import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSearchBoxComponent } from './footer-search-box.component';

describe('FooterSearchBoxComponent', () => {
  let component: FooterSearchBoxComponent;
  let fixture: ComponentFixture<FooterSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
