import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOutSvgComponent } from './sign-out-svg.component';

describe('SignOutSvgComponent', () => {
  let component: SignOutSvgComponent;
  let fixture: ComponentFixture<SignOutSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignOutSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignOutSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
