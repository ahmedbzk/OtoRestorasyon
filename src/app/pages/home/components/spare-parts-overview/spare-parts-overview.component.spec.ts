import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartsOverviewComponent } from './spare-parts-overview.component';

describe('SparePartsOverviewComponent', () => {
  let component: SparePartsOverviewComponent;
  let fixture: ComponentFixture<SparePartsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparePartsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SparePartsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
