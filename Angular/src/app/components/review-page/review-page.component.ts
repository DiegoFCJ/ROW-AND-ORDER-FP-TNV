import { UserService } from './../../@core/services/user.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MovieAPIService } from 'src/app//@core/services/movie-api.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app//@core/services/auth.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})

export class ReviewPageComponent implements OnInit {

  constructor(
    protected authServ: AuthService,  
    protected movieServ: MovieAPIService, 
    protected userServ: UserService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.authServ.isAuthenticated()) {
      alert("You cannot access this page without permission")
      this.router.navigateByUrl("/sign");
    }
    console.log(this.userServ.saveNewBestScoreOnSpringDb(this.movieServ.rating));
    this.userServ.saveNewBestScoreOnSpringDb(this.movieServ.rating);
  }


}
