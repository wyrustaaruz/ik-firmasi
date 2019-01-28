import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {CandidatesComponent} from './candidates/candidates.component';
import {HomeComponent} from './home/home.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // starting page
  { path: '**', component: PagenotfoundComponent} // page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
