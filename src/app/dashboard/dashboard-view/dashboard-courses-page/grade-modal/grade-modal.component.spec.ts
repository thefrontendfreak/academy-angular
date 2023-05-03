import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeModalComponent } from './grade-modal.component';

describe('GradeModalComponent', () => {
  let component: GradeModalComponent;
  let fixture: ComponentFixture<GradeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
