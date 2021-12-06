(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/a_007/Documents/Projects/Website/MyPortfolioWebsite/src/main.ts */"zUnb");


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@font-face {\n    font-family: Dela_Gothic_One;\n    src: url('DelaGothicOne-Regular.ttf') format('truetype');\n}\n@font-face {\n    font-family: Londrina;\n    src: url('LondrinaSolid-Regular.ttf') format('truetype');\n}\n@font-face {\n    font-family: OleoR;\n    src: url('OleoScript-Regular.ttf') format('truetype');\n}\n@font-face {\n    font-family: OleoB;\n    src: url('OleoScript-Bold.ttf') format('truetype');\n}\n@font-face {\n    font-family: Eczar;\n    src: url('Eczar-Bold.ttf') format('truetype');\n}\n.Dela_Gothic_One[_ngcontent-%COMP%]{\n    position: relative;\n    font-family: Dela_Gothic_One;\n    font-size: 35px;\n    white-space: nowrap;\n    color: #eee;\n}\n.Londrina[_ngcontent-%COMP%]{\n    position: relative;\n    font-family: Londrina;\n    font-size: 15px;\n    white-space: nowrap;\n    \n}\n.OleoR[_ngcontent-%COMP%]{\n    position: relative;\n    font-family: OleoR;\n    font-size: 20px;\n    color: #eee;\n}\n.OleoB[_ngcontent-%COMP%]{\n    position: relative;\n    font-family: OleoB;\n    font-size: 30px;\n    color: darkorange;\n}\n.Eczar[_ngcontent-%COMP%]{\n    position: relative;\n    font-family: Eczar;\n    font-size: 20px;\n    color: #FFF;\n    letter-spacing: 0.1rem;\n    white-space: pre-line;\n}\n\n\n\n.navbar[_ngcontent-%COMP%]{\n    background: #000;\n    \n    \n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover{\n    color: rgb(236, 240, 30);\n}\n.fa[_ngcontent-%COMP%]{\n    color:#eee;\n}\n.fa[_ngcontent-%COMP%]:hover{\n    color: rgb(236, 240, 30);\n}\n\n@media screen and (max-width:670px) {\n    .Eczar[_ngcontent-%COMP%]{\n        position: relative;\n        font-family: Eczar;\n        font-size: 10px;\n        color: rgb(80, 83, 79);\n        letter-spacing: 0.1rem;\n    }\n    .fa[_ngcontent-%COMP%]{\n       font-size: 15px; \n       color: #000;\n    }\n    \n}\n\n\n\n\n\n.fas[_ngcontent-%COMP%]:hover{\n      color: rgb(248, 246, 132);\n  }\n.fab[_ngcontent-%COMP%]:hover{\n    color: rgb(248, 246, 132);\n}\n.fas[_ngcontent-%COMP%]{\n    color: rgb(80, 231, 211);\n}\n.fab[_ngcontent-%COMP%]{\n  color: rgb(80, 231, 211);\n}\n\n\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  transition: all 0.4s ease;\n}\n#social-icons[_ngcontent-%COMP%] {\n    padding:0;\n    position: fixed;\n    top: 50%;\n    transform: translateY(-50%);\n    right:0;\n    z-index: 199;\n  }\n.social-icons[_ngcontent-%COMP%] {\n    margin:0;\n    padding:0;\n    list-style:none;\n  }\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1px 0px;\n  }\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width:50px;\n    height:50px;\n    display:inline-block;\n    line-height:50px;\n    text-align:center;\n    \n    background: transparent !important;\n    color: rgba(255,255,255,1);\n    font-size:18px;\n  }\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color:#1e1e1e;\n    background: yellow;\n    background-color: rgba(228, 40, 40, 0.1);\n\n    \n  }\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width:25px;\n    height:30px;\n    display:inline-block;\n    line-height:30px;\n    text-align:center;\n    background: rgba(255, 255, 255, 0.1);\n    color: rgba(255,255,255,1);\n    font-size:20px;\n  }\n.social-icons[_ngcontent-%COMP%] {\n    margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7cUZBR3FGO0FBQ3JGO0lBQ0ksNEJBQTRCO0lBQzVCLHdEQUFzRjtBQUMxRjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHdEQUFxRjtBQUN6RjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFEQUErRTtBQUNuRjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtEQUE0RTtBQUNoRjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZDQUFpRTtBQUNyRTtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCO0FBQ0E7OztxRkFHcUY7QUFDckYsOEVBQThFO0FBRTlFOzs7cUZBR3FGO0FBQ3JGO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1GQUFtRjtJQUNuRixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTs7O3FGQUdxRjtBQUNyRjtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHNCQUFzQjtJQUMxQjtJQUNBO09BQ0csZUFBZTtPQUNmLFdBQVc7SUFDZDs7QUFFSjtBQUNBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0g7OztxRkFHcUY7QUFDckY7OztxRkFHcUY7QUFHckY7OztxRkFHcUY7QUFFckY7Ozs7Ozs7Ozs7OztLQVlLO0FBRUg7TUFDSSx5QkFBeUI7RUFDN0I7QUFFQTtJQUNFLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTs7Ozs7Ozs7Ozs7OztHQWFHO0FBRUg7OztxRkFHcUY7QUFDckY7RUFFRSx5QkFBeUI7QUFDM0I7QUFDQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixPQUFPO0lBQ1AsWUFBWTtFQUNkO0FBQ0E7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7RUFDakI7QUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUMxQyxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0NBQXdDOztJQUV4Qyx3Q0FBd0M7RUFDMUM7QUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxjQUFjO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvbnRzIFN0YXJ0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IERlbGFfR290aGljX09uZTtcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvRGVsYV9Hb3RoaWNfT25lL0RlbGFHb3RoaWNPbmUtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IExvbmRyaW5hO1xuICAgIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9Mb25kcmluYV9Tb2xpZC9Mb25kcmluYVNvbGlkLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogT2xlb1I7XG4gICAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL09sZW9fU2NyaXB0L09sZW9TY3JpcHQtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IE9sZW9CO1xuICAgIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9PbGVvX1NjcmlwdC9PbGVvU2NyaXB0LUJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBFY3phcjtcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvRWN6YXIvRWN6YXItQm9sZC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbi5EZWxhX0dvdGhpY19PbmV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiBEZWxhX0dvdGhpY19PbmU7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICNlZWU7XG59XG4uTG9uZHJpbmF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiBMb25kcmluYTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBcbn1cbi5PbGVvUntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6IE9sZW9SO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2VlZTtcbn1cblxuLk9sZW9Ce1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LWZhbWlseTogT2xlb0I7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xufVxuXG4uRWN6YXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiBFY3phcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9udHMgRW5kXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmF2YmFyIFN0YXJ0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm5hdmJhcntcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsIHJnYig4MCwgODMsIDc5KSA1MCUsICNlZWUgNTAlKSAhaW1wb3J0YW50OyAqL1xuICAgIC8qIGJhY2tncm91bmQ6ICMzMDJhMmEgIWltcG9ydGFudDsgKi9cbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZDpob3ZlcntcbiAgICBjb2xvcjogcmdiKDIzNiwgMjQwLCAzMCk7XG59XG4uZmF7XG4gICAgY29sb3I6I2VlZTtcbn1cblxuLmZhOmhvdmVye1xuICAgIGNvbG9yOiByZ2IoMjM2LCAyNDAsIDMwKTtcbn1cblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGlhIFNjcmVlbiBTdGFydFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjcwcHgpIHtcbiAgICAuRWN6YXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEVjemFyO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOiByZ2IoODAsIDgzLCA3OSk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gICAgfVxuICAgIC5mYXtcbiAgICAgICBmb250LXNpemU6IDE1cHg7IFxuICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgICBcbn1cbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDE0cHgpIHtcbiAgICAuRWN6YXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEVjemFyO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOiByZ2IoODAsIDgzLCA3OSk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gICAgfVxuICAgIC5uYXZiYXItZml4ZWQtdG9wXG4gICAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IGF1dG87XG4gICAgfVxuICAgIFxufSAqL1xuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGlhIFNjcmVlbiBFbmRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmF2YmFyIEVuZFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9vdGVyIFNlY3Rpb24gU3RhcnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qIFxuLmNlbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3R0b206IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA3MCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMTkxKSAhaW1wb3J0YW50OyBcblxuICB9ICovXG5cbiAgLmZhczpob3ZlcntcbiAgICAgIGNvbG9yOiByZ2IoMjQ4LCAyNDYsIDEzMik7XG4gIH1cblxuICAuZmFiOmhvdmVye1xuICAgIGNvbG9yOiByZ2IoMjQ4LCAyNDYsIDEzMik7XG59XG5cbi5mYXN7XG4gICAgY29sb3I6IHJnYig4MCwgMjMxLCAyMTEpO1xufVxuXG4uZmFie1xuICBjb2xvcjogcmdiKDgwLCAyMzEsIDIxMSk7XG59XG5cbi8qIC5SZXN1bWV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufVxuXG4uUmVzdW1lIGF7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uUmVzdW1lIGE6aG92ZXJ7XG4gICAgY29sb3I6ICNGRjAwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59ICovXG5cbi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb290ZXIgU2VjdGlvbiBFbmRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uc29jaWFsLWljb25zIGxpIGF7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbn1cbiNzb2NpYWwtaWNvbnMge1xuICAgIHBhZGRpbmc6MDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHJpZ2h0OjA7XG4gICAgei1pbmRleDogMTk5O1xuICB9XG4gIC5zb2NpYWwtaWNvbnMge1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG4gIH1cbiAgLnNvY2lhbC1pY29ucyBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxcHggMHB4O1xuICB9XG4gIC5zb2NpYWwtaWNvbnMgbGkgYSB7XG4gICAgd2lkdGg6NTBweDtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDo1MHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgKi9cbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIGZvbnQtc2l6ZToxOHB4O1xuICB9XG4gIC5zb2NpYWwtaWNvbnMgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6IzFlMWUxZTtcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjgsIDQwLCA0MCwgMC4xKTtcblxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDkyLCA0OCk7ICovXG4gIH1cblxuICAuc29jaWFsLWljb25zIGxpIGEge1xuICAgIHdpZHRoOjI1cHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6MzBweDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gIH1cbiAgLnNvY2lhbC1pY29ucyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"], data: { animation: [
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
MyPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MyPageComponent, selectors: [["app-my-page"]], decls: 170, vars: 0, consts: [["id", "home"], [1, "bg"], [1, "bg", "bg2"], [1, "bg", "bg3"], [1, "content"], ["data-aos", "fade-right", 1, "Londrina", "aos-item"], [1, "text-2"], [1, "text-3", "typed-element"], ["type", "button", "href", "#about", 1, "btn", "btn-lg"], [1, "fa", "fa-arrow-up", "fa-1x"], [1, "fa", "fa-arrow-down", "fa-1x"], ["id", "portfolio"], ["id", "services", 1, "w3-services", "py-5"], [1, "container", "py-lg-3"], [1, "title-section"], [1, "main-title-w3"], [1, "title-line"], [1, "row", "w3-services-grids", "mt-lg-5", "mt-4"], [1, "col-lg-5", "w3-services-left-grid"], [2, "font-family", "Eczar"], ["href", "https://www.linkedin.com/company/epam-systems/", 2, "font-family", "Eczar", "color", "darkturquoise"], ["href", "https://in.linkedin.com/company/zensar", 2, "font-family", "Eczar", "color", "darkturquoise"], ["href", "../../assets/data/Resume2.pdf", 2, "font-family", "Eczar"], ["href", "../../assets/data/Resume.pdf", 2, "font-family", "Eczar"], [1, "col-lg-7", "w3-services-right-grid", "mt-lg-0", "mt-5", "pl-lg-5"], [1, "row", "w3-icon-grid-gap1"], [1, "col-md-6", "col-sm-6", "w3-icon-grid1"], [1, "fas", "fa-desktop", "editContent"], [1, "clearfix"], ["id", "pdes"], [1, "fab", "fa-python", "editContent"], [1, "fas", "fa-mobile", "editContent"], [1, "fas", "fa-brain", "editContent"], ["id", "project"], [1, "w3l-services", "py-5"], [1, "container", "principles-grids", "principles-grids1", "py-lg-3"], [1, "scrollbar", "-services-scroll"], [1, "row", "abt-btm", "pt-4"], [1, "col-lg-3", "col-sm-6", "bottom-gds", "mt-md-0", "mt-2"], [1, "elite-services1"], [1, "bott-img"], [1, "icon-holder", "editContent"], ["aria-hidden", "true", 1, "fab", "fa-python", "service-icon"], [1, "mission"], [1, "description"], ["href", "https://github.com/AbhishekKumarSingh07/DataSet_Pandas_IPL", 1, "editContent"], [1, "col-lg-3", "col-sm-6", "bottom-gds", "mt-lg-0", "mt-5"], [1, "elite-services2"], ["href", "https://github.com/AbhishekKumarSingh07/Dataset_Matplot_Graph", 1, "editContent"], [1, "elite-services3"], ["aria-hidden", "true", 1, "fab", "fa-html5", "service-icon"], ["href", "https://github.com/AbhishekKumarSingh07/MyPortfolioWebsite", 1, "editContent"], [1, "elite-services4"], ["aria-hidden", "true", 1, "fas", "fa-mobile", "service-icon"], ["href", "https://github.com/AbhishekKumarSingh07/IES_College_Std_App", 1, "editContent"], [1, "page-footer", "font-small", "blue"], [1, "footer-copyright", "text-center", "py-3"]], template: function MyPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Abhishek is a Software Engineer at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Epam");
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
    } }, styles: ["@font-face {\n    font-family: Dela_Gothic_One;\n    src: url('DelaGothicOne-Regular.ttf') format('truetype');\n}\n@font-face {\n    font-family: Londrina;\n    src: url('LondrinaSolid-Regular.ttf') format('truetype');\n}\n@font-face {\n    font-family: OleoR;\n    src: url('OleoScript-Regular.ttf') format('truetype');\n}\n@font-face {\n    font-family: OleoB;\n    src: url('OleoScript-Bold.ttf') format('truetype');\n}\n@font-face {\n    font-family: Eczar;\n    src: url('Eczar-Bold.ttf') format('truetype');\n}\n.Dela_Gothic_One[_ngcontent-%COMP%]{\n    position: relative;\n    font-family: Dela_Gothic_One;\n    font-size: 35px;\n    white-space: nowrap;\n    color: #eee;\n}\n.Londrina[_ngcontent-%COMP%]{\n    position: relative;\n    font-family: Londrina;\n    font-size: 35px;\n    white-space: nowrap;\n    \n}\n.OleoR[_ngcontent-%COMP%]{\n    position: relative;\n    font-family: OleoR;\n    font-size: 20px;\n    color: rgb(5, 0, 0);\n}\n.OleoB[_ngcontent-%COMP%]{\n    position: relative;\n    font-family: OleoB;\n    font-size: 30px;\n    color: darkorange;\n}\n.Eczar[_ngcontent-%COMP%]{\n    position: relative;\n    font-family: Eczar;\n    font-size: 20px;\n    color: rgb(80, 83, 79);\n    letter-spacing: 0.1rem;\n    white-space: pre-line;\n}\n\nsection[_ngcontent-%COMP%]{\n    scroll-snap-align: center;\n}\n\n\nhtml[_ngcontent-%COMP%] {\n    height:100%;\n    width: 100%;\n\n  }\nbody[_ngcontent-%COMP%] {\n    margin:0;\n  }\n.bg[_ngcontent-%COMP%] {\n    -webkit-animation:slide 3s ease-in-out infinite alternate;\n            animation:slide 3s ease-in-out infinite alternate;\n    \n    background-image: linear-gradient(-60deg, #36454F 50%, #000000 50%);\n    bottom:0;\n    left:-50%;\n    opacity:.5;\n    position:fixed;\n    right:-50%;\n    top:0;\n    z-index:-1;\n  }\n.bg2[_ngcontent-%COMP%] {\n    animation-direction:alternate-reverse;\n    -webkit-animation-duration:4s;\n            animation-duration:4s;\n  }\n.bg3[_ngcontent-%COMP%] {\n    -webkit-animation-duration:5s;\n            animation-duration:5s;\n  }\nh1[_ngcontent-%COMP%] {\n    font-family:monospace;\n  }\n\n@-webkit-keyframes slide {\n    0% {\n      transform:translateX(-25%);\n    }\n    100% {\n      transform:translateX(25%);\n    }\n  }\n@keyframes slide {\n    0% {\n      transform:translateX(-25%);\n    }\n    100% {\n      transform:translateX(25%);\n    }\n  }\n#home[_ngcontent-%COMP%]{\n      position: relative;\n      width: 100%;\n      height: 100%;\n      min-height: 600px;\n      justify-content: center !important;\n  }\n.content[_ngcontent-%COMP%] {\n    \n    background-color:transparent;\n\n    \n    left:50%;\n    padding:10vmin;\n    position:absolute;\n    text-align:center;\n    top:50%;\n    transform:translate(-50%, -50%);\n  }\n#home[_ngcontent-%COMP%]   .text-1[_ngcontent-%COMP%]{\n    color: rgb(231, 39, 5);\n    font-size: 35px;\n  \n}\n#home[_ngcontent-%COMP%]   .text-2[_ngcontent-%COMP%]{\n    color: rgb(19, 221, 194);\n  \n}\n#home[_ngcontent-%COMP%]   .text-3[_ngcontent-%COMP%]{\n    color: #fcf8f8 ; \n \n}\n.btn[_ngcontent-%COMP%]{\n    font-weight: 800;\n    background-color: rgb(245, 234, 200) !important;\n    border-radius:.25em;\n    box-shadow:0 0 .25em rgba(252, 194, 194, 0.25);\n    box-sizing:border-box; \n}\n.btn[_ngcontent-%COMP%]:hover{\n    background-color: turquoise !important;\n\n}\n.btn[_ngcontent-%COMP%]    > .fa[_ngcontent-%COMP%]    + .fa[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:hover    > .fa[_ngcontent-%COMP%] {\n  display: none;\n\n}\n.btn[_ngcontent-%COMP%]:hover    > .fa[_ngcontent-%COMP%]    + .fa[_ngcontent-%COMP%] {\n  display: inherit;\n}\n\n@media screen and (max-width:670px) {\n    .Eczar[_ngcontent-%COMP%]{\n        position: relative;\n        font-family: Eczar;\n        font-size: 10px;\n        color: rgb(236, 10, 10);\n        letter-spacing: 0.1rem;\n    }\n    \n    .Londrina[_ngcontent-%COMP%]{\n        position: relative;\n        font-family: Londrina;\n        font-size: 15px;\n        white-space: nowrap;\n        \n    }\n    #home[_ngcontent-%COMP%]{\n        position: relative;\n        width: 100%;\n        height: 100%;\n        min-height: 400px;\n    }\n}\n@media screen and (max-width:280px) {\n    .Eczar[_ngcontent-%COMP%]{\n        position: relative;\n        font-family: Eczar;\n        font-size: 10px;\n        color: rgb(236, 10, 10);\n        letter-spacing: 0.1rem;\n    }\n    \n    .Londrina[_ngcontent-%COMP%]{\n        position: relative;\n        font-family: Londrina;\n        font-size: 14px;\n        white-space: nowrap;\n        \n    }\n    #home[_ngcontent-%COMP%]{\n        position: relative;\n        width: 100%;\n        height: 100%;\n        min-height: 400px;\n    }\n}\n\n\n\n#about[_ngcontent-%COMP%]{\n    display: flex   ;\n    \n    height: 100%;\n    min-height: 600px;\n    font-family: poppins;\n}\n#about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n    margin-top: 10%;\n}\n#about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 300px;\n    display: block;\n    text-align: center;\n    padding: 40% 5%;\n    \n    background: transparent;\n    color: #fff;\n    border-radius: 15px;\n}\n#about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    font-size: 25px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n#about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 14px;\n}\n#about[_ngcontent-%COMP%]   .single-box[_ngcontent-%COMP%]{\n    position: relative;\n    margin-bottom: 30px ;\n}\n#about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    \n    overflow: hidden;\n    top: 15px;\n    left: 125px;\n    border-radius: 50%;\n}\n#about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n}\n.carousel-control-prev[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 50px;\n    left: -50px;\n    text-align: center;\n    transform: translate(-50%, -50%);\n    border-radius: 70%;\n    background: rgb(162, 229, 238);\n}\n.carousel-control-next[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 50px;\n    right: -80px;\n    background: rgb(162, 229, 238);\n    text-align: center;\n    transform: translate(-50%, -50%);\n    border-radius: 70%;\n}\n\n\n@media screen and (min-width:280px) {\n    \n#about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    \n    overflow: hidden;\n    top: 15px;\n    left: 75px !important;\n    border-radius: 50%;\n}\n#about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 300px;\n    display: block;\n    text-align: center;\n    padding: 30% 5%;\n    \n    background: transparent;\n    color: #fff;\n    border-radius: 15px;\n}\n\n}\n@media screen and (min-width:320px) {\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\n        position: absolute;\n        width: 100px;\n        height: 100px;\n        overflow: hidden;\n        top: 15px;\n        left: 98px !important;\n        border-radius: 50%;\n    }\n    #about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{\n        position: relative;\n        width: 100%;\n        height: 50%;\n        display: block;\n        text-align: center;\n        padding: 30% 0% !important;\n        overflow: hidden;\n        background: transparent;\n        color: #fff;\n        border-radius: 15px;\n        \n    }\n}\n@media screen and (min-width:360px) {\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\n        position: absolute;\n        width: 100px;\n        height: 100px;\n        overflow: hidden;\n        top: 0 !important;\n        left: 110px !important;\n        border-radius: 50%;\n    }\n\n}\n@media screen and (min-width:375px) {\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\n        position: absolute;\n        width: 100px;\n        height: 100px;\n        overflow: hidden;\n        left: 125px !important;\n        border-radius: 50%;\n    }\n\n}\n@media screen and (min-width:414px) {\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\n        position: absolute;\n        width: 100px;\n        height: 100px;\n        overflow: hidden;\n        left: 140px !important;\n        border-radius: 50%;\n    }\n    #about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n        margin-top: 5%;\n    }\n\n}\n@media screen and (min-width:540px) {\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\n        position: absolute;\n        width: 100px;\n        height: 100px;\n        overflow: hidden;\n        top: 0 !important;\n        left: 205px !important;\n        border-radius: 50%;\n    }\n \n    #about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{\n        position: relative;\n        width: 100%;\n        height: 50%;\n        display: block;\n        text-align: center;\n        padding: 20% 0% !important;\n        overflow: hidden;\n        background: transparent;\n        color: #fff;\n        border-radius: 15px;\n        \n    }\n    #about[_ngcontent-%COMP%]   .single-box[_ngcontent-%COMP%]{\n        position: relative;\n        margin-bottom: 0 ;\n    }\n}\n@media screen and (min-width:768px) {\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\n        position: relative;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        top: 5px !important;\n        left: 28% !important;\n        border-radius: 50%;\n        margin-bottom: 45%;\n    }\n \n    #about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{\n        position: relative;\n        width: 100%;\n        height: 100%;\n        display: block;\n        text-align: center;\n        padding: 40% 0% !important;\n        overflow: hidden;\n        background: transparent;\n        color: #fff;\n        border-radius: 15px;\n    }\n}\n@media screen and (min-width:1024px) {\n    #about[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]{\n        position: absolute;\n        width: 100px;\n        height: 100px;\n        overflow: hidden;\n        top: 0%;\n        left: 130px !important;\n        border-radius: 50%;\n        margin-bottom: 45%;\n    }\n \n    #about[_ngcontent-%COMP%]   .img-text[_ngcontent-%COMP%]{\n        position: relative;\n        width: 100%;\n        height: 100%;\n        display: block;\n        text-align: center;\n        padding: 40% 0% !important;\n        overflow: hidden;\n        background: transparent;\n        color: #fff;\n        border-radius: 15px;\n    }\n}\n\n\n\n#portfolio[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 540px; } }\n@media (min-width: 768px) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 720px; } }\n@media (min-width: 992px) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 960px; } }\n@media (min-width: 1200px) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 1140px; } }\n.main-title-w3[_ngcontent-%COMP%]{\n    font-family: 'Eczar';\n    color:#eee;\n}\n.w3-services-grids[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #eee;\n}\n.w3-services-grids[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n    color: crimson;\n}\n.w3-services-right-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #232527;\n    font-family: 'Eczar';\n    font-size: 20px;\n    line-height: 27px;\n    \n    text-align: left !important;\n    \n    margin-bottom: 15px;\n    font-weight: 700;\n    transition: .3s;\n    -webkit-transition: .3s;\n    -moz-transition: .3s;\n    -ms-transition: .3s;\n    -o-transition: .3s; }\n.editContent[_ngcontent-%COMP%]{\n    color: darkturquoise;\n}\n.clearfix[_ngcontent-%COMP%]::after {\n    display: block;\n    clear: both;\n    content: \"\"; }\n.w3-icon-grid1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block; \ntext-decoration: none;}\n.w3-icon-grid1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    color: yellow;\n}\n.w3-icon-grid1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: #00d679;\n  transition: .3s;\n  -webkit-transition: .3s;\n  -moz-transition: .3s;\n  -ms-transition: .3s;\n  -o-transition: .3s; }\n.w3-icon-grid1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: 'Eczar';\n    font-size: 14px;\n    line-height: 26px;\n    color: #eee;\n    padding: 0 0em;\n    margin: 0; }\n.w3-icon-grid1[_ngcontent-%COMP%]   span.fa[_ngcontent-%COMP%] {\n    font-size: 25px;\n    float: left;\n    width: 40px;\n    color: #00d679; }\n.w3l-services[_ngcontent-%COMP%] {\n    background: transparent; \n    margin-bottom: 50px;\n}\n#pdes[_ngcontent-%COMP%]{\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    color: #fff;\n}\n.w3-icon-grid1[_ngcontent-%COMP%]:nth-child(1), .w3-icon-grid1[_ngcontent-%COMP%]:nth-child(2), .w3-icon-grid1[_ngcontent-%COMP%]:nth-child(3) {\n  margin-bottom: 50px; }\n@media (max-width: 568px) {\n  .w3-icon-grid1[_ngcontent-%COMP%]:nth-child(1), .w3-icon-grid1[_ngcontent-%COMP%]:nth-child(2), .w3-icon-grid1[_ngcontent-%COMP%]:nth-child(3) {\n    margin-bottom: 30px; }\n  .w3-icon-grid1[_ngcontent-%COMP%] {\n    margin-bottom: 30px; }\n  .w3-icon-grid1[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0px; }\n  .w3-services-left-grid[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 35px; } }\n.w3-services-left-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 15px;\n        color: #FF0000;\n        text-decoration: none;\n     }\n.w3-services-left-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n        font-size: 17px;\n        color: #e7eb0c;\n        text-decoration: underline;\n     }\n@media (max-width: 415px) {\n    .w3-services-right-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      font-size: 20px;\n      line-height: 27px;\n      margin-bottom: 10px; } }\n.elite-services1[_ngcontent-%COMP%] {\n  background: #1f242c;\n  border-radius: 8px;\nheight: 125%; }\n.elite-services2[_ngcontent-%COMP%] {\n  background: #1f242c;\n  border-radius: 8px;\n  height: 125%; }\n.elite-services3[_ngcontent-%COMP%] {\n  background: #1f242c;\n  border-radius: 8px;\n  height: 125%; }\n.elite-services4[_ngcontent-%COMP%] {\n  background: #1f242c;\n  border-radius: 8px;\n  height: 125%; }\n.bott-img[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 250px;\n        margin: 0px 0;\n        text-align: center;\n        transition: all 0.3s ease; }\n.bott-img[_ngcontent-%COMP%]:hover {\n        padding: 0 20px; \n        \n        \n    }\n.bott-img[_ngcontent-%COMP%]   .icon-holder[_ngcontent-%COMP%] {\n        position: relative;\n        top: 60px;\n        display: inline-block;\n        margin-bottom: 68px;\n        width: 70px;\n        height: 70px;\n        line-height: 70px;\n        transition: all 0.3s ease;\n        border-radius: 100% !important;\n        color: #fff !important;\n        font-size: 26px;\n        background-color: #00d679 !important; }\n.bott-img[_ngcontent-%COMP%]   .mission[_ngcontent-%COMP%] {\n        position: relative;\n        top: 10px;\n        transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n        color: #000;\n        font-size: 22px;\n        line-height: 28px;\n        font-weight: 700;\n        color: #fff; }\n.bott-img[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n        margin: -6em auto 0;\n        opacity: 0;\n        transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n        transform: scale(0); }\n.bott-img[_ngcontent-%COMP%]   .icon-holder[_ngcontent-%COMP%]    > .service-icon[_ngcontent-%COMP%] {\n            line-height: 70px; }\n.bott-img[_ngcontent-%COMP%]:hover   .icon-holder[_ngcontent-%COMP%] {\n            top: -40px;\n            background: #00d679; }\n.bott-img[_ngcontent-%COMP%]:hover   .mission[_ngcontent-%COMP%] {\n            top: -80px; }\n.bott-img[_ngcontent-%COMP%]:hover   .description[_ngcontent-%COMP%] {\n            opacity: 1;\n            transform: scale(1);\n            font-size: 14px;\n            line-height: 2.2em; }\n.bott-img[_ngcontent-%COMP%]:hover   .description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            top: -60px; }\n.description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 17px;\n        line-height: 26px;\n        font-weight: 700;\n        color: #00d679; }\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: #ccc;\n      font-size: 16px;\n      line-height: 25px;\n      margin-top: 20px;\n      margin-bottom: 20px; }\n.description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n        color: rgb(248, 211, 47); }\n.w3l-services[_ngcontent-%COMP%]   h3.head-title[_ngcontent-%COMP%] {\n    color: rgb(236, 16, 16);\n    font-size: 40px;\n    line-height: 45px;\n    font-weight: 700;\n    margin-bottom: 55px;\n    text-align: center; }\n@media (max-width: 991px) {\n    .w3l-services[_ngcontent-%COMP%]   h3.head-title[_ngcontent-%COMP%] {\n      font-size: 35px;\n      line-height: 40px; } }\n\n\n\n.footer-copyright[_ngcontent-%COMP%]{\n    font-family: 'Eczar';\n    color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,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akIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBRTtBQUd0QjtJQUNFO01BQ0UsZUFBZTtNQUNmLGlCQUFpQixFQUFFLEVBQUU7QUFDM0I7OztxRkFHcUY7QUFHckY7OztxRkFHcUY7QUFFckY7OztxRkFHcUY7QUFDckY7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztBQUNmIiwiZmlsZSI6Im15LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb250cyBTdGFydFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBEZWxhX0dvdGhpY19PbmU7XG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL0RlbGFfR290aGljX09uZS9EZWxhR290aGljT25lLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBMb25kcmluYTtcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvTG9uZHJpbmFfU29saWQvTG9uZHJpbmFTb2xpZC1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IE9sZW9SO1xuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9PbGVvX1NjcmlwdC9PbGVvU2NyaXB0LVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBPbGVvQjtcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvT2xlb19TY3JpcHQvT2xlb1NjcmlwdC1Cb2xkLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogRWN6YXI7XG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL0VjemFyL0VjemFyLUJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG4uRGVsYV9Hb3RoaWNfT25le1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LWZhbWlseTogRGVsYV9Hb3RoaWNfT25lO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjZWVlO1xufVxuLkxvbmRyaW5he1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LWZhbWlseTogTG9uZHJpbmE7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgXG59XG4uT2xlb1J7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiBPbGVvUjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYig1LCAwLCAwKTtcbn1cblxuLk9sZW9Ce1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LWZhbWlseTogT2xlb0I7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xufVxuXG4uRWN6YXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiBFY3phcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYig4MCwgODMsIDc5KTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cbi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb250cyBFbmRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5zZWN0aW9ue1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIC5jb250YWluZXJ7XG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XG59ICovXG5cbi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lIFNlY3Rpb24gU3RhcnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5odG1sIHtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICB9XG4gIFxuICBib2R5IHtcbiAgICBtYXJnaW46MDtcbiAgfVxuICBcbiAgLmJnIHtcbiAgICBhbmltYXRpb246c2xpZGUgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsIHJnYig4MCwgODMsIDc5KSA1MCUsIHJnYigyMDMsIDIxMiwgMTQ3KSA1MCUpOyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsICMzNjQ1NEYgNTAlLCAjMDAwMDAwIDUwJSk7XG4gICAgYm90dG9tOjA7XG4gICAgbGVmdDotNTAlO1xuICAgIG9wYWNpdHk6LjU7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgcmlnaHQ6LTUwJTtcbiAgICB0b3A6MDtcbiAgICB6LWluZGV4Oi0xO1xuICB9XG4gIFxuICAuYmcyIHtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOmFsdGVybmF0ZS1yZXZlcnNlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjo0cztcbiAgfVxuICBcbiAgLmJnMyB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjVzO1xuICB9XG4gIFxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6bW9ub3NwYWNlO1xuICB9XG4gIC8qIC5teXBpY3tcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3BpYzQucG5nJyk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAvKiB0b3A6IDQwJTsgXG4gICAgICB3aWR0aDogMTgwcHg7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBsZWZ0OiAzNiU7XG4gIH1cbiAgLm15cGljIGltZ3tcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICAqL1xuXG5cbiAgQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTI1JSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjUlKTtcbiAgICB9XG4gIH1cbiAgI2hvbWV7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuY29udGVudCB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC44KTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuXG4gICAgLyogYm9yZGVyLXJhZGl1czouMjVlbTtcbiAgICBib3gtc2hhZG93OjAgMCAuMjVlbSByZ2JhKDAsMCwwLC4yNSk7XG4gICAgYm94LXNpemluZzpib3JkZXItYm94OyAqL1xuICAgIGxlZnQ6NTAlO1xuICAgIHBhZGRpbmc6MTB2bWluO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHRvcDo1MCU7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICNob21lIC50ZXh0LTF7XG4gICAgY29sb3I6IHJnYigyMzEsIDM5LCA1KTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIFxufVxuXG4jaG9tZSAudGV4dC0ye1xuICAgIGNvbG9yOiByZ2IoMTksIDIyMSwgMTk0KTtcbiAgXG59XG5cbiNob21lIC50ZXh0LTN7XG4gICAgY29sb3I6ICNmY2Y4ZjggOyBcbiBcbn1cbi5idG57XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMzQsIDIwMCkgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOi4yNWVtO1xuICAgIGJveC1zaGFkb3c6MCAwIC4yNWVtIHJnYmEoMjUyLCAxOTQsIDE5NCwgMC4yNSk7XG4gICAgYm94LXNpemluZzpib3JkZXItYm94OyBcbn1cblxuLmJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2UgIWltcG9ydGFudDtcblxufVxuXG4uYnRuID4gLmZhICsgLmZhLFxuLmJ0bjpob3ZlciA+IC5mYSB7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbn1cbi5idG46aG92ZXIgPiAuZmEgKyAuZmEge1xuICBkaXNwbGF5OiBpbmhlcml0O1xufVxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGlhIFNjcmVlbiBTdGFydFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjcwcHgpIHtcbiAgICAuRWN6YXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEVjemFyO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMjM2LCAxMCwgMTApO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgIH1cbiAgICBcbiAgICAuTG9uZHJpbmF7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IExvbmRyaW5hO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIFxuICAgIH1cbiAgICAjaG9tZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjI4MHB4KSB7XG4gICAgLkVjemFye1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBFY3phcjtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogcmdiKDIzNiwgMTAsIDEwKTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgICB9XG4gICAgXG4gICAgLkxvbmRyaW5he1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMb25kcmluYTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBcbiAgICB9XG4gICAgI2hvbWV7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgfVxufVxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGlhIFNjcmVlbiBFbmRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgLypcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgU2VjdGlvbiBFbmRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuXG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXQgU2VjdGlvbiBTdGFydFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuI2Fib3V0e1xuICAgIGRpc3BsYXk6IGZsZXggICA7XG4gICAgLyogYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoLTEwMGRlZywjMzY0NTRGLCMwMDAwMDAgNTAlKTsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnM7XG59XG4jYWJvdXQgLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG4jYWJvdXQgLmltZy10ZXh0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwJSA1JTtcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMjYyNjI2OyAqL1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cblxuI2Fib3V0IC5pbWctdGV4dCBoMntcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4jYWJvdXQgLmltZy10ZXh0IHB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jYWJvdXQgLnNpbmdsZS1ib3h7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHggO1xufVxuI2Fib3V0IC5pbWctYXJlYXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgLyogYm9yZGVyOiA1cHggc29saWQgI2ZmZjsgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAxMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4jYWJvdXQgLmltZy1hcmVhIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiAuZmF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGxlZnQ6IC01MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNzAlO1xuICAgIGJhY2tncm91bmQ6IHJnYigxNjIsIDIyOSwgMjM4KTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCAuZmF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHJpZ2h0OiAtODBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTYyLCAyMjksIDIzOCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA3MCU7XG59XG4vKiAuY2Fyb3VzZWwtaW5kaWNhdG9yc3tcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG59XG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaXtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMCUgO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyAuYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59ICovXG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWRpYSBTY3JlZW4gU3RhcnRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MjgwcHgpIHtcbiAgICBcbiNhYm91dCAuaW1nLWFyZWF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8qIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogNzVweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiNhYm91dCAuaW1nLXRleHR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzAlIDUlO1xuICAgIC8qIGJhY2tncm91bmQ6ICMyNjI2MjY7ICovXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjMyMHB4KSB7XG4gICAgI2Fib3V0IC5pbWctYXJlYXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgbGVmdDogOThweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgICNhYm91dCAuaW1nLXRleHR7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAzMCUgMCUgIWltcG9ydGFudDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MzYwcHgpIHtcbiAgICAjYWJvdXQgLmltZy1hcmVhe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG5cbn0gXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6Mzc1cHgpIHtcbiAgICAjYWJvdXQgLmltZy1hcmVhe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbGVmdDogMTI1cHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQxNHB4KSB7XG4gICAgI2Fib3V0IC5pbWctYXJlYXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGxlZnQ6IDE0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgI2Fib3V0IC5jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjU0MHB4KSB7XG4gICAgI2Fib3V0IC5pbWctYXJlYXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICBsZWZ0OiAyMDVweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuIFxuICAgICNhYm91dCAuaW1nLXRleHR7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMCUgMCUgIWltcG9ydGFudDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBcbiAgICB9XG4gICAgI2Fib3V0IC5zaW5nbGUtYm94e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIHtcbiAgICAjYWJvdXQgLmltZy1hcmVhe1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDI4JSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ1JTtcbiAgICB9XG4gXG4gICAgI2Fib3V0IC5pbWctdGV4dHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA0MCUgMCUgIWltcG9ydGFudDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIH1cbn0gXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KSB7XG4gICAgI2Fib3V0IC5pbWctYXJlYXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRvcDogMCU7XG4gICAgICAgIGxlZnQ6IDEzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDUlO1xuICAgIH1cbiBcbiAgICAjYWJvdXQgLmltZy10ZXh0e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDQwJSAwJSAhaW1wb3J0YW50O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgfVxufVxuXG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWRpYSBTY3JlZW4gRW5kXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIC8qXG5cbi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBTZWN0aW9uIEVuZFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG5cbi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3J0Zm9saW8gU2VjdGlvbiBTdGFydFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG5cbiNwb3J0Zm9saW8gLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDU0MHB4OyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDcyMHB4OyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDk2MHB4OyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMTQwcHg7IH0gfSAgXG4gIFxuLm1haW4tdGl0bGUtdzN7XG4gICAgZm9udC1mYW1pbHk6ICdFY3phcic7XG4gICAgY29sb3I6I2VlZTtcbn1cblxuLnczLXNlcnZpY2VzLWdyaWRzIHB7XG4gICAgY29sb3I6ICNlZWU7XG59XG4udzMtc2VydmljZXMtZ3JpZHMgaDR7XG4gICAgY29sb3I6IGNyaW1zb247XG59XG4udzMtc2VydmljZXMtcmlnaHQtZ3JpZCBoMyB7XG4gICAgY29sb3I6ICMyMzI1Mjc7XG4gICAgZm9udC1mYW1pbHk6ICdFY3phcic7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIC8qIGZsb2F0OiByaWdodCAgIWltcG9ydGFudDsgKi9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IC4zcztcbiAgICAtbXMtdHJhbnNpdGlvbjogLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IC4zczsgfVxuLmVkaXRDb250ZW50e1xuICAgIGNvbG9yOiBkYXJrdHVycXVvaXNlO1xufVxuLmNsZWFyZml4OjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgY29udGVudDogXCJcIjsgfVxuXG4udzMtaWNvbi1ncmlkMSBhIHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG50ZXh0LWRlY29yYXRpb246IG5vbmU7fVxuXG4udzMtaWNvbi1ncmlkMSBoM3tcbiAgICBjb2xvcjogeWVsbG93O1xufVxuXG5cbiBcblxuLnczLWljb24tZ3JpZDEgYTpob3ZlciBoMyB7XG4gIGNvbG9yOiAjMDBkNjc5O1xuICB0cmFuc2l0aW9uOiAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xuICAtbW96LXRyYW5zaXRpb246IC4zcztcbiAgLW1zLXRyYW5zaXRpb246IC4zcztcbiAgLW8tdHJhbnNpdGlvbjogLjNzOyB9XG5cbi53My1pY29uLWdyaWQxIHAge1xuICAgIGZvbnQtZmFtaWx5OiAnRWN6YXInO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBjb2xvcjogI2VlZTtcbiAgICBwYWRkaW5nOiAwIDBlbTtcbiAgICBtYXJnaW46IDA7IH1cbiAgXG4udzMtaWNvbi1ncmlkMSBzcGFuLmZhIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgY29sb3I6ICMwMGQ2Nzk7IH0gIFxuXG4udzNsLXNlcnZpY2VzIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbiBcblxuI3BkZXN7XG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnczLWljb24tZ3JpZDE6bnRoLWNoaWxkKDEpLFxuLnczLWljb24tZ3JpZDE6bnRoLWNoaWxkKDIpLFxuLnczLWljb24tZ3JpZDE6bnRoLWNoaWxkKDMpIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgLnczLWljb24tZ3JpZDE6bnRoLWNoaWxkKDEpLFxuICAudzMtaWNvbi1ncmlkMTpudGgtY2hpbGQoMiksXG4gIC53My1pY29uLWdyaWQxOm50aC1jaGlsZCgzKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAudzMtaWNvbi1ncmlkMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAudzMtaWNvbi1ncmlkMTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cbiAgLnczLXNlcnZpY2VzLWxlZnQtZ3JpZCBoNCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4OyB9IH0gICAgIFxuICAgXG4gICAgLnczLXNlcnZpY2VzLWxlZnQtZ3JpZCBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogI0ZGMDAwMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICB9ICBcblxuICAgICAudzMtc2VydmljZXMtbGVmdC1ncmlkIGE6aG92ZXIge1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAjZTdlYjBjO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgICAudzMtc2VydmljZXMtcmlnaHQtZ3JpZCBoMyB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH0gfSAgICBcbi5lbGl0ZS1zZXJ2aWNlczEge1xuICBiYWNrZ3JvdW5kOiAjMWYyNDJjO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG5oZWlnaHQ6IDEyNSU7IH1cblxuLmVsaXRlLXNlcnZpY2VzMiB7XG4gIGJhY2tncm91bmQ6ICMxZjI0MmM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAxMjUlOyB9XG5cbi5lbGl0ZS1zZXJ2aWNlczMge1xuICBiYWNrZ3JvdW5kOiAjMWYyNDJjO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogMTI1JTsgfVxuXG4uZWxpdGUtc2VydmljZXM0IHtcbiAgYmFja2dyb3VuZDogIzFmMjQyYztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDEyNSU7IH1cblxuICAgIC5ib3R0LWltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBtYXJnaW46IDBweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cbiAgICAgIFxuICAgIC5ib3R0LWltZzpob3ZlciB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDsgXG4gICAgICAgIC8qIGJhY2tncm91bmQ6ICMwMGQ2Nzk7ICAgKi9cbiAgICAgICAgLyogY29sb3I6I0MwMzkyQiAhaW1wb3J0YW50OyAgICAqL1xuICAgIH1cbiAgICAgIFxuICAgIC5ib3R0LWltZyAuaWNvbi1ob2xkZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2OHB4O1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGQ2NzkgIWltcG9ydGFudDsgfVxuICAgICAgXG4gICAgLmJvdHQtaW1nIC5taXNzaW9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgICBcbiAgICAuYm90dC1pbWcgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAtNmVtIGF1dG8gMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9XG4gICAgLmJvdHQtaW1nIC5pY29uLWhvbGRlciA+IC5zZXJ2aWNlLWljb24ge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7IH1cbiAgICAgICAgICBcbiAgICAuYm90dC1pbWc6aG92ZXIgLmljb24taG9sZGVyIHtcbiAgICAgICAgICAgIHRvcDogLTQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBkNjc5OyB9XG4gICAgICAgICAgXG4gICAgLmJvdHQtaW1nOmhvdmVyIC5taXNzaW9uIHtcbiAgICAgICAgICAgIHRvcDogLTgwcHg7IH1cbiAgICAgICAgICBcbiAgICAuYm90dC1pbWc6aG92ZXIgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuMmVtOyB9XG4gICAgICAgICAgXG4gICAgLmJvdHQtaW1nOmhvdmVyIC5kZXNjcmlwdGlvbiBhIHtcbiAgICAgICAgICAgIHRvcDogLTYwcHg7IH1cblxuICAgIC5kZXNjcmlwdGlvbiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICMwMGQ2Nzk7IH1cbiAgICAgIFxuICAgIC5kZXNjcmlwdGlvbiBwIHtcbiAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAgIFxuICAgIC5kZXNjcmlwdGlvbiBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHJnYigyNDgsIDIxMSwgNDcpOyB9XG5cbiAgLnczbC1zZXJ2aWNlcyBoMy5oZWFkLXRpdGxlIHtcbiAgICBjb2xvcjogcmdiKDIzNiwgMTYsIDE2KTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICBcbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC53M2wtc2VydmljZXMgaDMuaGVhZC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICBsaW5lLWhlaWdodDogNDBweDsgfSB9XG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9ydGZvbGlvIFNlY3Rpb24gRW5kXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWRpYSBTY3JlZW4gU3RhcnRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWRpYSBTY3JlZW4gRW5kXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmZvb3Rlci1jb3B5cmlnaHR7XG4gICAgZm9udC1mYW1pbHk6ICdFY3phcic7XG4gICAgY29sb3I6ICNlZWU7XG59XG4gICJdfQ== */"] });


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