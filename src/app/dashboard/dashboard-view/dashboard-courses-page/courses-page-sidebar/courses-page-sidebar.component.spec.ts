import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageSidebarComponent } from './courses-page-sidebar.component';

describe('CoursesPageSidebarComponent', () => {
  let component: CoursesPageSidebarComponent;
  let fixture: ComponentFixture<CoursesPageSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPageSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
