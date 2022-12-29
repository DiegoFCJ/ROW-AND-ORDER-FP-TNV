import { SignInUpComponent } from './@shared/sign-in-up/sign-in-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './components/game-page/game-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { LoginComponent } from './@shared/login/login.component';
import { RegisterComponent } from './@shared/register/register.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'game-page', component: GamePageComponent },
  { path: 'review-page', component: ReviewPageComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'sign', component: SignInUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
