import { Router } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { faCalendarAlt, faClock, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Course } from '@courses/interfaces/courses.interface';
import { CourseService } from '@courses/course.service';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.scss']
})

export class CoursesCardComponent  {
  @Input() course: Course;
  @Output() deleteItem: EventEmitter<number> = new EventEmitter();
  @Output() editItem: EventEmitter<Course> = new EventEmitter();
  public faPensil = faPencilAlt;
  public fatrash = faTrash;
  public faClock = faClock;
  public faCalendar = faCalendarAlt;

  constructor(private router: Router, private courseService: CourseService){}
  
  public deleteCardCourses(id: number): void {
    this.deleteItem.emit(id);
  }

  public setDataCourse(course: Course): void {
    this.courseService.setEditCourseData(course);
    this.editItem.emit(course);
  }
}