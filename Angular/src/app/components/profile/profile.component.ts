import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalSt, User } from 'src/app/models/user';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'tnv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: Partial<UserLocalSt> = {};

  constructor(protected authService: AuthService, private router: Router) {}

  ngOnInit(): void {

     if (!this.authService.isAuthenticated()) {
      alert("non puoi accedere al tuo pofilo se non ti loggi")
      this.router.navigateByUrl("/login");
    }
    
    this.currentUser = this.authService.getCurrentUser();
  }

}
