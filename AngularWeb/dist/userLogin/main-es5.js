(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/detail/detail.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detail/detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <body>\n   <div class=\"row\" [hidden]=submitted>\n\n     <div class=\"info\" *ngFor=\"let per of person\">\n\n\n       <h1>{{ per.firstName }}'s Details</h1>\n       <div class=\"person\">\n\n         <h4> ID: {{per.id }}</h4>\n         <h4> Name: {{ per.firstName }}</h4>\n         <h4> Lastname: {{ per.lastName }}</h4>\n         <h4> Street: {{ per.street }}</h4>\n         <h4> City: {{ per.city }}</h4>\n         <h4> State: {{ per.state }}</h4>\n         <h4> Zip: {{ per.zip }}</h4>\n         <h4> Product: {{ per.name }}</h4>\n       </div>\n       <button id=\"edit\" class=\"btn btn-primary\" (click)=\"hide()\">Edit</button>\n\n     </div>\n\n   </div>\n\n   <div class=\"all\" [hidden]=!submitted>\n     <img id=\"logo\" src=\"assets/images/online-shop.png\" alt=\"\">\n     <form class=\"form\" #personForm=\"ngForm\">\n\n       <div class=\"form-group\">\n         <h3>Informations:</h3>\n         <div class=\"form-group\">\n           <label for=\"firstName\">Name: </label>\n           <input id=\"name\" class=\"form-control\" [(ngModel)]=\"person[0].firstName\" type=\"text\" name=\"firstName\" placeholder=\"Name\" #firstName #spy required>\n\n         </div>\n         <div class=\"form-group\">\n           <label for=\"lastName\">Last Name: </label>\n           <input id=\"lastname\" class=\"form-control\" [(ngModel)]=\"person[0].lastName\" type=\"text\" name=\"lastName\" placeholder=\"Lastname\" #lastName>\n\n         </div>\n         <h3>Address:</h3>\n\n         <div class=\"form-group\">\n           <label> Street: </label>\n           <input id=\"street\" class=\"form-control\" [(ngModel)]=\"person[0].street\" type=\"text\" name=\"street\" placeholder=\"Street\" #street>\n\n         </div>\n\n         <div class=\"form-group\">\n           <label>City:</label>\n           <input id=\"city\" class=\"form-control\" [(ngModel)]=\"person[0].city\" type=\"text\" name=\"city\" placeholder=\"City\" #city>\n\n         </div>\n         <div class=\"form-group\">\n           <label>State:</label>\n\n           <input id=\"state\" class=\"form-control\" [(ngModel)]=\"person[0].state\" type=\"text\" name=\"state\" placeholder=\"State\" #state>\n\n         </div>\n         <div class=\"form-group\">\n\n           <label>Zip Code:</label>\n           <input id=\"zip\" class=\"form-control\" [(ngModel)]=\"person[0].zip\" type=\"text\" name=\"zip\" placeholder=\"Zip\" #zip>\n\n         </div>\n\n       </div>\n\n       <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!personForm.form.valid\" (click)=\"update(firstName.value, lastName.value, street.value, city.value, state.value, zip.value); show();\">Save</button>\n     </form>>\n   </div>\n </body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"nav-bar\">\n\n  <nav class=\"navbar navbar-light\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <h3>WorldWideNet <img id=\"logo\" src=\"/assets/images/online-shop.png\" alt=\"\"> </h3>\n\n    </a>\n\n    <ul class=\"nav justify-content-end\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" routerLink= \"/list\">All People List</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Enterprice</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"/booking\" class=\"nav-link\" href=\"#\">Support</a>\n      </li>\n      <li class=\"nav-item\">\n        <button type=\"button\" class=\"btn btn-outline-dark\"> sing up </button>\n      </li>\n    </ul>\n\n  </nav>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/peoplelist/peoplelist.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/peoplelist/peoplelist.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n\n\n    <div class=\"all\">\n\n      <ul class=\"allPeople\">\n\n        <li *ngFor=\"let person of allPeople\">\n          <a routerLink=\"/detail/{{person.id}}\">\n            <span class=\"badge\">{{ person.id }}</span> {{ person.firstName }}\n          </a>\n          <button class=\"delete\" title=\"delete person\" (click)=\"delete(person)\" routerLink=\"/list\">x</button>\n          <button routerLink=\"/detail/{{person.id}}\"  class=\"btn btn-primary\">Show details</button>\n        </li>\n\n      </ul>\n    </div>\n    \n\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/price/price.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/price/price.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n\n  <div class=\"all\" [hidden]=submitted>\n    <img id=\"logo\" src=\"assets/images/online-shop.png\" alt=\"\" >\n\n      <div class=\"title\">\n        <h1>Computers</h1>\n        <h3 id=\"hotelTitle\">price</h3>\n        <p>You can find the best computers for yourself.</p>\n\n      </div>\n\n\n\n\n    <section class=\"pricing\">\n      <div class=\"row\">\n\n        <div class=\"col-6 col-md-4\" *ngFor =\"let product of allProducts\">\n          <div class=\"card-text-center\" style=\"width: 18rem;\">\n            <img src=\"assets/images/laptop{{product.id}}.jpeg\" class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body\">\n              <h3>{{ product.name }}</h3>\n              <p class=\"card-text\">{{ product.informations }}</p>\n              <h3>{{ product.prices }}$</h3>\n              <button class=\"btn btn-primary\" type=\"button\" name=\"button\" (click)=\"selectedProduct(product)\"> Buy </button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </section>\n\n    <section class=\"info\">\n      <footer class=\"pt-4 my-md-5 pt-md-5 border-top\">\n        <div class=\"row\">\n          <div class=\"col-6 col-md-4\">\n            <h5>Features</h5>\n            <ul class=\"list-unstyled text-small\">\n              <li><a class=\"text-muted\" href=\"#\">Cool stuff</a></li>\n              <li><a class=\"text-muted\" href=\"#\">Random feature</a></li>\n\n            </ul>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <h5>Resources</h5>\n            <ul class=\"list-unstyled text-small\">\n              <li><a class=\"text-muted\" href=\"#\">Resource</a></li>\n              <li><a class=\"text-muted\" href=\"#\">Resource name</a></li>\n\n            </ul>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <h5>About</h5>\n            <ul class=\"list-unstyled text-small\">\n              <li><a class=\"text-muted\" href=\"#\">Team</a></li>\n              <li><a class=\"text-muted\" href=\"#\">Locations</a></li>\n            </ul>\n          </div>\n        </div>\n      </footer>\n\n    </section>\n\n  </div>\n\n  <div class=\"all\" [hidden]=!submitted>\n    <img id=\"logo\" src=\"assets/images/online-shop.png\" alt=\"\">\n    <form class=\"form\" #personForm=\"ngForm\">\n\n      <div class=\"form-group\">\n        <h3>Informations:</h3>\n        <div class=\"form-group\">\n          <label for=\"firstName\">Name: </label>\n          <input id=\"name\" class=\"form-control\" type=\"text\" name=\"firstName\" placeholder=\"Name\" #firstName #spy required>\n\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name: </label>\n          <input id=\"lastname\" class=\"form-control\" type=\"text\" name=\"lastName\" placeholder=\"Lastname\" #lastName>\n\n        </div>\n        <h3>Address:</h3>\n\n        <div class=\"form-group\">\n          <label> Street: </label>\n          <input id=\"street\" class=\"form-control\" type=\"text\" name=\"street\" placeholder=\"Street\" #street>\n\n        </div>\n\n        <div class=\"form-group\">\n          <label>City:</label>\n          <input id=\"city\" class=\"form-control\" type=\"text\" name=\"city\" placeholder=\"City\" #city>\n\n        </div>\n        <div class=\"form-group\">\n          <label>State:</label>\n\n          <input id=\"state\" class=\"form-control\" type=\"text\" name=\"state\" placeholder=\"State\" #state>\n\n        </div>\n        <div class=\"form-group\">\n\n          <label>Zip Code:</label>\n          <input id=\"zip\" class=\"form-control\" type=\"text\" name=\"zip\" placeholder=\"Zip\" #zip>\n\n        </div>\n\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!personForm.form.valid\" (click)=\"addPerson(firstName.value, lastName.value, street.value, city.value, state.value, zip.value); show();\">Submit</button>\n    </form>\n    <p>Form Status: {{ personForm.status }}</p>\n  </div>\n\n</body>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./price/price.component */ "./src/app/price/price.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _peoplelist_peoplelist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./peoplelist/peoplelist.component */ "./src/app/peoplelist/peoplelist.component.ts");






var routes = [
    { path: '', component: _price_price_component__WEBPACK_IMPORTED_MODULE_3__["PriceComponent"] },
    { path: 'detail/:id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] },
    { path: 'list', component: _peoplelist_peoplelist_component__WEBPACK_IMPORTED_MODULE_5__["PeoplelistComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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

module.exports = "h1 {\n  font-size: 3em;\n  margin-bottom: 0;\n  font-family: Arial;\n\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7QUFFcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBmb250LXNpemU6IDNlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuXG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbiJdfQ== */"

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
        this.title = 'userLogin';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people.service */ "./src/app/people.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./price/price.component */ "./src/app/price/price.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _peoplelist_peoplelist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./peoplelist/peoplelist.component */ "./src/app/peoplelist/peoplelist.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _price_price_component__WEBPACK_IMPORTED_MODULE_9__["PriceComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["DetailComponent"],
                _peoplelist_peoplelist_component__WEBPACK_IMPORTED_MODULE_12__["PeoplelistComponent"],
            ],
            exports: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _price_price_component__WEBPACK_IMPORTED_MODULE_9__["PriceComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["DetailComponent"],
                _peoplelist_peoplelist_component__WEBPACK_IMPORTED_MODULE_12__["PeoplelistComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            providers: [_people_service__WEBPACK_IMPORTED_MODULE_5__["PeopleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info {\n  position: relative;\n  padding-top: 5%;\n  margin-left: 25%;\n  margin-right: 10%;\n  padding-bottom: 4%;\n  left: 12%;\n}\nbody{\n  background-color: #e3f2fd;\n  font-family: 'Inconsolata' monospace;\n}\n.person{\n  padding-top: 10%;\n}\nbutton {\n  font-family: Arial;\n  background-color: #8e8e8e;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  margin-top: 2%;\n  width: 100px;\n  width: 200px;\n}\n.btn-success{\n  position: relative;\n  left: 2%;\n}\n.btn{\n  position: relative;\n  display: inherit;\n  padding: 5px;\n  width: 150px;\n}\n#edit{\n  margin-top: 50%;\n  margin-left: -100%;\n  left: 100%;\n  bottom: 30%;\n}\n.row{\n  margin-left: 0;\n  margin-right: 0;\n  padding-top:   1%;\n}\nh1 {\n  font-size: 5rem;\n}\nh3 {\n  font-size: 3rem;\n}\np {\n  font-size: 1.5rem;\n}\nimg{\n  width: 300px;\n  height: 250px;\n}\n.form{\n  padding-left: 25%;\n  padding-right: 25%;\n}\n.hidden{\n  padding: 5% 30%;\n}\nul{\n  font-family: Arial;\n}\n.allPeople {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.allPeople li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n  height: 40px;\n}\n.allPeople li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.allPeople li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.allPeople .text {\n  position: relative;\n}\n.allPeople .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color:#405061;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 40px;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton{\n  font-family: Arial;\n  background-color: #8e8e8e;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton.delete {\n  position: relative;\n  left: 12em;\n  top: -45px;\n  background-color: gray !important;\n  color: white;\n  display: inherit;\n  padding: 7px;\n  width: 2em;\n}\n#logo{\n  position: relative;\n  width: 100px;\n  height: 100px;\n  left: 800px;\n  margin: 5%;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7O0FBRVoiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgcGFkZGluZy1ib3R0b206IDQlO1xuICBsZWZ0OiAxMiU7XG59XG5ib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xuICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJyBtb25vc3BhY2U7XG59XG4ucGVyc29ue1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIHdpZHRoOiAxMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uYnRuLXN1Y2Nlc3N7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMiU7XG59XG4uYnRue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuI2VkaXR7XG4gIG1hcmdpbi10b3A6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xuICBsZWZ0OiAxMDAlO1xuICBib3R0b206IDMwJTtcbn1cbi5yb3d7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAgIDElO1xufVxuaDEge1xuICBmb250LXNpemU6IDVyZW07XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmltZ3tcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4uZm9ybXtcbiAgcGFkZGluZy1sZWZ0OiAyNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDI1JTtcbn1cbi5oaWRkZW57XG4gIHBhZGRpbmc6IDUlIDMwJTtcbn1cbnVse1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG4uYWxsUGVvcGxlIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDE1ZW07XG59XG4uYWxsUGVvcGxlIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIG1hcmdpbjogLjVlbTtcbiAgcGFkZGluZzogLjNlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5hbGxQZW9wbGUgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5hbGxQZW9wbGUgbGk6aG92ZXIge1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgbGVmdDogLjFlbTtcbn1cbi5hbGxQZW9wbGUgLnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWxsUGVvcGxlIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM0MDUwNjE7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5idXR0b257XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlOGU4ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xufVxuYnV0dG9uLmRlbGV0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTJlbTtcbiAgdG9wOiAtNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDdweDtcbiAgd2lkdGg6IDJlbTtcbn1cblxuI2xvZ297XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsZWZ0OiA4MDBweDtcbiAgbWFyZ2luOiA1JTtcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../people.service */ "./src/app/people.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailComponent = /** @class */ (function () {
    function DetailComponent(peopleService, route) {
        this.peopleService = peopleService;
        this.route = route;
        this.submitted = false;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.getPersonWithProduct();
    };
    DetailComponent.prototype.getPersonWithProduct = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.peopleService.getPersonWithProduct(id)
            .subscribe(function (person) { return _this.person = person; });
    };
    DetailComponent.prototype.update = function (firstName, lastName, street, city, state, zip) {
        var newPerson = { firstName: firstName, lastName: lastName, street: street, state: state, city: city, zip: zip };
        var id = +this.route.snapshot.paramMap.get('id');
        this.peopleService.updatePerson(newPerson, id)
            .subscribe();
    };
    DetailComponent.prototype.hide = function () {
        this.submitted = true;
    };
    DetailComponent.prototype.show = function () {
        this.submitted = false;
    };
    DetailComponent.ctorParameters = function () { return [
        { type: _people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 3rem;\n  font-family: 'Inconsolata' monospace;\n}\n\nh3 {\n  font-size: 2rem;\n  font-family: 'Inconsolata' monospace;\n}\n\np {\n  font-size: 1.5rem;\n}\n\na{\n  color: black;\n}\n\n#logo{\n  width: 50px;\n  height: 50px;\n}\n\n.navbar{\n  background-color: #40c4ff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnIG1vbm9zcGFjZTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnIG1vbm9zcGFjZTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuYXtcbiAgY29sb3I6IGJsYWNrO1xufVxuI2xvZ297XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4ubmF2YmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBjNGZmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/people.service.ts":
/*!***********************************!*\
  !*** ./src/app/people.service.ts ***!
  \***********************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' })
};
var PeopleService = /** @class */ (function () {
    function PeopleService(http) {
        this.http = http;
        this.allPeopleUrl = 'http://localhost:5000/people';
        this.allProductsUrl = 'http://localhost:5000/products';
    }
    PeopleService.prototype.getAllPeople = function () {
        return this.http.get(this.allPeopleUrl);
    };
    PeopleService.prototype.deletePerson = function (id) {
        var url = this.allPeopleUrl + "/" + id;
        return this.http.delete(url, httpOptions);
    };
    PeopleService.prototype.addPerson = function (people) {
        return this.http.post(this.allPeopleUrl, people, httpOptions);
    };
    PeopleService.prototype.getPerson = function (id) {
        var url = this.allPeopleUrl + "/" + id;
        return this.http.get(url);
    };
    PeopleService.prototype.updatePerson = function (person, id) {
        var url = this.allPeopleUrl + "/" + id;
        return this.http.put(url, person, httpOptions);
    };
    //FOR PRODUCTS
    PeopleService.prototype.getPersonWithProduct = function (id) {
        var url = this.allProductsUrl + "/" + id;
        return this.http.get(url);
    };
    PeopleService.prototype.getAllProducts = function () {
        return this.http.get(this.allProductsUrl);
    };
    PeopleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PeopleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "./src/app/peoplelist/peoplelist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/peoplelist/peoplelist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n  color: grey;\n}\n\nbutton {\n  font-family: Arial;\n  background-color: #8e8e8e;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  margin-top: 2%;\n  width: 200px;\n}\n\nul{\n  font-family: Arial;\n}\n\n.allPeople {\n  margin-top: 2%;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n\n.allPeople li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  border-radius: 4px;\n  height: 40px;\n}\n\n.allPeople li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n\n.allPeople li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n\n.allPeople .text {\n  position: relative;\n}\n\n.allPeople .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color:#405061;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 40px;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\nbutton.delete {\n  position: relative;\n  left: 12em;\n  top: -49px;\n  background-color: gray !important;\n  color: white;\n  display: inherit;\n  padding: 7px;\n  width: 2em;\n}\n\n.btn-success{\n  position: relative;\n  left: 2%;\n}\n\n.btn{\n  position: relative;\n  left: 15em;\n  top: -91px;\n  display: inherit;\n  padding: 7px;\n}\n\nbody{\n    background-color: #e3f2fd;\n}\n\n.all{\n  position: relative;\n  left: 5%;\n  right: 0;\n  padding-top: 1%;\n  padding-bottom: 7%;\n  margin-right: 15%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVvcGxlbGlzdC9wZW9wbGVsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wZW9wbGVsaXN0L3Blb3BsZWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XG4gIGNvbG9yOiBncmV5O1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuXG51bHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuLmFsbFBlb3BsZSB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNWVtO1xufVxuLmFsbFBlb3BsZSBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uYWxsUGVvcGxlIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWxsUGVvcGxlIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGxlZnQ6IC4xZW07XG59XG4uYWxsUGVvcGxlIC50ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFsbFBlb3BsZSAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG5idXR0b24uZGVsZXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMmVtO1xuICB0b3A6IC00OXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgcGFkZGluZzogN3B4O1xuICB3aWR0aDogMmVtO1xufVxuXG5cbi5idG4tc3VjY2Vzc3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyJTtcbn1cbi5idG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTVlbTtcbiAgdG9wOiAtOTFweDtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgcGFkZGluZzogN3B4O1xufVxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xufVxuLmFsbHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1JTtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAxJTtcbiAgcGFkZGluZy1ib3R0b206IDclO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/peoplelist/peoplelist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/peoplelist/peoplelist.component.ts ***!
  \****************************************************/
/*! exports provided: PeoplelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplelistComponent", function() { return PeoplelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../people.service */ "./src/app/people.service.ts");



var PeoplelistComponent = /** @class */ (function () {
    function PeoplelistComponent(peopleService) {
        this.peopleService = peopleService;
    }
    PeoplelistComponent.prototype.ngOnInit = function () {
        this.getAllPeople();
    };
    PeoplelistComponent.prototype.getAllPeople = function () {
        var _this = this;
        this.peopleService.getAllPeople()
            .subscribe(function (allPeople) { return _this.allPeople = allPeople; });
    };
    PeoplelistComponent.prototype.delete = function (person) {
        this.allPeople = this.allPeople.filter(function (p) { return p !== person; });
        this.peopleService
            .deletePerson(person.id)
            .subscribe();
    };
    PeoplelistComponent.ctorParameters = function () { return [
        { type: _people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PeoplelistComponent.prototype, "allPeople", void 0);
    PeoplelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-peoplelist',
            template: __webpack_require__(/*! raw-loader!./peoplelist.component.html */ "./node_modules/raw-loader/index.js!./src/app/peoplelist/peoplelist.component.html"),
            styles: [__webpack_require__(/*! ./peoplelist.component.css */ "./src/app/peoplelist/peoplelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"]])
    ], PeoplelistComponent);
    return PeoplelistComponent;
}());



/***/ }),

/***/ "./src/app/price/price.component.css":
/*!*******************************************!*\
  !*** ./src/app/price/price.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 5rem;\n  font-family: 'Inconsolata', monospace;\n}\n\nh3 {\n  font-size: 3rem;\n  font-family: 'Inconsolata', monospace;\n}\n\np {\n  font-size: 1.5rem;\n\n}\n\nbody{\n  background-color: #e3f2fd;\n  padding-bottom: 2%;\n  text-align: center;\n\n}\n\n.row {\n  text-align: center;\n  padding: 1% 25%;\n  margin-left: 0;\n  margin-right: 0;\n\n}\n\n.title {\n  padding: 0;\n}\n\n.pricing {\n  text-align: center;\n}\n\n.btn {\n  width: 150px;\n}\n\nimg{\n  width: 300px;\n  height: 250px;\n}\n\n.form{\n  padding-left: 25%;\n  padding-right: 25%;\n}\n\nbutton{\n  font-family: Arial;\n  background-color: #8e8e8e;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\n\n#logo{\n  width: 100px;\n  height: 100px;\n  margin-top: 5%;\n\n}\n\n.btn-success{\n  position: relative;\n  left: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2UvcHJpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsaUJBQWlCOztBQUVuQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYzs7QUFFaEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvcHJpY2UvcHJpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuXG59XG5ib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4ucm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxJSAyNSU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG5cbn1cblxuLnRpdGxlIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnByaWNpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTUwcHg7XG59XG5pbWd7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLmZvcm17XG4gIHBhZGRpbmctbGVmdDogMjUlO1xuICBwYWRkaW5nLXJpZ2h0OiAyNSU7XG59XG5cblxuYnV0dG9ue1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbn1cblxuXG4jbG9nb3tcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcblxufVxuLmJ0bi1zdWNjZXNze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDIlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/price/price.component.ts":
/*!******************************************!*\
  !*** ./src/app/price/price.component.ts ***!
  \******************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../people.service */ "./src/app/people.service.ts");



var PriceComponent = /** @class */ (function () {
    function PriceComponent(peopleService) {
        this.peopleService = peopleService;
        this.submitted = false;
    }
    PriceComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
    };
    PriceComponent.prototype.addPerson = function (firstName, lastName, street, city, state, zip, product_id) {
        var _this = this;
        if (product_id === void 0) { product_id = this.product_id; }
        if (firstName === "") {
            firstName = "None";
        }
        else {
            var newPerson = { firstName: firstName, lastName: lastName, street: street, state: state, city: city, zip: zip, product_id: product_id };
            this.peopleService
                .addPerson(newPerson)
                .subscribe(function (person) { return _this.allPeople.push(person); });
        }
    };
    PriceComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.peopleService.getAllProducts()
            .subscribe(function (allProducts) { return _this.allProducts = allProducts; });
    };
    PriceComponent.prototype.selectedProduct = function (product) {
        this.product_id = product.id;
        this.submitted = true;
    };
    PriceComponent.prototype.show = function () {
        this.submitted = false;
    };
    PriceComponent.ctorParameters = function () { return [
        { type: _people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"] }
    ]; };
    PriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-price',
            template: __webpack_require__(/*! raw-loader!./price.component.html */ "./node_modules/raw-loader/index.js!./src/app/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.css */ "./src/app/price/price.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"]])
    ], PriceComponent);
    return PriceComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'api'
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

module.exports = __webpack_require__(/*! /home/berkant/ders/Staj/AngularWeb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map