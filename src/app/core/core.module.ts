import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { HeaderComponent } from '@core/components/header/header.component';
import { UserService } from '@core/services/user.service';
import { LogInComponent } from '@core/components/log-in/log-in.component';
import { AuthgaurdGuard } from '@core/guard/authgaurd.guard';


@NgModule({
  declarations: [
    HeaderComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [UserService, AuthgaurdGuard ],
  exports: [
    HeaderComponent,
    LogInComponent,
  ]
})
export class CoreModule { }