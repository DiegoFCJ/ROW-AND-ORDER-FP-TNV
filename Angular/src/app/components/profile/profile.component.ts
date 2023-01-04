import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalSt, User } from 'src/app/models/user';
import { AuthService } from 'src/app/@core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { FavData } from 'src/app/models/movieData';

@Component({
  selector: 'tnv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: Partial<UserLocalSt> = {};
  movieIdFavourites: Partial<FavData> = {};

  constructor(protected authService: AuthService, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {

     if (!this.authService.isAuthenticated()) {
      alert("non puoi accedere al tuo pofilo se non ti loggi")
      this.router.navigateByUrl("/sign");
    }
    this.fetchAllFavourites();
    this.currentUser = this.authService.getCurrentUser();
  }

  fetchAllFavourites(){
    this.http.get<any>(`http://localhost:4567/favouritesOfUser/${this.currentUser.id}`).subscribe((data) => {
      console.log(data)
      this.movieIdFavourites = data;
    }); 
  }



}
