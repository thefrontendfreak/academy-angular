import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDiscussionsComponent } from './user-discussions.component';

describe('UserDiscussionsComponent', () => {
  let component: UserDiscussionsComponent;
  let fixture: ComponentFixture<UserDiscussionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDiscussionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
