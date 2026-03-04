import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferancesOverviewComponent } from './referances-overview.component';

describe('ReferancesOverviewComponent', () => {
  let component: ReferancesOverviewComponent;
  let fixture: ComponentFixture<ReferancesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferancesOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferancesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
