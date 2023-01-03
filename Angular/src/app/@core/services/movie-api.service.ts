import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieRootObject } from 'src/app/models/movies';

@Injectable({
  providedIn: 'root',
})
export class MovieAPIService {

  orderedMoviz: MovieRootObject[] = [];
  movie: MovieRootObject[] = [];
  rating: number = 0;
  userNameLogged: string = '';

  constructor(private http: HttpClient) {}

  getRandomMoviee(url: any) {
    return this.http.get<MovieRootObject>(url);
  }

  getCurrentMovie(){
    const user = JSON.parse(localStorage.getItem("movie") || "") as MovieRootObject;
  }
}
