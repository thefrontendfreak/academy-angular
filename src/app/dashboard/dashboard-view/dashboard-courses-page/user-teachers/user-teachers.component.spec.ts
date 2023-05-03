import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTeachersComponent } from './user-teachers.component';

describe('UserTeachersComponent', () => {
  let component: UserTeachersComponent;
  let fixture: ComponentFixture<UserTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
