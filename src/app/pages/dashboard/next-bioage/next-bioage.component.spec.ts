import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextBioageComponent } from './next-bioage.component';

describe('NextBioageComponent', () => {
  let component: NextBioageComponent;
  let fixture: ComponentFixture<NextBioageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextBioageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextBioageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
