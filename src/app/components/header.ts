import {Component} from "@angular/core";


@Component({
  selector: 'heroga-header',
  template: `
    <div class="container">
      <div class="py-1 my-1">
        <nav class="nav d-flex justify-content-end">
          <a class="p-2 text-muted" routerLinkActive="route-active" *ngFor="let item of navOptions" [routerLink]="item.route">{{item.name}}</a>
        </nav>
      </div>
    </div>
    `
})
export class HeaderComponent {

  public readonly navOptions: NavOption[] = [
    new NavOption('Inicio', '/home'),
    new NavOption('Contenido', '/content'),
    new NavOption('Reclutamiento', '/recruit'),
    new NavOption('Juego lúdico', '/game'),
    new NavOption('Preguntas', '/question')
  ];

}

class NavOption {
  constructor(
    public name: string,
    public route: string
  ) {}
}