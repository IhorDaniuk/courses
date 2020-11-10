import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '@courses/course.service';

import { Course } from '@courses/interfaces/courses.interface';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
  }

  public onFormDataSubmit(courseData: Course): void {
    courseData.date = new Date().toString();
    delete courseData.id;
    this.courseService.isCreatedCourse$.next(null);
    this.courseService.createCourse(courseData).subscribe();
  }

  public onCancel(): void {
    this.router.navigateByUrl('/coursesvideo');
  }

}
