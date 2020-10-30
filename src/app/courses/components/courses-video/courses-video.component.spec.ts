import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesVideoComponent } from './courses-video.component';

describe('CoursesVideoComponent', () => {
  let component: CoursesVideoComponent;
  let fixture: ComponentFixture<CoursesVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
