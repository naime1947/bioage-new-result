import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeGapBannerComponent } from './age-gap-banner.component';

describe('AgeGapBannerComponent', () => {
  let component: AgeGapBannerComponent;
  let fixture: ComponentFixture<AgeGapBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeGapBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgeGapBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
