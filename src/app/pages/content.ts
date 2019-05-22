import { Component } from "@angular/core";

@Component({
    selector: 'heroga-content',
    templateUrl: 'content.html'
})
export default class Content {
    public concepts: CardItem[] = [
        new CardItem('Reclutamiento', 'Conjunto de procedimientos que tienden a atraer candidatos potenciales cualificados y capaces de ocupar cargos dentro de la organizaci on', 'Bretones y Rodr ́ıguez', '2008'),
        new CardItem('Selección', 'Proceso mediante el cual una organizaci ́on elige, entre una lista de candidatos, la persona que satisface mejor los criterios exigidos para ocupar el cargo disponible, considerando las actuales condiciones del mercado de recursos humanos”', 'Werther y Davis', '2008'),
    ]
    
    public socialNetworkConcepts: CardItem[] = [
        new CardItem('e-recruiting', 'Sistema  de  captación  y  selección  de  talento  a  través  de  internetque permite optimizar  los  procesos. Por  tanto,  las  empresas  deben  estar  al pendientede  los  adelantos tecnológicos con el fin de aprovechar sus beneficios.', 'González', '2005'),
        new CardItem('Selección', 'Servicios que se ofertan a través de internet y que permiten a los usuarios generar un perfil público con información personal; proporcionan herramientas que permiten interactuar con otros usuarios y localizarlos en función de las características publicadas en sus perfiles.', 'Werther y Davis', '2008'),
    ]
    
    public dataToHaveInMind: string [] = [
        'Admisión de personas',
        'Aplicación de personas',
        'Compensación de personas',
        'Desarrollo de personas',
        'Mantenimiento de personas',
        'Evaluación de personas',
    ];
    
    public steptsForRecruiting: string[] = [
        'Identificar  el  puesto  vacante.',
        'Determinar  las  fuentes  de  reclutamiento.',
        'Elegir  los  medios  para  acercar  a  los  candidatos',
        'Determinar cuando el candidato solicita el puesto.',
    ];
    
    public usersOnSocialNetworks: labelAndDefinition[] = [
        new labelAndDefinition('Facebook',' 1 billón de usuarios activos '),
        new labelAndDefinition('Twitter',' 600 millones de usuarios activos '),
        new labelAndDefinition('Google','} 400 millones de usuarios activos '),
        new labelAndDefinition('LinkedIn',' 270 millones de usuarios activos '),
        new labelAndDefinition('Instagram',' 200 millones de usuarios activos'),
        new labelAndDefinition('Pinterest',' 70 millones de usuarios activos'),
        new labelAndDefinition('Tumblr',' 19 millones de usuarios activos'),
    ]
    
    public socialNetworkAdventages: string[] = [
        'Permiten segmentar el publico objetivo',
        'Amplian el acceso a un enorme grupo',
        'Disponibilidad de oferta de trabajo de manera ilimitada',
        'Amplio alcance, cualquier lugar del mundo',
        'Disminución de costos y tareas automatizadas',
        'Consulta rapida y facilidad para conservar historicos',
    ];
    
    public socialNetworkDisAdventages: string[] = [
        'Saturación de candidaturas',
        'Desconocimiento y falta de oportunidad de acceso por parte de la población',
        'Limitación de las propias redes',
        'Útil para puestos técnicos pero no directivos.',
    ];
    
    public kindOfSocialNetworks: labelAndDefinition[] = [
        new labelAndDefinition(' Generalistas', ' facilitan y potencian las relaciones personales entre los usuarios. Ponen a disposición de los usuarios una plataforma integral.'),
        new labelAndDefinition(' Profesionales', ' Búsqueda selectiva de candidatos, crean grupos de interés y amplían las redes de contactos profesionales, por ejemplo, Linkedin y Xing.'),
        new labelAndDefinition(' Verticales', ' Búsqueda directa según sector de especialización, por ejemplo, INNOCENTIVE.'),
        new labelAndDefinition(' Otras', '. Redes de microblogging o nanoblogging. Publican ofertas laborales de forma gratuita, por ejemplo, Twitter.'),
    ]
}

class CardItem {
    constructor(
        public title: string,
        public description: string,
        public author: string,
        public date: string
    ){}
}

class labelAndDefinition {
    constructor(
        public label: string,
        public definition: string
    ) {}
}