import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDesignComponent } from './bus-design.component';

describe('BusDesignComponent', () => {
  let component: BusDesignComponent;
  let fixture: ComponentFixture<BusDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
