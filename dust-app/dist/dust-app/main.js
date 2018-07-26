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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-dashboard.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/admin-dashboard.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Admin dashboard...\r\n\r\n<button (click)=\"initializeDB()\">initialize database</button>"

/***/ }),

/***/ "./src/app/admin/admin-dashboard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/admin-dashboard.component.ts ***!
  \****************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dustdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dustdb.service */ "./src/app/dustdb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(dustdbService, router, route) {
        this.dustdbService = dustdbService;
        this.router = router;
        this.route = route;
    }
    AdminDashboardComponent.prototype.initializeDB = function () {
        this.dustdbService.initializeDB();
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_dustdb_service__WEBPACK_IMPORTED_MODULE_2__["DustDBService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _manage_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-users.component */ "./src/app/admin/manage-users.component.ts");
/* harmony import */ var _manage_palliatives_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-palliatives.component */ "./src/app/admin/manage-palliatives.component.ts");
/* harmony import */ var _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-dashboard.component */ "./src/app/admin/admin-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var adminRoutes = [
    {
        path: 'admin', component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        // canActivate: [ AuthGuardService ],
        children: [
            {
                path: '',
                // canActivateChild: [ AuthGuardService ],
                children: [
                    { path: 'dashboard', component: _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AdminDashboardComponent"] },
                    { path: 'users', component: _manage_users_component__WEBPACK_IMPORTED_MODULE_3__["ManageUsersComponent"] },
                    { path: 'palliatives', component: _manage_palliatives_component__WEBPACK_IMPORTED_MODULE_4__["ManagePalliativesComponent"] },
                ]
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(adminRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav>\r\n  <h3>Administration Area</h3>\r\n  <a routerLink=\"./dashboard\" routerLinkActive=\"active\"\r\n    [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a>\r\n  <a routerLink=\"./palliatives\" routerLinkActive=\"active\">Manage Palliatives</a>\r\n  <a routerLink=\"./users\" routerLinkActive=\"active\">Manage Users</a>\r\n</nav>\r\n\r\n<app-admin-dashboard></app-admin-dashboard>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-dashboard.component */ "./src/app/admin/admin-dashboard.component.ts");
/* harmony import */ var _manage_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-users.component */ "./src/app/admin/manage-users.component.ts");
/* harmony import */ var _manage_palliatives_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-palliatives.component */ "./src/app/admin/manage-palliatives.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
                _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"],
                _manage_users_component__WEBPACK_IMPORTED_MODULE_5__["ManageUsersComponent"],
                _manage_palliatives_component__WEBPACK_IMPORTED_MODULE_6__["ManagePalliativesComponent"],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/manage-palliatives.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/manage-palliatives.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Manage Palliatives</h2>\r\n\r\n<div *ngIf=\"!palliatives$\">Loading...</div>\r\n\r\n<div *ngIf=\"palliatives$ | async as palliatives\">\r\n\r\n<!-- <app-palliative-list></app-palliative-list> -->\r\n\r\n<ul>\r\n    <li *ngFor=\"let palliative of palliatives\">{{palliative.shortname}}</li>\r\n</ul>\r\n</div>\r\n\r\n\r\n<button (click)=\"gotoDashboard()\">Back to dashboard</button>\r\n"

/***/ }),

/***/ "./src/app/admin/manage-palliatives.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/manage-palliatives.component.ts ***!
  \*******************************************************/
/*! exports provided: ManagePalliativesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePalliativesComponent", function() { return ManagePalliativesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_area_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-area/user.service */ "./src/app/user-area/user.service.ts");
/* harmony import */ var _palliative_area_palliative_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../palliative-area/palliative.service */ "./src/app/palliative-area/palliative.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManagePalliativesComponent = /** @class */ (function () {
    function ManagePalliativesComponent(palliativeService, userService, route, router) {
        this.palliativeService = palliativeService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.selectedId = 0;
    }
    ManagePalliativesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.palliatives$ = this.palliativeService.getPalliatives();
        this.palliatives$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            _this.selectedId = +params.get('id');
            return _this.palliativeService.getPalliatives();
        }));
    };
    ManagePalliativesComponent.prototype.gotoDashboard = function () {
        this.router.navigate(['./']);
    };
    ManagePalliativesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-manage-palliatives',
            template: __webpack_require__(/*! ./manage-palliatives.component.html */ "./src/app/admin/manage-palliatives.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_palliative_area_palliative_service__WEBPACK_IMPORTED_MODULE_4__["PalliativeService"],
            _user_area_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ManagePalliativesComponent);
    return ManagePalliativesComponent;
}());



/***/ }),

/***/ "./src/app/admin/manage-users.component.html":
/*!***************************************************!*\
  !*** ./src/app/admin/manage-users.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Manage Users</h2>\r\n\r\n<div *ngIf=\"!users$\">Loading...</div>\r\n<div *ngIf=\"users$ | async as users\">\r\n    <ul>\r\n        <li *ngFor=\"let user of users\">{{user.username}}</li>\r\n    </ul>\r\n</div>\r\n<!-- <app-user-list></app-user-list> -->\r\n<button (click)=\"gotoDashboard()\">Back to dashboard</button>"

/***/ }),

/***/ "./src/app/admin/manage-users.component.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/manage-users.component.ts ***!
  \*************************************************/
/*! exports provided: ManageUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersComponent", function() { return ManageUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_area_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-area/user.service */ "./src/app/user-area/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageUsersComponent = /** @class */ (function () {
    function ManageUsersComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.selectedId = 0;
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            _this.selectedId = +params.get('id');
            return _this.service.getUsers();
        }));
    };
    ManageUsersComponent.prototype.gotoDashboard = function () {
        this.router.navigate(['./']);
    };
    ManageUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-manage-users',
            template: __webpack_require__(/*! ./manage-users.component.html */ "./src/app/admin/manage-users.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")],
        }),
        __metadata("design:paramtypes", [_user_area_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ManageUsersComponent);
    return ManageUsersComponent;
}());



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInDownAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInDownAnimation", function() { return slideInDownAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInDownAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(100%)'
        }))
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    // { path: 'users', component: UserListComponent },
    // { path: 'users/detail/:id', component: UserDetailComponent },
    // { path: 'palliatives', component: PalliativeListComponent },
    // { path: 'palliatives/detail/:id', component: PalliativeDetailComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], outlet: 'popup' },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"], outlet: 'popup' },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\n\r\n/* h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\n\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n} */\r\n\r\n/* nav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\n\r\nnav a:visited,\r\na:link {\r\n  color: #607d8b;\r\n}\r\n\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nnav a.active {\r\n  color: #039be5;\r\n} */\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"branding branding-uaf\">\r\n  <tr>\r\n    <td>\r\n      <a href=\"http://www.uaf.edu\">\r\n        <img width=\"48px\" src=\"assets/uaf-logo-web.png\" />\r\n      </a>\r\n    </td>\r\n    <td width=\"100%\">\r\n      <div>Alaska University Transportation Center (AUTC)</div>\r\n      <div>Institute of Northern Engineering</div>\r\n    </td>\r\n  </tr>\r\n</table>\r\n\r\n<h1>{{title}}</h1>\r\n<nav>\r\n  <a routerLink=\"/dashboard\">Dashboard</a>\r\n  <a routerLink=\"/palliatives\" routerLinkActive=\"active\">Palliatives</a>\r\n  <a routerLink=\"/users\" routerLinkActive=\"active\">Users</a>\r\n  <a routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a>\r\n  <span *ngIf=\"!authService.isLoggedIn\"><a [routerLink]=\"[{ outlets: { popup: ['login'] } }]\" routerLinkActive=\"active\">Log in</a></span>\r\n  <span *ngIf=\"authService.isLoggedIn\"><a [routerLink]=\"[{ outlets: { popup: ['logout'] } }]\" routerLinkActive=\"active\">Log out</a>\r\n    Signed in as {{authService.signedInUser}}</span>\r\n</nav>\r\n\r\n<div class=\"popup\"><router-outlet name=\"popup\"></router-outlet></div>\r\n<div class=\"mainnav\"><router-outlet></router-outlet></div>\r\n\r\n<app-messages></app-messages>\r\n\r\n<hr/>\r\n\r\n<table class=\"branding branding-cset\">\r\n    <tr>\r\n      <td>\r\n        <a href=\"http://cset.uaf.edu/\">\r\n          <img width=\"48px\" src=\"assets/cset-logo-web.png\" />\r\n        </a>\r\n      </td>\r\n      <td width=\"100%\">\r\n        <div class=\"branding-cset\">Center for Safety Equity in Transportation</div>\r\n      </td>\r\n    </tr>\r\n  </table>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Dust Palliative MPRT Calculator';
        this.signedInUser = 'nobody';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.signedInUser = (this.authService.isLoggedIn ? 'somebody' : 'Log in');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _user_area_users_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-area/users-routing.module */ "./src/app/user-area/users-routing.module.ts");
/* harmony import */ var _user_area_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-area/user-list/user-list.component */ "./src/app/user-area/user-list/user-list.component.ts");
/* harmony import */ var _user_area_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-area/user-detail/user-detail.component */ "./src/app/user-area/user-detail/user-detail.component.ts");
/* harmony import */ var _user_area_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-area/user-search/user-search.component */ "./src/app/user-area/user-search/user-search.component.ts");
/* harmony import */ var _palliative_area_palliative_list_palliative_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./palliative-area/palliative-list/palliative-list.component */ "./src/app/palliative-area/palliative-list/palliative-list.component.ts");
/* harmony import */ var _palliative_area_palliative_detail_palliative_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./palliative-area/palliative-detail/palliative-detail.component */ "./src/app/palliative-area/palliative-detail/palliative-detail.component.ts");
/* harmony import */ var _palliative_area_palliative_search_palliative_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./palliative-area/palliative-search/palliative-search.component */ "./src/app/palliative-area/palliative-search/palliative-search.component.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
/* harmony import */ var _palliative_area_palliatives_routing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./palliative-area/palliatives-routing.component */ "./src/app/palliative-area/palliatives-routing.component.ts");
/* harmony import */ var _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // <-- NgModel lives here



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                _user_area_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__["UserListComponent"],
                _user_area_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _user_area_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_12__["UserSearchComponent"],
                _palliative_area_palliative_list_palliative_list_component__WEBPACK_IMPORTED_MODULE_13__["PalliativeListComponent"],
                _palliative_area_palliative_detail_palliative_detail_component__WEBPACK_IMPORTED_MODULE_14__["PalliativeDetailComponent"],
                _palliative_area_palliative_search_palliative_search_component__WEBPACK_IMPORTED_MODULE_15__["PalliativeSearchComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_21__["AuthComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_22__["LogoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _user_area_users_routing_module__WEBPACK_IMPORTED_MODULE_9__["UsersRoutingModule"],
                _palliative_area_palliatives_routing_component__WEBPACK_IMPORTED_MODULE_17__["PalliativesRoutingModule"],
                _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_18__["AdminRoutingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_19__["AdminModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isLoggedIn = false;
        this.signedInUser = 'nobody';
        this.signedInUserId = 0;
        this.username = 'username';
        this.password = 'password';
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (val) {
            _this.isLoggedIn = true;
            _this.signedInUser = 'somebody';
            _this.signedInUserId = 21;
        }));
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.signedInUser = 'nobody';
        this.signedInUserId = 0;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  auth works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n    float: left;\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n[class*='col-']:last-of-type {\r\n    padding-right: 0;\r\n  }\r\na {\r\n    text-decoration: none;\r\n  }\r\n*, *:after, *:before {\r\n    box-sizing: border-box;\r\n  }\r\nh3 {\r\n    text-align: center; margin-bottom: 0;\r\n  }\r\nh4 {\r\n    position: relative;\r\n  }\r\n.grid {\r\n    margin: 0;\r\n  }\r\n.col-1-4 {\r\n    width: 25%;\r\n  }\r\n.module {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: #eee;\r\n    max-height: 120px;\r\n    min-width: 120px;\r\n    background-color: #607d8b;\r\n    border-radius: 2px;\r\n  }\r\n.module:hover {\r\n    background-color: #eee;\r\n    cursor: pointer;\r\n    color: #607d8b;\r\n  }\r\n.grid-pad {\r\n    padding: 10px 0;\r\n  }\r\n.grid-pad > [class*='col-']:last-of-type {\r\n    padding-right: 20px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .module {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n@media (max-width: 1024px) {\r\n    .grid {\r\n      margin: 0;\r\n    }\r\n    .module {\r\n      min-width: 60px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Users</h3>\r\n\r\n<div class=\"grid grid-pad\">\r\n  <a *ngFor=\"let user of users\" class=\"col-1-4\" routerLink=\"/detail/{{user.id}}\">\r\n  <div class=\"module user\">\r\n    <h4>{{user.username}}</h4>\r\n  </div>\r\n  </a>\r\n</div>\r\n\r\n<app-user-search></app-user-search>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_area_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-area/user.service */ "./src/app/user-area/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_user_area_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dustdb.service.ts":
/*!***********************************!*\
  !*** ./src/app/dustdb.service.ts ***!
  \***********************************/
/*! exports provided: DustDBServiceRequest, DustDBService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DustDBServiceRequest", function() { return DustDBServiceRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DustDBService", function() { return DustDBService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages/message.service */ "./src/app/messages/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DustDBServiceRequest = /** @class */ (function () {
    function DustDBServiceRequest(request, result, token) {
        if (request === void 0) { request = ''; }
        if (result === void 0) { result = ''; }
        if (token === void 0) { token = ''; }
        this.request = request;
        this.result = result;
        this.token = token;
    }
    return DustDBServiceRequest;
}());

;
var DustDBService = /** @class */ (function () {
    function DustDBService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.url = 'http://localhost:8000/admin.php';
    }
    /**
     * Send POST message to initialize database
     * This will probably be deprecated as soon as other services are finalized.
     */
    DustDBService.prototype.initializeDB = function () {
        var _this = this;
        this.log('POSTing initialize request');
        var status = new DustDBServiceRequest('initialize');
        this.http.post(this.url, status, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (status) { return _this.log(_this.url + " replied with " + status.result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('initializeDB')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    DustDBService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    /**
     * Log a UserService message with the MessageService.
     * @param message - message to print to message service
     */
    DustDBService.prototype.log = function (message) {
        this.messageService.add("DustDBService: " + message);
    };
    DustDBService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _messages_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], DustDBService);
    return DustDBService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup padded\">\r\n    <h3>LOGIN</h3>\r\n    <p>{{message}}</p>\r\n    <div *ngIf=\"!authService.isLoggedIn\">\r\n      <label>Username:<input [(ngModel)]=\"username\" placeholder=\"username\"></label><br/>\r\n      <label>Password:<input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\"></label>\r\n    </div>\r\n    <p>\r\n      <button (click)=\"login()\" *ngIf=\"!authService.isLoggedIn\">Login</button>\r\n      <button (click)=\"logout()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\r\n      <button (click)=\"cancel()\">Cancel</button>\r\n    </p>    \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
        this.message = 'not set';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.setMessage();
    };
    LoginComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(function () {
            _this.setMessage();
            setTimeout(function () {
                // Providing a `null` value to the named outlet
                // clears the contents of the named outlet
                _this.router.navigate([{ outlets: { popup: null } }]);
            }, 1000);
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/admin';
                // Redirect the user
                _this.router.navigate([redirect]);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    LoginComponent.prototype.cancel = function () {
        this.closePopup();
    };
    LoginComponent.prototype.closePopup = function () {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.router.navigate([{ outlets: { popup: null } }]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@routeAnimation'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "routeAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.display'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.position'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "position", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_3__["slideInDownAnimation"]]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup padded\">\r\n  <p>Logging out...</p>\r\n</div>\r\n<!-- \r\n<button (click)=\"gotoDashboard()\">back to dashboard</button> -->\r\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messages/message.service */ "./src/app/messages/message.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, messageService, router) {
        this.authService = authService;
        this.messageService = messageService;
        this.router = router;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.logout();
        // this.router.navigate(['/']);
        setTimeout(function () {
            // Providing a `null` value to the named outlet
            // clears the contents of the named outlet
            _this.router.navigate([{ outlets: { popup: null } }]);
        }, 1000);
    };
    LogoutComponent.prototype.gotoDashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@routeAnimation'),
        __metadata("design:type", Object)
    ], LogoutComponent.prototype, "routeAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.display'),
        __metadata("design:type", Object)
    ], LogoutComponent.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.position'),
        __metadata("design:type", Object)
    ], LogoutComponent.prototype, "position", void 0);
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_4__["slideInDownAnimation"]]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _messages_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/messages/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles\r\n\r\nh2 {\r\n  color: red;\r\n  font-weight: lighter;\r\n  line-height: 1;\r\n  display: block;\r\n  margin: none;\r\n}\r\n\r\nbody {\r\n  margin: 2em;\r\n}\r\n\r\nbody,\r\ninput[text],\r\nbutton {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\n\r\nbutton.clear {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\n\r\nbutton.clear {\r\n  color: #888;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.messages {\r\n  background: #333333;\r\n  display: block;\r\n  border-radius: 4px;\r\n} */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\" class=\"messages padded\">\r\n\r\n  <h2>Messages</h2>\r\n  <button class=\"clear\" (click)=\"messageService.clear()\">clear</button>\r\n  <div *ngFor='let message of messageService.messages'>{{message}}</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ "./src/app/messages/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/not-found.component.ts":
/*!****************************************!*\
  !*** ./src/app/not-found.component.ts ***!
  \****************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
    }
    PageNotFoundComponent.prototype.gotoDashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<h2>Page not found</h2><button (click)="gotoDashboard()">back to dashboard</button>'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/palliative-area/palliative-detail/palliative-detail.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/palliative-area/palliative-detail/palliative-detail.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/palliative-area/palliative-detail/palliative-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/palliative-area/palliative-detail/palliative-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"palliative\">\r\n\r\n  <h3>{{palliative.shortname | uppercase}} Details</h3>\r\n  <h4>{{palliative.longname}}</h4>\r\n  <table class=\"altcolors\"><tbody class=\"altcolors\">\r\n    <tr><td><label>id:</label></td><td class=\"description\">{{palliative.id}}</td></tr>\r\n    <tr><td><label>Test ID:</label></td><td class=\"description\">{{palliative.testid}}</td></tr>\r\n    <tr><td><label>Description:</label></td><td class=\"description\">{{palliative.description}}</td></tr>\r\n    <tr><td><label>userid:</label></td><td>{{palliative.userid}}<div *ngIf=\"user\"><span> | {{user.username}} | {{user.firstname}} {{user.lastname}}</span></div></td></tr>\r\n    <tr><td><label>mprt <span style=\"font-family: serif;\">&tau;</span>:</label></td><td>{{palliative.mprt}}</td></tr>\r\n    <tr><td><label>mprt <span style=\"font-family: serif; font-style: italic;\">t</span></label></td><td>{{palliative.mprtTime}}</td></tr>\r\n  </tbody>\r\n  </table>\r\n\r\n  <div class=\"mprtGraph\">\r\n    <label>MPRT <span style=\"font-family: serif;\">&tau;</span> Graph</label>\r\n    <button *ngIf=\"!graphVisible\" (click)=\"showGraph()\">show</button>\r\n    <button *ngIf=\"graphVisible\" (click)=\"hideGraph()\">hide</button>\r\n    <button *ngIf=\"graphVisible\" (click)=\"plotGraph()\">plot</button>\r\n    <button *ngIf=\"graphVisible\" (click)=\"cleanData()\">clean</button>\r\n    <button *ngIf=\"graphVisible\" (click)=\"calcMPRT()\">calc mprt</button>\r\n    <div *ngIf=\"graphVisible\">\r\n      <div id=\"mprtGraphC\"></div>\r\n      <div id=\"mprtGraphLnC\"></div>\r\n      <div id=\"mprtGraphDeriv1\"></div>\r\n      <div id=\"mprtGraphDeriv2\"></div>\r\n      <div id=\"mprtGraphRSQ\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dataPointList\">\r\n    <label>Data Points</label>\r\n      <button *ngIf=\"!dataVisible\" (click)=\"showData()\">show</button>\r\n      <button *ngIf=\"dataVisible\" (click)=\"hideData()\">hide</button>\r\n    \r\n    <table *ngIf=\"dataVisible\">\r\n      <tbody class=\"altcolors\">\r\n      <tr><th>t</th><th>C</th><th>ln(C)</th><th>C'(t)</th><th>C''(t)</th><th>R^2</th></tr>\r\n      <tr *ngFor=\"let dp of palliative.data\" class=\"dataPoint\">\r\n        <td>{{dp.t | number}}</td>\r\n        <td>{{dp.C | number}}</td>\r\n        <td>{{dp.lnC | number}}</td>\r\n        <td>{{dp.dCdt | number}}</td>\r\n        <td>{{dp.deriv2 | number}}</td>\r\n        <td>{{dp.rsq | number}}</td>\r\n      </tr>\r\n    </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <h2>Edit Details</h2>\r\n  <div><label>Test ID:</label><input [(ngModel)]=\"palliative.testid\" placeholder=\"testid\"/></div>\r\n  <div><label>Short Name:</label><input [(ngModel)]=\"palliative.shortname\" placeholder=\"shortname\"/></div>\r\n  <div><label>Long Name:</label><input [(ngModel)]=\"palliative.longname\" placeholder=\"longname\"/></div>\r\n  <div><label>Description:</label><input [(ngModel)]=\"palliative.description\" placeholder=\"description\"/></div>\r\n  <div><label>User Id:</label><input [(ngModel)]=\"palliative.userid\" placeholder=\"userid\"/></div>\r\n\r\n  <button (click)=\"save()\">save</button>\r\n  <button (blick)=\"cancel()\">close</button>\r\n\r\n  <div class=\"dataPointList padded\">\r\n    <h3>Data Points</h3>\r\n    <table>\r\n      <tr><th>t</th><th>C</th></tr>\r\n      <tr *ngFor=\"let dp of palliative.data\" class=\"dataPoint\">\r\n        <td><input [(ngModel)]=\"dp.t\"/></td>\r\n        <td><input [(ngModel)]=\"dp.C\"/></td>\r\n      </tr>\r\n    </table>\r\n    <button (click)=\"addDatapoint()\">add datapoint</button>\r\n    <br/><textarea [(ngModel)]=\"textboxText\" cols=\"40\" rows=\"10\">{{textboxText}}</textarea>\r\n    <br/><button (click)=\"importCSV()\">import CSV</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/palliative-area/palliative-detail/palliative-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/palliative-area/palliative-detail/palliative-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PalliativeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalliativeDetailComponent", function() { return PalliativeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _palliative__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../palliative */ "./src/app/palliative-area/palliative.ts");
/* harmony import */ var _palliative_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../palliative.service */ "./src/app/palliative-area/palliative.service.ts");
/* harmony import */ var _user_area_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user-area/user */ "./src/app/user-area/user.ts");
/* harmony import */ var _user_area_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user-area/user.service */ "./src/app/user-area/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PalliativeDetailComponent = /** @class */ (function () {
    function PalliativeDetailComponent(route, router, palliativeService, userService, location) {
        this.route = route;
        this.router = router;
        this.palliativeService = palliativeService;
        this.userService = userService;
        this.location = location;
        this.dataVisible = false;
        this.graphVisible = true;
        this.textboxText = '';
    }
    PalliativeDetailComponent.prototype.ngOnInit = function () {
        this.getPalliative();
    };
    PalliativeDetailComponent.prototype.getUser = function () {
        var _this = this;
        if (this.palliative && this.palliative.userid > 0) {
            this.userService.getUser(this.palliative.userid).subscribe(function (user) { return _this.user = user; });
        }
    };
    PalliativeDetailComponent.prototype.getPalliative = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.palliativeService.getPalliative(id).subscribe(function (palliative) {
            _this.palliative = palliative;
            _this.getUser();
        });
    };
    PalliativeDetailComponent.prototype.addDatapoint = function () {
        if (!(this.palliative.data instanceof Array)) {
            this.palliative.data = [];
        }
        this.palliative.data.push(new _palliative__WEBPACK_IMPORTED_MODULE_3__["DustColumnDataPoint"]());
    };
    PalliativeDetailComponent.prototype.save = function () {
        var _this = this;
        this.palliativeService.updatePalliative(this.palliative)
            .subscribe(function () { return _this.gotoPalliatives(); });
    };
    PalliativeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PalliativeDetailComponent.prototype.gotoPalliatives = function () {
        this.router.navigate(['/palliatives']);
    };
    PalliativeDetailComponent.prototype.cancel = function () {
        this.gotoPalliatives();
    };
    PalliativeDetailComponent.prototype.showData = function () {
        this.dataVisible = true;
    };
    PalliativeDetailComponent.prototype.hideData = function () {
        this.dataVisible = false;
    };
    PalliativeDetailComponent.prototype.showGraph = function () {
        var _this = this;
        this.graphVisible = true;
        setTimeout(function () {
            if (_this.palliative.mprt === null) {
                _this.calcMPRT();
            }
            _this.plotGraph();
        }, 500);
    };
    PalliativeDetailComponent.prototype.hideGraph = function () {
        this.graphVisible = false;
    };
    PalliativeDetailComponent.prototype.plotGraph = function () {
        if (!this.graphVisible)
            return;
        var e;
        // let trace1 = {
        //   x: [],
        //   y: [],
        //   mode: 'lines',
        //   type: 'scatter'
        // };
        // for (let element of this.palliative.data) {
        //   trace1.x.push(element.t);
        //   trace1.y.push(element.C);
        // }
        // let xys = this.palliative.getXYs(DustColumnGraphType.Concentration, 'lines', 'scatter');
        // trace1.x = xys.x;
        // trace1.y = xys.y;
        if (!(this.palliative instanceof _palliative__WEBPACK_IMPORTED_MODULE_3__["Palliative"])) {
            this.palliative = _palliative__WEBPACK_IMPORTED_MODULE_3__["Palliative"].CreateFromJSON(this.palliative);
        }
        var graphs = [
            { id: 'mprtGraphC', type: _palliative__WEBPACK_IMPORTED_MODULE_3__["DustColumnGraphType"].Concentration },
            { id: 'mprtGraphLnC', type: _palliative__WEBPACK_IMPORTED_MODULE_3__["DustColumnGraphType"].LnC },
            { id: 'mprtGraphDeriv1', type: _palliative__WEBPACK_IMPORTED_MODULE_3__["DustColumnGraphType"].dCdt },
            { id: 'mprtGraphDeriv2', type: _palliative__WEBPACK_IMPORTED_MODULE_3__["DustColumnGraphType"].Deriv2 },
            { id: 'mprtGraphRSQ', type: _palliative__WEBPACK_IMPORTED_MODULE_3__["DustColumnGraphType"].RSQ }
        ];
        for (var _i = 0, graphs_1 = graphs; _i < graphs_1.length; _i++) {
            var g = graphs_1[_i];
            var data = this.palliative.getXYs(g.type, 'lines', 'scatter');
            var layout = this.palliative.getLayout(g.type);
            e = document.getElementById(g.id);
            Plotly.plot(e, data, layout);
        }
        // let layout = {
        //   xaxis: {
        //     title: 'time (t)'
        //   },
        //   yaxis: {
        //     title: 'Concentration (C)'
        //   },
        //   title: 'Mean Particle Residence Time'
        // };
    };
    PalliativeDetailComponent.prototype.calcMPRT = function () {
        var p = new _palliative__WEBPACK_IMPORTED_MODULE_3__["Palliative"]();
        for (var _i = 0, _a = this.palliative.data; _i < _a.length; _i++) {
            var value = _a[_i];
            p.data.push(new _palliative__WEBPACK_IMPORTED_MODULE_3__["DustColumnDataPoint"](value.t, value.C));
        }
        p.calcMPRT();
        this.palliative.data = p.data;
        this.palliative.mprt = p.mprt;
        this.palliative.mprtTime = p.mprtTime;
    };
    PalliativeDetailComponent.prototype.cleanData = function () {
        var p = new _palliative__WEBPACK_IMPORTED_MODULE_3__["Palliative"]();
        for (var _i = 0, _a = this.palliative.data; _i < _a.length; _i++) {
            var value = _a[_i];
            p.data.push(new _palliative__WEBPACK_IMPORTED_MODULE_3__["DustColumnDataPoint"](value.t, value.C));
        }
        p.cleanData();
        this.palliative.data = p.data;
    };
    PalliativeDetailComponent.prototype.importCSV = function () {
        var p = new _palliative__WEBPACK_IMPORTED_MODULE_3__["Palliative"]();
        p.importFromCSV(this.textboxText);
        this.palliative.data = p.data;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _palliative__WEBPACK_IMPORTED_MODULE_3__["Palliative"])
    ], PalliativeDetailComponent.prototype, "palliative", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _user_area_user__WEBPACK_IMPORTED_MODULE_5__["User"])
    ], PalliativeDetailComponent.prototype, "user", void 0);
    PalliativeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-palliative-detail',
            template: __webpack_require__(/*! ./palliative-detail.component.html */ "./src/app/palliative-area/palliative-detail/palliative-detail.component.html"),
            styles: [__webpack_require__(/*! ./palliative-detail.component.css */ "./src/app/palliative-area/palliative-detail/palliative-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _palliative_service__WEBPACK_IMPORTED_MODULE_4__["PalliativeService"],
            _user_area_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], PalliativeDetailComponent);
    return PalliativeDetailComponent;
}());



/***/ }),

/***/ "./src/app/palliative-area/palliative-list/palliative-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/palliative-area/palliative-list/palliative-list.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/palliative-area/palliative-list/palliative-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/palliative-area/palliative-list/palliative-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-palliative-search></app-palliative-search>\r\n\r\n<div>\r\n  <label>Add Palliative:</label>\r\n    <input #palliativeName />\r\n  <!-- (click) passes input value to add() and then clears the input -->\r\n  <button (click)=\"add(palliativeName.value); palliativeName.value=''\">add</button>\r\n</div>\r\n\r\n<ul class=\"items\">\r\n  <li *ngFor=\"let palliative of palliatives\">\r\n    <a routerLink=\"/palliatives/detail/{{palliative.id}}\">\r\n    <span class=\"badge\">{{palliative.id}}</span>{{palliative.shortname}}</a>\r\n    <button class=\"delete\" title=\"delete palliative\" (click)=\"delete(palliative)\">x</button>\r\n  </li>\r\n</ul>\r\n\r\n<!-- <app-palliative-detail [palliative]=\"selectedPalliative\"></app-palliative-detail> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/palliative-area/palliative-list/palliative-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/palliative-area/palliative-list/palliative-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: PalliativeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalliativeListComponent", function() { return PalliativeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _palliative_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palliative.service */ "./src/app/palliative-area/palliative.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PalliativeListComponent = /** @class */ (function () {
    function PalliativeListComponent(palliativeService) {
        this.palliativeService = palliativeService;
    }
    PalliativeListComponent.prototype.ngOnInit = function () {
        this.getPalliatives();
    };
    PalliativeListComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.palliativeService.addPalliative({ id: null, shortname: name })
            .subscribe(function (palliative) {
            // this.palliatives.push(palliative);
            _this.getPalliatives();
        });
    };
    PalliativeListComponent.prototype.delete = function (palliative) {
        this.palliatives = this.palliatives.filter(function (h) { return h !== palliative; });
        this.palliativeService.deletePalliative(palliative).subscribe();
    };
    PalliativeListComponent.prototype.getPalliatives = function () {
        var _this = this;
        this.palliativeService.getPalliatives().subscribe(function (palliatives) { return _this.palliatives = palliatives; });
    };
    PalliativeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-palliative-list',
            template: __webpack_require__(/*! ./palliative-list.component.html */ "./src/app/palliative-area/palliative-list/palliative-list.component.html"),
            styles: [__webpack_require__(/*! ./palliative-list.component.css */ "./src/app/palliative-area/palliative-list/palliative-list.component.css")]
        }),
        __metadata("design:paramtypes", [_palliative_service__WEBPACK_IMPORTED_MODULE_1__["PalliativeService"]])
    ], PalliativeListComponent);
    return PalliativeListComponent;
}());



/***/ }),

/***/ "./src/app/palliative-area/palliative-search/palliative-search.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/palliative-area/palliative-search/palliative-search.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/palliative-area/palliative-search/palliative-search.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/palliative-area/palliative-search/palliative-search.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"palliative-search-component\">\r\n<h4>Palliative Search</h4>\r\n\r\n<input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\r\n\r\n<ul class=\"search-result\">\r\n  <li *ngFor=\"let palliative of palliatives$ | async\">\r\n    <a routerLink=\"detail/{{palliative.id}}\">{{palliative.shortname}}</a>\r\n  </li>\r\n</ul>\r\n</div>"

/***/ }),

/***/ "./src/app/palliative-area/palliative-search/palliative-search.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/palliative-area/palliative-search/palliative-search.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PalliativeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalliativeSearchComponent", function() { return PalliativeSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _palliative_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../palliative.service */ "./src/app/palliative-area/palliative.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PalliativeSearchComponent = /** @class */ (function () {
    function PalliativeSearchComponent(palliativeService) {
        this.palliativeService = palliativeService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PalliativeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.palliatives$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term,
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
            return _this.palliativeService.searchPalliatives(term);
        }));
    };
    PalliativeSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    PalliativeSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-palliative-search',
            template: __webpack_require__(/*! ./palliative-search.component.html */ "./src/app/palliative-area/palliative-search/palliative-search.component.html"),
            styles: [__webpack_require__(/*! ./palliative-search.component.css */ "./src/app/palliative-area/palliative-search/palliative-search.component.css")]
        }),
        __metadata("design:paramtypes", [_palliative_service__WEBPACK_IMPORTED_MODULE_3__["PalliativeService"]])
    ], PalliativeSearchComponent);
    return PalliativeSearchComponent;
}());



/***/ }),

/***/ "./src/app/palliative-area/palliative.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/palliative-area/palliative.service.ts ***!
  \*******************************************************/
/*! exports provided: PalliativeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalliativeService", function() { return PalliativeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../messages/message.service */ "./src/app/messages/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PalliativeService = /** @class */ (function () {
    function PalliativeService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.serviceUrl = '/dust.php/palliatives';
        var url = window.location.href;
        if (url.search(/localhost/)) {
            this.serviceUrl = 'http://localhost:8000' + this.serviceUrl;
        }
    }
    PalliativeService.prototype.getPalliative = function (id) {
        var _this = this;
        var url = this.serviceUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("fetched palliative id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getPalliative id=" + id)));
    };
    PalliativeService.prototype.getPalliatives = function () {
        var _this = this;
        return this.http.get(this.serviceUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (palliatives) { return _this.log('fetched palliatives'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getPalliatives', [])));
    };
    /** PUT: update the palliative on the server */
    PalliativeService.prototype.updatePalliative = function (palliative) {
        var _this = this;
        return this.http.put(this.serviceUrl + ("/" + palliative.id), palliative, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("updated palliative id=" + palliative.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updatePalliative')));
    };
    /** POST: add a new palliative to the server */
    PalliativeService.prototype.addPalliative = function (palliative) {
        var _this = this;
        return this.http.post(this.serviceUrl, palliative, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_palliative) { return _this.log("added palliative w/ id=" + _palliative.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addPalliative')));
    };
    /** DELETE: delete the palliative from the server */
    PalliativeService.prototype.deletePalliative = function (palliative) {
        var _this = this;
        var id = typeof palliative === 'number' ? palliative : palliative.id;
        var url = this.serviceUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("deleted palliative id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deletePalliative')));
    };
    /** GET palliatives whose name contains search term */
    PalliativeService.prototype.searchPalliatives = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty palliative array
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        return this.http.get(this.serviceUrl + "/?shortname=" + term)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("found palliatives matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('searchPalliatives', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    PalliativeService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for palliative consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    // Log a PalliativeService message with the MessageService
    PalliativeService.prototype.log = function (message) {
        this.messageService.add("PalliativeService: " + message);
    };
    PalliativeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _messages_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], PalliativeService);
    return PalliativeService;
}());



/***/ }),

/***/ "./src/app/palliative-area/palliative.ts":
/*!***********************************************!*\
  !*** ./src/app/palliative-area/palliative.ts ***!
  \***********************************************/
/*! exports provided: DustColumnGraphType, DustColumnGraph, DustColumnDataPoint, Palliative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DustColumnGraphType", function() { return DustColumnGraphType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DustColumnGraph", function() { return DustColumnGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DustColumnDataPoint", function() { return DustColumnDataPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Palliative", function() { return Palliative; });
var DustColumnGraphType;
(function (DustColumnGraphType) {
    DustColumnGraphType[DustColumnGraphType["Concentration"] = 0] = "Concentration";
    DustColumnGraphType[DustColumnGraphType["LnC"] = 1] = "LnC";
    DustColumnGraphType[DustColumnGraphType["dCdt"] = 2] = "dCdt";
    DustColumnGraphType[DustColumnGraphType["Deriv1"] = 3] = "Deriv1";
    DustColumnGraphType[DustColumnGraphType["Deriv2"] = 4] = "Deriv2";
    DustColumnGraphType[DustColumnGraphType["RSQ"] = 5] = "RSQ";
})(DustColumnGraphType || (DustColumnGraphType = {}));
var DustColumnGraph = /** @class */ (function () {
    function DustColumnGraph(mode, type) {
        if (mode === void 0) { mode = 'lines'; }
        if (type === void 0) { type = 'scatter'; }
        this.mode = mode;
        this.type = type;
        this.x = [];
        this.y = [];
    }
    return DustColumnGraph;
}());

var DustColumnDataPoint = /** @class */ (function () {
    function DustColumnDataPoint(t, // time in seconds
    C // concentration in PM10 (coarse particles between 2.5 and 10 micrometers in diameter)
    ) {
        if (t === void 0) { t = 0; }
        if (C === void 0) { C = 0; } // concentration in PM10 (coarse particles between 2.5 and 10 micrometers in diameter)
        this.t = t;
        this.C = C; // concentration in PM10 (coarse particles between 2.5 and 10 micrometers in diameter)
        this.lnC = 0;
        this.slope = 0;
        this.intercept = 0;
        this.deriv1 = 0;
        this.deriv2 = 0;
        this.dCdt = 0;
        this.rsq = 0;
        this.tau = 0;
    }
    DustColumnDataPoint.prototype.clone = function () {
        return new DustColumnDataPoint(this.t, this.C);
    };
    DustColumnDataPoint.prototype.copy = function (v) {
        this.t = v.t;
        this.C = v.C;
        return this;
    };
    DustColumnDataPoint.createFromJSON = function (json) {
        var p = new DustColumnDataPoint();
        p.t = json.t;
        p.C = json.C;
        p.lnC = json.lnC;
        p.slope = json.slope;
        p.intercept = json.intercept;
        p.deriv1 = json.deriv1;
        p.deriv2 = json.deriv2;
        p.dCdt = json.dCdt;
        p.rsq = json.rsq;
        p.tau = json.tau;
        return p;
    };
    DustColumnDataPoint.lerp = function (a, b, x) {
        return new DustColumnDataPoint(x * a.t + (1 - x) * b.t, x * a.C + (1 - x) * b.C);
    };
    return DustColumnDataPoint;
}());

// class MPRTPoint {
//     lnC = 0;
//     slope = 0;
//     intercept = 0;
//     deriv1 = 0;
//     deriv2 = 0;
//     dCdt = 0;
//     rsq = 0;
//     tau = 0;
//     constructor(
//         public t: number = 0,
//         public C: number = 0
//     ) {
//         this.lnC = Math.log(C);
//     }
// }
function mean(Xs) {
    var a = 0;
    for (var _i = 0, Xs_1 = Xs; _i < Xs_1.length; _i++) {
        var x = Xs_1[_i];
        a += x;
    }
    return a / Xs.length;
}
/**
 * Calculate the slope of the linear regression line.
 * @param knownYs
 * @param knownXs
 */
function regressionSlope(knownYs, knownXs) {
    if (knownXs.length != knownYs.length)
        return 0.0;
    if (knownXs.length < 1)
        return 0.0;
    var count = knownXs.length;
    var meanX = mean(knownXs);
    var meanY = mean(knownYs);
    var num = 0;
    var den = 0;
    for (var i = 0; i < count; i++) {
        var x = knownXs[i];
        var y = knownYs[i];
        num += (x - meanX) * (y - meanY);
        den += (x - meanX) * (x - meanX);
    }
    return num / den;
}
function regressionIntercept(knownYs, knownXs) {
    if (knownXs.length != knownYs.length)
        return 0.0;
    if (knownXs.length < 1)
        return 0.0;
    var count = knownXs.length;
    var meanX = mean(knownXs);
    var meanY = mean(knownYs);
    var num = 0;
    var den = 0;
    for (var i = 0; i < count; i++) {
        var x = knownXs[i];
        var y = knownYs[i];
        num += (x - meanX) * (y - meanY);
        den += (x - meanX) * (x - meanX);
    }
    var b = num / den;
    return meanY - b * meanX;
}
// Pearson product-moment correlation coefficient
function RSQ(knownYs, knownXs) {
    if (knownXs.length != knownYs.length)
        return 0.0;
    if (knownXs.length < 1)
        return 0.0;
    var count = knownXs.length;
    var meanX = mean(knownXs);
    var meanY = mean(knownYs);
    var num = 0;
    var denx = 0;
    var deny = 0;
    for (var i = 0; i < count; i++) {
        var x = knownXs[i];
        var y = knownYs[i];
        num += (x - meanX) * (y - meanY);
        denx += (x - meanX) * (x - meanX);
        deny += (y - meanY) * (y - meanY);
    }
    return num / Math.sqrt(denx * deny);
}
var Palliative = /** @class */ (function () {
    function Palliative() {
        this.data = [];
    }
    Palliative.CreateFromJSON = function (palliative) {
        var p = new Palliative();
        p.id = palliative.id;
        p.userid = palliative.userid;
        p.shortname = palliative.shortname;
        p.longname = palliative.longname;
        p.description = palliative.description;
        p.data = [];
        if (palliative.data) {
            for (var _i = 0, _a = palliative.data; _i < _a.length; _i++) {
                var dcp = _a[_i];
                p.data.push(DustColumnDataPoint.createFromJSON(dcp));
            }
        }
        p.mprt = palliative.mprt;
        p.mprtTime = palliative.mprtTime;
        return p;
    };
    Palliative.prototype.cleanData = function () {
        var points = [];
        var MaxSeconds = 59;
        for (var i = 0; i <= MaxSeconds; i++) {
            points.push(new DustColumnDataPoint());
        }
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var e = _a[_i];
            if (typeof e.t !== 'number')
                e.t = parseFloat(e.t);
            if (typeof e.C !== 'number')
                e.C = parseFloat(e.C);
        }
        this.data.sort(function (a, b) {
            return a.t - b.t;
        });
        // remove duplicates and outsiders
        var uniq = [];
        var last = -1;
        for (var _b = 0, _c = this.data; _b < _c.length; _b++) {
            var e = _c[_b];
            if (e.t < 0)
                continue;
            if (e.t > 59)
                continue;
            if (e.t == last)
                continue;
            last = e.t;
            uniq.push(e);
        }
        this.data = uniq;
        console.log(this.data.length);
        var j = 0;
        for (var i = 0; i <= MaxSeconds; i++) {
            var t = i;
            var a = this.data[j].clone();
            var b = this.data[j + 1].clone();
            if (j == 0 && this.data[j].t > t) {
                points[i].t = t;
                points[i].C = a.C;
                console.log('pre: ', j, points[i]);
            }
            else if (j == this.data.length - 1 && b.t <= t) {
                points[i].t = t;
                points[i].C = b.C;
                console.log('post: ', j, points[i]);
            }
            else {
                // skip forward until we have the right two samples    
                while (j < this.data.length - 2 && b.t < t) {
                    j++;
                    a = this.data[j].clone();
                    b = this.data[j + 1].clone();
                    if (j >= this.data.length - 2)
                        break;
                }
                if (b.t >= t) {
                    var dt = b.t - a.t;
                    var dC = b.C - a.C;
                    var slope = dC / dt;
                    var delta = t - a.t;
                    points[i].t = t;
                    points[i].C = a.C + delta * slope;
                }
                else {
                    points[i].t = t;
                    points[i].C = b.C;
                }
                console.log('lerp: ', j, points[i]);
            }
        }
        this.data = points;
    };
    Palliative.prototype.calcMPRT = function () {
        var MaxSeconds = 59;
        var i = 0;
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.t != i)
                break;
            i++;
        }
        this.mprt = -1;
        this.mprtTime = -1;
        if (i != 60) {
            return false;
        }
        var knownXs = [];
        var knownYs = [];
        var foundTau = false;
        for (var i_1 = 0; i_1 <= MaxSeconds; i_1++) {
            var p = this.data[i_1];
            p.lnC = Math.log(p.C);
            knownXs.push(p.t);
            knownYs.push(p.lnC);
            p.slope = regressionSlope(knownYs, knownXs);
            p.intercept = regressionIntercept(knownYs, knownXs);
            p.deriv1 = Math.abs(Math.exp(p.intercept) * p.slope);
            p.deriv2 = p.deriv1 * Math.abs(p.slope * Math.exp(p.slope * p.t));
            p.dCdt = Math.abs(Math.exp(p.intercept) * p.slope * Math.exp(p.slope * p.t));
            p.rsq = Math.pow(RSQ(knownYs, knownXs), 2);
            p.tau = Math.abs(1 / p.slope);
            if (i_1 < 6)
                continue;
            // 0.001 mg/m^3/s^2
            if (!foundTau && p.deriv2 < 0.001) {
                this.mprt = p.tau;
                this.mprtTime = p.t;
                foundTau = true;
            }
        }
        return true;
    };
    Palliative.prototype.importFromCSV = function (data) {
        // split using regex any sequence of 1 or more newlines or carriage returns
        var splitLines = [];
        var lines = data.split(/[\n\r]+/);
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            // split with either white space or commas
            var unfilteredTokens = line.split(/[,\s]+/);
            if (unfilteredTokens.length > 0 && unfilteredTokens[0][0] == '#')
                continue;
            var tokens = [];
            for (var _a = 0, unfilteredTokens_1 = unfilteredTokens; _a < unfilteredTokens_1.length; _a++) {
                var t = unfilteredTokens_1[_a];
                if (t.length > 0) {
                    tokens.push(t);
                }
            }
            if (tokens.length == 0) {
                continue;
            }
            splitLines.push(tokens);
        }
        // tokens should be numbers t and then C
        // we skip every line when the first two tokens are not numbers
        var i = 0;
        this.data = [];
        for (var _b = 0, splitLines_1 = splitLines; _b < splitLines_1.length; _b++) {
            var line = splitLines_1[_b];
            if (line.length >= 2) {
                var t = +line[0];
                var C = +line[1];
                if (isNaN(t) || isNaN(C))
                    continue;
                this.data.push(new DustColumnDataPoint(t, C));
            }
        }
    };
    Palliative.prototype.getXYs = function (whichType, mode, type) {
        if (mode === void 0) { mode = 'lines'; }
        if (type === void 0) { type = 'scatter'; }
        var dcgd = new DustColumnGraph(mode, type);
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var p = _a[_i];
            var x = p.t;
            var y = 0;
            switch (whichType) {
                case DustColumnGraphType.Concentration:
                    y = p.C;
                    break;
                case DustColumnGraphType.LnC:
                    y = p.lnC;
                    break;
                case DustColumnGraphType.Deriv1:
                    y = p.deriv1;
                    break;
                case DustColumnGraphType.Deriv2:
                    y = p.deriv2;
                    break;
                case DustColumnGraphType.dCdt:
                    y = p.dCdt;
                    break;
                case DustColumnGraphType.RSQ:
                    y = p.rsq;
                    break;
                default:
                    y = 0;
            }
            dcgd.x.push(x);
            dcgd.y.push(y);
        }
        var linearRegression = new DustColumnGraph(mode, type);
        if (whichType == DustColumnGraphType.LnC) {
            var slope = 0;
            var intercept = 0;
            for (var i = 0; i <= this.data.length; i++) {
                if (this.data[i].t > this.mprtTime)
                    break;
                slope = this.data[i].slope;
                intercept = this.data[i].intercept;
            }
            for (var i = 0; i <= this.data.length; i++) {
                if (this.data[i].t > this.mprtTime)
                    break;
                linearRegression.x.push(this.data[i].t);
                linearRegression.y.push(intercept + slope * this.data[i].t);
            }
            return [dcgd, linearRegression];
        }
        return [dcgd];
    };
    Palliative.prototype.getLayout = function (whichType) {
        var layout = {
            xaxis: {
                title: 'time (t)'
            },
            yaxis: {
                title: 'Concentration (C)'
            },
            title: 'Mean Particle Residence Time'
        };
        switch (whichType) {
            case DustColumnGraphType.Concentration:
                layout.xaxis.title = 'Time (s)';
                layout.yaxis.title = 'Concentration (mg/m³)';
                layout.title = 'Mean Particle Residence Time τ';
                break;
            case DustColumnGraphType.LnC:
                layout.xaxis.title = 'Time (s)';
                layout.yaxis.title = 'Ln(C)';
                layout.title = 'Mean Particle Residence Time τ';
                break;
            case DustColumnGraphType.Deriv1:
                layout.xaxis.title = 'Time (s)';
                layout.yaxis.title = 'Concentration (mg/m³/s)';
                layout.title = 'Rate of Change in Concentration';
                break;
            case DustColumnGraphType.Deriv2:
                layout.xaxis.title = 'Time (s)';
                layout.yaxis.title = 'Concentration (mg/m³/s²)';
                layout.title = 'Rate of Reduction in Rate of Concentration Change';
                break;
            case DustColumnGraphType.dCdt:
                layout.xaxis.title = 'Time (s)';
                layout.yaxis.title = 'Concentration (mg/m³/s)';
                layout.title = 'Rate of Change in Concentration';
                break;
            case DustColumnGraphType.RSQ:
                layout.xaxis.title = 'Time (s)';
                layout.yaxis.title = 'R²';
                layout.title = 'R²';
                break;
        }
        return layout;
    };
    return Palliative;
}());



/***/ }),

/***/ "./src/app/palliative-area/palliatives-routing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/palliative-area/palliatives-routing.component.ts ***!
  \******************************************************************/
/*! exports provided: PalliativesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalliativesRoutingModule", function() { return PalliativesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _palliative_list_palliative_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palliative-list/palliative-list.component */ "./src/app/palliative-area/palliative-list/palliative-list.component.ts");
/* harmony import */ var _palliative_detail_palliative_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./palliative-detail/palliative-detail.component */ "./src/app/palliative-area/palliative-detail/palliative-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var palliativesRoutes = [
    { path: 'palliatives', component: _palliative_list_palliative_list_component__WEBPACK_IMPORTED_MODULE_2__["PalliativeListComponent"] },
    { path: 'palliatives/detail/:id', component: _palliative_detail_palliative_detail_component__WEBPACK_IMPORTED_MODULE_3__["PalliativeDetailComponent"] },
];
var PalliativesRoutingModule = /** @class */ (function () {
    function PalliativesRoutingModule() {
    }
    PalliativesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(palliativesRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], PalliativesRoutingModule);
    return PalliativesRoutingModule;
}());



/***/ }),

/***/ "./src/app/user-area/user-detail/user-detail.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/user-area/user-detail/user-detail.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DetailComponent's private CSS styles */\r\n\r\n"

/***/ }),

/***/ "./src/app/user-area/user-detail/user-detail.component.html":
/*!******************************************************************!*\
  !*** ./src/app/user-area/user-detail/user-detail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user$ | async as user\">\r\n\r\n  <h3>{{user.username | uppercase}} Details</h3>\r\n  <div><span>id: {{user.id}}</span></div>\r\n  <!-- <div><span>Name: {{user.firstname}} {{user.lastname}}</span></div>\r\n  <div><span>Organization: {{user.organization}}</span></div>\r\n  <div><span>Email: {{user.email}}</span></div> -->\r\n  \r\n  <div><label>First name:<input [(ngModel)]=\"user.firstname\" placeholder=\"firstname\"></label></div>\r\n  <div><label>Last name:<input [(ngModel)]=\"user.lastname\" placeholder=\"lastname\"></label></div>\r\n  <div><label>Organization:<input [(ngModel)]=\"user.organization\" placeholder=\"organization\"></label></div>\r\n  <div><label>Email:<input [(ngModel)]=\"user.email\" placeholder=\"email\"></label></div>\r\n  \r\n  <button (click)=\"save()\">save</button>\r\n  <button (click)=\"goBack()\">go back</button>\r\n  <button (click)=\"gotoUsers(user)\">go to users</button>\r\n</div>"

/***/ }),

/***/ "./src/app/user-area/user-detail/user-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user-area/user-detail/user-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user-area/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user-area/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDetailComponent = /** @class */ (function () {
    // user: User;
    function UserDetailComponent(route, router, service, location) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.location = location;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.user$ = this.service.getUser(id);
    };
    UserDetailComponent.prototype.getUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.service.getUser(id).subscribe(function (user) { return _this.user = user; });
    };
    UserDetailComponent.prototype.save = function () {
        var _this = this;
        this.service.updateUser(this.user)
            .subscribe(function () {
            // this.goBack()
            _this.getUser();
        });
    };
    UserDetailComponent.prototype.gotoUsers = function (user) {
        var userId = user ? user.id : null;
        this.router.navigate(['/users', { id: userId }]);
    };
    UserDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _user__WEBPACK_IMPORTED_MODULE_3__["User"])
    ], UserDetailComponent.prototype, "user", void 0);
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/user-area/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/user-area/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/user-area/user-list/user-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-area/user-list/user-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-area/user-list/user-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-area/user-list/user-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Users</h2>\r\n\r\n<div>\r\n  <label>User name:\r\n    <input #userName />\r\n  </label>\r\n  <!-- (click) passes input value to add() and then clears the input -->\r\n  <button (click)=\"add(userName.value); userName.value=''\">\r\n    add\r\n  </button>\r\n</div>\r\n\r\n<ul class=\"items\">\r\n  <li *ngFor=\"let user of users$ | async\"\r\n  [class.selected]=\"user.id === selectedId\"\r\n  >\r\n    <a routerLink=\"/users/detail/{{user.id}}\">\r\n      <span class=\"badge\">{{user.id}}</span> {{user.username}}</a>\r\n      <button class=\"delete\" title=\"delete user\"\r\n      (click)=\"delete(user)\">x</button>\r\n  </li>\r\n</ul>\r\n\r\n<app-user-detail [user]=\"selectedUser\"></app-user-detail>\r\n"

/***/ }),

/***/ "./src/app/user-area/user-list/user-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-area/user-list/user-list.component.ts ***!
  \************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user-area/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserListComponent = /** @class */ (function () {
    function UserListComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getUsers();
        this.users$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            // + causes the returned string to be converted to a number
            _this.selectedId = +params.get('id');
            return _this.service.getUsers();
        }));
    };
    UserListComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.service.addUser({ id: null, username: name })
            .subscribe(function (user) {
            _this.users.push(user);
        });
    };
    UserListComponent.prototype.delete = function (user) {
        this.users = this.users.filter(function (h) { return h !== user; });
        this.service.deleteUser(user).subscribe();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-area/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-area/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user-area/user-search/user-search.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/user-area/user-search/user-search.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* UserSearch private styles */\r\n.search-result li {\r\n    border-bottom: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    width:195px;\r\n    height: 16px;\r\n    padding: 5px;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n  }\r\n.search-result li:hover {\r\n    background-color: #607D8B;\r\n  }\r\n.search-result li a {\r\n    color: #888;\r\n    display: block;\r\n    text-decoration: none;\r\n  }\r\n.search-result li a:hover {\r\n    color: white;\r\n  }\r\n.search-result li a:active {\r\n    color: white;\r\n  }\r\n#search-box {\r\n    width: 200px;\r\n    height: 20px;\r\n  }\r\nul.search-result {\r\n    margin-top: 0;\r\n    padding-left: 0;\r\n  }"

/***/ }),

/***/ "./src/app/user-area/user-search/user-search.component.html":
/*!******************************************************************!*\
  !*** ./src/app/user-area/user-search/user-search.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\r\n  <h4>User Search</h4>\r\n\r\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\r\n\r\n  <ul class=\"search-result\">\r\n    <li *ngFor=\"let user of users$ | async\">\r\n      <a routerLink=\"users/detail/{{user.id}}\">{{user.username}}</a>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/user-area/user-search/user-search.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user-area/user-search/user-search.component.ts ***!
  \****************************************************************/
/*! exports provided: UserSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchComponent", function() { return UserSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user-area/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserSearchComponent = /** @class */ (function () {
    function UserSearchComponent(userService) {
        this.userService = userService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    UserSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
            return _this.userService.searchUsers(term);
        }));
    };
    // Push a search term into the observable stream
    UserSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    UserSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-search',
            template: __webpack_require__(/*! ./user-search.component.html */ "./src/app/user-area/user-search/user-search.component.html"),
            styles: [__webpack_require__(/*! ./user-search.component.css */ "./src/app/user-area/user-search/user-search.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserSearchComponent);
    return UserSearchComponent;
}());



/***/ }),

/***/ "./src/app/user-area/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/user-area/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messages/message.service */ "./src/app/messages/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http, messageService, router) {
        this.http = http;
        this.messageService = messageService;
        this.router = router;
        this.serviceUrl = '/dust.php/users';
        this.lastUserId = 0;
        var url = window.location.href;
        if (url.search(/localhost/)) {
            this.serviceUrl = 'http://localhost:8000' + this.serviceUrl;
        }
    }
    UserService.prototype.getUser = function (id) {
        // this.messageService.add(`UserService: fetched user id = ${id}`);
        // return of(USERS.find(user => user.id === id));
        var _this = this;
        this.lastUserId = id;
        var url = this.serviceUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched user id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUser id=" + id)));
    };
    UserService.prototype.getUsers = function () {
        var _this = this;
        // this.messageService.add('UserService: fetched users');
        // return of(USERS);
        return this.http.get(this.serviceUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (users) { return _this.log('fetched users'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUsers', [])));
    };
    /** PUT: update the user on the server */
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        return this.http.put(this.serviceUrl, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated user id=" + user.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateUser')));
    };
    /** POST: add a new user to the server */
    UserService.prototype.addUser = function (user) {
        var _this = this;
        return this.http.post(this.serviceUrl, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_user) { return _this.log("added user w/ id=" + _user.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addUser')));
    };
    /** DELETE: delete the user from the server */
    UserService.prototype.deleteUser = function (user) {
        var _this = this;
        var id = typeof user === 'number' ? user : user.id;
        var url = this.serviceUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted user id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteUser')));
    };
    /** GET users whose name contains search term */
    UserService.prototype.searchUsers = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty user array
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get(this.serviceUrl + "/?name=" + term)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("found users matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchUsers', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    UserService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    // Log a UserService message with the MessageService
    UserService.prototype.log = function (message) {
        this.messageService.add("UserService: " + message);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _messages_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user-area/user.ts":
/*!***********************************!*\
  !*** ./src/app/user-area/user.ts ***!
  \***********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/user-area/users-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/user-area/users-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-area/user-list/user-list.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-area/user-detail/user-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var usersRoutes = [
    { path: 'users', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"] },
    { path: 'users/detail/:id', component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailComponent"] },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(usersRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! Z:\UAF\CSET\Dust\uafdust\dust-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map