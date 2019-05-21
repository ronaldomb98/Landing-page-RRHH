import {Component} from "@angular/core";


@Component({
  selector: 'heroga-header',
  template: `
    <div class="container">
      <header class="blog-header py-3">
        <div class="text-center">
          <h1>Sistema de información de recursos humanos</h1>
        </div>
      </header>
    
      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
          <a class="p-2 text-muted" *ngFor="let item of navOptions" [routerLink]="item.route">{{item.name}}</a>
        </nav>
      </div>
    </div>
    `
})
export class HeaderComponent {

  public readonly navOptions: NavOption[] = [
    new NavOption('Inicio', '/'),
    new NavOption('Contenido', '/content')
  ];

}

class NavOption {
  constructor(
    public name: string,
    public route: string
  ) {}
}