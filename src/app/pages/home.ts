import {Component} from '@angular/core';

@Component({
    selector: 'heroga-home',
    templateUrl: 'home.html'
})
export default class Home {
    
    public readonly members: Member[] = [
        new Member('Julian Gaviria', 'Ibagué', 'assets/julian.jpg', 'Mayo 12', 'Desarrollador Web Full Stack', 'https://www.linkedin.com/in/brayan-ronaldo-mojica-barrios-13286916a/'),
        new Member('Hernan Castaño', 'Ibagué', 'assets/hernan.jpg', 'Mayo 12', 'Desarrollador Web Full Stack', 'https://www.linkedin.com/in/hernan-dario-casta%C3%B1o-ruiz-a11183170/'),
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