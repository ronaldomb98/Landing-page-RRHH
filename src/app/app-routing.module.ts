import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import Home from './pages/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
