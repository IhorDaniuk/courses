import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseService } from '@courses/course.service';
import { Course } from '@courses/interfaces/courses.interface';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() submitButtonText: string;
  @Input() isEdit = false;
  @Input() courseData: Course;
  @Output() cancel = new EventEmitter<void>();
  @Output() formData = new EventEmitter<Course>();
  public formCourse: FormGroup;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private router: Router ) {}

  ngOnInit(): void {
    this.courseForm();
  }

  public submitCourse(courseData: Course): void {
    this.formData.emit(courseData);
    this.resetFormData();
  }
  
  public cancelClick(): void {
    this.cancel.emit();
    this.resetFormData();
  }
  
  private courseForm(): void {
    this.formCourse = this.fb.group({
      id: this.courseData && this.courseData.id || '',
      title: this.courseData && this.courseData.title || '',
      description: this.courseData && this.courseData.description || '',
      date: this.courseData && this.courseData.date || '',
      duration: this.courseData && this.courseData.duration || '',
    });
  }

  private resetFormData(): void {
    if (this.isEdit) {
      this.courseService.setEditCourseData(null);
    }
  }
}
