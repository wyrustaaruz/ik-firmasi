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

  ngOnInit() {
    this.get_Candidates();
  }
  basHarfBuyut(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  get_Candidates() {
    this.httpClient.get('https://randomuser.me/api?results=10').subscribe(res => {
      console.log(res);
      // @ts-ignore
      this.candidates = res;
    });
  }
}
