import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MottoOverviewComponent } from './motto-overview.component';

describe('MottoOverviewComponent', () => {
  let component: MottoOverviewComponent;
  let fixture: ComponentFixture<MottoOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MottoOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MottoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
