import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRatingComponent } from './add-rating.component';

describe('AddRatingComponent', () => {
  let component: AddRatingComponent;
  let fixture: ComponentFixture<AddRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});