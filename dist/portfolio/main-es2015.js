(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\Website\MyPortfolioWebsite\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Rnwq":
/*!************************************!*\
  !*** ./src/app/route-animation.ts ***!
  \************************************/
/*! exports provided: fader, slider, transformer, stepper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepper", function() { return stepper; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

//==================================FADER ANIMATION 
const fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        // Set a default  style for enter and leave
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ]),
        // Animate the new page in
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ])
    ]),
]);
//================================================SLIDER ANIMATION
const slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', slideTo('right'))
]);
function slideTo(direction) {
    const optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ [direction]: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ [direction]: '100%' }))
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ [direction]: '0%' }))
            ])
        ]),
    ];
}
//=========================================Transformer Animation
const transformer = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', transformTo({ x: -100, y: -100, rotate: -720 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', transformTo({ x: 100, y: -100, rotate: 90 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', transformTo({ x: -100, y: -100, rotate: 360 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', transformTo({ x: 100, y: -100, rotate: -360 }))
]);
function transformTo({ x = 100, y = 0, rotate = 0 }) {
    const optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` }))
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: `translate(0, 0) rotate(0)` }))
            ])
        ]),
    ];
}
//===============================================Stepper 
const stepper = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                left: 0,
                width: '100%',
            }),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0) translateX(100%)', offset: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1) translateX(0%)', offset: 1 }),
                ])),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
                ])),
            ])
        ]),
    ])
]);


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-animation */ "Rnwq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
    ngOnInit() {
        // AOS.init();
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 42, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-dark", "fixed-top"], [1, "container-fluid"], ["routerLink", "home", 1, "navbar-brand", "Eczar"], ["src", "../assets/favicon_io/favicon-32x32.png"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["aria-current", "page", "href", "#home", 1, "nav-link"], [1, "fa", "fa-home", "fa-1x"], ["href", "#portfolio", 1, "nav-link"], [1, "fa", "fa-file", "fa-1x"], ["href", "#project", 1, "nav-link"], [1, "fa", "fa-laptop-code", "fa-1x"], ["id", "social-icons"], [1, "text-right"], [1, "social-icons"], ["href", "https://www.linkedin.com/in/abhishek-kumar-singh-07/", "role", "button", "data-mdb-ripple-color", "dark"], [1, "fab", "fa-linkedin"], ["href", "https://www.hackerrank.com/abhisheksingh007", "role", "button", "data-mdb-ripple-color", "dark"], [1, "fab", "fa-hackerrank"], ["href", "https://www.instagram.com/buddy_akki/", "role", "button", "data-mdb-ripple-color", "dark"], [1, "fab", "fa-instagram"], ["href", "https://github.com/AbhishekKumarSingh07", "role", "button", "data-mdb-ripple-color", "dark"], [1, "fab", "fa-github"], ["href", "mailto:abhisheksingh007@outloo.in", "role", "button", "data-mdb-ripple-color", "dark"], [1, "fas", "fa-envelope"], ["href", "tel:+917667488641", "role", "button", "data-mdb-ripple-color", "dark"], [1, "fas", "fa-phone-square-alt"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00A0ABHISHEK KUMAR SINGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "router-outlet", null, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@font-face {\r\n    font-family: Dela_Gothic_One;\r\n    src: url('DelaGothicOne-Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n    font-family: Londrina;\r\n    src: url('LondrinaSolid-Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n    font-family: OleoR;\r\n    src: url('OleoScript-Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n    font-family: OleoB;\r\n    src: url('OleoScript-Bold.ttf') format('truetype');\r\n}\r\n@font-face {\r\n    font-family: Eczar;\r\n    src: url('Eczar-Bold.ttf') format('truetype');\r\n}\r\n.Dela_Gothic_One[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-family: Dela_Gothic_One;\r\n    font-size: 35px;\r\n    white-space: nowrap;\r\n    color: #eee;\r\n}\r\n.Londrina[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-family: Londrina;\r\n    font-size: 15px;\r\n    white-space: nowrap;\r\n    \r\n}\r\n.OleoR[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-family: OleoR;\r\n    font-size: 20px;\r\n    color: #eee;\r\n}\r\n.OleoB[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-family: OleoB;\r\n    font-size: 30px;\r\n    color: darkorange;\r\n}\r\n.Eczar[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-family: Eczar;\r\n    font-size: 20px;\r\n    color: #FFF;\r\n    letter-spacing: 0.1rem;\r\n    white-space: pre-line;\r\n}\r\n\r\n\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n    background: #000;\r\n    \r\n    \r\n}\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover{\r\n    color: rgb(236, 240, 30);\r\n}\r\n.fa[_ngcontent-%COMP%]{\r\n    color:#eee;\r\n}\r\n.fa[_ngcontent-%COMP%]:hover{\r\n    color: rgb(236, 240, 30);\r\n}\r\n\r\n@media screen and (max-width:670px) {\r\n    .Eczar[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        font-family: Eczar;\r\n        font-size: 10px;\r\n        color: rgb(80, 83, 79);\r\n        letter-spacing: 0.1rem;\r\n    }\r\n    .fa[_ngcontent-%COMP%]{\r\n       font-size: 15px; \r\n       color: #000;\r\n    }\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.fas[_ngcontent-%COMP%]:hover{\r\n      color: rgb(248, 246, 132);\r\n  }\r\n.fab[_ngcontent-%COMP%]:hover{\r\n    color: rgb(248, 246, 132);\r\n}\r\n.fas[_ngcontent-%COMP%]{\r\n    color: rgb(80, 231, 211);\r\n}\r\n.fab[_ngcontent-%COMP%]{\r\n  color: rgb(80, 231, 211);\r\n}\r\n\r\n\r\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  transition: all 0.4s ease;\r\n}\r\n#social-icons[_ngcontent-%COMP%] {\r\n    padding:0;\r\n    position: fixed;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    right:0;\r\n    z-index: 199;\r\n  }\r\n.social-icons[_ngcontent-%COMP%] {\r\n    margin:0;\r\n    padding:0;\r\n    list-style:none;\r\n  }\r\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 1px 0px;\r\n  }\r\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width:50px;\r\n    height:50px;\r\n    display:inline-block;\r\n    line-height:50px;\r\n    text-align:center;\r\n    \r\n    background: transparent !important;\r\n    color: rgba(255,255,255,1);\r\n    font-size:18px;\r\n  }\r\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color:#1e1e1e;\r\n    background: yellow;\r\n    background-color: rgba(228, 40, 40, 0.1);\r\n\r\n    \r\n  }\r\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width:25px;\r\n    height:30px;\r\n    display:inline-block;\r\n    line-height:30px;\r\n    text-align:center;\r\n    background: rgba(255, 255, 255, 0.1);\r\n    color: rgba(255,255,255,1);\r\n    font-size:20px;\r\n  }\r\n.social-icons[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7cUZBR3FGO0FBQ3JGO0lBQ0ksNEJBQTRCO0lBQzVCLHdEQUFzRjtBQUMxRjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHdEQUFxRjtBQUN6RjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFEQUErRTtBQUNuRjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtEQUE0RTtBQUNoRjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZDQUFpRTtBQUNyRTtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCO0FBQ0E7OztxRkFHcUY7QUFDckYsOEVBQThFO0FBRTlFOzs7cUZBR3FGO0FBQ3JGO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1GQUFtRjtJQUNuRixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTs7O3FGQUdxRjtBQUNyRjtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHNCQUFzQjtJQUMxQjtJQUNBO09BQ0csZUFBZTtPQUNmLFdBQVc7SUFDZDs7QUFFSjtBQUNBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0g7OztxRkFHcUY7QUFDckY7OztxRkFHcUY7QUFHckY7OztxRkFHcUY7QUFFckY7Ozs7Ozs7Ozs7OztLQVlLO0FBRUg7TUFDSSx5QkFBeUI7RUFDN0I7QUFFQTtJQUNFLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTs7Ozs7Ozs7Ozs7OztHQWFHO0FBRUg7OztxRkFHcUY7QUFDckY7RUFFRSx5QkFBeUI7QUFDM0I7QUFDQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixPQUFPO0lBQ1AsWUFBWTtFQUNkO0FBQ0E7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7RUFDakI7QUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUMxQyxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0NBQXdDOztJQUV4Qyx3Q0FBd0M7RUFDMUM7QUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxjQUFjO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb250cyBTdGFydFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBEZWxhX0dvdGhpY19PbmU7XHJcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvRGVsYV9Hb3RoaWNfT25lL0RlbGFHb3RoaWNPbmUtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogTG9uZHJpbmE7XHJcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvTG9uZHJpbmFfU29saWQvTG9uZHJpbmFTb2xpZC1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IE9sZW9SO1xyXG4gICAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL09sZW9fU2NyaXB0L09sZW9TY3JpcHQtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogT2xlb0I7XHJcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvT2xlb19TY3JpcHQvT2xlb1NjcmlwdC1Cb2xkLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBFY3phcjtcclxuICAgIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9FY3phci9FY3phci1Cb2xkLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcbi5EZWxhX0dvdGhpY19PbmV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogRGVsYV9Hb3RoaWNfT25lO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG59XHJcbi5Mb25kcmluYXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBMb25kcmluYTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBcclxufVxyXG4uT2xlb1J7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogT2xlb1I7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuLk9sZW9Ce1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6IE9sZW9CO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbn1cclxuXHJcbi5FY3phcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBFY3phcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG4vKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvbnRzIEVuZFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4vKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hdmJhciBTdGFydFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsIHJnYig4MCwgODMsIDc5KSA1MCUsICNlZWUgNTAlKSAhaW1wb3J0YW50OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogIzMwMmEyYSAhaW1wb3J0YW50OyAqL1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZDpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMjM2LCAyNDAsIDMwKTtcclxufVxyXG4uZmF7XHJcbiAgICBjb2xvcjojZWVlO1xyXG59XHJcblxyXG4uZmE6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDIzNiwgMjQwLCAzMCk7XHJcbn1cclxuXHJcbi8qXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVkaWEgU2NyZWVuIFN0YXJ0XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjcwcHgpIHtcclxuICAgIC5FY3phcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEVjemFyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBjb2xvcjogcmdiKDgwLCA4MywgNzkpO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICB9XHJcbiAgICAuZmF7XHJcbiAgICAgICBmb250LXNpemU6IDE1cHg7IFxyXG4gICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQxNHB4KSB7XHJcbiAgICAuRWN6YXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBFY3phcjtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYig4MCwgODMsIDc5KTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1maXhlZC10b3BcclxuICAgIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogYXV0bztcclxuICAgIH1cclxuICAgIFxyXG59ICovXHJcbi8qXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVkaWEgU2NyZWVuIEVuZFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hdmJhciBFbmRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblxyXG4vKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvb3RlciBTZWN0aW9uIFN0YXJ0XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKiBcclxuLmNlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzAlO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMTkxKSAhaW1wb3J0YW50OyBcclxuXHJcbiAgfSAqL1xyXG5cclxuICAuZmFzOmhvdmVye1xyXG4gICAgICBjb2xvcjogcmdiKDI0OCwgMjQ2LCAxMzIpO1xyXG4gIH1cclxuXHJcbiAgLmZhYjpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMjQ4LCAyNDYsIDEzMik7XHJcbn1cclxuXHJcbi5mYXN7XHJcbiAgICBjb2xvcjogcmdiKDgwLCAyMzEsIDIxMSk7XHJcbn1cclxuXHJcbi5mYWJ7XHJcbiAgY29sb3I6IHJnYig4MCwgMjMxLCAyMTEpO1xyXG59XHJcblxyXG4vKiAuUmVzdW1le1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5SZXN1bWUgYXtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uUmVzdW1lIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59ICovXHJcblxyXG4vKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvb3RlciBTZWN0aW9uIEVuZFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uc29jaWFsLWljb25zIGxpIGF7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuI3NvY2lhbC1pY29ucyB7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICB6LWluZGV4OiAxOTk7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbnMgbGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDFweCAwcHg7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbnMgbGkgYSB7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OjUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgKi9cclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gIH1cclxuICAuc29jaWFsLWljb25zIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IzFlMWUxZTtcclxuICAgIGJhY2tncm91bmQ6IHllbGxvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCA0MCwgNDAsIDAuMSk7XHJcblxyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgOTIsIDQ4KTsgKi9cclxuICB9XHJcblxyXG4gIC5zb2NpYWwtaWNvbnMgbGkgYSB7XHJcbiAgICB3aWR0aDoyNXB4O1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OjMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */"], data: { animation: [
            //transformer
            _route_animation__WEBPACK_IMPORTED_MODULE_0__["stepper"]
            //slider
            //fader
        ] } });


/***/ }),

/***/ "V5EP":
/*!**********************************************!*\
  !*** ./src/app/my-page/my-page.component.ts ***!
  \**********************************************/
/*! exports provided: MyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPageComponent", function() { return MyPageComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ "ELNm");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");




class MyPageComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_0__["init"]({
            duration: 1000
        });
        const options = {
            strings: ['Software Developer', 'Web Developer', 'ML and AI Enthusiast', 'Part Time Cricketer'],
            typeSpeed: 100,
            backSpeed: 100,
            showCursor: true,
            cursorChar: '|',
            loop: true
        };
        const typed = new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a('.typed-element', options);
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
}
MyPageComponent.ɵfac = function MyPageComponent_Factory(t) { return new (t || MyPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"])); };
MyPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MyPageComponent, selectors: [["app-my-page"]], decls: 170, vars: 0, consts: [["id", "home"], [1, "bg"], [1, "bg", "bg2"], [1, "bg", "bg3"], [1, "content"], ["data-aos", "fade-right", 1, "Londrina", "aos-item"], [1, "text-2"], [1, "text-3", "typed-element"], ["type", "button", "href", "#about", 1, "btn", "btn-lg"], [1, "fa", "fa-arrow-up", "fa-1x"], [1, "fa", "fa-arrow-down", "fa-1x"], ["id", "portfolio"], ["id", "services", 1, "w3-services", "py-5"], [1, "container", "py-lg-3"], [1, "title-section"], [1, "main-title-w3"], [1, "title-line"], [1, "row", "w3-services-grids", "mt-lg-5", "mt-4"], [1, "col-lg-5", "w3-services-left-grid"], [2, "font-family", "Eczar"], ["href", "https://www.linkedin.com/company/fime/", 2, "font-family", "Eczar", "color", "darkturquoise"], ["href", "https://in.linkedin.com/company/zensar", 2, "font-family", "Eczar", "color", "darkturquoise"], ["href", "../../assets/data/Resume2.pdf", 2, "font-family", "Eczar"], ["href", "../../assets/data/Resume.pdf", 2, "font-family", "Eczar"], [1, "col-lg-7", "w3-services-right-grid", "mt-lg-0", "mt-5", "pl-lg-5"], [1, "row", "w3-icon-grid-gap1"], [1, "col-md-6", "col-sm-6", "w3-icon-grid1"], [1, "fas", "fa-desktop", "editContent"], [1, "clearfix"], ["id", "pdes"], [1, "fab", "fa-python", "editContent"], [1, "fas", "fa-mobile", "editContent"], [1, "fas", "fa-brain", "editContent"], ["id", "project"], [1, "w3l-services", "py-5"], [1, "container", "principles-grids", "principles-grids1", "py-lg-3"], [1, "scrollbar", "-services-scroll"], [1, "row", "abt-btm", "pt-4"], [1, "col-lg-3", "col-sm-6", "bottom-gds", "mt-md-0", "mt-2"], [1, "elite-services1"], [1, "bott-img"], [1, "icon-holder", "editContent"], ["aria-hidden", "true", 1, "fab", "fa-python", "service-icon"], [1, "mission"], [1, "description"], ["href", "https://github.com/AbhishekKumarSingh07/DataSet_Pandas_IPL", 1, "editContent"], [1, "col-lg-3", "col-sm-6", "bottom-gds", "mt-lg-0", "mt-5"], [1, "elite-services2"], ["href", "https://github.com/AbhishekKumarSingh07/Dataset_Matplot_Graph", 1, "editContent"], [1, "elite-services3"], ["aria-hidden", "true", 1, "fab", "fa-html5", "service-icon"], ["href", "https://github.com/AbhishekKumarSingh07/MyPortfolioWebsite", 1, "editContent"], [1, "elite-services4"], ["aria-hidden", "true", 1, "fas", "fa-mobile", "service-icon"], ["href", "https://github.com/AbhishekKumarSingh07/IES_College_Std_App", 1, "editContent"], [1, "page-footer", "font-small", "blue"], [1, "footer-copyright", "text-center", "py-3"]], template: function MyPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Hey, The Guy Whose name is written at top left is a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u00A0Who's this guy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Abhishek is a System Engineer at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "FIME");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " He is responsible for development and maintenance of testing tools for multiple platform in Payment domain.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Most of his work is done in Python language using various kind of encryption algorithm.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " He commenced his career at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Zensar Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " in 2019.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Where he was designated as Software Engineer and worked in banking domain for world fifth's oldest bank i.e. C. Hoare Co. He worked on multiple regulatory project which includes coding in Python, Oracle PL-SQL, VB.Net and C#. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Click to download Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Click to download Linkedin Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "\u00A0\u00A0Software Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Experienced in working as software developer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " Able to work in multiple language and framework.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Have working experience in Banking,Finance and Payment domain. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "\u00A0\u00A0Coding");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Started basic coding in the first year of Engineering. Coded mostly in python language but do have knowledge in various other language like C, C++, Java, C# and Android. Doing competetive coding practice on platform like Hackerrank, Leetcode, Hackerearth etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "\u00A0\u00A0Mobile and Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Done summer internship in Android Development and Hadoop.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " Made several android application for college projects. Some of the projects are uploaded on my github profile or scroll down to have a look. In web development field, created this portfolio website on Angular. Learnt the basic from online tutorial and designed it by taking insipiration from various portfolio websites. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "\u00A0\u00A0Area of Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Looking forward to make career in field of Artificial Intelligence and Machine Learning.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " Started learning from online platform and practicing on my own.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, " Completed some project using Numpy, Pandas and MatplotLib. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Pandas Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "In this project I use pandas library to create multiple csv file from one (dataset)file. In the code I put condition of division of data on the basis of year. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "See My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "MatplotLib Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "With the ipl data set created graph of year 2018 ip team match and loss. I used matplotlib in it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "See My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Web Portfolio Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "I created this website on Angular.I used bootstap classes in it. I kept it as public for personal use. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "See My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "College Android App");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "I created this android app for my final semester project. This app was made for students for interaction with college professors remotely. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "See My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "footer", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "\u00A9 Originally Created by Abhishek Kumar Singh - Not a downloaded template. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\r\n    font-family: Dela_Gothic_One;\r\n    src: url('DelaGothicOne-Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n    font-family: Londrina;\r\n    src: url('LondrinaSolid-Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n    font-family: OleoR;\r\n    src: url('OleoScript-Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n    font-family: OleoB;\r\n    src: url('OleoScript-Bold.ttf') format('truetype');\r\n}\r\n@font-face {\r\n    font-family: Eczar;\r\n    src: url('Eczar-Bold.ttf') format('truetype');\r\n}\r\n.Dela_Gothic_One[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-family: Dela_Gothic_One;\r\n    font-size: 35px;\r\n    white-space: nowrap;\r\n    color: #eee;\r\n}\r\n.Londrina[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-family: Londrina;\r\n    font-size: 35px;\r\n    white-space: nowrap;\r\n    \r\n}\r\n.OleoR[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-family: OleoR;\r\n    font-size: 20px;\r\n    color: rgb(5, 0, 0);\r\n}\r\n.OleoB[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-family: OleoB;\r\n    font-size: 30px;\r\n    color: darkorange;\r\n}\r\n.Eczar[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-family: Eczar;\r\n    font-size: 20px;\r\n    color: rgb(80, 83, 79);\r\n    letter-spacing: 0.1rem;\r\n    white-space: pre-line;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n    scroll-snap-align: center;\r\n}\r\n\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n    height:100%;\r\n    width: 100%;\r\n\r\n  }\r\nbody[_ngcontent-%COMP%] {\r\n    margin:0;\r\n  }\r\n.bg[_ngcontent-%COMP%] {\r\n    -webkit-animation:slide 3s ease-in-out infinite alternate;\r\n            animation:slide 3s ease-in-out infinite alternate;\r\n    \r\n    background-image: linear-gradient(-60deg, #36454F 50%, #000000 50%);\r\n    bottom:0;\r\n    left:-50%;\r\n    opacity:.5;\r\n    position:fixed;\r\n    right:-50%;\r\n    top:0;\r\n    z-index:-1;\r\n  }\r\n.bg2[_ngcontent-%COMP%] {\r\n    animation-direction:alternate-reverse;\r\n    -webkit-animation-duration:4s;\r\n            animation-duration:4s;\r\n  }\r\n.bg3[_ngcontent-%COMP%] {\r\n    -webkit-animation-duration:5s;\r\n            animation-duration:5s;\r\n  }\r\nh1[_ngcontent-%COMP%] {\r\n    font-family:monospace;\r\n  }\r\n\r\n@-webkit-keyframes slide {\r\n    0% {\r\n      transform:translateX(-25%);\r\n    }\r\n    100% {\r\n      transform:translateX(25%);\r\n    }\r\n  }\r\n@keyframes slide {\r\n    0% {\r\n      transform:translateX(-25%);\r\n    }\r\n    100% {\r\n      transform:translateX(25%);\r\n    }\r\n  }\r\n#home[_ngcontent-%COMP%]{\r\n      position: relative;\r\n      width: 100%;\r\n      height: 100%;\r\n      min-height: 600px;\r\n      justify-content: center !important;\r\n  }\r\n.content[_ngcontent-%COMP%] {\r\n    \r\n    background-color:transparent;\r\n\r\n    \r\n    left:50%;\r\n    padding:10vmin;\r\n    position:absolute;\r\n    text-align:center;\r\n    top:50%;\r\n    transform:translate(-50%, -50%);\r\n  }\r\n#home[_ngcontent-%COMP%]   .text-1[_ngcontent-%COMP%]{\r\n    color: rgb(231, 39, 5);\r\n    font-size: 35px;\r\n  \r\n}\r\n#home[_ngcontent-%COMP%]   .text-2[_ngcontent-%COMP%]{\r\n    color: rgb(19, 221, 194);\r\n  \r\n}\r\n#home[_ngcontent-%COMP%]   .text-3[_ngcontent-%COMP%]{\r\n    color: #fcf8f8 ; \r\n \r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    font-weight: 800;\r\n    background-color: rgb(245, 234, 200) !important;\r\n    border-radius:.25em;\r\n    box-shadow:0 0 .25em rgba(252, 194, 194, 0.25);\r\n    box-sizing:border-box; \r\n}\r\n.btn[_ngcontent-%COMP%]:hover{\r\n    background-color: turquoise !important;\r\n\r\n}\r\n.btn[_ngcontent-%COMP%]    > .fa[_ngcontent-%COMP%]    + .fa[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:hover    > .fa[_ngcontent-%COMP%] {\r\n  display: none;\r\n\r\n}\r\n.btn[_ngcontent-%COMP%]:hover    > .fa[_ngcontent-%COMP%]    + .fa[_ngcontent-%COMP%] {\r\n  display: inherit;\r\n}\r\n\r\n@media screen and (max-width:670px) {\r\n    .Eczar[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        font-family: Eczar;\r\n        font-size: 10px;\r\n        color: rgb(236, 10, 10);\r\n        letter-spacing: 0.1rem;\r\n    }\r\n    \r\n    .Londrina[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        font-family: Londrina;\r\n        font-size: 15px;\r\n        white-space: nowrap;\r\n        \r\n    }\r\n    #home[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n        min-height: 400px;\r\n    }\r\n}\r\n@media screen and (max-width:280px) {\r\n    .Eczar[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        font-family: Eczar;\r\n        font-size: 10px;\r\n        color: rgb(236, 10, 10);\r\n        letter-spacing: 0.1rem;\r\n    }\r\n    \r\n    .Londrina[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        font-family: Londrina;\r\n        font-size: 14px;\r\n        white-space: nowrap;\r\n        \r\n    }\r\n    #home[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n        min-height: 400px;\r\n    }\r\n}\r\n\r\n\r\n\r\n#about[_ngcontent-%COMP%]{\r\n    display: flex   ;\r\n    \r\n    height: 100%;\r\n    min-height: 600px;\r\n    font-family: poppins;\r\n}\r\n#about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n}\r\n#about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 300px;\r\n    display: block;\r\n    text-align: center;\r\n    padding: 40% 5%;\r\n    \r\n    background: transparent;\r\n    color: #fff;\r\n    border-radius: 15px;\r\n}\r\n#about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n}\r\n#about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n}\r\n#about[_ngcontent-%COMP%]   .single-box[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin-bottom: 30px ;\r\n}\r\n#about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100px;\r\n    height: 100px;\r\n    \r\n    overflow: hidden;\r\n    top: 15px;\r\n    left: 125px;\r\n    border-radius: 50%;\r\n}\r\n#about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n.carousel-control-prev[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 50px;\r\n    left: -50px;\r\n    text-align: center;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 70%;\r\n    background: rgb(162, 229, 238);\r\n}\r\n.carousel-control-next[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 50px;\r\n    right: -80px;\r\n    background: rgb(162, 229, 238);\r\n    text-align: center;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 70%;\r\n}\r\n\r\n\r\n@media screen and (min-width:280px) {\r\n    \r\n#about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100px;\r\n    height: 100px;\r\n    \r\n    overflow: hidden;\r\n    top: 15px;\r\n    left: 75px !important;\r\n    border-radius: 50%;\r\n}\r\n#about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 300px;\r\n    display: block;\r\n    text-align: center;\r\n    padding: 30% 5%;\r\n    \r\n    background: transparent;\r\n    color: #fff;\r\n    border-radius: 15px;\r\n}\r\n\r\n}\r\n@media screen and (min-width:320px) {\r\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        width: 100px;\r\n        height: 100px;\r\n        overflow: hidden;\r\n        top: 15px;\r\n        left: 98px !important;\r\n        border-radius: 50%;\r\n    }\r\n    #about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        width: 100%;\r\n        height: 50%;\r\n        display: block;\r\n        text-align: center;\r\n        padding: 30% 0% !important;\r\n        overflow: hidden;\r\n        background: transparent;\r\n        color: #fff;\r\n        border-radius: 15px;\r\n        \r\n    }\r\n}\r\n@media screen and (min-width:360px) {\r\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        width: 100px;\r\n        height: 100px;\r\n        overflow: hidden;\r\n        top: 0 !important;\r\n        left: 110px !important;\r\n        border-radius: 50%;\r\n    }\r\n\r\n}\r\n@media screen and (min-width:375px) {\r\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        width: 100px;\r\n        height: 100px;\r\n        overflow: hidden;\r\n        left: 125px !important;\r\n        border-radius: 50%;\r\n    }\r\n\r\n}\r\n@media screen and (min-width:414px) {\r\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        width: 100px;\r\n        height: 100px;\r\n        overflow: hidden;\r\n        left: 140px !important;\r\n        border-radius: 50%;\r\n    }\r\n    #about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n        margin-top: 5%;\r\n    }\r\n\r\n}\r\n@media screen and (min-width:540px) {\r\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        width: 100px;\r\n        height: 100px;\r\n        overflow: hidden;\r\n        top: 0 !important;\r\n        left: 205px !important;\r\n        border-radius: 50%;\r\n    }\r\n \r\n    #about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        width: 100%;\r\n        height: 50%;\r\n        display: block;\r\n        text-align: center;\r\n        padding: 20% 0% !important;\r\n        overflow: hidden;\r\n        background: transparent;\r\n        color: #fff;\r\n        border-radius: 15px;\r\n        \r\n    }\r\n    #about[_ngcontent-%COMP%]   .single-box[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        margin-bottom: 0 ;\r\n    }\r\n}\r\n@media screen and (min-width:768px) {\r\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: hidden;\r\n        top: 5px !important;\r\n        left: 28% !important;\r\n        border-radius: 50%;\r\n        margin-bottom: 45%;\r\n    }\r\n \r\n    #about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n        text-align: center;\r\n        padding: 40% 0% !important;\r\n        overflow: hidden;\r\n        background: transparent;\r\n        color: #fff;\r\n        border-radius: 15px;\r\n    }\r\n}\r\n@media screen and (min-width:1024px) {\r\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        width: 100px;\r\n        height: 100px;\r\n        overflow: hidden;\r\n        top: 0%;\r\n        left: 130px !important;\r\n        border-radius: 50%;\r\n        margin-bottom: 45%;\r\n    }\r\n \r\n    #about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n        text-align: center;\r\n        padding: 40% 0% !important;\r\n        overflow: hidden;\r\n        background: transparent;\r\n        color: #fff;\r\n        border-radius: 15px;\r\n    }\r\n}\r\n\r\n\r\n\r\n#portfolio[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto; }\r\n@media (min-width: 576px) {\r\n    .container[_ngcontent-%COMP%] {\r\n      max-width: 540px; } }\r\n@media (min-width: 768px) {\r\n    .container[_ngcontent-%COMP%] {\r\n      max-width: 720px; } }\r\n@media (min-width: 992px) {\r\n    .container[_ngcontent-%COMP%] {\r\n      max-width: 960px; } }\r\n@media (min-width: 1200px) {\r\n    .container[_ngcontent-%COMP%] {\r\n      max-width: 1140px; } }\r\n.main-title-w3[_ngcontent-%COMP%]{\r\n    font-family: 'Eczar';\r\n    color:#eee;\r\n}\r\n.w3-services-grids[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #eee;\r\n}\r\n.w3-services-grids[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\r\n.w3-services-right-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #232527;\r\n    font-family: 'Eczar';\r\n    font-size: 20px;\r\n    line-height: 27px;\r\n    \r\n    text-align: left !important;\r\n    \r\n    margin-bottom: 15px;\r\n    font-weight: 700;\r\n    transition: .3s;\r\n    -webkit-transition: .3s;\r\n    -moz-transition: .3s;\r\n    -ms-transition: .3s;\r\n    -o-transition: .3s; }\r\n.editContent[_ngcontent-%COMP%]{\r\n    color: darkturquoise;\r\n}\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n    display: block;\r\n    clear: both;\r\n    content: \"\"; }\r\n.w3-icon-grid1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block; \r\ntext-decoration: none;}\r\n.w3-icon-grid1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    color: yellow;\r\n}\r\n.w3-icon-grid1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\r\n  color: #00d679;\r\n  transition: .3s;\r\n  -webkit-transition: .3s;\r\n  -moz-transition: .3s;\r\n  -ms-transition: .3s;\r\n  -o-transition: .3s; }\r\n.w3-icon-grid1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-family: 'Eczar';\r\n    font-size: 14px;\r\n    line-height: 26px;\r\n    color: #eee;\r\n    padding: 0 0em;\r\n    margin: 0; }\r\n.w3-icon-grid1[_ngcontent-%COMP%]   span.fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    float: left;\r\n    width: 40px;\r\n    color: #00d679; }\r\n.w3l-services[_ngcontent-%COMP%] {\r\n    background: transparent; \r\n    margin-bottom: 50px;\r\n}\r\n#pdes[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    color: #fff;\r\n}\r\n.w3-icon-grid1[_ngcontent-%COMP%]:nth-child(1), .w3-icon-grid1[_ngcontent-%COMP%]:nth-child(2), .w3-icon-grid1[_ngcontent-%COMP%]:nth-child(3) {\r\n  margin-bottom: 50px; }\r\n@media (max-width: 568px) {\r\n  .w3-icon-grid1[_ngcontent-%COMP%]:nth-child(1), .w3-icon-grid1[_ngcontent-%COMP%]:nth-child(2), .w3-icon-grid1[_ngcontent-%COMP%]:nth-child(3) {\r\n    margin-bottom: 30px; }\r\n  .w3-icon-grid1[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px; }\r\n  .w3-icon-grid1[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0px; }\r\n  .w3-services-left-grid[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    line-height: 35px; } }\r\n.w3-services-left-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 15px;\r\n        color: #FF0000;\r\n        text-decoration: none;\r\n     }\r\n.w3-services-left-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        font-size: 17px;\r\n        color: #e7eb0c;\r\n        text-decoration: underline;\r\n     }\r\n@media (max-width: 415px) {\r\n    .w3-services-right-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n      font-size: 20px;\r\n      line-height: 27px;\r\n      margin-bottom: 10px; } }\r\n.elite-services1[_ngcontent-%COMP%] {\r\n  background: #1f242c;\r\n  border-radius: 8px;\r\nheight: 125%; }\r\n.elite-services2[_ngcontent-%COMP%] {\r\n  background: #1f242c;\r\n  border-radius: 8px;\r\n  height: 125%; }\r\n.elite-services3[_ngcontent-%COMP%] {\r\n  background: #1f242c;\r\n  border-radius: 8px;\r\n  height: 125%; }\r\n.elite-services4[_ngcontent-%COMP%] {\r\n  background: #1f242c;\r\n  border-radius: 8px;\r\n  height: 125%; }\r\n.bott-img[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 250px;\r\n        margin: 0px 0;\r\n        text-align: center;\r\n        transition: all 0.3s ease; }\r\n.bott-img[_ngcontent-%COMP%]:hover {\r\n        padding: 0 20px; \r\n        \r\n        \r\n    }\r\n.bott-img[_ngcontent-%COMP%]   .icon-holder[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 60px;\r\n        display: inline-block;\r\n        margin-bottom: 68px;\r\n        width: 70px;\r\n        height: 70px;\r\n        line-height: 70px;\r\n        transition: all 0.3s ease;\r\n        border-radius: 100% !important;\r\n        color: #fff !important;\r\n        font-size: 26px;\r\n        background-color: #00d679 !important; }\r\n.bott-img[_ngcontent-%COMP%]   .mission[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 10px;\r\n        transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n        color: #000;\r\n        font-size: 22px;\r\n        line-height: 28px;\r\n        font-weight: 700;\r\n        color: #fff; }\r\n.bott-img[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n        margin: -6em auto 0;\r\n        opacity: 0;\r\n        transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n        transform: scale(0); }\r\n.bott-img[_ngcontent-%COMP%]   .icon-holder[_ngcontent-%COMP%]    > .service-icon[_ngcontent-%COMP%] {\r\n            line-height: 70px; }\r\n.bott-img[_ngcontent-%COMP%]:hover   .icon-holder[_ngcontent-%COMP%] {\r\n            top: -40px;\r\n            background: #00d679; }\r\n.bott-img[_ngcontent-%COMP%]:hover   .mission[_ngcontent-%COMP%] {\r\n            top: -80px; }\r\n.bott-img[_ngcontent-%COMP%]:hover   .description[_ngcontent-%COMP%] {\r\n            opacity: 1;\r\n            transform: scale(1);\r\n            font-size: 14px;\r\n            line-height: 2.2em; }\r\n.bott-img[_ngcontent-%COMP%]:hover   .description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n            top: -60px; }\r\n.description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 17px;\r\n        line-height: 26px;\r\n        font-weight: 700;\r\n        color: #00d679; }\r\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      color: #ccc;\r\n      font-size: 16px;\r\n      line-height: 25px;\r\n      margin-top: 20px;\r\n      margin-bottom: 20px; }\r\n.description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n        color: rgb(248, 211, 47); }\r\n.w3l-services[_ngcontent-%COMP%]   h3.head-title[_ngcontent-%COMP%] {\r\n    color: rgb(236, 16, 16);\r\n    font-size: 40px;\r\n    line-height: 45px;\r\n    font-weight: 700;\r\n    margin-bottom: 55px;\r\n    text-align: center; }\r\n@media (max-width: 991px) {\r\n    .w3l-services[_ngcontent-%COMP%]   h3.head-title[_ngcontent-%COMP%] {\r\n      font-size: 35px;\r\n      line-height: 40px; } }\r\n\r\n\r\n\r\n.footer-copyright[_ngcontent-%COMP%]{\r\n    font-family: 'Eczar';\r\n    color: #eee;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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akIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBRTtBQUd0QjtJQUNFO01BQ0UsZUFBZTtNQUNmLGlCQUFpQixFQUFFLEVBQUU7QUFDM0I7OztxRkFHcUY7QUFHckY7OztxRkFHcUY7QUFFckY7OztxRkFHcUY7QUFDckY7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztBQUNmIiwiZmlsZSI6Im15LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9udHMgU3RhcnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogRGVsYV9Hb3RoaWNfT25lO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL0RlbGFfR290aGljX09uZS9EZWxhR290aGljT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IExvbmRyaW5hO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL0xvbmRyaW5hX1NvbGlkL0xvbmRyaW5hU29saWQtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPbGVvUjtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9PbGVvX1NjcmlwdC9PbGVvU2NyaXB0LVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IE9sZW9CO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL09sZW9fU2NyaXB0L09sZW9TY3JpcHQtQm9sZC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogRWN6YXI7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvRWN6YXIvRWN6YXItQm9sZC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG4uRGVsYV9Hb3RoaWNfT25le1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6IERlbGFfR290aGljX09uZTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBjb2xvcjogI2VlZTtcclxufVxyXG4uTG9uZHJpbmF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogTG9uZHJpbmE7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgXHJcbn1cclxuLk9sZW9Se1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6IE9sZW9SO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYig1LCAwLCAwKTtcclxufVxyXG5cclxuLk9sZW9Ce1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6IE9sZW9CO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbn1cclxuXHJcbi5FY3phcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBFY3phcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiByZ2IoODAsIDgzLCA3OSk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcbi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9udHMgRW5kXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbnNlY3Rpb257XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiAuY29udGFpbmVye1xyXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XHJcbn0gKi9cclxuXHJcbi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSBTZWN0aW9uIFN0YXJ0XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmh0bWwge1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZyB7XHJcbiAgICBhbmltYXRpb246c2xpZGUgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC02MGRlZywgcmdiKDgwLCA4MywgNzkpIDUwJSwgcmdiKDIwMywgMjEyLCAxNDcpIDUwJSk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTYwZGVnLCAjMzY0NTRGIDUwJSwgIzAwMDAwMCA1MCUpO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBsZWZ0Oi01MCU7XHJcbiAgICBvcGFjaXR5Oi41O1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICByaWdodDotNTAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICB6LWluZGV4Oi0xO1xyXG4gIH1cclxuICBcclxuICAuYmcyIHtcclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246YWx0ZXJuYXRlLXJldmVyc2U7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246NHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZzMge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjVzO1xyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICBmb250LWZhbWlseTptb25vc3BhY2U7XHJcbiAgfVxyXG4gIC8qIC5teXBpY3tcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3BpYzQucG5nJyk7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLyogdG9wOiA0MCU7IFxyXG4gICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBsZWZ0OiAzNiU7XHJcbiAgfVxyXG4gIC5teXBpYyBpbWd7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAgKi9cclxuXHJcblxyXG4gIEBrZXlmcmFtZXMgc2xpZGUge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjUlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgyNSUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAjaG9tZXtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC44KTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgLyogYm9yZGVyLXJhZGl1czouMjVlbTtcclxuICAgIGJveC1zaGFkb3c6MCAwIC4yNWVtIHJnYmEoMCwwLDAsLjI1KTtcclxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDsgKi9cclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgcGFkZGluZzoxMHZtaW47XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gI2hvbWUgLnRleHQtMXtcclxuICAgIGNvbG9yOiByZ2IoMjMxLCAzOSwgNSk7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgXHJcbn1cclxuXHJcbiNob21lIC50ZXh0LTJ7XHJcbiAgICBjb2xvcjogcmdiKDE5LCAyMjEsIDE5NCk7XHJcbiAgXHJcbn1cclxuXHJcbiNob21lIC50ZXh0LTN7XHJcbiAgICBjb2xvcjogI2ZjZjhmOCA7IFxyXG4gXHJcbn1cclxuLmJ0bntcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMzQsIDIwMCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6LjI1ZW07XHJcbiAgICBib3gtc2hhZG93OjAgMCAuMjVlbSByZ2JhKDI1MiwgMTk0LCAxOTQsIDAuMjUpO1xyXG4gICAgYm94LXNpemluZzpib3JkZXItYm94OyBcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHR1cnF1b2lzZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmJ0biA+IC5mYSArIC5mYSxcclxuLmJ0bjpob3ZlciA+IC5mYSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbn1cclxuLmJ0bjpob3ZlciA+IC5mYSArIC5mYSB7XHJcbiAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG4vKlxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGlhIFNjcmVlbiBTdGFydFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY3MHB4KSB7XHJcbiAgICAuRWN6YXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBFY3phcjtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigyMzYsIDEwLCAxMCk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLkxvbmRyaW5he1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmb250LWZhbWlseTogTG9uZHJpbmE7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAjaG9tZXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MjgwcHgpIHtcclxuICAgIC5FY3phcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEVjemFyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBjb2xvcjogcmdiKDIzNiwgMTAsIDEwKTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuTG9uZHJpbmF7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMb25kcmluYTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICNob21le1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbn1cclxuLypcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWRpYSBTY3JlZW4gRW5kXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4gIC8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSBTZWN0aW9uIEVuZFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuXHJcblxyXG4vKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFNlY3Rpb24gU3RhcnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiNhYm91dHtcclxuICAgIGRpc3BsYXk6IGZsZXggICA7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgtMTAwZGVnLCMzNjQ1NEYsIzAwMDAwMCA1MCUpOyAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICBmb250LWZhbWlseTogcG9wcGlucztcclxufVxyXG4jYWJvdXQgLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4jYWJvdXQgLmltZy10ZXh0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0MCUgNSU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMjYyNjI2OyAqL1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4jYWJvdXQgLmltZy10ZXh0IGgye1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbiNhYm91dCAuaW1nLXRleHQgcHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuI2Fib3V0IC5zaW5nbGUtYm94e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweCA7XHJcbn1cclxuI2Fib3V0IC5pbWctYXJlYXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAvKiBib3JkZXI6IDVweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDEyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiNhYm91dCAuaW1nLWFyZWEgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYgLmZhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBsZWZ0OiAtNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE2MiwgMjI5LCAyMzgpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IC5mYXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgcmlnaHQ6IC04MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE2MiwgMjI5LCAyMzgpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3MCU7XHJcbn1cclxuLyogLmNhcm91c2VsLWluZGljYXRvcnN7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpe1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlIDtcclxufVxyXG5cclxuLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn0gKi9cclxuXHJcbi8qXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVkaWEgU2NyZWVuIFN0YXJ0XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjI4MHB4KSB7XHJcbiAgICBcclxuI2Fib3V0IC5pbWctYXJlYXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAvKiBib3JkZXI6IDVweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDc1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4jYWJvdXQgLmltZy10ZXh0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMCUgNSU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMjYyNjI2OyAqL1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MzIwcHgpIHtcclxuICAgICNhYm91dCAuaW1nLWFyZWF7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIGxlZnQ6IDk4cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAjYWJvdXQgLmltZy10ZXh0e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMzAlIDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjM2MHB4KSB7XHJcbiAgICAjYWJvdXQgLmltZy1hcmVhe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDExMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxufSBcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6Mzc1cHgpIHtcclxuICAgICNhYm91dCAuaW1nLWFyZWF7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbGVmdDogMTI1cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQxNHB4KSB7XHJcbiAgICAjYWJvdXQgLmltZy1hcmVhe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGxlZnQ6IDE0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgI2Fib3V0IC5jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjU0MHB4KSB7XHJcbiAgICAjYWJvdXQgLmltZy1hcmVhe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIwNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gXHJcbiAgICAjYWJvdXQgLmltZy10ZXh0e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjAlIDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgI2Fib3V0IC5zaW5nbGUtYm94e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwIDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAjYWJvdXQgLmltZy1hcmVhe1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDI4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0NSU7XHJcbiAgICB9XHJcbiBcclxuICAgICNhYm91dCAuaW1nLXRleHR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNDAlIDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG59IFxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICAgICNhYm91dCAuaW1nLWFyZWF7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICBsZWZ0OiAxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0NSU7XHJcbiAgICB9XHJcbiBcclxuICAgICNhYm91dCAuaW1nLXRleHR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNDAlIDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLypcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWRpYSBTY3JlZW4gRW5kXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4gIC8qXHJcblxyXG4vKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFNlY3Rpb24gRW5kXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5cclxuXHJcbi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9ydGZvbGlvIFNlY3Rpb24gU3RhcnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblxyXG5cclxuI3BvcnRmb2xpbyAuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDU0MHB4OyB9IH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDcyMHB4OyB9IH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDk2MHB4OyB9IH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMTQwcHg7IH0gfSAgXHJcbiAgXHJcbi5tYWluLXRpdGxlLXcze1xyXG4gICAgZm9udC1mYW1pbHk6ICdFY3phcic7XHJcbiAgICBjb2xvcjojZWVlO1xyXG59XHJcblxyXG4udzMtc2VydmljZXMtZ3JpZHMgcHtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG59XHJcbi53My1zZXJ2aWNlcy1ncmlkcyBoNHtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG59XHJcbi53My1zZXJ2aWNlcy1yaWdodC1ncmlkIGgzIHtcclxuICAgIGNvbG9yOiAjMjMyNTI3O1xyXG4gICAgZm9udC1mYW1pbHk6ICdFY3phcic7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIC8qIGZsb2F0OiByaWdodCAgIWltcG9ydGFudDsgKi9cclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IC4zcztcclxuICAgIC1vLXRyYW5zaXRpb246IC4zczsgfVxyXG4uZWRpdENvbnRlbnR7XHJcbiAgICBjb2xvcjogZGFya3R1cnF1b2lzZTtcclxufVxyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBjb250ZW50OiBcIlwiOyB9XHJcblxyXG4udzMtaWNvbi1ncmlkMSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO31cclxuXHJcbi53My1pY29uLWdyaWQxIGgze1xyXG4gICAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuXHJcbiBcclxuXHJcbi53My1pY29uLWdyaWQxIGE6aG92ZXIgaDMge1xyXG4gIGNvbG9yOiAjMDBkNjc5O1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IC4zcztcclxuICAtbXMtdHJhbnNpdGlvbjogLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IC4zczsgfVxyXG5cclxuLnczLWljb24tZ3JpZDEgcCB7XHJcbiAgICBmb250LWZhbWlseTogJ0VjemFyJztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAwIDBlbTtcclxuICAgIG1hcmdpbjogMDsgfVxyXG4gIFxyXG4udzMtaWNvbi1ncmlkMSBzcGFuLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBjb2xvcjogIzAwZDY3OTsgfSAgXHJcblxyXG4udzNsLXNlcnZpY2VzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuIFxyXG5cclxuI3BkZXN7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi53My1pY29uLWdyaWQxOm50aC1jaGlsZCgxKSxcclxuLnczLWljb24tZ3JpZDE6bnRoLWNoaWxkKDIpLFxyXG4udzMtaWNvbi1ncmlkMTpudGgtY2hpbGQoMykge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7IH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gIC53My1pY29uLWdyaWQxOm50aC1jaGlsZCgxKSxcclxuICAudzMtaWNvbi1ncmlkMTpudGgtY2hpbGQoMiksXHJcbiAgLnczLWljb24tZ3JpZDE6bnRoLWNoaWxkKDMpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cclxuICAudzMtaWNvbi1ncmlkMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XHJcbiAgLnczLWljb24tZ3JpZDE6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cclxuICAudzMtc2VydmljZXMtbGVmdC1ncmlkIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4OyB9IH0gICAgIFxyXG4gICBcclxuICAgIC53My1zZXJ2aWNlcy1sZWZ0LWdyaWQgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICB9ICBcclxuXHJcbiAgICAgLnczLXNlcnZpY2VzLWxlZnQtZ3JpZCBhOmhvdmVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgY29sb3I6ICNlN2ViMGM7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNXB4KSB7XHJcbiAgICAudzMtc2VydmljZXMtcmlnaHQtZ3JpZCBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH0gfSAgICBcclxuLmVsaXRlLXNlcnZpY2VzMSB7XHJcbiAgYmFja2dyb3VuZDogIzFmMjQyYztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbmhlaWdodDogMTI1JTsgfVxyXG5cclxuLmVsaXRlLXNlcnZpY2VzMiB7XHJcbiAgYmFja2dyb3VuZDogIzFmMjQyYztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgaGVpZ2h0OiAxMjUlOyB9XHJcblxyXG4uZWxpdGUtc2VydmljZXMzIHtcclxuICBiYWNrZ3JvdW5kOiAjMWYyNDJjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBoZWlnaHQ6IDEyNSU7IH1cclxuXHJcbi5lbGl0ZS1zZXJ2aWNlczQge1xyXG4gIGJhY2tncm91bmQ6ICMxZjI0MmM7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGhlaWdodDogMTI1JTsgfVxyXG5cclxuICAgIC5ib3R0LWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBtYXJnaW46IDBweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB9XHJcbiAgICAgIFxyXG4gICAgLmJvdHQtaW1nOmhvdmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7IFxyXG4gICAgICAgIC8qIGJhY2tncm91bmQ6ICMwMGQ2Nzk7ICAgKi9cclxuICAgICAgICAvKiBjb2xvcjojQzAzOTJCICFpbXBvcnRhbnQ7ICAgICovXHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgLmJvdHQtaW1nIC5pY29uLWhvbGRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjhweDtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDY3OSAhaW1wb3J0YW50OyB9XHJcbiAgICAgIFxyXG4gICAgLmJvdHQtaW1nIC5taXNzaW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjsgfVxyXG4gICAgICBcclxuICAgIC5ib3R0LWltZyAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogLTZlbSBhdXRvIDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxyXG4gICAgLmJvdHQtaW1nIC5pY29uLWhvbGRlciA+IC5zZXJ2aWNlLWljb24ge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNzBweDsgfVxyXG4gICAgICAgICAgXHJcbiAgICAuYm90dC1pbWc6aG92ZXIgLmljb24taG9sZGVyIHtcclxuICAgICAgICAgICAgdG9wOiAtNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwZDY3OTsgfVxyXG4gICAgICAgICAgXHJcbiAgICAuYm90dC1pbWc6aG92ZXIgLm1pc3Npb24ge1xyXG4gICAgICAgICAgICB0b3A6IC04MHB4OyB9XHJcbiAgICAgICAgICBcclxuICAgIC5ib3R0LWltZzpob3ZlciAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjJlbTsgfVxyXG4gICAgICAgICAgXHJcbiAgICAuYm90dC1pbWc6aG92ZXIgLmRlc2NyaXB0aW9uIGEge1xyXG4gICAgICAgICAgICB0b3A6IC02MHB4OyB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDBkNjc5OyB9XHJcbiAgICAgIFxyXG4gICAgLmRlc2NyaXB0aW9uIHAge1xyXG4gICAgICBjb2xvcjogI2NjYztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxyXG4gICAgXHJcbiAgICAuZGVzY3JpcHRpb24gYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNDgsIDIxMSwgNDcpOyB9XHJcblxyXG4gIC53M2wtc2VydmljZXMgaDMuaGVhZC10aXRsZSB7XHJcbiAgICBjb2xvcjogcmdiKDIzNiwgMTYsIDE2KTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICBcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC53M2wtc2VydmljZXMgaDMuaGVhZC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7IH0gfVxyXG4vKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvcnRmb2xpbyBTZWN0aW9uIEVuZFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuXHJcbi8qXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVkaWEgU2NyZWVuIFN0YXJ0XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKlxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGlhIFNjcmVlbiBFbmRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmZvb3Rlci1jb3B5cmlnaHR7XHJcbiAgICBmb250LWZhbWlseTogJ0VjemFyJztcclxuICAgIGNvbG9yOiAjZWVlO1xyXG59XHJcbiAgIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _my_page_my_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-page/my-page.component */ "V5EP");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _my_page_my_page_component__WEBPACK_IMPORTED_MODULE_3__["MyPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_page_my_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page/my-page.component */ "V5EP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _my_page_my_page_component__WEBPACK_IMPORTED_MODULE_1__["MyPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map