import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FavData, MovieData } from 'src/app/models/movieData';
import { Router } from '@angular/router';
import { MovieAPIService } from 'src/app//@core/services/movie-api.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app//@core/services/auth.service';
import { MovieRootObject } from 'src/app/models/movies';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})

export class ReviewPageComponent implements OnInit {
  currentRate= 2;
  isHide = true;
  movieID = 0;
  dbComp!: MovieData;
  dbFav!: FavData;
  num: number = 0;
  showDetCheck: boolean = false;
  hideDetCheck: boolean = false;
  bntStyle!: string;
  choice!: number;

  constructor(
    protected authServ: AuthService, 
    private modalService: NgbModal, 
    protected movieServ: MovieAPIService, 
    private http: HttpClient, 
    private router: Router) { }

  ngOnInit(): void {
    if (!this.authServ.isAuthenticated()) {
      alert("non puoi accedere a questa pagina se prima non esegui il login")
      this.router.navigateByUrl("/login");
    }
  }

  orderMovies(){
    return this.movieServ.orderedMoviz
  }

  findFilm(numID:number) {
    this.movieID = numID;
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
    this.dbFav = {
      userId: this.authServ.getCurrentUser().id,
      movieId: this.movieID
    }
    this.http.post<FavData>('http://localhost:4567/favourite', this.dbFav); 
    this.http.post<MovieData>('http://localhost:5268/reviews', this.dbComp); 
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

  showFilmDetails(){
    if(!this.showDetCheck){
      this.showDetCheck = true; 
    }else{
      this.showDetCheck = false; 
    }
  }

  overviewCheck(overview: string){
    console.log(overview)
    if(overview != null){
      return overview;
    }else{
      return "this film does not have any overview available, have a look on google, i'm sure you can find something!";
    }
  }
}
