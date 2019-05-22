import {NgModule} from "@angular/core";
import Home from './home';
import {CommonModule} from '@angular/common';
import Content from './content';
import Recruit from './recruit';
import Game from './game';
import Question from './question';

@NgModule({
    imports: [CommonModule],
    declarations: [Home, Content, Recruit, Game, Question],
    exports: [Home, Content, Recruit, Game, Question]
})
export class PagesModule {}