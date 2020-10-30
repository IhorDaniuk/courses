import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchModule } from '@shared/search/search.module';
import { CoursesVideoComponent } from '@courses/components/courses-video/courses-video.component';
import { CoursesCardComponent } from './components/courses-card/courses-card/courses-card.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [ CoursesVideoComponent, CoursesCardComponent, CourseFormComponent],
  imports: [
    SearchModule,
    CommonModule, 
    FontAwesomeModule,   
  ],
  providers: [ CourseService ]
})
export class CoursesModule { }
