import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesModalComponent } from './courses-modal.component';

describe('CoursesModalComponent', () => {
  let component: CoursesModalComponent;
  let fixture: ComponentFixture<CoursesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
