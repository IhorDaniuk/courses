import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '@core/components/header/header.component';
import { FooterComponent } from '@core/components//footer/footer.component';
import { CourseComponent } from '@core/components/course/course.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [HeaderComponent, FooterComponent, CourseComponent]
})
export class CoreModule { }