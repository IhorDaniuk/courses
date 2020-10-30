import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, } from '@angular/common/http'; 
import {  Observable } from 'rxjs'; 
import { environment } from '@env';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const paramReq = req.clone({
            url: environment.baseUrl + req.url,
        });
        return next.handle(paramReq);
    }
}