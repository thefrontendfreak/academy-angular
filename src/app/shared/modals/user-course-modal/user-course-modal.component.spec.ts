import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseModalComponent } from './user-course-modal.component';

describe('UserCourseModalComponent', () => {
  let component: UserCourseModalComponent;
  let fixture: ComponentFixture<UserCourseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
