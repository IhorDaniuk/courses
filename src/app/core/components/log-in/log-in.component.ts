import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '@core/user-service-interface/user-service';
import { UserService } from '@core/user-service/user.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public formGroup: FormGroup; 

  constructor(private  fb: FormBuilder,
              private router: Router,
              private userService: UserService) {this._createLogInForm();}

  ngOnInit(){
    this._createLogInForm();
  }

  
  
  get _firstName() {
    return this.formGroup.get('firstName');
  }

  get _email() {
    return this.formGroup.get('email');
  }
  
  public showCourses(formData: UserData): void {    
    localStorage.setItem('user', JSON.stringify(formData));
    const getlocal =  localStorage.getItem('user');
    console.log(getlocal)

    this.userService.getUser(formData.email).subscribe(data => {
      if(data && getlocal) {
        this.userService.authRiquest = true;
        this.router.navigateByUrl('/coursesvideo');
      }
    })
    this._createLogInForm();     
  }

 

  private _createLogInForm(): void {
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(8), Validators.email] ]});
      }

    }

