import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchComponent } from '@shared/search/search.component';
import { PipeDatePipe } from '@shared/pipe/pipe-date.pipe';

@NgModule({
  declarations: [
   SearchComponent,
   PipeDatePipe,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  exports: [ SearchComponent, PipeDatePipe]
})
export class SearchModule { }