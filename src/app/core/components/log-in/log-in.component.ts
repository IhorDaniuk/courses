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
   
  }
  
  get _email() {
    return this.formGroup.get('email');
  }
  
  public showCourses(formData: UserData): void {
    this.userService.getUser(formData.email).subscribe(data => {
      if(data) {
        this.router.navigateByUrl('/coursesvideo')
      }
    })
    this._createLogInForm();      
  }

 

  private _createLogInForm(): void {
    this.formGroup = this.fb.group({
      firstName: '',
      lastName: '',
      email: ['', [Validators.required]]
    });
  }
}
