import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from '@core/components/log-in/log-in.component';
import { AuthgaurdGuard } from '@core/guard/authgaurd.guard';
import { HomeComponent } from '@app/home/components/home.component';
import { CreateCourseComponent } from '@courses/components/create-course/create-course.component';
import { CoursesVideoComponent } from './courses/components/courses-video/courses-video.component';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'userLogIn', component: LogInComponent},
  { path: 'home', component: HomeComponent},
  { path: 'coursesvideo', component: CoursesVideoComponent, 
    canActivate: [AuthgaurdGuard],
  },
  { path: 'courseform', component: CreateCourseComponent,
    canActivate: [AuthgaurdGuard],
},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
