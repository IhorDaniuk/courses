import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  public formCourse: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public courseForm(): void {
    this.formCourse = this.fb.group({
      courseTitle: '',
      courseText: '',
    });
  }

}
