import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourse]'
})
export class CourseDirective implements OnInit {
  @Input('date') colorCourse;

  constructor(private render: Renderer2, private element: ElementRef) { }

  ngOnInit() {
    if(this.changeColor(this.colorCourse) < 14) {
      this.render.setStyle(this.element.nativeElement, 'border', '2px solid rgb(48, 182, 221)')
    }  
  }
  
  public changeColor(date: Date): number{
    const newDate = new Date();
    return Math.ceil(Math.abs(new Date(date).getTime() - newDate.getTime()) / (1000 * 3600 * 24));
  }
}


