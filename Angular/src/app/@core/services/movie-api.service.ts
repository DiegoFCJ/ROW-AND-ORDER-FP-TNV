import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FavData, MovieData } from 'src/app/models/movieData';
import { MovieRootObject } from 'src/app/models/movies';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MovieAPIService {

  orderedMoviz: MovieRootObject[] = [];
  movie: MovieRootObject[] = [];
  rating: number = 0;
  userNameLogged: string = '';


  
  currentRate: number = 0;
  movieID!: number;
  isHide = true;
  num: number = 0;
  choice!: number;
  commForm!: MovieData;
  dbFav!: FavData;
  dbComp!: MovieData;



  constructor(private modalService: NgbModal, protected authServ: AuthService, private http: HttpClient) {}



  getRandomMoviee(url: any) {
    return this.http.get<MovieRootObject>(url);
  }

  getCurrentMovie(){
    const user = JSON.parse(localStorage.getItem("movie") || "") as MovieRootObject;
  }



  
  open(content: any, numID:number) {
		this.modalService.open(content);
    this.movieID = numID;
	}

  justOpenTempl(content: any){
		this.modalService.open(content);
  }

  onSubmit(e: NgForm) {

    this.dbComp = {
      comment: e.form.value.comment,
      rating: e.form.value.rating,
      movieId: this.movieID,
      userId: this.authServ.getCurrentUser().id
    }
    this.http.post<MovieData>('http://localhost:5268/reviews', this.dbComp).subscribe(); 
    }

  saveFavourite(){
    this.dbFav = {
      userId: this.authServ.getCurrentUser().id,
      movieId: this.movieID
    }
    this.http.post<FavData>('http://localhost:4567/favourite', this.dbFav).subscribe(); 
  }

  numChange(num: number){
      return this.num = num;
  }

  adultsFilm(isAdultFilm: boolean){
    if(isAdultFilm){
      return "This film is for adults only! 🔞";
    }else{
      return "You can watch this film with your family ✅";
    }
  }


  
}
