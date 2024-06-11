import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSvgComponent } from './action-svg.component';

describe('ActionSvgComponent', () => {
  let component: ActionSvgComponent;
  let fixture: ComponentFixture<ActionSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
