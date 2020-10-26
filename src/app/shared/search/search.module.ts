import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { SearchComponent } from '@shared/search/search.component';


@NgModule({
  declarations: [
   SearchComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  exports: [ SearchComponent]
})
export class SearchModule { }