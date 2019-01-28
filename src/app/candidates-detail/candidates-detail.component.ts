import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidates-detail',
  templateUrl: './candidates-detail.component.html',
  styleUrls: ['./candidates-detail.component.sass']
})
export class CandidatesDetailComponent implements OnInit {
  private gender  = '';
  private title = '';
  private first = '';
  private last = '';
  private email  = '';
  private cell  = '';
  private thumbnail  = '';


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit() {
    this.gender = this.route.snapshot.paramMap.get('gender');
    this.title = this.route.snapshot.paramMap.get('title');
    this.first = this.route.snapshot.paramMap.get('first');
    this.last = this.route.snapshot.paramMap.get('last');
    this.email = this.route.snapshot.paramMap.get('email');
    this.cell = this.route.snapshot.paramMap.get('cell');
    this.thumbnail = this.route.snapshot.paramMap.get('thumbnail');
  }

  gotoCandidates() {
    this.router.navigate(['/candidates']);
  }
}
