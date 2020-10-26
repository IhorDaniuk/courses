import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public changeUserLogo: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.changeUserLogo = false;
  }

}
