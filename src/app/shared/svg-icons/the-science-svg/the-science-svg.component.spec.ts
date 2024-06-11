import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheScienceSvgComponent } from './the-science-svg.component';

describe('TheScienceSvgComponent', () => {
  let component: TheScienceSvgComponent;
  let fixture: ComponentFixture<TheScienceSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheScienceSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheScienceSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
