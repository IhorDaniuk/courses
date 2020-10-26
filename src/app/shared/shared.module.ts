import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseComponent } from './course/course.component';
import { SearchComponent } from './search/search.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
   CourseComponent,
   SearchComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  exports: [CourseComponent, SearchComponent]
})
export class SharedModule { }