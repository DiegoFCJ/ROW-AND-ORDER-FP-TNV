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
  currentRate: number = 0;
  movieID: number = 0
  isHide = true;
  num: number = 0;
  choice!: number;
  commForm!: MovieData;

  constructor(
    protected authServ: AuthService, 
    private modalService: NgbModal, 
    protected movieServ: MovieAPIService, 
    private http: HttpClient, 
    private router: Router) { }

  ngOnInit(): void {
    if (!this.authServ.isAuthenticated()) {
      alert("non puoi accedere a questa pagina se prima non esegui il login")
      this.router.navigateByUrl("/sign");
    }
  }

  open(content: any, numID:number) {
		this.modalService.open(content);
    this.movieID = numID;
	}

  justOpenTempl(content: any){
		this.modalService.open(content);
  }

  onSubmit(e: NgForm) {

    let dbComp: MovieData = {
      comment: e.form.value.comment,
      rating: e.form.value.rating,
      movie_id: this.movieID,
      user_id: this.authServ.getCurrentUser().id
    }
  
    console.log(dbComp)
  
    this.http
        .post<MovieData>('http://localhost:5268/reviews', dbComp)
        .subscribe((dat) => {}); 
    }

  saveCommentFromForm(e: NgForm){
    this.commForm = {
      comment: e.form.value.comment,
      rating: e.form.value.rating,
      movie_id: this.movieID,
      user_id: this.authServ.getCurrentUser().id
    }
  }

  saveComment() {
    this.http.post<MovieData>('http://localhost:5268/reviews', this.commForm).subscribe((dat) => {}); 
  }

  saveFavourite(){
    let dbComp: FavData = {
      userId: this.authServ.getCurrentUser().id,
      movieId: this.movieID
    }
    this.http.post<FavData>('http://localhost:4567/favourite', dbComp).subscribe((dat) => {}); 
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
