import { Component, OnInit, ViewChild } from '@angular/core';
import {FormsModule}from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'jasmine-karma';
  public disableNoButton = true;
  public userResponse: string;
  constructor() {}

  ngOnInit() {}

  public sayYes() {
    this.userResponse = 'I am In';
  }
}

