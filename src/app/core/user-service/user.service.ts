import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { UserData } from '@core/user-service-interface/user-service';
import { Observable } from 'rxjs';
import { Course } from '@courses/interfaces/courses.interface';

export const LOGIN = 'users';
export const COURSES = 'courses';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   constructor(private http: HttpClient) { }

  public getUser(email: string): Observable<UserData> {
    const params: HttpParams = new HttpParams().set('email', email);
    return this.http.get<UserData>(LOGIN, {params});
  }

  public getCourses(): Observable<Course[]> {
   return this.http.get<Course[]>(COURSES);
  }

  public deleteCourses(id: string): Observable<{}> {
    return this.http.delete<{}>(`${COURSES}/${id}`);
  }
}
 