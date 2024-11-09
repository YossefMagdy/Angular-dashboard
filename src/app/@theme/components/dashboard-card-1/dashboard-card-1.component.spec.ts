import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCard1Component } from './dashboard-card-1.component';

describe('DashboardCard1Component', () => {
  let component: DashboardCard1Component;
  let fixture: ComponentFixture<DashboardCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
