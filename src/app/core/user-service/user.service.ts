import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserData } from '@core/user-service-interface/user-service';

export const LOGIN = 'users';
export const COURSES = 'courses';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userName = new BehaviorSubject<string>(null);
  public authRiquest = false;


   constructor(private http: HttpClient) { }

  public getUser(email: string): Observable<UserData[]> {
    const params: HttpParams = new HttpParams().set('email', email);
    return this.http.get<UserData[]>(LOGIN, {params }).pipe(
      tap(userData => this.userName.next(userData[0].firstName))
    );
  }
}
 