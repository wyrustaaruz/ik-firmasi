import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidates-detail',
  templateUrl: './candidates-detail.component.html',
  styleUrls: ['./candidates-detail.component.sass']
})
export class CandidatesDetailComponent implements OnInit {

  // I can use EventEmitter for clean URL
  @Input() private data: any = {};

  // For Upper case first letter
  toUpperFirsLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(
  ) {  }

  ngOnInit() {
  }

}
