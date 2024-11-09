import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCard2Component } from './dashboard-card-2.component';

describe('DashboardCard2Component', () => {
  let component: DashboardCard2Component;
  let fixture: ComponentFixture<DashboardCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
