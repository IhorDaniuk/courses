import { Component, ElementRef, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  fasearch = faSearch;
  @ViewChild('search', {static: false}) search: ElementRef;
  @Output() searchResult: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngAfterViewInit(): void {

    fromEvent(this.search.nativeElement, 'input')
    .pipe(
      debounceTime(500),
      map((input: InputEvent) => (input.target as HTMLInputElement).value),
      // filter(value => value.length >= 2),
      distinctUntilChanged()
  ).subscribe((res: string) => this.searchResult.emit(res))
  }
}
