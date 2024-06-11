import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimersSvgComponent } from './disclaimers-svg.component';

describe('DisclaimersSvgComponent', () => {
  let component: DisclaimersSvgComponent;
  let fixture: ComponentFixture<DisclaimersSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclaimersSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisclaimersSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
