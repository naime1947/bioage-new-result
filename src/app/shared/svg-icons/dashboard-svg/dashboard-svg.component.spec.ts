import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSvgComponent } from './dashboard-svg.component';

describe('DashboardSvgComponent', () => {
  let component: DashboardSvgComponent;
  let fixture: ComponentFixture<DashboardSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
