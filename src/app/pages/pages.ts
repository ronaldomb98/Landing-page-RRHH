import {NgModule} from "@angular/core";
import Home from './home';
import {CommonModule} from '@angular/common';
import Content from './content';

@NgModule({
    imports: [CommonModule],
    declarations: [Home, Content],
    exports: [Home, Content]
})
export class PagesModule {}