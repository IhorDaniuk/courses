import { Component, DoCheck, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { Course } from '@courses/interfaces/courses.interface';
import { CourseService } from '@courses/course.service';

@Component({
  selector: 'app-courses-video',
  templateUrl: './courses-video.component.html',
  styleUrls: ['./courses-video.component.scss']
})
export class CoursesVideoComponent implements OnInit {  
  public coursesData: Course[];
  public initialCoursesData: Course[];

  public isModalVisible = false;
  public succesSubmit = false;

  public courseEditData: Course;
  
  constructor(private courseService: CourseService,
              private router: Router) {}

  ngOnInit() {
    this.getCourses();
  }

  public onFormDataSubmit(courseData: Course): void {
    courseData.date = new Date().toString();
    this.courseService.updateCourse(courseData).subscribe( () => this.router.navigateByUrl('/coursesvideo'));
    this.courseService.isCreatedCourse$.next(null);
    
  }

  public pressOutSide(): void {
    this.isModalVisible = false;
  }

  public addFormCourse(): void {
    // this.isModalVisible = true;
    this.router.navigateByUrl('/courseform');
  } 
  
  public getCourses(): void {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.coursesData = data;
      this.initialCoursesData = data;
    });
  }

  public onDelete(id: number): void {
    this.courseService.deleteCourses(id.toString()).subscribe(
      () => this.getCourses(),
      (err) => console.error(err),
    )
  }

  public editItem(course: Course): void {
    this.isModalVisible = true;
    this.courseEditData = course;
  }

  public searchedResult(searchExpr: string): void {
    this.coursesData = this.initialCoursesData;
    searchExpr
      ? this.coursesData = this.coursesData.filter(data => data.title.toLowerCase().includes(searchExpr.toLowerCase()))
      : this.coursesData = this.initialCoursesData;
  } 
}
