import { Component } from '@angular/core';

@Component({
  selector: 'heroga-root',
  template: `
  
  <heroga-header></heroga-header>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'LadingPageRRHH';
}
