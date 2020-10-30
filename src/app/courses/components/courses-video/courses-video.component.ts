import { Component, OnInit } from '@angular/core';


import { Course } from '@app/courses/interfaces/courses.interface';
import { UserService } from '@core/user-service/user.service';

@Component({
  selector: 'app-courses-video',
  templateUrl: './courses-video.component.html',
  styleUrls: ['./courses-video.component.scss']
})
export class CoursesVideoComponent implements OnInit {  
  public coursesData: Course[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getCourses();
  }

  
  public getCourses( ): void {
    this.userService.getCourses().subscribe((data: Course[]) => this.coursesData = data);
}
public onDelete(id: number): void {
  this.userService.deleteCourses(id.toString()).subscribe(() => this.getCourses( ) )
  
}
}
