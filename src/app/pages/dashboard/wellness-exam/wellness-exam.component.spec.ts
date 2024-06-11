import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessExamComponent } from './wellness-exam.component';

describe('WellnessExamComponent', () => {
  let component: WellnessExamComponent;
  let fixture: ComponentFixture<WellnessExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WellnessExamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WellnessExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
