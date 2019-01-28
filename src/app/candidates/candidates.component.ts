import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.sass']
})
export class CandidatesComponent implements OnInit {

  private candidates  = [];
  constructor(private httpClient: HttpClient) {}
  // object for pass values to candidate detail
  object: any;
  // Controller for show and hide candidates-detail
  candidatescntrl = false;

  ngOnInit() {
    // using for Fetch Json
    this.get_Candidates();
  }
  toUpperFirsLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  get_Candidates() {
    // Fetching Json and subscribe object
    this.httpClient.get('https://randomuser.me/api?results=10').subscribe(res => {
      // @ts-ignore
      this.candidates = res; // object to array
    });
  }
  detail(i) {
    // Candidates-detail shown and hide candidates.
    this.candidatescntrl = true;
    // selected index item pass Candidate-Detail component.
    this.object = this.candidates['results'][i];
  }
}
