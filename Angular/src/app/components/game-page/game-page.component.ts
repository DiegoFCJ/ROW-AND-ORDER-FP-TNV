import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MovieRootObject } from 'src/app/models/movies';
import { MovieAPIService } from 'src/app/@core/services/movie-api.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { ScoreInfo } from 'src/app/models/user';
import { AuthService } from 'src/app/@core/services/auth.service';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  
  constructor(private http: HttpClient, private authService: AuthService, protected MovieServ: MovieAPIService, private router: Router, protected authServ: AuthService) {}
 
  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      alert("non puoi accedere a questa pagina se prima non esegui il login")
      this.router.navigateByUrl("/login");
    }
    this.MovieServ.rating;
    console.log(this.MovieServ.userNameLogged)

    for (let i = 0; i < 10; i++) {
      this.getRandomMovie();
    } 
  }

  moviee: MovieRootObject[] = [];
  movie: MovieRootObject[] = [];
  orderedMovie: MovieRootObject[] = [];

  getRandomMovie() {
    // Per determinare questo valore facciamo eventualmente una query su movies/latest per avere l'id dell'ultimo Film inserito su TMDB
    const latestId = 30000;
    const randomId = Math.round(Math.random() * latestId);

    this.http
      .get<MovieRootObject>(
        `https://api.themoviedb.org/3/movie/${randomId}?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it`
      )
      .subscribe({
        next: (res) => {
          console.log('ID trovato', randomId);

          if (res.poster_path) {
            this.movie.push(res); ///////////////////
            this.orderedMovie.push(res);
            this.orderedMovie.sort((a, b) =>
              a.release_date > b.release_date? 1: b.release_date > a.release_date? -1: 0)
            this.MovieServ.orderedMoviz.push(res);
            this.MovieServ.orderedMoviz.sort((a, b) =>
            a.release_date > b.release_date? 1: b.release_date > a.release_date? -1: 0)
          } else {
            console.log('Film senza poster');
            this.getRandomMovie();
          }
        },
        error: () => {
          console.log('ID non esistente, retry!', randomId);
          this.getRandomMovie();
        },
      });
  }

  drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
    moveItemInArray(this.movie, event.previousIndex, event.currentIndex);
  }

  checkResult(){
    
    console.log(this.MovieServ.userNameLogged)
    
    
    this.router.navigate(['/review-page']);
    for( let i = 0; i < 10; i++){
      if(this.movie[i] === this.MovieServ.orderedMoviz[i]){
        this.MovieServ.rating = this.MovieServ.rating +10;
      }
    }

    let scoreComp: ScoreInfo = {
      userId: this.authServ.getCurrentUser().id,
      userName: this.authServ.getCurrentUser().username,
      score: this.MovieServ.rating

    }

    this.http.post<ScoreInfo>(`http://localhost:4567/score`, scoreComp).subscribe(()=> {console.log(scoreComp + 'HA FUNZIONATO')})   
  }
}
