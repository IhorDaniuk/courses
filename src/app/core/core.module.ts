import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '@core/components/header/header.component';
import { FooterComponent } from '@core/components//footer/footer.component';
import { CourseComponent } from './components/course/course.component';

import { UserService } from './user-service/user.service';
import { GlobalHttpInterceptor } from './http.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
     UserService,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptor,
      multi: true
    },
    ],
  exports: [HeaderComponent, FooterComponent, CourseComponent]
})
export class CoreModule { }