import {NgModule} from "@angular/core";
import Home from './home';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [Home],
    exports: [Home]
})
export class PagesModule {}