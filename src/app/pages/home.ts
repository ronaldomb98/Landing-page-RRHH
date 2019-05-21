import {Component} from '@angular/core';

@Component({
    selector: 'heroga-home',
    template: `
    <div class="intro vh-100 mb-4">
      <div class="d-flex h-100">
        <h1 class="mx-auto align-self-center">Reclutamiento y selección</h1>
      </div>
    </div>
    <div class="container">
    <h2 class="text-center py-3 mb-3">CIPAS</h2>
    <div class="row mb-2">
    <div class="col-md-6" [ngClass]="isLast ? 'offset-md-3' : ''" *ngFor="let item of members; last as isLast">
      <div class="row shadow no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">{{item.city}}</strong>
          <h3 class="mb-0">{{item.name}}</h3>
          <div class="mb-1 text-muted">{{item.birthday}}</div>
          <p class="card-text mb-auto">{{item.description}}.</p>
          <a [href]="item.about" target="_blank" class="stretched-link">Leer mas</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img width="200" height="250" [src]="item.logo">
        </div>
      </div>
    </div>
  </div>
    
    </div>
    `
})
export default class Home {
    
    public readonly members: Member[] = [
        new Member('Julian Gaviria', 'Ibagué', 'assets/julian.jpg', 'Mayo 12', 'Desarrollador Web Full Stack', 'https://www.linkedin.com/in/brayan-ronaldo-mojica-barrios-13286916a/'),
        new Member('Hernan Castaño', 'Ibagué', 'assets/hernan.jpg', 'Mayo 12', 'Desarrollador Web Full Stack', 'https://www.linkedin.com/in/brayan-ronaldo-mojica-barrios-13286916a/'),
        new Member('Ronaldo Mojica', 'Bogotá', 'assets/RonaldoMojicaF.jpeg', 'Mayo 12', 'Desarrollador Web UI', 'https://www.linkedin.com/in/brayan-ronaldo-mojica-barrios-13286916a/'),
    ]
}

class Member {
    constructor(
        public name: string,
        public city: string,
        public logo: string,
        public birthday: string,
        public description: string,
        public about: string
    ) {}
}