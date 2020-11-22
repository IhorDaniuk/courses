import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output, Renderer2 } from '@angular/core';
import { Course } from '@courses/interfaces/courses.interface';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  {
  public faCross = faTimesCircle;
  public addCourse: Course[];

  @Input() modalTitle: string = '';
  @Input() isModalControlVisible: boolean;
  @Output() closeModal = new EventEmitter<void>();

  @Input() modalMessage: string;
  @Output() modalSubmit = new EventEmitter<boolean>();
  @Output() modalCancel = new EventEmitter<boolean>(); 

  constructor( 
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  public onCloseModal(): void {
    this.closeModal.emit();
  }

  public onSubmit(): void {
      this.modalSubmit.emit(true);
  }

  public onCancel(): void {
      this.modalCancel.emit(false);
  }
}
