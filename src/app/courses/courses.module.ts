import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ModalModule } from '@shared/modal/modal.module';
import { SearchModule } from '@shared/search/search.module';
import { CourseService } from '@courses/course.service';
import { CourseDirective } from './directive/course.directive';
import { CoursesVideoComponent } from '@courses/components/courses-video/courses-video.component';
import { CoursesCardComponent } from '@courses/components/courses-card/courses-card.component';
import { CourseFormComponent } from '@courses/components/course-form/course-form.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';

@NgModule({
  declarations: [ 
    CoursesVideoComponent,
    CoursesCardComponent,
    CourseFormComponent,
    CreateCourseComponent,
    CourseDirective],
  imports: [
    SearchModule,
    CommonModule, 
    FontAwesomeModule, 
    ReactiveFormsModule,
    ModalModule,  
  ],
  providers: [ CourseService]
})
export class CoursesModule { }
