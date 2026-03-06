import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipDesignComponent } from './vip-design.component';

describe('VipDesignComponent', () => {
  let component: VipDesignComponent;
  let fixture: ComponentFixture<VipDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VipDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
