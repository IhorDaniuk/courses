import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '@core/components/header/header.component';
import { FooterComponent } from '@core/components//footer/footer.component';
import { CourseComponent } from './components/course/course.component';

import { UserService } from './user-service/user.service';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthgaurdGuard } from './guard/authgaurd.guard';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CourseComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatMenuModule,
  ],
  providers: [UserService, AuthgaurdGuard ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CourseComponent, 
    LogInComponent,
  ]
})
export class CoreModule { }