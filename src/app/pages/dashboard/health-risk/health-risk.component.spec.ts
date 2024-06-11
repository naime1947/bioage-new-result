import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthRiskComponent } from './health-risk.component';

describe('HealthRiskComponent', () => {
  let component: HealthRiskComponent;
  let fixture: ComponentFixture<HealthRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthRiskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
