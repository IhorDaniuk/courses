import { Component, EventEmitter, Input, Output } from '@angular/core';

import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Course } from '@courses/interfaces/courses.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.scss']
})
export class CoursesCardComponent  {
  @Input() course: Course;
  @Output() deleteItem: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router){}
  
  public faPensil = faPencilAlt;
  public fatrash = faTrash;

  public deleteCardCourses(id: number): void {
    this.deleteItem.emit(id)
  }

  public openModalWindow(): void {
    this.router.navigateByUrl('/courseform');
  }
}