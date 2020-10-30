import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from '@core/components/log-in/log-in.component';
import { CourseFormComponent } from '@courses/components/course-form/course-form.component';
import { CoursesVideoComponent } from './courses/components/courses-video/courses-video.component';

const routes: Routes = [
  { path: 'userLogIn', component: LogInComponent},
  { path: 'coursesvideo', component: CoursesVideoComponent },
  { path: 'courseform', component: CourseFormComponent}
  // { path: '', component: AppComponent },
  // добавить "" и ** пути

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
