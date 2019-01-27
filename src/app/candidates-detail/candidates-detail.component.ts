import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidates-detail',
  templateUrl: './candidates-detail.component.html',
  styleUrls: ['./candidates-detail.component.sass']
})
export class CandidatesDetailComponent implements OnInit {
  private gender  = '';
  private email  = '';


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit() {
    this.gender = this.route.snapshot.paramMap.get('gender');
    this.email = this.route.snapshot.paramMap.get('email');
  }

  gotoCandidates() {
    this.router.navigate(['/candidates']);
  }
}
