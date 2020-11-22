import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserData } from '@core/interfaces/user.interface';

export const LOGIN = 'users';
export const COURSES = 'courses';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  public user = new BehaviorSubject<string>((null));
  public authRequest = false;

   constructor(private http: HttpClient) { 
     this.user.next(JSON.parse(localStorage.getItem('user')))
   }

  public getUser(email: string): Observable<UserData[]> {
     const params: HttpParams = new HttpParams().set('email', email);
     return this.http.get<UserData[]>(LOGIN, {params }).pipe(      
      tap(userData =>  {
        localStorage.setItem('user', JSON.stringify(userData[0].firstName))
        this.user.next(userData[0].firstName);
      })
    )
  }
}
 