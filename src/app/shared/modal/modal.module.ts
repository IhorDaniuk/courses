import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from '@shared/modal/modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  exports: [ModalComponent]
})
export class ModalModule { }