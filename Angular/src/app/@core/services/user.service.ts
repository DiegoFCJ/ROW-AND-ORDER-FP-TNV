import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLocalSt } from 'src/app/models/user';
import { AuthService } from './auth.service';
import { MovieAPIService } from './movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  springBootUrl = "http://localhost:8080/api/public";
  currentUser!: UserLocalSt;

  constructor(protected movServ: MovieAPIService, protected authServ: AuthService, private http: HttpClient) { }

  saveNewBestScoreOnSpringDb(newScore: number){
    this.currentUser = this.authServ.getCurrentUser();

    if(this.currentUser.score > newScore){
      this.currentUser.score = newScore;
      return this.updateUserScore(this.currentUser);
    }
    
    return this.authServ.getCurrentUser().score;
  }

  updateUserScore(user: UserLocalSt){
    return this.http.patch<any>(`${this.springBootUrl}/score/${user.id}`, user.score).subscribe();
  }
}