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
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _palliatives_palliatives_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./palliatives/palliatives.component */ "./src/app/palliatives/palliatives.component.ts");
/* harmony import */ var _palliative_detail_palliative_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./palliative-detail/palliative-detail.component */ "./src/app/palliative-detail/palliative-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"] },
    { path: 'users/detail/:id', component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailComponent"] },
    { path: 'palliatives', component: _palliatives_palliatives_component__WEBPACK_IMPORTED_MODULE_5__["PalliativesComponent"] },
    { path: 'palliatives/detail/:id', component: _palliative_detail_palliative_detail_component__WEBPACK_IMPORTED_MODULE_6__["PalliativeDetailComponent"] },
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

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n    font-size: 1.2em;\r\n    color: #999;\r\n    margin-bottom: 0;\r\n  }\r\nh2 {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n  }\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\nnav a:visited, a:link {\r\n    color: #607d8b;\r\n  }\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #cfd8dc;\r\n  }\r\nnav a.active {\r\n    color: #039be5;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>\n  <a routerLink=\"/palliatives\">Palliatives</a>\n  <a routerLink=\"/users\">Users</a>\n</nav>\n<router-outlet></router-outlet>\n<app-messages></app-messages>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Dust Palliative MPRT Calculator';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-search/user-search.component */ "./src/app/user-search/user-search.component.ts");
/* harmony import */ var _palliatives_palliatives_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./palliatives/palliatives.component */ "./src/app/palliatives/palliatives.component.ts");
/* harmony import */ var _palliative_detail_palliative_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./palliative-detail/palliative-detail.component */ "./src/app/palliative-detail/palliative-detail.component.ts");
/* harmony import */ var _palliative_search_palliative_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./palliative-search/palliative-search.component */ "./src/app/palliative-search/palliative-search.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
                _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_12__["UserSearchComponent"],
                _palliatives_palliatives_component__WEBPACK_IMPORTED_MODULE_13__["PalliativesComponent"],
                _palliative_detail_palliative_detail_component__WEBPACK_IMPORTED_MODULE_14__["PalliativeDetailComponent"],
                _palliative_search_palliative_search_component__WEBPACK_IMPORTED_MODULE_15__["PalliativeSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<h3>Top Users</h3>\n\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let user of users\" class=\"col-1-4\" routerLink=\"/detail/{{user.id}}\">\n  <div class=\"module user\">\n    <h4>{{user.username}}</h4>\n  </div>\n  </a>\n</div>\n\n<app-user-search></app-user-search>"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
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
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            { id: 11, username: 'Mr. Nice', firstname: '', lastname: '', organization: '', email: '' },
            { id: 12, username: 'Narco', firstname: '', lastname: '', organization: '', email: '' },
            { id: 13, username: 'Bombasto', firstname: '', lastname: '', organization: '', email: '' },
            { id: 14, username: 'Celeritas', firstname: '', lastname: '', organization: '', email: '' },
            { id: 15, username: 'Magneta', firstname: '', lastname: '', organization: '', email: '' },
            { id: 16, username: 'RubberMan', firstname: '', lastname: '', organization: '', email: '' },
            { id: 17, username: 'Dynama', firstname: '', lastname: '', organization: '', email: '' },
            { id: 18, username: 'Dr IQ', firstname: '', lastname: '', organization: '', email: '' },
            { id: 19, username: 'Magma', firstname: '', lastname: '', organization: '', email: '' },
            { id: 20, username: 'Tornado', firstname: '', lastname: '', organization: '', email: '' }
        ];
        var palliatives = [
            {
                id: 100, shortname: 'Water', longname: 'Water', description: 'A liquid',
                data: [{ t: 0, C: 0 }, { t: 1, C: 1 }, { t: 2, C: 4 }, { t: 3, C: 9 }], mprt: 1.62
            },
        ];
        return { users: users, palliatives: palliatives };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
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

module.exports = "/* MessagesComponent's private CSS styles */\r\nh2 {\r\n    color: red;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n  }\r\nbody {\r\n    margin: 2em;\r\n  }\r\nbody, input[text], button {\r\n    color: crimson;\r\n    font-family: Cambria, Georgia;\r\n  }\r\nbutton.clear {\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton:disabled {\r\n    background-color: #eee;\r\n    color: #aaa;\r\n    cursor: auto;\r\n  }\r\nbutton.clear {\r\n    color: #888;\r\n    margin-bottom: 12px;\r\n  }"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n    <h2>Messages</h2>\n    <button class=\"clear\"\n            (click)=\"messageService.clear()\">clear</button>\n    <div *ngFor='let message of messageService.messages'> {{message}} </div>\n  \n  </div>"

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
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
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

/***/ "./src/app/palliative-detail/palliative-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/palliative-detail/palliative-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DetailComponent's private CSS styles */\r\nlabel {\r\n    display: inline-block;\r\n    width: 3em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n  }\r\ninput {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n  }\r\nbutton {\r\n    margin-top: 20px;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer; cursor: hand;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n  }"

/***/ }),

/***/ "./src/app/palliative-detail/palliative-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/palliative-detail/palliative-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"palliative\">\n\n  <h3>{{palliative.shortname | uppercase}} Details</h3>\n  <div><span>id: {{palliative.id}}</span></div>\n  <div><span>userid: {{palliative.userid}}</span></div>\n  <div *ngIf=\"user\"><span>{{user.username}} | {{user.firstname}} {{user.lastname}}</span></div>\n  <div><span>mprt <span style=\"font-family: serif;\">&tau;</span>: {{palliative.mprt}}</span></div>\n\n  <div><label>Short Name:<input [(ngModel)]=\"palliative.shortname\" placeholder=\"shortname\"></label></div>\n  <div><label>Long Name:<input [(ngModel)]=\"palliative.longname\" placeholder=\"longname\"></label></div>\n  <div><label>Description:<input [(ngModel)]=\"palliative.description\" placeholder=\"description\"></label></div>\n  <div><label>User Id:<input [(ngModel)]=\"palliative.userid\" placeholder=\"userid\"></label>\n\n  </div>\n\n  <button (click)=\"save()\">save</button>\n  <button (blick)=\"goBack()\">go back</button>\n</div>\n"

/***/ }),

/***/ "./src/app/palliative-detail/palliative-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/palliative-detail/palliative-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: PalliativeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalliativeDetailComponent", function() { return PalliativeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _palliative__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../palliative */ "./src/app/palliative.ts");
/* harmony import */ var _palliative_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../palliative.service */ "./src/app/palliative.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
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
    function PalliativeDetailComponent(route, palliativeService, userService, location) {
        this.route = route;
        this.palliativeService = palliativeService;
        this.userService = userService;
        this.location = location;
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
    PalliativeDetailComponent.prototype.save = function () {
        var _this = this;
        this.palliativeService.updatePalliative(this.palliative)
            .subscribe(function () { return _this.goBack(); });
    };
    PalliativeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _palliative__WEBPACK_IMPORTED_MODULE_3__["Palliative"])
    ], PalliativeDetailComponent.prototype, "palliative", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _user__WEBPACK_IMPORTED_MODULE_6__["User"])
    ], PalliativeDetailComponent.prototype, "user", void 0);
    PalliativeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-palliative-detail',
            template: __webpack_require__(/*! ./palliative-detail.component.html */ "./src/app/palliative-detail/palliative-detail.component.html"),
            styles: [__webpack_require__(/*! ./palliative-detail.component.css */ "./src/app/palliative-detail/palliative-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _palliative_service__WEBPACK_IMPORTED_MODULE_4__["PalliativeService"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], PalliativeDetailComponent);
    return PalliativeDetailComponent;
}());



/***/ }),

/***/ "./src/app/palliative-search/palliative-search.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/palliative-search/palliative-search.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/palliative-search/palliative-search.component.html":
/*!********************************************************************!*\
  !*** ./src/app/palliative-search/palliative-search.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  palliative-search works!\n</p>\n"

/***/ }),

/***/ "./src/app/palliative-search/palliative-search.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/palliative-search/palliative-search.component.ts ***!
  \******************************************************************/
/*! exports provided: PalliativeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalliativeSearchComponent", function() { return PalliativeSearchComponent; });
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

var PalliativeSearchComponent = /** @class */ (function () {
    function PalliativeSearchComponent() {
    }
    PalliativeSearchComponent.prototype.ngOnInit = function () {
    };
    PalliativeSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-palliative-search',
            template: __webpack_require__(/*! ./palliative-search.component.html */ "./src/app/palliative-search/palliative-search.component.html"),
            styles: [__webpack_require__(/*! ./palliative-search.component.css */ "./src/app/palliative-search/palliative-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PalliativeSearchComponent);
    return PalliativeSearchComponent;
}());



/***/ }),

/***/ "./src/app/palliative.service.ts":
/*!***************************************!*\
  !*** ./src/app/palliative.service.ts ***!
  \***************************************/
/*! exports provided: PalliativeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalliativeService", function() { return PalliativeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
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
        return this.http.put(this.serviceUrl, palliative, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("updated palliative id=" + palliative.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updatePalliative')));
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
        return this.http.get(this.serviceUrl + "/?name=" + term)
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
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], PalliativeService);
    return PalliativeService;
}());



/***/ }),

/***/ "./src/app/palliative.ts":
/*!*******************************!*\
  !*** ./src/app/palliative.ts ***!
  \*******************************/
/*! exports provided: DustColumnDataPoint, Palliative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DustColumnDataPoint", function() { return DustColumnDataPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Palliative", function() { return Palliative; });
var DustColumnDataPoint = /** @class */ (function () {
    function DustColumnDataPoint() {
    }
    return DustColumnDataPoint;
}());

var Palliative = /** @class */ (function () {
    function Palliative() {
    }
    return Palliative;
}());



/***/ }),

/***/ "./src/app/palliatives/palliatives.component.css":
/*!*******************************************************!*\
  !*** ./src/app/palliatives/palliatives.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\r\n.palliatives {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n.palliatives li {\r\n    position: relative;\r\n    cursor: pointer;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n.palliatives li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n.palliatives a {\r\n    color: #888;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: block;\r\n    width: 250px;\r\n  }\r\n.palliatives a:hover {\r\n    color:#607D8B;\r\n  }\r\n.palliatives .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    min-width: 16px;\r\n    text-align: right;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\nbutton {\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n    font-family: Arial;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton.delete {\r\n    position: relative;\r\n    left: 194px;\r\n    top: -32px;\r\n    background-color: gray !important;\r\n    color: white;\r\n  }"

/***/ }),

/***/ "./src/app/palliatives/palliatives.component.html":
/*!********************************************************!*\
  !*** ./src/app/palliatives/palliatives.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Palliatives</h2>\n\n<div>\n  <label>Palliative:\n    <input #palliativeName />\n  </label>\n\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button (click)=\"add(palliativeName.value); palliativeName.value=''\">\n    add\n  </button>\n</div>\n\n<ul class=\"palliatives\">\n  <li *ngFor=\"let palliative of palliatives\">\n    <a routerLink=\"/palliatives/detail/{{palliative.id}}\">\n    <span class=\"badge\">{{palliative.id}}</span>{{palliative.shortname}}</a>\n    <button class=\"delete\" title=\"delete palliative\" (click)=\"delete(user)\">x</button>\n  </li>\n</ul>\n\n<app-palliative-detail [palliative]=\"selectedPalliative\"></app-palliative-detail>"

/***/ }),

/***/ "./src/app/palliatives/palliatives.component.ts":
/*!******************************************************!*\
  !*** ./src/app/palliatives/palliatives.component.ts ***!
  \******************************************************/
/*! exports provided: PalliativesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalliativesComponent", function() { return PalliativesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _palliative_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palliative.service */ "./src/app/palliative.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PalliativesComponent = /** @class */ (function () {
    function PalliativesComponent(palliativeService) {
        this.palliativeService = palliativeService;
    }
    PalliativesComponent.prototype.ngOnInit = function () {
        this.getPalliatives();
    };
    PalliativesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.palliativeService.addPalliative({ id: null, shortname: name })
            .subscribe(function (palliative) {
            _this.palliatives.push(palliative);
        });
    };
    PalliativesComponent.prototype.delete = function (palliative) {
        this.palliatives = this.palliatives.filter(function (h) { return h !== palliative; });
        this.palliativeService.deletePalliative(palliative).subscribe();
    };
    PalliativesComponent.prototype.getPalliatives = function () {
        var _this = this;
        this.palliativeService.getPalliatives().subscribe(function (palliatives) { return _this.palliatives = palliatives; });
    };
    PalliativesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-palliatives',
            template: __webpack_require__(/*! ./palliatives.component.html */ "./src/app/palliatives/palliatives.component.html"),
            styles: [__webpack_require__(/*! ./palliatives.component.css */ "./src/app/palliatives/palliatives.component.css")]
        }),
        __metadata("design:paramtypes", [_palliative_service__WEBPACK_IMPORTED_MODULE_1__["PalliativeService"]])
    ], PalliativesComponent);
    return PalliativesComponent;
}());



/***/ }),

/***/ "./src/app/user-detail/user-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DetailComponent's private CSS styles */\r\nlabel {\r\n    display: inline-block;\r\n    width: 3em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n  }\r\ninput {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n  }\r\nbutton {\r\n    margin-top: 20px;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer; cursor: hand;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n  }"

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\n  <h3>{{user.username | uppercase}} Details</h3>\n  <div><span>id: {{user.id}}</span></div>\n  <!-- <div><span>Name: {{user.firstname}} {{user.lastname}}</span></div>\n  <div><span>Organization: {{user.organization}}</span></div>\n  <div><span>Email: {{user.email}}</span></div> -->\n  \n  <div><label>First name:<input [(ngModel)]=\"user.firstname\" placeholder=\"firstname\"></label></div>\n  <div><label>Last name:<input [(ngModel)]=\"user.lastname\" placeholder=\"lastname\"></label></div>\n  <div><label>Organization:<input [(ngModel)]=\"user.organization\" placeholder=\"organization\"></label></div>\n  <div><label>Email:<input [(ngModel)]=\"user.email\" placeholder=\"email\"></label></div>\n  \n  <button (click)=\"save()\">save</button>\n  <button (click)=\"goBack()\">go back</button>\n</div>"

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.ts ***!
  \******************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
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
    function UserDetailComponent(route, userService, location) {
        this.route = route;
        this.userService = userService;
        this.location = location;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserDetailComponent.prototype.getUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUser(id).subscribe(function (user) { return _this.user = user; });
    };
    UserDetailComponent.prototype.save = function () {
        var _this = this;
        this.userService.updateUser(this.user)
            .subscribe(function () { return _this.goBack(); });
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
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/user-search/user-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-search/user-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* UserSearch private styles */\r\n.search-result li {\r\n    border-bottom: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    width:195px;\r\n    height: 16px;\r\n    padding: 5px;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n  }\r\n.search-result li:hover {\r\n    background-color: #607D8B;\r\n  }\r\n.search-result li a {\r\n    color: #888;\r\n    display: block;\r\n    text-decoration: none;\r\n  }\r\n.search-result li a:hover {\r\n    color: white;\r\n  }\r\n.search-result li a:active {\r\n    color: white;\r\n  }\r\n#search-box {\r\n    width: 200px;\r\n    height: 20px;\r\n  }\r\nul.search-result {\r\n    margin-top: 0;\r\n    padding-left: 0;\r\n  }"

/***/ }),

/***/ "./src/app/user-search/user-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-search/user-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>User Search</h4>\n\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n\n  <ul class=\"search-result\">\n    <li *ngFor=\"let user of users$ | async\">\n      <a routerLink=\"users/detail/{{user.id}}\">{{user.username}}</a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/user-search/user-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-search/user-search.component.ts ***!
  \******************************************************/
/*! exports provided: UserSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchComponent", function() { return UserSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
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
            template: __webpack_require__(/*! ./user-search.component.html */ "./src/app/user-search/user-search.component.html"),
            styles: [__webpack_require__(/*! ./user-search.component.css */ "./src/app/user-search/user-search.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserSearchComponent);
    return UserSearchComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
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
var UserService = /** @class */ (function () {
    function UserService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.usersUrl = '/dust.php/users';
        this.lastUserId = 0;
    }
    UserService.prototype.getUser = function (id) {
        // this.messageService.add(`UserService: fetched user id = ${id}`);
        // return of(USERS.find(user => user.id === id));
        var _this = this;
        this.lastUserId = id;
        var url = this.usersUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("fetched user id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getUser id=" + id)));
    };
    UserService.prototype.getUsers = function () {
        var _this = this;
        // this.messageService.add('UserService: fetched users');
        // return of(USERS);
        return this.http.get(this.usersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (users) { return _this.log('fetched users'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getUsers', [])));
    };
    /** PUT: update the user on the server */
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        return this.http.put(this.usersUrl, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("updated user id=" + user.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateUser')));
    };
    /** POST: add a new user to the server */
    UserService.prototype.addUser = function (user) {
        var _this = this;
        return this.http.post(this.usersUrl, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_user) { return _this.log("added user w/ id=" + _user.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addUser')));
    };
    /** DELETE: delete the user from the server */
    UserService.prototype.deleteUser = function (user) {
        var _this = this;
        var id = typeof user === 'number' ? user : user.id;
        var url = this.usersUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("deleted user id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteUser')));
    };
    /** GET users whose name contains search term */
    UserService.prototype.searchUsers = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty user array
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        return this.http.get(this.usersUrl + "/?name=" + term)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("found users matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('searchUsers', [])));
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
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

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\r\n.users {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.users li {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.users li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.users a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.users a:hover {\r\n  color:#607D8B;\r\n}\r\n.users .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  left: 194px;\r\n  top: -32px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Users</h2>\n\n<div>\n  <label>User name:\n    <input #userName />\n  </label>\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button (click)=\"add(userName.value); userName.value=''\">\n    add\n  </button>\n</div>\n\n<ul class=\"users\">\n  <li *ngFor=\"let user of users\">\n    <a routerLink=\"/users/detail/{{user.id}}\">\n      <span class=\"badge\">{{user.id}}</span> {{user.username}}</a>\n      <button class=\"delete\" title=\"delete user\"\n      (click)=\"delete(user)\">x</button>\n  </li>\n</ul>\n\n<app-user-detail [user]=\"selectedUser\"></app-user-detail>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        this.userService = userService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.userService.addUser({ id: null, username: name })
            .subscribe(function (user) {
            _this.users.push(user);
        });
    };
    UsersComponent.prototype.delete = function (user) {
        this.users = this.users.filter(function (h) { return h !== user; });
        this.userService.deleteUser(user).subscribe();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
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