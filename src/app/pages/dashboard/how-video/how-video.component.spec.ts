import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowVideoComponent } from './how-video.component';

describe('HowVideoComponent', () => {
  let component: HowVideoComponent;
  let fixture: ComponentFixture<HowVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
