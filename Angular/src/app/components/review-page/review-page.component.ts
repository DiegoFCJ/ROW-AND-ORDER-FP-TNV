import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MovieData } from 'src/app/models/movieData';
import { MovieRootObject } from 'src/app/models/movies';
import { Router } from '@angular/router';
import { MovieAPIService } from 'src/app/@core/services/movie-api.service';
import { AuthService } from 'src/app/@core/services/auth.service';




@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit, OnChanges {

  currentRate= 2;
  
  movieID = 0;
  isHide = true;

  onFavouriteSubmite(numID: number) {
    this.isHide = false;
    this.movieID = numID;
  }
  

  constructor(private authService: AuthService,  protected MovieServ: MovieAPIService, private http: HttpClient, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    
  } 

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      alert("non puoi accedere a questa pagina se prima non esegui il login")
      this.router.navigateByUrl("/login");
    }
    console.log(this.MovieServ.orderedMoviz)
    console.log(this.MovieServ.rating)
  }


  onSubmit(e: NgForm) {

  let dbComp: MovieData = {

    comment: e.form.value.comment,
    rating: e.form.value.rating,
    movieId: this.movieID,
    userId: 3
  }

  console.log(dbComp)

  this.http
      .post<MovieData>('http://localhost:5268/reviews', dbComp)
      .subscribe((dat) => {}); 
  }

}