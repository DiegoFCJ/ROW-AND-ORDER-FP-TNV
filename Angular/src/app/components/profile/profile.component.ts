import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFull, User } from 'src/app/models/user';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieAPIService } from 'src/app/@core/services/movie-api.service';

@Component({
  selector: 'tnv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: Partial<UserFull> = {};

  constructor(protected authService: AuthService, private router: Router, protected movieApiSer: MovieAPIService) {}

  ngOnInit(): void {

     if (!this.authService.isAuthenticated()) {
      alert("non puoi accedere al tuo pofilo se non ti loggi")
      this.router.navigateByUrl("/login");
    }
    
    this.currentUser = this.authService.findByUsernameContains();
  }

}
