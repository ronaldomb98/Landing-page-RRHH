(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home */ "./src/app/pages/home.ts");
/* harmony import */ var _pages_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/content */ "./src/app/pages/content.ts");
/* harmony import */ var _pages_recruit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/recruit */ "./src/app/pages/recruit.ts");
/* harmony import */ var _pages_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/game */ "./src/app/pages/game.ts");
/* harmony import */ var _pages_question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/question */ "./src/app/pages/question.ts");








var routes = [
    {
        path: 'home',
        component: _pages_home__WEBPACK_IMPORTED_MODULE_3__["default"],
    },
    {
        path: 'content',
        component: _pages_content__WEBPACK_IMPORTED_MODULE_4__["default"]
    },
    {
        path: 'recruit',
        component: _pages_recruit__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    {
        path: 'game',
        component: _pages_game__WEBPACK_IMPORTED_MODULE_6__["default"]
    },
    {
        path: 'question',
        component: _pages_question__WEBPACK_IMPORTED_MODULE_7__["default"]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'LadingPageRRHH';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'heroga-root',
            template: "\n  \n  <heroga-header></heroga-header>\n  <router-outlet></router-outlet>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components */ "./src/app/components/components.ts");
/* harmony import */ var _pages_pages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages */ "./src/app/pages/pages.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _components_components__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _pages_pages__WEBPACK_IMPORTED_MODULE_6__["PagesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.ts":
/*!******************************************!*\
  !*** ./src/app/components/components.ts ***!
  \******************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/app/components/header.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            declarations: [_header__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
            exports: [_header__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/header.ts":
/*!**************************************!*\
  !*** ./src/app/components/header.ts ***!
  \**************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.navOptions = [
            new NavOption('Inicio', '/home'),
            new NavOption('Contenido', '/content'),
            new NavOption('Reclutamiento', '/recruit'),
            new NavOption('Juego lúdico', '/game'),
            new NavOption('Preguntas', '/question')
        ];
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'heroga-header',
            template: "\n    <div class=\"container\">\n      <div class=\"py-1 my-1\">\n        <nav class=\"nav d-flex justify-content-end\">\n          <a class=\"p-2 text-muted\" routerLinkActive=\"route-active\" *ngFor=\"let item of navOptions\" [routerLink]=\"item.route\">{{item.name}}</a>\n        </nav>\n      </div>\n    </div>\n    "
        })
    ], HeaderComponent);
    return HeaderComponent;
}());

var NavOption = /** @class */ (function () {
    function NavOption(name, route) {
        this.name = name;
        this.route = route;
    }
    return NavOption;
}());


/***/ }),

/***/ "./src/app/pages/content.html":
/*!************************************!*\
  !*** ./src/app/pages/content.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vh-50 w-100 d-flex callout\">\r\n    <div class=\" text-center w-100 align-self-center\">\r\n        <h2 class=\"\">RECLUTAMIENTO Y SELECCIÓN</h2>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100 container d-flex container\">\r\n    <div class=\"align-self-center\">\r\n        <h3 class=\"mb-5 text-center\">Conceptos clave</h3>\r\n        <ng-container *ngFor=\"let item of concepts\">\r\n            <ng-container *ngTemplateOutlet=\"customCard; context: {item: item}\" ></ng-container>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100 bg-primary\">\r\n    <div class=\"container d-flex justify-content-end h-100\">\r\n        <div class=\"align-self-center\">\r\n            <h3 class=\"mb-5 text-center text-white\">Aspectos importantes a tener en cuenta</h3>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item text-white bg-transparent\">Fuentes y medios de reclutamiento</li>\r\n                <li class=\"list-group-item text-white bg-transparent\">Fines del reclutamiento</li>\r\n                <li class=\"list-group-item text-white bg-transparent\">Proceso de reclutamiento y selección de personal</li>\r\n            </ul>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100 container d-flex\">\r\n    <div class=\"align-self-center\">\r\n        <h3 class=\"mb-5 text-center\">Procesos básicos de los RRHH</h3>\r\n        <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\" *ngFor=\"let item of dataToHaveInMind\">{{item}}</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100 portfolio2\">\r\n    <div class=\"container h-100 d-flex justify-content-end \">\r\n        <div class=\"align-self-center\">\r\n            <h3 class=\"mb-5 text-center text-white\">Pasos para reclutar al personal</h3>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item text-white bg-transparent\" *ngFor=\"let item of steptsForRecruiting\">{{item}}</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-50 w-100 d-flex callout\">\r\n    <div class=\" text-center w-100 align-self-center\">\r\n        <h2 class=\"\">REDES SOCIALES</h2>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100 container d-flex\">\r\n    <div class=\"align-self-center\">\r\n        <h3 class=\"mb-5 text-center\">Conceptos clave de redes sociales</h3>\r\n        <ng-container *ngFor=\"let item of socialNetworkConcepts\">\r\n            <ng-container *ngTemplateOutlet=\"customCard; context: {item: item}\" ></ng-container>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"vh-100 w-100 portfolio1\">\r\n    <div class=\"container d-flex h-100 w-100\">\r\n        <div class=\"align-self-center\">\r\n            <div class=\"jumbotron jumbotron-fluid\">\r\n                <div class=\"container\">\r\n                    <h3 class=\"display-4\">Uso de redes sociales para reclutamiento</h3>\r\n                    <hr class=\"my-4\">\r\n                    <p class=\"lead\">En un estudio realizado por Deloitte(2009), se identificó que 23\\% de las empresas ya estaban utilizando las redes sociales en su proceso de reclutamiento y selección(IPADE,2012)</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100 container d-flex\">\r\n    <ng-container *ngTemplateOutlet=\"labelAndDefinition; context: {items: usersOnSocialNetworks, title: 'Usuarios en redes sociales'}\"></ng-container>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100 portfolio3\">\r\n    <div class=\"container d-flex justify-content-end h-100 w-100\">\r\n        <div class=\"align-self-center\">\r\n            <h3 class=\"mb-5 text-center\">Redes sociales</h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-6\">\r\n                    <h3>Ventajas</h3>\r\n                    <ul class=\"list-group list-group-flush\">\r\n                        <li class=\"list-group-item\" *ngFor=\"let item of socialNetworkAdventages\">{{item}}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-12 col-lg-6\">\r\n                    <h3>Desventajas</h3>\r\n                    <ul class=\"list-group list-group-flush\">\r\n                        <li class=\"list-group-item\" *ngFor=\"let item of socialNetworkDisAdventages\">{{item}}</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100 container d-flex\">\r\n    <ng-container *ngTemplateOutlet=\"labelAndDefinition; context: {items: usersOnSocialNetworks, title: 'Clasificación de redes sociales'}\"></ng-container>\r\n</div>\r\n\r\n<div class=\"vh-50 w-100 d-flex callout\">\r\n    <div class=\" text-center w-100 align-self-center\">\r\n        <h2 class=\"\">TECNOLOGÍA E INTERNET</h2>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100 container d-flex\">\r\n    <div class=\"align-self-center\">\r\n        <div class=\"jumbotron jumbotron-fluid\">\r\n            <div class=\"container\">\r\n                <h3 class=\"display-4\">Herramientas  de tecnología e internet</h3>\r\n                <p class=\"lead\">\r\n                    A partir del año 2003, surge un nuevo escenario para la función de RRHH, permitiendo la entrada al llamado reclutamiento de personal 2.0, modalidad innovadora para encontrar a los candidatos a través de las redes sociales.\r\n                </p>\r\n                <hr class=\"my-4\">\r\n                <ul>\r\n                    <li>LinkedIn - Red de profesionales más grande del mundo.</li>\r\n                    <li>Páginas específicas</li>\r\n                    <li>Bolsas de empleo</li>\r\n                    <li>Portales - Los más usados. Zona Jobs - portal de empleo de alcance Colombia, Ecuador, Colombia, Chile, entre otros.</li>\r\n                </ul>\r\n                <p class=\"lead\">\r\n                    La networking es una de las fuentes de reclutamiento con mayor crecimiento, expansión y aceptación en la sociedad, a través de las redes sociales para negocios (Rico, 2015)\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100 container d-flex justify-content-end\">\r\n    <div class=\"align-self-center\">\r\n        <h3 class=\"mb-5 text-center\">Herramientas para mejorar procesos y gestión de candidatos</h3>\r\n        <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\">Correo electrónico, agenda de contactos, calendarios, etcétera.</li>\r\n            <li class=\"list-group-item\">Gestión de proyectos, tareas y gestión del tiempo.</li>\r\n            <li class=\"list-group-item\">Creación y/o participación en comunidades virtuales.</li>\r\n            <li class=\"list-group-item\">Gestión y creación de grupos de trabajo, debate o distribución de información</li>\r\n            <li class=\"list-group-item\">Manejar cuentas en las diferentes redes sociales como captación de talentos.</li>\r\n            <li class=\"list-group-item\">Gestión de candidatos y seguimiento de procesos, entre otras</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100  bg-primary\">\r\n    <div class=\"container d-flex h-100 justify-content-center\">\r\n        <div class=\"align-self-center\">\r\n            <div class=\"text-center\">\r\n                <img class=\"w-75\" src=\"assets/estadisticaReclutamientoRedesSociales.PNG\" alt=\"estadisticas\">\r\n            </div>\r\n            <p class=\"py-3 text-white\">\r\n                la Asociación Mexicana de Internet (AMIPCI, 2014), estimó que 90 \\% de los usuarios de internet en México usan las redes sociales. La evolución en usuarios de internet pasó de 20.2 millones del año 2006 a 53.9 millones en el 2014\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100 container d-flex justify-content-end\">\r\n    <div class=\"align-self-center\">\r\n        <h3 class=\"mb-5 text-center\">Los usos de internet en RSP</h3>\r\n        <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\">Como método de relutamieto</li>\r\n            <li class=\"list-group-item\">Como medio de evaluación de candidatos a distancia</li>\r\n            <li class=\"list-group-item\">Como forma de ejercer el c de los medios de evaluación por parte de los evaluadores.</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"vh-100 w-100 portfolio2\">\r\n    <div class=\"container d-flex h-100 w-100 \">\r\n        <div class=\"align-self-center text-white\">\r\n            <h3 class=\"mb-5 text-center\">Conclusiones</h3>\r\n            <p>\r\n                En México, los procesos de reclutamiento y selección de personal de manera tradicional siguen teniendo una alta aplicación, sin embargo, ante las grandes ventajas de las redes sociales se requiere utilizar las nuevas herramientas para el RSP, e implementar el e-recruitment, debido a la fuerte competencia para captar los talentos deseados.\r\n            </p>\r\n            <p>\r\n                Las tendencias sociales y demográficas de México y el mundo están marcando la diferencia en el uso de las herramientas tecnológicas, como es el caso de las generaciones baby-boom y los millenneals\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #customCard let-item=\"item\">\r\n    <div class=\"card my-3\">\r\n        <div class=\"card-header bg-primary text-white\">\r\n            {{item.title}}\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <blockquote class=\"blockquote mb-0\">\r\n                <p>{{item.description}}</p>\r\n                <footer class=\"blockquote-footer\">{{item.author}} <cite title=\"Source Title\">{{item.date}}</cite></footer>\r\n            </blockquote>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #labelAndDefinition let-items=\"items\" let-title=\"title\">\r\n    <div class=\"align-self-center\">\r\n        <h3 class=\"mb-5 text-center\">{{title}}</h3>\r\n        <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\" *ngFor=\"let item of items\">\r\n                <strong>{{item.label}}</strong> <span>{{item.definition}}</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/content.ts":
/*!**********************************!*\
  !*** ./src/app/pages/content.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Content = /** @class */ (function () {
    function Content() {
        this.concepts = [
            new CardItem('Reclutamiento', 'Conjunto de procedimientos que tienden a atraer candidatos potenciales cualificados y capaces de ocupar cargos dentro de la organizaci on', 'Bretones y Rodr ́ıguez', '2008'),
            new CardItem('Selección', 'Proceso mediante el cual una organizaci ́on elige, entre una lista de candidatos, la persona que satisface mejor los criterios exigidos para ocupar el cargo disponible, considerando las actuales condiciones del mercado de recursos humanos”', 'Werther y Davis', '2008'),
        ];
        this.socialNetworkConcepts = [
            new CardItem('e-recruiting', 'Sistema  de  captación  y  selección  de  talento  a  través  de  internetque permite optimizar  los  procesos. Por  tanto,  las  empresas  deben  estar  al pendientede  los  adelantos tecnológicos con el fin de aprovechar sus beneficios.', 'González', '2005'),
            new CardItem('Selección', 'Servicios que se ofertan a través de internet y que permiten a los usuarios generar un perfil público con información personal; proporcionan herramientas que permiten interactuar con otros usuarios y localizarlos en función de las características publicadas en sus perfiles.', 'Werther y Davis', '2008'),
        ];
        this.dataToHaveInMind = [
            'Admisión de personas',
            'Aplicación de personas',
            'Compensación de personas',
            'Desarrollo de personas',
            'Mantenimiento de personas',
            'Evaluación de personas',
        ];
        this.steptsForRecruiting = [
            'Identificar  el  puesto  vacante.',
            'Determinar  las  fuentes  de  reclutamiento.',
            'Elegir  los  medios  para  acercar  a  los  candidatos',
            'Determinar cuando el candidato solicita el puesto.',
        ];
        this.usersOnSocialNetworks = [
            new labelAndDefinition('Facebook', ' 1 billón de usuarios activos '),
            new labelAndDefinition('Twitter', ' 600 millones de usuarios activos '),
            new labelAndDefinition('Google', '} 400 millones de usuarios activos '),
            new labelAndDefinition('LinkedIn', ' 270 millones de usuarios activos '),
            new labelAndDefinition('Instagram', ' 200 millones de usuarios activos'),
            new labelAndDefinition('Pinterest', ' 70 millones de usuarios activos'),
            new labelAndDefinition('Tumblr', ' 19 millones de usuarios activos'),
        ];
        this.socialNetworkAdventages = [
            'Permiten segmentar el publico objetivo',
            'Amplian el acceso a un enorme grupo',
            'Disponibilidad de oferta de trabajo de manera ilimitada',
            'Amplio alcance, cualquier lugar del mundo',
            'Disminución de costos y tareas automatizadas',
            'Consulta rapida y facilidad para conservar historicos',
        ];
        this.socialNetworkDisAdventages = [
            'Saturación de candidaturas',
            'Desconocimiento y falta de oportunidad de acceso por parte de la población',
            'Limitación de las propias redes',
            'Útil para puestos técnicos pero no directivos.',
        ];
        this.kindOfSocialNetworks = [
            new labelAndDefinition(' Generalistas', ' facilitan y potencian las relaciones personales entre los usuarios. Ponen a disposición de los usuarios una plataforma integral.'),
            new labelAndDefinition(' Profesionales', ' Búsqueda selectiva de candidatos, crean grupos de interés y amplían las redes de contactos profesionales, por ejemplo, Linkedin y Xing.'),
            new labelAndDefinition(' Verticales', ' Búsqueda directa según sector de especialización, por ejemplo, INNOCENTIVE.'),
            new labelAndDefinition(' Otras', '. Redes de microblogging o nanoblogging. Publican ofertas laborales de forma gratuita, por ejemplo, Twitter.'),
        ];
    }
    Content = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'heroga-content',
            template: __webpack_require__(/*! ./content.html */ "./src/app/pages/content.html")
        })
    ], Content);
    return Content;
}());
/* harmony default export */ __webpack_exports__["default"] = (Content);
var CardItem = /** @class */ (function () {
    function CardItem(title, description, author, date) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.date = date;
    }
    return CardItem;
}());
var labelAndDefinition = /** @class */ (function () {
    function labelAndDefinition(label, definition) {
        this.label = label;
        this.definition = definition;
    }
    return labelAndDefinition;
}());


/***/ }),

/***/ "./src/app/pages/game.html":
/*!*********************************!*\
  !*** ./src/app/pages/game.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vh-50 w-100 d-flex callout\">\r\n    <div class=\" text-center w-100 align-self-center\">\r\n        <h2 class=\"\">JUEGO LÚDICO</h2>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container my-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <img src=\"assets/juegoludico.PNG\" alt=\"\">\r\n        </div>\r\n        <div class=\"col\">\r\n            <h2>Descripción</h2>\r\n            <p>Podrás disfrutar del maravilloso juego de la escalera lleno de mágia y trampas. <strong>¡Será Genial!</strong></p>\r\n            <h3>Reglas</h3>\r\n            <ul>\r\n                <li>Si tocas la cola de una cerpiente te deslizarás hasta su cabeza</li>\r\n                <li>Podrás subir por las escaleras y asi coger ventaja de tus rivales</li>\r\n                <li>En cada signo de pregunta deberás responder una de las preguntas de la página 2. En caso erroneo debes retroceder dos pasos y atenerte a las consecuencias</li>\r\n                <li>¡Diviertete!</li>\r\n            </ul>\r\n            <a href=\"https://docs.google.com/spreadsheets/d/1tBXYJnCGokASWU9_vOn8mImN6ufYmoQO2qUiFJQboWk/edit?usp=sharing\">Descargar</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<a href=\"https://docs.google.com/spreadsheets/d/1tBXYJnCGokASWU9_vOn8mImN6ufYmoQO2qUiFJQboWk/edit?usp=sharing\" typ>Acceder</a>"

/***/ }),

/***/ "./src/app/pages/game.ts":
/*!*******************************!*\
  !*** ./src/app/pages/game.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Game = /** @class */ (function () {
    function Game() {
    }
    Game = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'heroga-game',
            template: __webpack_require__(/*! ./game.html */ "./src/app/pages/game.html")
        })
    ], Game);
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/app/pages/home.html":
/*!*********************************!*\
  !*** ./src/app/pages/home.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"intro vh-100 w-100 mb-4 d-flex justify-content-center\">\r\n    <div class=\"align-self-center\">\r\n        <h1 class=\"mx-auto main-title align-self-center\">Reclutamiento y selección</h1>\r\n    </div>\r\n</div>\r\n<div class=\"container vh-100 d-flex\">\r\n    <div class=\"align-self-center\">\r\n        \r\n        <h2 class=\"text-center py-3 mb-3\">CIPAS</h2>\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-md-6\" [ngClass]=\"isLast ? 'offset-md-3' : ''\" *ngFor=\"let item of members; last as isLast\">\r\n            <div class=\"row shadow no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative\">\r\n                <div class=\"col p-4 d-flex flex-column position-static\">\r\n                <strong class=\"d-inline-block mb-2 text-primary\">{{item.city}}</strong>\r\n                <h3 class=\"mb-0\">{{item.name}}</h3>\r\n                <div class=\"mb-1 text-muted\">{{item.birthday}}</div>\r\n                <p class=\"card-text mb-auto\">{{item.description}}.</p>\r\n                <a [href]=\"item.about\" target=\"_blank\" class=\"stretched-link\">Leer mas</a>\r\n                </div>\r\n                <div class=\"col-auto d-none d-lg-block\">\r\n                <img width=\"200\" height=\"250\" [src]=\"item.logo\">\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<"

/***/ }),

/***/ "./src/app/pages/home.ts":
/*!*******************************!*\
  !*** ./src/app/pages/home.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Home = /** @class */ (function () {
    function Home() {
        this.members = [
            new Member('Julian Gaviria', 'Ibagué', 'assets/julian.jpg', 'Agosto 28', 'Desarrollador Web Full Stack', 'https://www.linkedin.com/in/julian-gaviria-valencia-02b31552/'),
            new Member('Hernan Castaño', 'Ibagué', 'assets/hernan.jpg', 'Junio 3', 'Desarrollador Web Full Stack', 'https://www.linkedin.com/in/hernan-dario-casta%C3%B1o-ruiz-a11183170/'),
            new Member('Ronaldo Mojica', 'Bogotá', 'assets/RonaldoMojicaF.jpeg', 'Mayo 12', 'Desarrollador Web UI', 'https://www.linkedin.com/in/brayan-ronaldo-mojica-barrios-13286916a/'),
        ];
    }
    Home = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'heroga-home',
            template: __webpack_require__(/*! ./home.html */ "./src/app/pages/home.html")
        })
    ], Home);
    return Home;
}());
/* harmony default export */ __webpack_exports__["default"] = (Home);
var Member = /** @class */ (function () {
    function Member(name, city, logo, birthday, description, about) {
        this.name = name;
        this.city = city;
        this.logo = logo;
        this.birthday = birthday;
        this.description = description;
        this.about = about;
    }
    return Member;
}());


/***/ }),

/***/ "./src/app/pages/pages.ts":
/*!********************************!*\
  !*** ./src/app/pages/pages.ts ***!
  \********************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/app/pages/home.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content */ "./src/app/pages/content.ts");
/* harmony import */ var _recruit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recruit */ "./src/app/pages/recruit.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game */ "./src/app/pages/game.ts");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question */ "./src/app/pages/question.ts");








var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            declarations: [_home__WEBPACK_IMPORTED_MODULE_2__["default"], _content__WEBPACK_IMPORTED_MODULE_4__["default"], _recruit__WEBPACK_IMPORTED_MODULE_5__["default"], _game__WEBPACK_IMPORTED_MODULE_6__["default"], _question__WEBPACK_IMPORTED_MODULE_7__["default"]],
            exports: [_home__WEBPACK_IMPORTED_MODULE_2__["default"], _content__WEBPACK_IMPORTED_MODULE_4__["default"], _recruit__WEBPACK_IMPORTED_MODULE_5__["default"], _game__WEBPACK_IMPORTED_MODULE_6__["default"], _question__WEBPACK_IMPORTED_MODULE_7__["default"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/question.html":
/*!*************************************!*\
  !*** ./src/app/pages/question.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vh-50 w-100 d-flex callout\">\r\n    <div class=\" text-center w-100 align-self-center\">\r\n        <h2 class=\"\">PREGUNTAS</h2>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container my-5\">\r\n    <div class=\"py-3\">\r\n        <p>Te invitamos a desafiar tus conocimiento y hacer el <a href=\"\"></a></p>\r\n        <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSdUfVBiy8rA8y7Tsizypnzo3k_8SgOrYmWpeaX57a7-uFGpeA/viewform?embedded=true\" width=\"100%\" height=\"520\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Cargando...</iframe>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/question.ts":
/*!***********************************!*\
  !*** ./src/app/pages/question.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Question = /** @class */ (function () {
    function Question() {
    }
    Question = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'heroga-question',
            template: __webpack_require__(/*! ./question.html */ "./src/app/pages/question.html")
        })
    ], Question);
    return Question;
}());
/* harmony default export */ __webpack_exports__["default"] = (Question);


/***/ }),

/***/ "./src/app/pages/recruit.html":
/*!************************************!*\
  !*** ./src/app/pages/recruit.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vh-50 w-100 d-flex callout\">\r\n    <div class=\" text-center w-100 align-self-center\">\r\n        <h2 class=\"\">RECLUTAMIENTO DE RECURSOS HUMANOS</h2>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container mt-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-8 offset-2 shadow mb-5\">\r\n            <iframe width=\"100%\" height=\"315\"\r\n                src=\"https://www.youtube.com/embed/hKnzZbt_Xp0?autoplay=0\">\r\n            </iframe>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container mb-5\">\r\n        <h2>Concepto</h2>\r\n        <hr class=\"mb-3\">\r\n        <p>\r\n            Es un conjunto de tareas realizadas en la búsqueda de atraer candidatos, los cuales deben cumplir unos requisitos para ocupar cargos dentro de una organización. El proceso, es en sí mismo, infinidad de tareas todas muy operativas que se realiza diariamente para cubrir las necesidades de las distintas áreas requeridas por los clientes.\r\n        </p>\r\n        <p>\r\n            La efectividad del Reclutamiento de de recursos humanos se puede observar cuando se logra abastecer de aspirantes los procesos de selección, pues esta actividad tiene como prioridad atraer candidatos, para poder  realizar con ellos un proceso de selección asertivo.\r\n        </p>\r\n        \r\n        <h2>Clases de Reclutamiento de Personal</h2>\r\n        <hr class=\"pm-3\">\r\n        <h3>Externo</h3>\r\n        <p>\r\n            <strong>Externo:</strong> Cuando existe una vacante que se debe cubrir para un cliente específico, y no se quiere o no se puede transferir o promover a un empleado ya existente. Se intenta cubrir entonces, con candidatos potenciales, disponibles a través de una búsqueda exhaustiva que podría comprender cualquiera de los procedimientos descritos:\r\n        </p>\r\n        <ul>\r\n            <li>Internet: portales de empleo, anuncios, campañas, red de búsqueda, red display, publicación blog, redes sociales.</li>\r\n            <li>Anuncios en revistas y/o clasificados en periódicos.</li>\r\n            <li>Visita a Asociaciones Estudiantiles.</li>\r\n            <li>Directorios Académicos.</li>\r\n            <li>Revisiones de base de datos de hojas de vida de candidatos que se presentaron anteriormente.</li>\r\n            <li>Contactos con universidades, alcaldías, parroquias, centros de integración, colegios profesionales.</li>\r\n            <li>Contactos con otras unidades de negocio, así mismo otras organizaciones laborales.</li>\r\n            <li>Verificación de candidatos presentados por los mismos empleados de la empresa.</li>\r\n            <li>Volanteo, perifoneo y voz a voz.</li>\r\n            <li>Actualmente un medio muy eficiente y de gran difusión utilizado en el Reclutamiento de Personal es el Internet, aunque no deja de ser utilizado a menudo el volanteo, el perifoneo y el aviso de prensa, aunque se cree que tiende a desaparecer puesto que cada vez son más asequibles los medios digitales para todo tipo de público.</li>\r\n        </ul>\r\n        <h4>\r\n            Ventajas de reclutamiento externo:\r\n        </h4>\r\n        <ul>\r\n            <li>Son sistemas renovados y enriquecidos en sus fuentes.</li>\r\n            <li>La preparación y el desarrollo del personal, efectuada por el mismo candidato, se puede aprovechar para disminuir los gastos adicionales de entrenamiento y desarrollo, y obtener resultados a corto plazo.</li>\r\n            <li>El aporte de nuevas ideas y de diferentes enfoques hacia los problemas internos, y actualizarse frente a la vanguardia externa o a lo que ocurre en las diferentes empresas y el cómo manejan sus conflictos internos.</li>\r\n            <li>Vale la pena anotar que siempre está la opción de realizar los dos tipos de reclutamiento que en algunos casos suelen llamar “mixto”, puesto que el objetivo final siempre será cubrir la vacante, pero adicionalmente, con una persona calificada para dicho fin.</li>\r\n        </ul>\r\n        <h3>Interno</h3>\r\n        <p>\r\n            Interno: En recursos humanos esto es denominado plan carrera o promociones internas, en estos casos los trabajadores que cumplan los requisitos propios del perfil del cargo, tienen la posibilidad de postularse, de esta manera RRHH busca entonces promover (vertical), o transferir (horizontal), e inclusive a transferir con promoción (movimiento diagonal) contribuyendo en todo caso a la retención de talento y al buen clima organizacional.\r\n        </p>\r\n        \r\n        <h4>\r\n            Ventajas del reclutamiento interno:\r\n        </h4>\r\n        <ul>\r\n            <li>Es más rápido. El trabajador ya está en la empresa, por lo cual se evita tiempos de períodos de preaviso, o las demoras del proceso natural en el reclutamiento externo.</li>\r\n            <li>Ofrece mayor validez y seguridad, ya que el candidato fue evaluado y los Jefes ya tienen su concepto y reconocimiento de su labor.</li>\r\n            <li>Estas oportunidades se ofrecen a quienes realmente han demostrado durante un cierto periodo de tiempo que tienen las condiciones para el puesto de trabajo, por lo tanto genera un clima sano de competencia entre el personal.</li>\r\n            <li>El gasto de entrenamiento es sustancialmente menor. De igual manera los costes de publicaciones, avisos, volantes, campañas, es menor ostensiblemente.</li>\r\n        </ul>\r\n        \r\n        <h2>Importancia</h2>\r\n        <hr class=\"mb-3\">\r\n        <p> Importancia del reclutamiento de talento humano en la organización:</p>\r\n        <p>\r\n            La realización idónea de este conjunto de procesos, trae como respuesta  mejores candidatos potencialmente calificados, capaces de cumplir sus objetivos y metas dentro (o fuera) de la organización. Por tal motivo hay que  preocuparse  por hacer bien la tarea y entregar a los clientes un personal idóneo y acorde a sus necesidades, convirtiéndose en el punto clave y la columna vertebral de la compañía, el capital humano. \r\n        </p>\r\n        <p>\r\n            En un mundo cada día más competitivo, las empresas en general buscan a su vez ser más productivas y para esto se necesita tener a la tecnología del lado de las organizaciones, y brindarles a los empleados mayor importancia profesionalizando el departamento de recursos humanos.\r\n        </p>\r\n        \r\n        <p>\r\n            \r\n            La planificación estratégica es necesaria y ayuda a la empresa a llevar a cabo un efectivo proceso de Reclutamiento y Selección de personal. Conocer la empresa y sus necesidades es algo esencial.\r\n        </p>\r\n        \r\n        <p>\r\n            se debe tener en cuenta que el reclutamiento es una actividad de divulgación, de llamado a la acción positiva y de invitación. Depende en buena forma de la oferta y la demanda ya que en algunas épocas del año, es común encontrar muchos aspirantes para un cargo o en su defecto muchas vacantes para pocos candidatos, en ese orden de ideas, es conveniente avanzar considerando el proceso de reclutamiento y selección como parte fundamental de la vida y crecimiento de la empresa, e integrarlos, para evitar así una posible baja productividad que pueda surgir al contratar una persona no apta para el cargo, puesto que es necesario desarrollar una filosofía de la compañía con la estructura administrativa que la soporte.\r\n        </p>\r\n        \r\n        <p>\r\n            Para finalizar, cabe destacar que las redes sociales, diseñadas en un principio para socializar con amigos y familiares, se convierten cada día en una fuente muy útil para obtener un alto número de postulaciones para un cargo, volviéndose una herramienta fundamental para apoyar el departamento de recursos humanos en cuanto a la consecución de personal se refiere y jugando un rol cada día más relevante en lo relacionado con el reclutamiento de Personal.\r\n        </p>\r\n        \r\n</div>"

/***/ }),

/***/ "./src/app/pages/recruit.ts":
/*!**********************************!*\
  !*** ./src/app/pages/recruit.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Recruit = /** @class */ (function () {
    function Recruit() {
    }
    Recruit = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'heroga-recruit',
            template: __webpack_require__(/*! ./recruit.html */ "./src/app/pages/recruit.html")
        })
    ], Recruit);
    return Recruit;
}());
/* harmony default export */ __webpack_exports__["default"] = (Recruit);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ronaldomb\workspace\Landing-page-RRHH\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map