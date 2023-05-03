import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCoursesPageComponent } from './dashboard-courses-page.component';

describe('DashboardCoursesPageComponent', () => {
  let component: DashboardCoursesPageComponent;
  let fixture: ComponentFixture<DashboardCoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCoursesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
