import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatThisMeanComponent } from './what-this-mean.component';

describe('WhatThisMeanComponent', () => {
  let component: WhatThisMeanComponent;
  let fixture: ComponentFixture<WhatThisMeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatThisMeanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatThisMeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
