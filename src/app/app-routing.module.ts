import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import Home from './pages/home';
import Content from './pages/content';
import Recruit from './pages/recruit';
import Game from './pages/game';
import Question from './pages/question';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'content',
    component: Content
  },
  {
    path: 'recruit',
    component: Recruit
  },
  {
    path: 'game',
    component: Game
  },
  {
    path: 'question',
    component: Question
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
