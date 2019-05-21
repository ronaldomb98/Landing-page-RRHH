import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import Home from './pages/home';
import Content from './pages/content';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'content',
    component: Content
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
