import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';

import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  public userFirstName = this.serviceUser.user;

  constructor(private router: Router,
              private serviceUser: UserService,
              private notService: NotificationsService,
              ) { }

  ngOnChanges() {
    if(this.userFirstName) {
      this.onSuccess('You have registred!')
    }
  }

  public logOfUser(): void {
    this.serviceUser.user.next(null);
    localStorage.removeItem('user');
    this.router.navigateByUrl('/userLogIn');
  }

  public  onSuccess(message: string): void {
    this.notService.success('Success', message, {
      position: ['bottom', 'right'],
      timeout: 1000,
      animate: 'fade',
      showProgressBar: true
    } )
  }

public onError(message: string): void {
    this.notService.error('Error', message, {
      position: ['bottom', 'right'],
      timeout: 2000,
      animate: 'fade',
      showProgressBar: true
    } )
  }
}
