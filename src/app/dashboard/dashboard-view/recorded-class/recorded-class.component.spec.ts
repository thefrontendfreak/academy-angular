import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordedClassComponent } from './recorded-class.component';

describe('RecordedClassComponent', () => {
  let component: RecordedClassComponent;
  let fixture: ComponentFixture<RecordedClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordedClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordedClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
