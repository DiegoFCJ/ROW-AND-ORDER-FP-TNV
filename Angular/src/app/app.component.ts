import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRootObject } from 'src/models/movies';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = "TNVLezioni"

  
  ngOnInit(): void {
  }


} 


