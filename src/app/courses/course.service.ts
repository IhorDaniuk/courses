import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { COURSES } from '@core/user-service/user.service';

export const COURSE = 'courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {}

  // public renameCourses(id: string) {
  //   return this.http.put(`${COURSE}/${id}, {
  //     title: string;
  //     description: string;
  //   });
  // }
}
