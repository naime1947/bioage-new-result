import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResultSvgComponent } from './my-result-svg.component';

describe('MyResultSvgComponent', () => {
  let component: MyResultSvgComponent;
  let fixture: ComponentFixture<MyResultSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyResultSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyResultSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
