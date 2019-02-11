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

/***/ "./src/app/admin/admin-dashboard.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/admin-dashboard.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin dashboard...\n\n<button (click)=\"initializeDB()\">initialize database</button> -->"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav>\n  <h1>Administration Area</h1>\n  <!-- <a routerLink=\"./dashboard\" routerLinkActive=\"active\"\n    [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a> -->\n  <a routerLink=\"./palliatives\" routerLinkActive=\"active\">Manage Palliatives</a>\n  <a routerLink=\"./users\" routerLinkActive=\"active\">Manage Users</a>\n</nav>\n\n<router-outlet></router-outlet>"

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
                _manage_palliatives_component__WEBPACK_IMPORTED_MODULE_6__["ManagePalliativesComponent"]
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

module.exports = "<h2>Manage Palliatives</h2>\n\n<div *ngIf=\"!palliatives$\">Loading...</div>\n\n<div *ngIf=\"palliatives$ | async as palliatives\">\n\n<!-- <app-palliative-list></app-palliative-list> -->\n\n<ul class=\"items\">\n    <li *ngFor=\"let palliative of palliatives\">\n        <a routerLink=\"/palliatives/detail/{{palliative.id}}\">\n        <span class=\"badge\">{{palliative.id}} | {{palliative.testid}} | </span>{{palliative.shortname}}</a>\n        <button class=\"delete\" title=\"delete palliative\" (click)=\"delete(palliative)\">x</button>\n    </li>\n</ul>\n</div>\n\n\n<button (click)=\"gotoDashboard()\">Back to dashboard</button>\n"

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

module.exports = "<h2>Manage Users</h2>\n\n<div *ngIf=\"!users$\">Loading...</div>\n<!-- <div *ngIf=\"users$ | async as users\">\n    <ul>\n        <li *ngFor=\"let user of users\">{{user.username}}</li>\n    </ul>\n</div> -->\n\n<div *ngIf=\"users$\">\n    <label>User name:</label>&nbsp;<input #userName />\n    \n    <!-- (click) passes input value to add() and then clears the input -->\n    <button (click)=\"add(userName.value); userName.value=''\">\n        add\n    </button>\n\n    <ul class=\"items\">\n    <li *ngFor=\"let user of users$ | async\"\n    [class.selected]=\"user.id === selectedId\"\n    >\n      <a routerLink=\"/users/detail/{{user.id}}\">\n        <span class=\"badge\">{{user.id}}</span> {{user.username}}</a>\n        <button class=\"delete\" title=\"delete user\"\n        (click)=\"delete(user)\">x</button>\n    </li>\n  </ul>\n</div>\n\n\n<!-- <app-user-list></app-user-list> -->\n<button (click)=\"gotoDashboard()\">Back to dashboard</button>"

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
        this.theUsers = [];
        this.selectedId = 0;
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    ManageUsersComponent.prototype.gotoDashboard = function () {
        this.router.navigate(['./']);
    };
    ManageUsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.users$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            _this.selectedId = +params.get('id');
            return _this.service.getUsers();
        }));
        this.users$.subscribe(function (users) { return _this.theUsers = users; });
    };
    ManageUsersComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.service.addUser({ userid: null, username: name })
            .subscribe(function (user) {
            _this.getUsers();
            _this.selectedId = user.userid;
        });
    };
    ManageUsersComponent.prototype.delete = function (user) {
        var _this = this;
        this.theUsers = this.theUsers.filter(function (h) { return h !== user; });
        this.service.deleteUser(user).subscribe(function () {
            _this.getUsers();
        });
    };
    ManageUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-manage-users',
            template: __webpack_require__(/*! ./manage-users.component.html */ "./src/app/admin/manage-users.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
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
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], outlet: 'popup' },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"], outlet: 'popup' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })]
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

module.exports = "/* AppComponent's private CSS styles */\n\n/* h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\n\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n} */\n\n/* nav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\n\nnav a:visited,\na:link {\n  color: #607d8b;\n}\n\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\n\nnav a.active {\n  color: #039be5;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDOztBQUV0Qzs7Ozs7Ozs7OztHQVVHOztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuXG4vKiBoMSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn0gKi9cblxuLyogbmF2IGEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxubmF2IGE6dmlzaXRlZCxcbmE6bGluayB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxuXG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxuXG5uYXYgYS5hY3RpdmUge1xuICBjb2xvcjogIzAzOWJlNTtcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"branding branding-uaf\">\n  <tr>\n    <td>\n      <a href=\"http://www.uaf.edu\">\n        <img width=\"48px\" src=\"assets/uaf-logo-web.png\" />\n      </a>\n    </td>\n    <td width=\"100%\">\n      <div>Alaska University Transportation Center (AUTC)</div>\n      <div>Institute of Northern Engineering</div>\n    </td>\n  </tr>\n</table>\n\n<h1 style=\"font-size: 2.62em\"><img style=\"vertical-align:middle; height: 1.5em;\" src=\"assets/dust-app-logo.png\"/>&nbsp;{{title}}</h1>\n<nav>\n  <!-- <a routerLink=\"/dashboard\">Dashboard</a> -->\n  <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n  <a routerLink=\"/palliatives\" routerLinkActive=\"active\">Palliatives</a>\n  <!-- <a *ngIf=\"authService.isTechnician\" routerLink=\"/technician\" routerLinkActive=\"active\">Technician</a> -->\n  <a *ngIf=\"authService.isAdmin\" routerLink=\"/users\" routerLinkActive=\"active\">Users</a>\n  <!-- <a *ngIf=\"authService.isAdmin\" routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a> -->\n  <a routerLink=\"/help\" routerLinkActive=\"active\">Help</a>\n\n  <span *ngIf=\"!authService.isLoggedIn\"><a [routerLink]=\"[{ outlets: { popup: ['login'] } }]\" routerLinkActive=\"active\">Log in</a></span>\n  <span *ngIf=\"authService.isLoggedIn\"><a [routerLink]=\"[{ outlets: { popup: ['logout'] } }]\" routerLinkActive=\"active\" (click)='authService.logout()'>Log out</a>\n    Signed in as {{authService.signedInUser}}</span>\n    <!-- <button (click)=\"authService.reconnect()\">Reconnect</button> -->\n</nav>\n\n<div class=\"popup\">\n  <router-outlet name=\"popup\">\n  </router-outlet>\n</div>\n\n<div class=\"splashscreen\">\n    <router-outlet name=\"popup\">\n      <app-splashscreen></app-splashscreen>\n    </router-outlet>\n  </div>\n\n<!-- <div *ngIf=\"splashscreenService.disclaimerAccepted\">Accepted</div>\n<div *ngIf=\"!splashscreenService.disclaimerAccepted\">Not Accepted</div> -->\n\n<div class=\"mainnav\" *ngIf=\"splashscreenService.disclaimerAccepted\"><router-outlet></router-outlet></div>\n\n<app-messages></app-messages>\n\n<hr/>\n\n<table class=\"branding branding-cset\">\n    <tr>\n      <td>\n        <a href=\"http://cset.uaf.edu/\">\n          <img width=\"48px\" src=\"assets/cset-logo-web.png\" />\n        </a>\n      </td>\n      <td width=\"100%\">\n        <div class=\"branding-cset\">Center for Safety Equity in Transportation</div>\n      </td>\n    </tr>\n  </table>"

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
/* harmony import */ var _splashscreen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splashscreen.service */ "./src/app/splashscreen.service.ts");
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
    function AppComponent(authService, splashscreenService) {
        this.authService = authService;
        this.splashscreenService = splashscreenService;
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
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _splashscreen_service__WEBPACK_IMPORTED_MODULE_2__["SplashscreenService"]])
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
/* harmony import */ var _user_area_users_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-area/users-routing.module */ "./src/app/user-area/users-routing.module.ts");
/* harmony import */ var _user_area_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-area/user-list/user-list.component */ "./src/app/user-area/user-list/user-list.component.ts");
/* harmony import */ var _user_area_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-area/user-detail/user-detail.component */ "./src/app/user-area/user-detail/user-detail.component.ts");
/* harmony import */ var _user_area_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-area/user-search/user-search.component */ "./src/app/user-area/user-search/user-search.component.ts");
/* harmony import */ var _palliative_area_palliative_list_palliative_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./palliative-area/palliative-list/palliative-list.component */ "./src/app/palliative-area/palliative-list/palliative-list.component.ts");
/* harmony import */ var _palliative_area_palliative_detail_palliative_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./palliative-area/palliative-detail/palliative-detail.component */ "./src/app/palliative-area/palliative-detail/palliative-detail.component.ts");
/* harmony import */ var _palliative_area_palliative_search_palliative_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./palliative-area/palliative-search/palliative-search.component */ "./src/app/palliative-area/palliative-search/palliative-search.component.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
/* harmony import */ var _palliative_area_palliatives_routing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./palliative-area/palliatives-routing.component */ "./src/app/palliative-area/palliatives-routing.component.ts");
/* harmony import */ var _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./splashscreen/splashscreen.component */ "./src/app/splashscreen/splashscreen.component.ts");
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
                _not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _user_area_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__["UserListComponent"],
                _user_area_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"],
                _user_area_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_11__["UserSearchComponent"],
                _palliative_area_palliative_list_palliative_list_component__WEBPACK_IMPORTED_MODULE_12__["PalliativeListComponent"],
                _palliative_area_palliative_detail_palliative_detail_component__WEBPACK_IMPORTED_MODULE_13__["PalliativeDetailComponent"],
                _palliative_area_palliative_search_palliative_search_component__WEBPACK_IMPORTED_MODULE_14__["PalliativeSearchComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_20__["AuthComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_21__["LogoutComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_22__["HelpComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_24__["SplashscreenComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _user_area_users_routing_module__WEBPACK_IMPORTED_MODULE_8__["UsersRoutingModule"],
                _palliative_area_palliatives_routing_component__WEBPACK_IMPORTED_MODULE_16__["PalliativesRoutingModule"],
                _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_17__["AdminRoutingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_18__["AdminModule"],
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
/*! exports provided: AuthServiceRequest, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceRequest", function() { return AuthServiceRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages/message.service */ "./src/app/messages/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _serviceUrls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceUrls */ "./src/app/serviceUrls.ts");
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
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
var AuthServiceRequest = /** @class */ (function () {
    function AuthServiceRequest(request, result) {
        if (request === void 0) { request = ''; }
        if (result === void 0) { result = ''; }
        this.request = request;
        this.result = result;
    }
    return AuthServiceRequest;
}());

;
var AuthReply = /** @class */ (function () {
    function AuthReply(isloggedin, userid, username, userrole, session) {
        if (isloggedin === void 0) { isloggedin = false; }
        if (userid === void 0) { userid = 0; }
        if (username === void 0) { username = 'nobody'; }
        if (userrole === void 0) { userrole = 'nobody'; }
        if (session === void 0) { session = ''; }
        this.isloggedin = isloggedin;
        this.userid = userid;
        this.username = username;
        this.userrole = userrole;
        this.session = session;
    }
    return AuthReply;
}());
var AuthService = /** @class */ (function () {
    function AuthService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.isLoggedIn = false;
        this.isAdmin = false;
        this.isTechnician = false;
        this.bisLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.signedInUser = 'nobody';
        this.signedInUserRole = 'user';
        this.signedInUserId = 0;
        this.username = '';
        this.password = '';
        this.session = '';
        this.url = '';
        var url = window.location.href;
        if (url.search(/localhost/) >= 0) {
            this.url = _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["DevServiceUrl"] + _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["PhpServiceUrl"];
        }
        else {
            this.url = _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["BaseServiceUrl"] + _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["PhpServiceUrl"];
        }
    }
    AuthService.prototype.login = function () {
        var _this = this;
        var formdata = new FormData();
        formdata.append('username', this.username);
        formdata.append('password', this.password);
        this.password = '';
        var url = this.url + '?login';
        return this.http.post(url, formdata).pipe(
        // retry(3),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.isLoggedIn = response.isloggedin;
            _this.signedInUser = response.username;
            _this.isAdmin = response.userrole == 'admin';
            _this.isTechnician = true;
            _this.signedInUserId = response.userid;
            _this.signedInUserRole = response.userrole;
            _this.session = response.session;
            _this.username = '';
            _this.password = '';
            _this.bisLoggedIn.next(_this.isLoggedIn);
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("error logging in with username " + this.username)));
    };
    AuthService.prototype.reset = function () {
        this.isLoggedIn = false;
        this.isAdmin = false;
        this.isTechnician = false;
        this.signedInUser = 'nobody';
        this.signedInUserId = 0;
        this.signedInUserRole = '';
        this.username = '';
        this.password = '';
    };
    AuthService.prototype.reconnect = function () {
        var _this = this;
        var url = this.url + '?reconnect';
        if (this.session.length > 0)
            url += '&token=' + this.session;
        this.log('Reconnecting');
        this.http.get(url).subscribe(function (result) {
            console.log("reconnect: ");
            console.log(result);
            _this.session = result.session;
            _this.log('Reconnected');
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var url = this.url + '?logout';
        this.session = '';
        this.log('Logging out');
        this.http.get(url).subscribe(function () {
            _this.reset();
            _this.log('Logged out');
        });
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    AuthService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        this.reset();
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
    AuthService.prototype.log = function (message) {
        this.messageService.add("AuthService: " + message);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _messages_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  auth works!\n</p>\n"

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
/* harmony import */ var _serviceUrls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceUrls */ "./src/app/serviceUrls.ts");
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
        this.url = '';
        var url = window.location.href;
        if (url.search(/localhost/) >= 0) {
            this.url = _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["DevServiceUrl"] + _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["PhpAdminUrl"];
        }
        else {
            this.url = _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["BaseServiceUrl"] + _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["PhpAdminUrl"];
        }
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

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n\n  <h1 id=\"how-to-use-this-webpage\">How to use this webpage</h1>\n  <h2 id=\"finding-out-whether-a-palliative-has-been-tested\">Finding out whether a palliative has been tested</h2>\n  <ol>\n    <li>Under palliatves, click on the palliative you would like to know more about. If it is not listed, it has not been tested\n      yet.</li>\n  </ol>\n  <h2 id=\"calculating-palliative-effectiveness\">Calculating palliative effectiveness</h2>\n  <ol>\n    <li>As a technician, you may log in to add a palliative to the database.</li>\n    <li>Go to the palliatives tab, type the name of the new palliative and click add.</li>\n    <li>Click on the newly created entry and add the details about the palliative you tested.</li>\n    <li>Submit the time in seconds and dust concentrations in the table, or choose to import a csv. Click submit. Your mean particle\n      residence time will be calculated and graphed.</li>\n  </ol>\n  <h2 id=\"admin\">Admin</h2>\n  <ol>\n    <li>As an administrator, log in to manage database items.</li>\n    <li>To edit, add, or delete database items visit the Palliatiaves and Users pages. Little 'x' buttons will be added for deletion\n      operations.</li>\n  </ol>\n\n</div>\n"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
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

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-palliative-search></app-palliative-search> -->\n\n<div class=\"wrap\">\n    <!-- <h1>About</h1> -->\n    <p>Welcome to the UAF Dust Palliative MPRT Calculator. It is\n      designed to calculate the <em>mean particle residence time</em>,\n      or Greek letter tau <span style=\"font-family: serif\">&tau;</span>,\n      of a dust palliative.\n      This allows us to compare the performance of different palliatives\n      using a scientifically based test which uses a nephelometer and dustfall\n      column (shown in figures) to record the time and PM10 concentration for\n      one minute. The purpose of this website is\n      to enable technicians to upload test data, calculate the MPRT,\n      and publish the results of such tests.\n    </p>\n    <p>Currently, this website is a <em>proof of concept</em> showing\n      what we hope to deliver when it is finished.</p>\n    <figure style=\"width: 80%; min-width: 32px; max-width: 300px;\">\n        <img class=scaled src=\"assets/dustcolumn-300px.jpg\" />\n        <figcaption>The dustfall column used to test the performance of a palliative.</figcaption>\n    </figure>\n    <figure style=\"width: 80%; min-width: 32px; max-width: 300px;\">\n        <img class=scaled src=\"assets/meter-300px.jpg\" />\n        <figcaption>The nephelometer measures the PM10 concentration over time.</figcaption>\n    </figure>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup padded\">\n    <h3>LOGIN</h3>\n    <p>{{message}}</p>\n    <div *ngIf=\"!authService.isLoggedIn\">\n      <label>Username:<input [(ngModel)]=\"authService.username\" placeholder=\"username\"></label><br/>\n      <label>Password:<input type=\"password\" [(ngModel)]=\"authService.password\" placeholder=\"password\"></label>\n    </div>\n    <p>\n      <button (click)=\"login()\" *ngIf=\"!authService.isLoggedIn\">Login</button>\n      <button (click)=\"logout()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n      <button (click)=\"cancel()\">Cancel</button>\n    </p>    \n</div>\n"

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
            }, 250);
            if (_this.authService.isLoggedIn) {
                _this.navigateDefault();
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
        this.navigateDefault();
    };
    LoginComponent.prototype.cancel = function () {
        this.closePopup();
    };
    LoginComponent.prototype.navigateDefault = function () {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        var redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
        // Redirect the user
        // this.router.navigate([redirect]);
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
            animations: [_animations__WEBPACK_IMPORTED_MODULE_3__["slideInDownAnimation"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup padded\">\n  <p>Logging out...</p>\n</div>\n<!-- \n<button (click)=\"gotoDashboard()\">back to dashboard</button> -->\n"

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
        // this.authService.logout();
        // this.router.navigate(['/']);
        var _this = this;
        setTimeout(function () {
            // Providing a `null` value to the named outlet
            // clears the contents of the named outlet
            _this.router.navigate([{ outlets: { popup: null } }]);
        }, 500);
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
            animations: [_animations__WEBPACK_IMPORTED_MODULE_4__["slideInDownAnimation"]],
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
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

module.exports = "/* MessagesComponent's private CSS styles\n\nh2 {\n  color: red;\n  font-weight: lighter;\n  line-height: 1;\n  display: block;\n  margin: none;\n}\n\nbody {\n  margin: 2em;\n}\n\nbody,\ninput[text],\nbutton {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\n\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\n\nbutton:hover {\n  background-color: #cfd8dc;\n}\n\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\n\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px;\n}\n\n.messages {\n  background: #333333;\n  display: block;\n  border-radius: 4px;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrREciLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVzc2FnZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXNcblxuaDIge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IG5vbmU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDJlbTtcbn1cblxuYm9keSxcbmlucHV0W3RleHRdLFxuYnV0dG9uIHtcbiAgY29sb3I6IGNyaW1zb247XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xufVxuXG5idXR0b24uY2xlYXIge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IGhhbmQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjYWFhO1xuICBjdXJzb3I6IGF1dG87XG59XG5cbmJ1dHRvbi5jbGVhciB7XG4gIGNvbG9yOiAjODg4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ubWVzc2FnZXMge1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\" class=\"messages padded\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\" (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'>{{message}}</div>\n\n</div>\n"

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
    PageNotFoundComponent.prototype.gotoHome = function () {
        this.router.navigate(['/']);
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<h2>Page not found</h2><button (click)="gotoHome()">back to home</button>'
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbGxpYXRpdmUtYXJlYS9wYWxsaWF0aXZlLWRldGFpbC9wYWxsaWF0aXZlLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/palliative-area/palliative-detail/palliative-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/palliative-area/palliative-detail/palliative-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"palliative\">\n\n  <h1>\"{{palliative.shortname | uppercase}}\" Details</h1>\n  <h2>\"{{palliative.longname}}\"</h2>\n  <table class=\"altcolors\"><tbody class=\"altcolors\">\n    <tr><td><label>id:</label></td><td class=\"description\">{{palliative.id}}</td></tr>\n    <tr><td><label>Test ID:</label></td><td class=\"description\">{{palliative.testid}}</td></tr>\n    <tr><td><label>Description:</label></td><td class=\"description\">{{palliative.description}}</td></tr>\n    <tr><td><label>userid:</label></td><td>{{palliative.userid}}<span *ngIf=\"user\"> | {{user.username}} | {{user.firstname}} {{user.lastname}}</span></td></tr>\n    <tr><td><label>Test Date/Tech</label><td>{{palliative.testDate}} | {{palliative.testTech}}</td></tr>\n    <tr><td><label>Analysis Date/Tech</label></td><td>{{palliative.analysisDate}} | {{palliative.analysisTech}}</td></tr>\n    <tr><td><label>Laboratory</label></td><td>{{palliative.laboratory}}</td></tr>\n    <tr><td><label>mprt <span style=\"font-family: serif;\">&tau;</span>:</label></td><td>{{palliative.mprt}}</td></tr>\n    <tr><td><label>mprt <span style=\"font-family: serif; font-style: italic;\">t</span></label></td><td>{{palliative.mprtTime}}</td></tr>\n  </tbody>\n  </table>\n\n  <div class=\"mprtGraph\">\n    <label>MPRT <span style=\"font-family: serif;\">&tau;</span> Graph</label>\n    <button *ngIf=\"!graphVisible\" (click)=\"showGraph()\">show</button>\n    <button *ngIf=\"graphVisible\" (click)=\"hideGraph()\">hide</button>\n    <button *ngIf=\"graphVisible\" (click)=\"plotGraph()\">plot</button>\n    <button *ngIf=\"graphVisible && !graphDetails\" (click)=\"showDetails()\">show details</button>\n    <button *ngIf=\"graphVisible && graphDetails\" (click)=\"hideDetails()\">hide details</button>\n    <div *ngIf=\"graphVisible\">\n      <div *ngIf=\"graphDetails\" id=\"mprtGraphC\"></div>\n      <div id=\"mprtGraphLnC\"></div>\n      <div *ngIf=\"graphDetails\" id=\"mprtGraphDeriv1\"></div>\n      <div *ngIf=\"graphDetails\" id=\"mprtGraphDeriv2\"></div>\n      <div *ngIf=\"graphDetails\" id=\"mprtGraphRSQ\"></div>\n    </div>\n  </div>\n\n  <div class=\"dataPointList\">\n    <label>Data Points</label>\n      <button *ngIf=\"!dataVisible\" (click)=\"showData()\">show</button>\n      <button *ngIf=\"dataVisible\" (click)=\"hideData()\">hide</button>\n    \n    <table *ngIf=\"dataVisible\">\n      <tbody class=\"altcolors\">\n      <tr><th>t</th><th>C</th><th>ln(C)</th><th>C'(t)</th><th>C''(t)</th><th>R^2</th></tr>\n      <tr *ngFor=\"let dp of palliative.data\" class=\"dataPoint\">\n        <td>{{dp.t | number}}</td>\n        <td>{{dp.C | number}}</td>\n        <td>{{dp.lnC | number}}</td>\n        <td>{{dp.dCdt | number}}</td>\n        <td>{{dp.deriv2 | number}}</td>\n        <td>{{dp.rsq | number}}</td>\n      </tr>\n    </tbody>\n    </table>\n  </div>\n  \n  <button *ngIf=\"!technicianView && authService.isTechnician\" (click)=\"edit()\">Edit</button>\n\n  <div *ngIf=\"technicianView\">\n    <h1>Edit Details</h1>\n    <div><label>Test ID:</label>&nbsp;<input [(ngModel)]=\"palliative.testid\" placeholder=\"testid\"/></div>\n    <div><label>Short Name:</label>&nbsp;<input [(ngModel)]=\"palliative.shortname\" placeholder=\"shortname\"/></div>\n    <div><label>Long Name:</label>&nbsp;<input [(ngModel)]=\"palliative.longname\" placeholder=\"longname\"/></div>\n    <div><label>Description:</label>&nbsp;<input [(ngModel)]=\"palliative.description\" placeholder=\"description\"/></div>\n    <div><label>User Id:</label>&nbsp;<input [(ngModel)]=\"palliative.userid\" placeholder=\"userid\"/></div>\n    <div><label>Test Date:</label>&nbsp;<input [(ngModel)]=\"palliative.testDate\" placeholder=\"test date\"/></div>\n    <div><label>Test Tech:</label>&nbsp;<input [(ngModel)]=\"palliative.testTech\" placeholder=\"dustfall technician name\"/></div>\n    <div><label>Analysis Date:</label>&nbsp;<input [(ngModel)]=\"palliative.analysisDate\" placeholder=\"analysis date\"/></div>\n    <div><label>Analysis Tech:</label>&nbsp;<input [(ngModel)]=\"palliative.analysisTech\" placeholder=\"analysis technician\"/></div>\n    <div><label>Laboratory:</label>&nbsp;<input [(ngModel)]=\"palliative.laboratory\" placeholder=\"laboratory name\"/></div>\n    <button (click)=\"save()\">save</button>\n    <button (click)=\"cancel()\">cancel</button>\n    <button (click)=\"cleanData()\">clean</button>\n    <button (click)=\"calcMPRT()\">calc mprt</button>\n    \n    <div class=\"dataPointList padded\">\n      <h3>Data Points</h3>\n      <br/><textarea [(ngModel)]=\"textboxText\" cols=\"40\" rows=\"10\">{{textboxText}}</textarea>\n      <br/><button (click)=\"importCSV()\">import CSV</button>\n      <table>\n        <tr><th>t</th><th>C</th></tr>\n        <tr *ngFor=\"let dp of palliative.data\" class=\"dataPoint\">\n          <td><input [(ngModel)]=\"dp.t\"/></td>\n          <td><input [(ngModel)]=\"dp.C\"/></td>\n        </tr>\n      </table>\n      <button (click)=\"addDatapoint()\">add datapoint</button>\n    </div>\n\n  </div>\n\n</div>\n"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
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
    function PalliativeDetailComponent(route, router, palliativeService, authService, userService, location) {
        this.route = route;
        this.router = router;
        this.palliativeService = palliativeService;
        this.authService = authService;
        this.userService = userService;
        this.location = location;
        this.dataVisible = false;
        this.graphVisible = false;
        this.graphDetails = false;
        this.textboxText = '';
        this.technicianView = false;
    }
    PalliativeDetailComponent.prototype.ngOnInit = function () {
        this.getPalliative();
        this.router.onSameUrlNavigation = "reload";
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
            _this.palliative = _palliative__WEBPACK_IMPORTED_MODULE_3__["Palliative"].CreateFromJSON(palliative);
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
            .subscribe(function () { return _this.getPalliative(); });
    };
    PalliativeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PalliativeDetailComponent.prototype.gotoPalliatives = function () {
        this.router.navigate(['/palliatives']);
    };
    PalliativeDetailComponent.prototype.edit = function () {
        this.technicianView = true;
    };
    PalliativeDetailComponent.prototype.cancel = function () {
        this.technicianView = false;
        this.getPalliative();
        // this.gotoPalliatives();
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
    PalliativeDetailComponent.prototype.showDetails = function () {
        this.graphDetails = true;
    };
    PalliativeDetailComponent.prototype.hideDetails = function () {
        this.graphDetails = false;
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
        var _loop_1 = function (g) {
            var data = this_1.palliative.getXYs(g.type, 'lines', 'scatter');
            var layout = this_1.palliative.getLayout(g.type);
            e = document.getElementById(g.id);
            this_1.graphDetails = true;
            Plotly.plot(e, data, layout);
            var self_1 = this_1;
            window.setTimeout(function () {
                self_1.graphDetails = false;
            }, 100);
        };
        var this_1 = this;
        for (var _i = 0, graphs_1 = graphs; _i < graphs_1.length; _i++) {
            var g = graphs_1[_i];
            _loop_1(g);
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
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbGxpYXRpdmUtYXJlYS9wYWxsaWF0aXZlLWxpc3QvcGFsbGlhdGl2ZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/palliative-area/palliative-list/palliative-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/palliative-area/palliative-list/palliative-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-palliative-search></app-palliative-search>\n\n<h2>Palliatives</h2>\n\n<div class=\"rowheader\">\n  <div class=\"pbadge\">Id</div>\n  <div class=\"ptestid\">Test Id</div>\n  <div class=\"pshortname\">Short Name</div>\n  <div class=\"plaboratory\">Laboratory</div>\n  <div class=\"pactions\">Actions</div>\n</div>\n\n<div class=\"row\" *ngFor=\"let palliative of palliatives\">\n  <div class=\"pbadge\">{{palliative.id}}</div>\n  <div class=\"ptestid\">{{palliative.testid}}</div>\n  <div class=\"pshortname\" routerLink=\"/palliatives/detail/{{palliative.id}}\">{{palliative.shortname}}</div>\n  <div class=\"plaboratory\">{{palliative.laboratory}}</div>\n  <div class=\"pactions\"><button class=\"pdelete\" *ngIf=\"authService.isAdmin\" title=\"delete palliative\" (click)=\"delete(palliative)\">x</button></div>\n</div>\n\n<div *ngIf=\"authService.isLoggedIn\">\n  <label>Add Palliative</label>&nbsp;\n  <label>Test Id:</label>&nbsp;<input #palliativeTestid />\n  <label>Short Name:</label>&nbsp;<input #palliativeName />&nbsp;\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button (click)=\"add(palliativeTestid.value, palliativeName.value); palliativeTestid.value=''; palliativeName.value=''\">add</button>\n</div>\n\n<!-- <app-palliative-detail [palliative]=\"selectedPalliative\"></app-palliative-detail> -->\n"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
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
    function PalliativeListComponent(palliativeService, authService) {
        this.palliativeService = palliativeService;
        this.authService = authService;
        this.palliatives = [];
    }
    PalliativeListComponent.prototype.ngOnInit = function () {
        this.getPalliatives();
    };
    PalliativeListComponent.prototype.add = function (testid, name) {
        var _this = this;
        testid = testid.trim();
        name = name.trim();
        if (!name) {
            return;
        }
        if (!testid) {
            return;
        }
        this.palliativeService.addPalliative({ id: null, testid: testid, shortname: name })
            .subscribe(function (palliative) {
            _this.getPalliatives();
        });
    };
    PalliativeListComponent.prototype.delete = function (palliative) {
        var _this = this;
        this.palliativeService.deletePalliative(palliative).subscribe(function () {
            _this.getPalliatives();
        });
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
        __metadata("design:paramtypes", [_palliative_service__WEBPACK_IMPORTED_MODULE_1__["PalliativeService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbGxpYXRpdmUtYXJlYS9wYWxsaWF0aXZlLXNlYXJjaC9wYWxsaWF0aXZlLXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/palliative-area/palliative-search/palliative-search.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/palliative-area/palliative-search/palliative-search.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"palliative-search-component\">\n\n  <label>Palliative Search</label>&nbsp;\n<input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n\n<ul class=\"search-result\">\n  <li *ngFor=\"let palliative of palliatives$ | async\">\n    <a routerLink=\"/palliatives/detail/{{palliative.id}}\">{{palliative.shortname}}</a>\n  </li>\n</ul>\n</div>"

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
/* harmony import */ var _serviceUrls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../serviceUrls */ "./src/app/serviceUrls.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
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
    function PalliativeService(http, messageService, authService) {
        this.http = http;
        this.messageService = messageService;
        this.authService = authService;
        this.serviceUrl = '';
        var url = window.location.href;
        if (url.search(/localhost/) >= 0) {
            this.serviceUrl = _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["DevServiceUrl"] + _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["PhpServiceUrl"] + _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["PalliativesUrl"];
        }
        else {
            this.serviceUrl = _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["BaseServiceUrl"] + _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["PhpServiceUrl"] + _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["PalliativesUrl"];
        }
    }
    PalliativeService.prototype.getPalliative = function (id) {
        var url = this.serviceUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), 
        // tap(_ => this.log(`fetched palliative id=${id}`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getPalliative id=" + id)));
    };
    PalliativeService.prototype.getPalliatives = function () {
        return this.http.get(this.serviceUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (palliatives) {
            // this.log('fetched palliatives');
            // console.log(palliatives);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getPalliatives', [])));
    };
    /** PUT: update the palliative on the server */
    PalliativeService.prototype.updatePalliative = function (palliative) {
        var formdata = new FormData();
        formdata.append('session', this.authService.session);
        formdata.append('method', 'PUT');
        formdata.append('data', JSON.stringify(palliative));
        return this.http.post(this.serviceUrl + ("/" + palliative.id), formdata).pipe(
        // retry(3),
        // tap(_ => this.log(`updated palliative id=${palliative.id}`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updatePalliative')));
    };
    /** POST: add a new palliative to the server */
    PalliativeService.prototype.addPalliative = function (palliative) {
        var formdata = new FormData();
        formdata.append('session', this.authService.session);
        formdata.append('method', 'POST');
        formdata.append('data', JSON.stringify(palliative));
        return this.http.post(this.serviceUrl, formdata).pipe(
        // tap((_palliative: Palliative) => this.log(`added palliative w/ id=${_palliative.id}`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addPalliative')));
    };
    /** DELETE: delete the palliative from the server */
    PalliativeService.prototype.deletePalliative = function (palliative) {
        var id = typeof palliative === 'number' ? palliative : palliative.id;
        var url = this.serviceUrl + "/" + id;
        var formdata = new FormData();
        formdata.append('session', this.authService.session);
        formdata.append('method', 'DELETE');
        formdata.append('data', JSON.stringify({ "id": id }));
        return this.http.post(url, formdata).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), 
        // tap(_ => this.log(`deleted palliative id=${id}`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deletePalliative')));
    };
    /** GET palliatives whose name contains search term */
    PalliativeService.prototype.searchPalliatives = function (term) {
        if (!term.trim()) {
            // if not search term, return empty palliative array
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        return this.http.get(this.serviceUrl + "/?shortname=" + term + "%")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), 
        // tap(_ => this.log(`found palliatives matching "${term}"`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('searchPalliatives', [])));
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
            _messages_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
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
        if (C === void 0) { C = 0; }
        this.t = t;
        this.C = C;
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
        // New fields identified
        this.testTech = "unknown tech";
        this.testDate = "0000-01-01 00:00:00";
        this.analysisTech = "unknown tech";
        this.analysisDate = "0000-01-01 00:00:00";
        this.laboratory = "unknown laboratory";
    }
    Palliative.CreateFromJSON = function (palliative) {
        var p = new Palliative();
        p.id = palliative.id;
        p.userid = palliative.userid;
        p.testid = palliative.testid;
        p.shortname = palliative.shortname;
        p.longname = palliative.longname;
        p.description = palliative.description || "";
        p.data = [];
        if (palliative.data) {
            for (var _i = 0, _a = palliative.data; _i < _a.length; _i++) {
                var dcp = _a[_i];
                p.data.push(DustColumnDataPoint.createFromJSON(dcp));
            }
        }
        p.mprt = palliative.mprt || 0;
        p.mprtTime = palliative.mprtTime || 0;
        // new fields identified
        p.testTech = palliative.testTech ? palliative.testTech : p.testTech;
        p.testDate = palliative.testDate ? palliative.testDate : p.testDate;
        p.analysisTech = palliative.analysisTech ? palliative.analysisTech : p.analysisTech;
        p.analysisDate = palliative.analysisDate ? palliative.analysisDate : p.analysisDate;
        p.laboratory = palliative.laboratory ? palliative.laboratory : p.laboratory;
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

/***/ "./src/app/serviceUrls.ts":
/*!********************************!*\
  !*** ./src/app/serviceUrls.ts ***!
  \********************************/
/*! exports provided: UsersUrl, PalliativesUrl, AuthUrl, PhpServiceUrl, PhpAdminUrl, BaseServiceUrl, DevServiceUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUrl", function() { return UsersUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalliativesUrl", function() { return PalliativesUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthUrl", function() { return AuthUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhpServiceUrl", function() { return PhpServiceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhpAdminUrl", function() { return PhpAdminUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseServiceUrl", function() { return BaseServiceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevServiceUrl", function() { return DevServiceUrl; });
var UsersUrl = '/users';
var PalliativesUrl = '/palliatives';
var AuthUrl = '/auth';
var PhpServiceUrl = '/service.php';
var PhpAdminUrl = '/admin.php';
var BaseServiceUrl = 'https://snow.ine.uaf.edu/~jbmetzgar/uafdust';
var DevServiceUrl = 'http://localhost:8000';


/***/ }),

/***/ "./src/app/splashscreen.service.ts":
/*!*****************************************!*\
  !*** ./src/app/splashscreen.service.ts ***!
  \*****************************************/
/*! exports provided: SplashscreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenService", function() { return SplashscreenService; });
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

var SplashscreenService = /** @class */ (function () {
    function SplashscreenService() {
        this.disclaimerAccepted_ = true;
    }
    Object.defineProperty(SplashscreenService.prototype, "disclaimerAccepted", {
        get: function () { return this.disclaimerAccepted_; },
        enumerable: true,
        configurable: true
    });
    SplashscreenService.prototype.accept = function () {
        this.disclaimerAccepted_ = true;
    };
    SplashscreenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SplashscreenService);
    return SplashscreenService;
}());



/***/ }),

/***/ "./src/app/splashscreen/splashscreen.component.css":
/*!*********************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwbGFzaHNjcmVlbi9zcGxhc2hzY3JlZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/splashscreen/splashscreen.component.html":
/*!**********************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 1em; width: 80%;\" *ngIf=\"!accepted\">\n<p>\n    THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n</p>\n\n<button (click)=\"accept()\">Accept</button>\n</div>"

/***/ }),

/***/ "./src/app/splashscreen/splashscreen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.component.ts ***!
  \********************************************************/
/*! exports provided: SplashscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenComponent", function() { return SplashscreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _splashscreen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../splashscreen.service */ "./src/app/splashscreen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashscreenComponent = /** @class */ (function () {
    function SplashscreenComponent(router, splashscreenService) {
        this.router = router;
        this.splashscreenService = splashscreenService;
    }
    Object.defineProperty(SplashscreenComponent.prototype, "accepted", {
        get: function () { return this.splashscreenService.disclaimerAccepted; },
        enumerable: true,
        configurable: true
    });
    SplashscreenComponent.prototype.ngOnInit = function () {
    };
    SplashscreenComponent.prototype.accept = function () {
        this.splashscreenService.accept();
    };
    SplashscreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-splashscreen',
            template: __webpack_require__(/*! ./splashscreen.component.html */ "./src/app/splashscreen/splashscreen.component.html"),
            styles: [__webpack_require__(/*! ./splashscreen.component.css */ "./src/app/splashscreen/splashscreen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _splashscreen_service__WEBPACK_IMPORTED_MODULE_2__["SplashscreenService"]])
    ], SplashscreenComponent);
    return SplashscreenComponent;
}());



/***/ }),

/***/ "./src/app/user-area/user-detail/user-detail.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/user-area/user-detail/user-detail.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DetailComponent's private CSS styles */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1hcmVhL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDIiwiZmlsZSI6InNyYy9hcHAvdXNlci1hcmVhL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEZXRhaWxDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cblxuIl19 */"

/***/ }),

/***/ "./src/app/user-area/user-detail/user-detail.component.html":
/*!******************************************************************!*\
  !*** ./src/app/user-area/user-detail/user-detail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user$ | async as user\">\n\n  <h3>{{theUser.username | uppercase}} Details</h3>\n  <div><span>id: {{theUser.userid}}</span></div>\n  <!-- <div><span>Name: {{theUser.firstname}} {{theUser.lastname}}</span></div>\n  <div><span>Organization: {{theUser.organization}}</span></div>\n  <div><span>Email: {{theUser.email}}</span></div> -->\n  \n  <div><label>Full name:<input [(ngModel)]=\"theUser.fullname\" placeholder=\"fullname\"></label></div>\n\\  <div><label>Organization:<input [(ngModel)]=\"theUser.organization\" placeholder=\"organization\"></label></div>\n  <div><label>Email:<input [(ngModel)]=\"theUser.email\" placeholder=\"email\"></label></div>\n  \n  <button *ngIf=\"authService.isAdmin\" (click)=\"save()\">save</button>\n  <button (click)=\"goBack()\">go back</button>\n  <!-- <button (click)=\"gotoUsers(user)\">go to users</button> -->\n</div>"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
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
    function UserDetailComponent(route, router, service, location, authService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.location = location;
        this.authService = authService;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.user$ = this.service.getUser(id);
        this.user$.subscribe(function (user) {
            _this.theUser = user;
        });
    };
    UserDetailComponent.prototype.getUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.service.getUser(id).subscribe(function (user) { return _this.theUser = user; });
    };
    UserDetailComponent.prototype.save = function () {
        var _this = this;
        this.service.updateUser(this.theUser)
            .subscribe(function () {
            _this.getUser();
        });
    };
    UserDetailComponent.prototype.gotoUsers = function (user) {
        var userId = user ? user.userid : null;
        this.router.navigate(['/users', { id: userId }]);
    };
    UserDetailComponent.prototype.goBack = function () {
        this.router.navigate(['/users', { id: this.theUser.userid }]);
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
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItYXJlYS91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-area/user-list/user-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-area/user-list/user-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Users<span *ngIf=\"authService.isAdmin\"> Administration</span></h1>\n\n<div *ngIf=\"authService.isAdmin\">\n  <label>User name:\n    <input #userName />\n  </label>&nbsp;\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button (click)=\"add(userName.value); userName.value=''\">\n    add\n  </button>\n</div>\n\n<div class=\"rowheader\">\n  <div class=\"pbadge\">Id</div>\n  <div *ngIf=\"authService.isAdmin\" class=\"uusername\">Username</div>\n  <div *ngIf=\"authService.isAdmin\" class=\"uuserrole\">Role</div>\n  <div class=\"ufullname\">Full Name</div>\n  <div class=\"uemail\">Email</div>\n  <div class=\"uorganization\">Organization</div>\n  <div *ngIf=\"authService.isAdmin\" class=\"pactions\">Actions</div>\n</div>\n\n<div class=\"row\" *ngFor=\"let user of users$ | async\" [class.selected]=\"user.userid === selectedId\">\n  <div routerLink=\"/users/detail/{{user.userid}}\">\n    <div class=\"pbadge\">{{user.userid}}</div>\n    <div *ngIf=\"authService.isAdmin\" class=\"uusername\">{{user.username}}</div>\n    <div *ngIf=\"authService.isAdmin\" class=\"uuserrole\">{{user.userrole}}</div>\n    <div class=\"ufullname\">{{user.fullname}}</div>\n    <div class=\"uemail\">{{user.email}}</div>\n    <div class=\"uorganization\">{{user.organization}}</div>\n    <div *ngIf=\"authService.isAdmin\" class=\"pactions\"><button *ngIf=\"authService.isAdmin\" class=\"delete\" title=\"delete user\"\n        (click)=\"delete(user)\">x</button></div>\n  </div>\n</div>\n<!-- <app-user-detail [user]=\"selectedUser\"></app-user-detail> -->\n"

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
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user-area/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user-area/user.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
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
    function UserListComponent(service, route, authService) {
        this.service = service;
        this.route = route;
        this.authService = authService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
        // this.users$ = this.route.paramMap.pipe(
        //   switchMap((params: ParamMap) => {
        //     // + causes the returned string to be converted to a number
        //     this.selectedId = +params.get('id');
        //     return this.service.getUsers();
        //   })
        // );
    };
    UserListComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.service.addUser(new _user__WEBPACK_IMPORTED_MODULE_3__["User"](0, name))
            .subscribe(function (user) {
            _this.getUsers();
        });
    };
    UserListComponent.prototype.delete = function (user) {
        var _this = this;
        this.theUsers = this.theUsers.filter(function (h) { return h !== user; });
        this.service.deleteUser(user).subscribe(function () {
            _this.getUsers();
        });
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.users$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            // + causes the returned string to be converted to a number
            _this.selectedId = +params.get('id');
            return _this.service.getUsers();
        }));
        this.users$.subscribe(function (users) { return _this.theUsers = users; });
        // this.service.getUsers().subscribe(users => this.theUsers = users);
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-area/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-area/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
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

module.exports = "/* UserSearch private styles */\n.search-result li {\n    border-bottom: 1px solid gray;\n    border-left: 1px solid gray;\n    border-right: 1px solid gray;\n    width:195px;\n    height: 16px;\n    padding: 5px;\n    background-color: white;\n    cursor: pointer;\n    list-style-type: none;\n  }\n.search-result li:hover {\n    background-color: #607D8B;\n  }\n.search-result li a {\n    color: #888;\n    display: block;\n    text-decoration: none;\n  }\n.search-result li a:hover {\n    color: white;\n  }\n.search-result li a:active {\n    color: white;\n  }\n#search-box {\n    width: 200px;\n    height: 20px;\n  }\nul.search-result {\n    margin-top: 0;\n    padding-left: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1hcmVhL3VzZXItc2VhcmNoL3VzZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCO0FBQzlCO0lBQ0ksNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBR0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItYXJlYS91c2VyLXNlYXJjaC91c2VyLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVXNlclNlYXJjaCBwcml2YXRlIHN0eWxlcyAqL1xuLnNlYXJjaC1yZXN1bHQgbGkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICAgIHdpZHRoOjE5NXB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICBcbiAgLnNlYXJjaC1yZXN1bHQgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIH1cbiAgXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGEge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5zZWFyY2gtcmVzdWx0IGxpIGE6YWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgI3NlYXJjaC1ib3gge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIFxuICB1bC5zZWFyY2gtcmVzdWx0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user-area/user-search/user-search.component.html":
/*!******************************************************************!*\
  !*** ./src/app/user-area/user-search/user-search.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>User Search</h4>\n\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n\n  <ul class=\"search-result\">\n    <li *ngFor=\"let user of users$ | async\">\n      <a routerLink=\"/users/detail/{{user.id}}\">{{user.username}}</a>\n    </li>\n  </ul>\n</div>"

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
/* harmony import */ var _serviceUrls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../serviceUrls */ "./src/app/serviceUrls.ts");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../messages/message.service */ "./src/app/messages/message.service.ts");
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
        this.serviceUrl = '';
        this.lastUserId = 0;
        var url = window.location.href;
        if (url.search(/localhost/) >= 0) {
            this.serviceUrl = _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["DevServiceUrl"] + _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["PhpServiceUrl"] + _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["UsersUrl"];
        }
        else {
            this.serviceUrl = _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["BaseServiceUrl"] + _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["PhpServiceUrl"] + _serviceUrls__WEBPACK_IMPORTED_MODULE_5__["UsersUrl"];
        }
    }
    UserService.prototype.getUser = function (id) {
        // this.messageService.add(`UserService: fetched user id = ${id}`);
        // return of(USERS.find(user => user.id === id));
        this.lastUserId = id;
        var url = this.serviceUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), 
        // tap(_ => this.log(`fetched user id=${id}`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUser id=" + id)));
    };
    UserService.prototype.getUsers = function () {
        // this.messageService.add('UserService: fetched users');
        // return of(USERS);
        return this.http.get(this.serviceUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), 
        // tap(users => this.log('fetched users')),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUsers', [])));
    };
    /** PUT: update the user on the server */
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        var id = user.userid;
        var url = this.serviceUrl + "/" + id;
        return this.http.put(url, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated user id=" + user.userid); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateUser')));
    };
    /** POST: add a new user to the server */
    UserService.prototype.addUser = function (user) {
        var _this = this;
        return this.http.post(this.serviceUrl, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_user) { return _this.log("added user w/ id=" + _user.userid); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addUser')));
    };
    /** DELETE: delete the user from the server */
    UserService.prototype.deleteUser = function (user) {
        var _this = this;
        var id = typeof user === 'number' ? user : user.userid;
        var url = this.serviceUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted user id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteUser')));
    };
    /** GET users whose name contains search term */
    UserService.prototype.searchUsers = function (term) {
        if (!term.trim()) {
            // if not search term, return empty user array
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get(this.serviceUrl + "/?name=" + term)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), 
        // tap(_ => this.log(`found users matching "${term}"`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchUsers', [])));
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
            _messages_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
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
    function User(userid, username, userrole, fullname, organization, email) {
        if (userid === void 0) { userid = 0; }
        if (username === void 0) { username = ""; }
        if (userrole === void 0) { userrole = ""; }
        if (fullname === void 0) { fullname = ""; }
        if (organization === void 0) { organization = ""; }
        if (email === void 0) { email = ""; }
        this.userid = userid;
        this.username = username;
        this.userrole = userrole;
        this.fullname = fullname;
        this.organization = organization;
        this.email = email;
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

module.exports = __webpack_require__(/*! /home/jonathan/github/uafdust/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map