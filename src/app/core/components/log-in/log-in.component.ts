import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '@core/interfaces/user.interface';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public formGroup: FormGroup; 

  constructor(
    private  fb: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) {
    this._createLogInForm();            
  }

  ngOnInit(){
    this._createLogInForm();
  }

  get _email() {
    return this.formGroup.get('email');
  }
  
  public showCourses(formData: UserData): void {  
    if(this.formGroup.valid) {
      this.userService.getUser(formData.email ).subscribe(data => {
        if((!data)) {
          return this.userService.authRequest = false;
        } else {
          this.userService.authRequest = true;
          this.router.navigateByUrl('/coursesvideo');         
        }
      })
      this._createLogInForm();  
    }      
  }

  private _createLogInForm(): void {
    this.formGroup = this.fb.group({
      firstName: [''],
      email: ['', [Validators.required, Validators.minLength(8), Validators.email] ]});
    }
}

