import {Component} from "@angular/core";


@Component({
  selector: 'heroga-header',
  template: `
    <div class="container">
      <div class="py-1 my-1">
        <nav class="nav d-flex justify-content-end">
          <a class="p-2 text-muted selected" *ngFor="let item of navOptions" [routerLink]="item.route">{{item.name}}</a>
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