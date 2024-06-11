import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproveBioageComponent } from './improve-bioage.component';

describe('ImproveBioageComponent', () => {
  let component: ImproveBioageComponent;
  let fixture: ComponentFixture<ImproveBioageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImproveBioageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImproveBioageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
