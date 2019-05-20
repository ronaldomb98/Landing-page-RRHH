import {NgModule} from "@angular/core";
import {HeaderComponent} from './header';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class ComponentsModule { }