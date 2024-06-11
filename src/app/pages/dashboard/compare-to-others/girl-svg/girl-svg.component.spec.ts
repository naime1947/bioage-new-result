import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlSvgComponent } from './girl-svg.component';

describe('GirlSvgComponent', () => {
  let component: GirlSvgComponent;
  let fixture: ComponentFixture<GirlSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GirlSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GirlSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
