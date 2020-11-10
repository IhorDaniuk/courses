import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@core/user-service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public userFirstName = this.serviceUser.userName;
  public userLogOf: boolean = false;

  constructor(private router: Router,
              private serviceUser: UserService, ) { }

  public logOfUser(): void {
    this.serviceUser.userName.next(null);
    this.router.navigateByUrl('/userLogIn');
  }
}
