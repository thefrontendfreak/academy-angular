import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProgressPageComponent } from './dashboard-progress-page.component';

describe('DashboardProgressPageComponent', () => {
  let component: DashboardProgressPageComponent;
  let fixture: ComponentFixture<DashboardProgressPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProgressPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProgressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
