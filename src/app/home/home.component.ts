import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title = 'Saha BT Human Resources App';
  about = 'About Us';
  home = 'Home';
  candidates = 'Candidates';
  candidatescntrl = false;
  ngOnInit() {
  }

}
