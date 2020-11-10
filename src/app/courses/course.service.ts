import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { COURSES } from '@core/user-service/user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from './interfaces/courses.interface';

export const COURSE = 'courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public editCourse: Course;
  public isCreatedCourse$ = new  BehaviorSubject<string>(null);
  
  constructor(private http: HttpClient) {}

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(COURSE);
  }

  public createCourse(data: Course): Observable<Course> {
    return this.http.post<Course>(COURSE, data);
  }

  public updateCourse(courseData: Course): Observable<Course> {
    const id = courseData.id;
    delete courseData.id;
    return this.http.patch<Course>(`${COURSE}/${id}`, courseData);
  }

  public deleteCourses(id: string): Observable<{}> {
    return this.http.delete<{}>(`${COURSE}/${id}`);
  }

  public setEditCourseData(data: Course): void {
    this.editCourse = data;
  }

  public getEditCourseData(): Course {
    return this.editCourse;
  }



  
} 