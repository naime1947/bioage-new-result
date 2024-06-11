import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareToOthersComponent } from './compare-to-others.component';

describe('CompareToOthersComponent', () => {
  let component: CompareToOthersComponent;
  let fixture: ComponentFixture<CompareToOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareToOthersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompareToOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
