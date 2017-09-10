webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/_pipes/day-difference.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayDifferencePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DayDifferencePipe = (function () {
    function DayDifferencePipe() {
    }
    DayDifferencePipe.prototype.transform = function (value) {
        __WEBPACK_IMPORTED_MODULE_1_moment__["updateLocale"]('en', {
            calendar: {
                lastDay: '[yesterday]',
                sameDay: '[today]',
                nextDay: '[tomorrow]',
                lastWeek: '[last] dddd',
                nextWeek: 'dddd',
                sameElse: 'L'
            }
        });
        console.log(value);
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).calendar();
    };
    return DayDifferencePipe;
}());
DayDifferencePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */])({ name: 'dayDifference' })
], DayDifferencePipe);

//# sourceMappingURL=day-difference.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__day_difference_pipe__ = __webpack_require__("../../../../../src/app/_pipes/day-difference.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_pipe__ = __webpack_require__("../../../../../src/app/_pipes/search.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = PipesModule_1 = (function () {
    function PipesModule() {
    }
    PipesModule.forRoot = function () {
        return {
            ngModule: PipesModule_1,
            providers: [],
        };
    };
    return PipesModule;
}());
PipesModule = PipesModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__day_difference_pipe__["a" /* DayDifferencePipe */], __WEBPACK_IMPORTED_MODULE_2__search_pipe__["a" /* SearchPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__day_difference_pipe__["a" /* DayDifferencePipe */], __WEBPACK_IMPORTED_MODULE_2__search_pipe__["a" /* SearchPipe */]],
    })
], PipesModule);

var PipesModule_1;
//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        return items.filter(function (it) { return it[field] == value; });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */])({
        name: 'search'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_services/profiles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilesService; });
var ProfilesService = (function () {
    function ProfilesService() {
        this.profiles = [
            {
                username: 'Eva',
                picture: "../assets/images/profile.png",
                member_for: 5,
                last_seen: new Date("February 4, 2017 10:13:00"),
                activity: 2
            },
            {
                username: 'Patricia',
                picture: "../assets/images/profile.png",
                member_for: 4,
                last_seen: new Date("February 4, 2017 10:13:00"),
                activity: 2
            },
            {
                username: 'David',
                picture: "../assets/images/profile.png",
                member_for: 1,
                last_seen: new Date("February 4, 2017 10:13:00"),
                activity: 2
            },
            {
                username: "Joseph's",
                picture: "../assets/images/profile.png",
                member_for: 12,
                last_seen: new Date("February 4, 2017 10:13:00"),
                activity: 2
            },
            {
                username: 'S.E.N. Waweru',
                picture: "../assets/images/profile.png",
                member_for: 10,
                last_seen: new Date("February 4, 2017 10:13:00"),
                activity: 2
            },
            {
                username: 'Andrew',
                picture: "../assets/images/profile.png",
                member_for: 23,
                last_seen: new Date("February 4, 2017 10:13:00"),
                activity: 2
            },
            {
                username: 'Dr. Halima',
                picture: "../assets/images/profile.png",
                member_for: 9,
                last_seen: new Date("February 4, 2017 10:13:00"),
                activity: 2
            }
        ];
    }
    return ProfilesService;
}());

//# sourceMappingURL=profiles.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/questions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_profiles_service__ = __webpack_require__("../../../../../src/app/_services/profiles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsService = (function () {
    function QuestionsService(profilesService) {
        this.profilesService = profilesService;
        this.questions = [
            {
                id: 0,
                username: 'Eva',
                date: __WEBPACK_IMPORTED_MODULE_2_moment__("5.09.2017 12:55", "DD.MM.YYYY HH.mm").toDate(),
                topic: 'Will insulin make my patient gain weight?',
                content: 'All my patients with diabetes should see an opthalmologist yearly for a dialated eye examination- beginning at diagnosis inpeople with type 2 diabetes, and after 5 years in people with type 1 diabeters after puberty. Patients with know eye disease, symptoms of blurred vision in one eye, or blind spots may need to see their opthalmologist more frequently.',
                votes: 19,
                related_disc: 1,
                conversations: 5,
                answers: [
                    {
                        username: 'Patricia',
                        date: __WEBPACK_IMPORTED_MODULE_2_moment__().toDate(),
                        content: 'Numbers or tingling in your feet should be reported to your doctor at your regular visits.',
                        votes: 8,
                        comments: [
                            {
                                username: 'David',
                                date: __WEBPACK_IMPORTED_MODULE_2_moment__().toDate(),
                                content: 'You should check your feet daily for redness, caluses, cracks, or skin breakdown.',
                                votes: 2,
                            }
                        ]
                    },
                    {
                        username: "Joseph's",
                        date: __WEBPACK_IMPORTED_MODULE_2_moment__().add(-1, 'days').toDate(),
                        content: 'When your blood sugar is low , your body gives out signs that you need food. Different people have different symptoms. You will learn to know your symptoms.',
                        votes: -3
                    }
                ]
            }
        ];
        this.profilesService = profilesService;
        for (var i = 1; i < 10; i++) {
            this.questions.push(this.questions[0]);
            this.questions[i].id = i;
        }
    }
    return QuestionsService;
}());
QuestionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_profiles_service__["a" /* ProfilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_profiles_service__["a" /* ProfilesService */]) === "function" && _a || Object])
], QuestionsService);

var _a;
//# sourceMappingURL=questions.service.js.map

/***/ }),

/***/ "../../../../../src/app/all-questions/all-questions.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n    <div class=\"container-fluid\">\n        <div class=\"row no-margins\">\n            <span id=\"back_btn\"><i class=\"arrow-top\"></i><i class=\"arrow-bottom\"></i></span>\n            <div class=\"col-10 offset-2 col-lg-5 offset-lg-0\">\n                <h1>Questions</h1>\n                <span id=\"add_question\">+</span>\n            </div>\n            <div id=\"choice\" class=\"col-12 col-lg-4\">\n                <div>\n                    <input type=\"radio\" id=\"filterChoice1\" name=\"filter\" value=\"my_shelf\">\n                    <label for=\"filterChoice1\">My shelf</label>\n                </div>\n                <div>\n                    <input type=\"radio\" id=\"filterChoice2\" name=\"filter\" value=\"all_questions\">\n                    <label for=\"filterChoice2\">All qiestions</label>\n                </div>\n            </div>\n            <div id=\"sort\" class=\"col-12 col-lg-3\">\n                <span class=\"cursive\">Sort by:</span><a href=\"#\">recent</a><span class=\"cursive\">or</span><a href=\"#\">hot</a>\n            </div>\n        </div>\n        <form role=\"search\" class=\"row no-gutters\">\n            <input class=\"col-9\" type=\"search\" id=\"search_questions\" name=\"search\" placeholder=\"Search questions\" aria-label=\"Search through questions\">\n            <div class=\"col-3\">\n                <button>Search</button>\n            </div>\n        </form>\n    </div>\n</header>\n<div id=\"wrapper\">\n    <main class=\"container-fluid\">\n        <div class=\"row question no-gutters\" *ngFor=\"let question of questions\">\n            <header class=\"col-12 col-lg-9\">\n                <div class=\"row no-margins\">\n                    <aside class=\"col-2 profile\">\n                        <img class=\"profile_picture\" routerLink=\"['/profile', question.username]\" [attr.src]=\"getProfilePicture(question.username)\" alt=\"Profile picture\">\n                    </aside>\n                    <div class=\"col-10 title\">\n                        <span class=\"name\" [routerLink]=\"['/profile',question.username]\">{{ question.username }}</span><span class=\"asking\">is asking:</span>\n                        <h1>{{ question.topic }}</h1>\n                    </div>\n                </div>\n            </header>\n            <article class=\"col-6 col-sm-4 col-lg-9 activity no-padding\">\n                <div class=\"row gutter-10\">\n                    <section class=\"col-sm-4 col-lg-2 hidden-sm-down profile\">\n                        <p>Asked</p>\n                    </section>\n                    <section class=\"col-6 col-sm-4 col-lg-2 activities\" *ngIf=\"question.conversations !== 0\">\n                        <span class=\"number\">3</span>\n                        <p class=\" cursive\">more activities</p>\n                    </section>\n                    <section class=\"col-lg-2 hidden-md-down\">\n                        <img class=\"profile_picture\" src=\"../assets/images/profile.png\" alt=\"Profile picture\">\n                        <p class=\"commented\">Commented</p>\n                    </section>\n                    <section class=\"col-lg-2 hidden-md-down\">\n                        <img class=\"profile_picture\" src=\"../assets/images/profile.png\" alt=\"Profile picture\">\n                        <p class=\"commented\">Commented</p>\n                    </section>\n                    <section class=\"col-lg-2 hidden-md-down\">\n                        <img class=\"profile_picture\" src=\"../assets/images/profile.png\" alt=\"Profile picture\">\n                        <p class=\"commented\">Commented</p>\n                    </section>\n                    <section class=\"col-6 col-sm-4 col-lg-2\">\n                        <img class=\"profile_picture\" src=\"../assets/images/profile.png\" alt=\"Profile picture\">\n                        <p class=\"answered\">Answered</p>\n                    </section>\n                </div>\n            </article>\n            <aside class=\"col-6 col-sm-4 col-lg-3 info\">\n                <ul>\n                    <li>\n                        <p><span class=\"number\">{{ question.related_disc }}</span><span class=\"cursive\">related discussion</span></p>\n                    </li>\n                    <li>\n                        <p><span class=\"number\">6</span><span class=\"cursive\">peers involved</span></p>\n                    </li>\n                    <li>\n                        <p><span class=\"number\">3</span><span class=\"cursive\">conversations</span></p>\n                    </li>\n                </ul>\n            </aside>\n        </div>\n        <footer>\n            <p>load more questions</p>\n        </footer>\n    </main>\n</div>"

/***/ }),

/***/ "../../../../../src/app/all-questions/all-questions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header#header {\n  box-shadow: 0 -3px 8px 0px rgba(222, 222, 222, 0.5);\n  width: 100%;\n  position: relative; }\n  header#header .container-fluid {\n    height: inherit; }\n  header#header #back_btn {\n    border: 1px #7d8b98 solid;\n    cursor: pointer;\n    width: 45px;\n    height: 45px;\n    position: absolute;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-left-radius: 50%;\n    left: 4vw; }\n    header#header #back_btn .arrow-top,\n    header#header #back_btn .arrow-bottom {\n      height: 22px;\n      width: 22px;\n      border-top: 1px solid #7d8b98;\n      position: absolute;\n      top: 19px;\n      -webkit-transform-origin: 0px;\n              transform-origin: 0px; }\n    header#header #back_btn .arrow-top {\n      -webkit-transform: rotate(-35deg);\n              transform: rotate(-35deg);\n      left: 17px; }\n    header#header #back_btn .arrow-bottom {\n      -webkit-transform: rotate(35deg);\n              transform: rotate(35deg);\n      left: 5px; }\n  header#header h1 {\n    color: black;\n    text-transform: uppercase;\n    font-weight: bold;\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    display: inline-block; }\n  header#header #choice {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    font-weight: bold;\n    font-size: 1.1em; }\n    header#header #choice div:nth-of-type(2) {\n      padding: 0 0 0 25px; }\n    header#header #choice input[type=radio] {\n      width: 1.1em;\n      height: 1.1em;\n      vertical-align: middle;\n      margin: 0px; }\n    header#header #choice label {\n      padding-left: 5px; }\n  header#header #sort {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding-bottom: 0.5rem; }\n    header#header #sort a {\n      font-weight: bold;\n      padding: 0 10px; }\n      header#header #sort a:link, header#header #sort a:visited {\n        color: #0266b3; }\n      header#header #sort a:active {\n        color: #7d8b98;\n        text-decoration: underline; }\n  header#header #add_question {\n    margin-left: 45px;\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    cursor: pointer;\n    text-align: center;\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    color: white;\n    background: #0266b3;\n    font-size: 24px;\n    line-height: 24px;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-left-radius: 50%; }\n  header#header form {\n    padding: 20px 0; }\n    header#header form input {\n      border: 1px solid rgba(222, 222, 222, 0.5);\n      padding: 10px 15px;\n      background: #fbfbfb; }\n    header#header form div {\n      padding: 0 0 0 20px; }\n    header#header form button {\n      width: 100%;\n      height: 100%;\n      box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      -webkit-box-sizing: border-box;\n      background: white;\n      color: #7d8b98;\n      border: 1px solid;\n      font-size: 1.1em;\n      text-transform: uppercase;\n      font-weight: bold;\n      cursor: pointer; }\n\nmain {\n  background-clip: content-box;\n  background: #fbfbfb; }\n  main .question {\n    box-shadow: 3px 0 8px -2px rgba(222, 222, 222, 0.5);\n    position: relative;\n    border-bottom: 1px solid rgba(222, 222, 222, 0.5); }\n  main header {\n    background: #e5f5fd; }\n    main header .profile_picture {\n      position: relative;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n      transform: translateX(-50%); }\n      main header .profile_picture img {\n        cursor: pointer; }\n    main header h1 {\n      margin: 10px 0;\n      font-size: 1.8em;\n      color: #0266b3;\n      font-family: \"Indie Flower\", cursive;\n      font-weight: bold; }\n    main header .title,\n    main header .profile {\n      padding-bottom: 30px;\n      padding-top: 20px; }\n    main header span.name {\n      margin: 0 10px 0 0;\n      font-weight: bold;\n      color: #0266b3;\n      font-size: 1.25em;\n      cursor: pointer; }\n    main header span.asking {\n      color: #7d8b98;\n      text-transform: uppercase;\n      font-size: 0.9em; }\n  main .profile_picture {\n    height: 60px;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-left-radius: 50%;\n    cursor: pointer; }\n  main .activity section {\n    background: rgba(222, 222, 222, 0.5);\n    background-clip: content-box;\n    height: 180px; }\n    main .activity section:not(.profile) {\n      margin: 40px 0 50px 0; }\n  main .activity .profile {\n    height: inherit;\n    background: #e5f5fd;\n    background-clip: content-box;\n    margin-bottom: 50px; }\n  main .activity .activities {\n    background: initial; }\n    main .activity .activities:after {\n      color: #7d8b98; }\n    main .activity .activities .number {\n      top: 40px;\n      position: absolute;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n      transform: translateX(-50%); }\n  main .activity p {\n    bottom: 0;\n    padding: 10px 0;\n    text-align: center;\n    width: calc(100% - 40px); }\n  main .activity .profile > p,\n  main .activity .commented,\n  main .activity .answered {\n    border-top: 1px solid #7d8b98;\n    text-transform: uppercase;\n    font-size: 0.9em;\n    color: #7d8b98; }\n  main .activity .commented:after,\n  main .activity .answered:after,\n  main .activity .activities:after {\n    content: \"\\26AB\";\n    bottom: -20px;\n    font-size: 25px;\n    display: block;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%); }\n  main .activity .answered {\n    border-top-color: black; }\n    main .activity .answered:after {\n      color: black; }\n  main .activity p,\n  main .activity img {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%); }\n  main .activity img {\n    margin: 20px 0 0 0; }\n  main .info {\n    padding: 20px 0 30px 0; }\n    main .info ul {\n      list-style-type: none;\n      margin: 0px auto 0px auto;\n      padding: 0;\n      display: table;\n      height: 100%; }\n    main .info li {\n      display: table-row;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      top: 0;\n      margin: auto; }\n    main .info p {\n      display: table-cell;\n      vertical-align: middle; }\n  main footer {\n    color: #dc173f;\n    font-weight: bold;\n    padding: 40px 0 40px 20px; }\n    main footer p {\n      cursor: pointer; }\n\n@media only screen and (min-device-width: 992px) {\n  #wrapper {\n    background: #ffe1ad; }\n  #header {\n    padding: 50px 40px 0; }\n    #header .container-fluid {\n      padding: 0 200px; }\n  main {\n    padding: 0 200px 100px;\n    margin-left: 40px;\n    margin-right: 40px; } }\n\n@media only screen and (max-device-width: 991px) {\n  #header .container-fluid {\n    padding: 50px 0 0; }\n  #header #add_question {\n    right: 4vw; }\n  main {\n    padding: 0 0 100px; }\n    main footer {\n      position: absolute;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n      transform: translateX(-50%); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-questions/all-questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_questions_service__ = __webpack_require__("../../../../../src/app/_services/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profiles_service__ = __webpack_require__("../../../../../src/app/_services/profiles.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllQuestionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllQuestionsComponent = (function () {
    function AllQuestionsComponent(questionsService, profilesService) {
        this.questionsService = questionsService;
        this.profilesService = profilesService;
        this.questions = [];
        this.profiles = [];
    }
    AllQuestionsComponent.prototype.ngOnInit = function () {
        this.questions = this.questionsService.questions;
        this.profiles = this.profilesService.profiles;
    };
    AllQuestionsComponent.prototype.getProfilePicture = function (username) {
        for (var i = 0; i < this.profiles.length; i++) {
            if (this.profiles[i].username === username)
                return this.profiles[i].picture;
        }
    };
    AllQuestionsComponent.prototype.getNumberOfPeers = function (id) {
        return this.questions
            .reduce(function (res, item) {
            return Object
                .assign(res, (_a = {},
                _a[item['username']] = 1 + (res[item['username']] || 0),
                _a));
            var _a;
        }, Object.create(null));
    };
    return AllQuestionsComponent;
}());
AllQuestionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-all-questions',
        template: __webpack_require__("../../../../../src/app/all-questions/all-questions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/all-questions/all-questions.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_questions_service__["a" /* QuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_questions_service__["a" /* QuestionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_profiles_service__["a" /* ProfilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_profiles_service__["a" /* ProfilesService */]) === "function" && _b || Object])
], AllQuestionsComponent);

var _a, _b;
//# sourceMappingURL=all-questions.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_question_single_question_component__ = __webpack_require__("../../../../../src/app/single-question/single-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_questions_all_questions_component__ = __webpack_require__("../../../../../src/app/all-questions/all-questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routerConfig = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__all_questions_all_questions_component__["a" /* AllQuestionsComponent */]
    },
    {
        path: 'question/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__single_question_single_question_component__["a" /* SingleQuestionComponent */]
    },
    {
        path: 'profile/:username',
        component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routerConfig)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__single_question_single_question_component__ = __webpack_require__("../../../../../src/app/single-question/single-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__all_questions_all_questions_component__ = __webpack_require__("../../../../../src/app/all-questions/all-questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_questions_service__ = __webpack_require__("../../../../../src/app/_services/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_profiles_service__ = __webpack_require__("../../../../../src/app/_services/profiles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_pipes_module__ = __webpack_require__("../../../../../src/app/_pipes/pipes.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_4__single_question_single_question_component__["a" /* SingleQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_5__all_questions_all_questions_component__["a" /* AllQuestionsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__pipes_pipes_module__["a" /* PipesModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_questions_service__["a" /* QuestionsService */], __WEBPACK_IMPORTED_MODULE_7__services_profiles_service__["a" /* ProfilesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"profile\">\n    <span id=\"close\">&times;</span>\n    <header id=\"header\" class=\"row no-gutters\">\n        <div id=\"profile_picture\" class=\"col-12\">\n            <img [attr.src]=\"profile.picture\" alt=\"Profile picture\" />\n        </div>\n        <h1 id=\"nickname\" class=\"col-12\">{{ profile.username }}</h1>\n        <div class=\"col-12 col-md-4\" id=\"member_for\"><span class=\"profile_info\">Member for</span>5 months</div>\n        <div class=\"col-12 col-md-4\" id=\"last_seen\"><span class=\"profile_info\">Last seen</span>Saturday afternoon</div>\n        <div class=\"col-12 col-md-4\" id=\"activity\"><span class=\"profile_info\">Activity level</span><span><i></i><i></i><i></i></span></div>\n    </header>\n    <div class=\"row carousel no-margins\">\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n            <!-- Wrapper for carousel items -->\n            <div class=\"carousel-inner\">\n                <div class=\"item\">\n                    <div class=\"col-12\">\n                        <p>How it all started</p>\n                    </div>\n                </div>\n            </div>\n            <!-- Carousel controls -->\n            <a href=\"#myCarousel\" data-slide=\"prev\">\n                <span class=\"carousel-prev\">&#x3C;</span>\n            </a>\n            <a href=\"#myCarousel\" data-slide=\"next\">\n                <span class=\"carousel-next\">&#x3E;</span>\n            </a>\n        </div>\n    </div>\n    <main>\n        <span class=\"info\">That's where we have been these 5 months ago</span>\n        <div id=\"card-wrapper\">\n            <div class=\"card-mobile\">\n                <div id=\"card-1\">\n                    <p>46</p>\n                    <p>peers</p>\n                    <div class=\"card-bg\">\n                    </div>\n                </div>\n                <div id=\"card-2\">\n                    <p>29</p>\n                    <p>discussions</p>\n                    <div class=\"card-bg\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-mobile\">\n                <div id=\"card-3\">\n                    <p>19</p>\n                    <p>findings</p>\n                    <div class=\"card-bg\">\n                    </div>\n                </div>\n                <div id=\"card-4\">\n                    <p>10</p>\n                    <p>questions</p>\n                    <div class=\"card-bg\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class=\"info\">Who joined the platform that same period</span>\n        <div id=\"profiles\">\n            <div class=\"min_profile\">\n                <div class=\"min_picture\">\n                    <img src=\"../assets/images/profile.png\" alt=\"S.E.N. Waweru profile\" />\n                </div>\n                <p class=\"min_nickname\">S.E.N. Waweru</p>\n            </div>\n            <div class=\"min_profile\">\n                <div class=\"min_picture\">\n                    <img src=\"../assets/images/profile.png\" alt=\"Patricia profile\" />\n                </div>\n                <p class=\"min_nickname\">Patricia</p>\n            </div>\n            <div class=\"min_profile\">\n                <div class=\"min_picture\">\n                    <img src=\"../assets/images/profile.png\" alt=\"Joseph Aluoch profile\" />\n                </div>\n                <p class=\"min_nickname\">Joseph Aluoch</p>\n            </div>\n        </div>\n        <span class=\"info\">The hottest discussion these days</span>\n    </main>\n</div>\n<footer class=\"container\">\n    <img id=\"profile_img\" src=\"../assets/images/profile.png\" alt=\"Andrew profile\" />\n    <p id=\"hot_disc\"><span>Andrew</span>Found The Guardian article</p>\n    <p id=\"hot_topic\">Vegan diet to stop diabetes progress</p>\n    <div id=\"post_info\" class=\"col-11 col-md-10 col-lg-9\">\n        <div class=\" row no-gutters \">\n            <div>\n                <p class=\"col-6 col-md-3 \"><span class=\"number \">6</span><span class=\"cursive \">peers involved</span></p>\n                <p class=\"col-6 col-md-3 \"><span class=\"number \">3</span><span class=\"cursive \">related discussions</span></p>\n            </div>\n            <div>\n                <p class=\"col-6 col-md-3 \"><span class=\"number \">3</span><span class=\"cursive \">conversations</span></p>\n                <p class=\"col-6 col-md-3 \"><span class=\"number \">19</span><span class=\"cursive \">upvotes</span></p>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding-left: 0;\n  padding-right: 0;\n  text-align: center; }\n  .container #close {\n    position: absolute;\n    font-size: 2em;\n    color: #7d8b98;\n    top: 5px;\n    right: 15px;\n    cursor: pointer; }\n  .container #header {\n    border-bottom: 1px solid #7d8b98; }\n    .container #header #profile_picture {\n      text-align: left; }\n      .container #header #profile_picture img {\n        position: relative;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n        transform: translateX(-50%);\n        height: 85px;\n        border-top-left-radius: 50%;\n        border-top-right-radius: 50%;\n        border-bottom-right-radius: 50%;\n        border-top-right-radius: 50%;\n        border-bottom-left-radius: 50%;\n        border-bottom-right-radius: 50%;\n        border-bottom-left-radius: 50%;\n        border-top-left-radius: 50%; }\n    .container #header #nickname {\n      margin: 15px 0;\n      color: #0266b3;\n      font-size: 1.3em;\n      font-weight: bold; }\n    .container #header #activity i:before {\n      content: \"\";\n      width: 23px;\n      height: 25px;\n      background: url(\"/assets/images/ribbon.png\") -23px 0 no-repeat;\n      display: inline-block; }\n    .container #header .profile_info {\n      color: #7d8b98;\n      text-transform: uppercase; }\n  .container #myCarousel {\n    padding: 20px 0 0 0;\n    width: 100%;\n    position: relative;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%); }\n    .container #myCarousel .carousel-prev,\n    .container #myCarousel .carousel-next {\n      cursor: pointer;\n      top: 50%;\n      margin-top: -15px;\n      cursor: pointer;\n      text-align: center;\n      position: absolute;\n      width: 30px;\n      height: 30px;\n      color: #FFF;\n      background: #0266b3;\n      font-size: 30px;\n      line-height: 30px;\n      border-top-left-radius: 50%;\n      border-top-right-radius: 50%;\n      border-bottom-right-radius: 50%;\n      border-top-right-radius: 50%;\n      border-bottom-left-radius: 50%;\n      border-bottom-right-radius: 50%;\n      border-bottom-left-radius: 50%;\n      border-top-left-radius: 50%;\n      transition: 0.6s ease; }\n    .container #myCarousel .carousel-next {\n      right: 0; }\n    .container #myCarousel .carousel-prev {\n      left: 0; }\n    .container #myCarousel .carousel-prev:hover,\n    .container #myCarousel .carousel-next:hover {\n      background: rgba(37, 170, 225, 0.8);\n      color: #FFFFFF; }\n    .container #myCarousel .item {\n      font-size: 3em;\n      font-family: \"Indie Flower\", cursive; }\n  .container main .info {\n    display: block;\n    color: #7d8b98;\n    text-transform: uppercase; }\n  .container main .info + div {\n    padding: 20px 0 0 0; }\n  .container main #card-wrapper .card-bg {\n    background: #e5f5fd;\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    height: inherit;\n    width: inherit; }\n  .container main #card-wrapper [id^=card-] {\n    padding: 8px 0 0 0;\n    height: 105px;\n    width: 105px;\n    float: none;\n    margin: 0 10px;\n    display: inline-block;\n    position: relative; }\n  .container main #card-wrapper #card-1 .card-bg,\n  .container main #card-wrapper #card-3 div {\n    -webkit-transform: rotate(-35deg);\n            transform: rotate(-35deg); }\n  .container main #card-wrapper #card-2 div {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg); }\n  .container main #card-wrapper #card-4 div {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg); }\n  .container main #card-wrapper p:first-of-type {\n    font-size: 1.5em;\n    font-weight: bold; }\n  .container main #card-wrapper p:nth-of-type(2) {\n    font-family: \"Indie Flower\", cursive; }\n  .container main #profiles {\n    display: table;\n    margin: 0 auto 35px auto; }\n  .container main .min_profile {\n    padding: 0 5px;\n    display: table-cell; }\n    .container main .min_profile .min_picture {\n      width: 105px;\n      height: 105px;\n      background: repeating-linear-gradient(45deg, rgba(222, 222, 222, 0.5), rgba(222, 222, 222, 0.5) 1px, #FFF 1px, #FFF 3px); }\n      .container main .min_profile .min_picture img {\n        height: 60px;\n        border-top-left-radius: 50%;\n        border-top-right-radius: 50%;\n        border-bottom-right-radius: 50%;\n        border-top-right-radius: 50%;\n        border-bottom-left-radius: 50%;\n        border-bottom-right-radius: 50%;\n        border-bottom-left-radius: 50%;\n        border-top-left-radius: 50%;\n        position: relative;\n        top: 50%;\n        -webkit-transform: translateY(-50%);\n        transform: translateY(-50%); }\n    .container main .min_profile .min_nickname {\n      padding: 0 10px;\n      width: 90px;\n      display: inline-block;\n      font-weight: bold;\n      font-size: 1.1em;\n      color: #0266b3; }\n\nfooter {\n  margin: 50px 0 0 0;\n  padding: 0 0 20px 0;\n  background: repeating-linear-gradient(45deg, rgba(222, 222, 222, 0.5), rgba(222, 222, 222, 0.5) 1px, #FFF 1px, #FFF 3px);\n  width: 100%;\n  height: auto;\n  position: relative; }\n  footer #profile_img {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    height: 60px;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-left-radius: 50%;\n    top: -30px; }\n  footer #hot_disc {\n    text-transform: uppercase;\n    position: relative;\n    font-size: 1em;\n    padding-top: 50px;\n    color: #7d8b98; }\n    footer #hot_disc span {\n      text-transform: initial;\n      font-size: 1.25em;\n      font-weight: bold;\n      padding: 0 10px 0 0;\n      color: #0266b3;\n      font-family: \"Indie Flower\", cursive; }\n  footer #hot_topic {\n    padding: 0 0 25px 0;\n    font-size: 1.5em;\n    color: #0266b3;\n    font-family: \"Indie Flower\", cursive;\n    font-weight: bold; }\n  footer #post_info {\n    position: relative;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%); }\n\n@media only screen and (min-device-width: 992px) {\n  div.container {\n    padding: 10px 125px 20px 125px; }\n  footer {\n    margin-bottom: 25px; } }\n\n@media only screen and (min-device-width: 768px) {\n  div.container {\n    padding: 10px 35px 20px 35px; }\n  #member_for {\n    text-align: left; }\n  #activity {\n    text-align: right; }\n  .profile_info {\n    padding: 0 10px 0 0; }\n  .card-mobile {\n    display: inline-block; }\n  #card-wrapper {\n    margin: 30px 0 80px 0; }\n  footer .row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    footer .row div {\n      display: inline-block; }\n      footer .row div p {\n        display: initial; }\n      footer .row div span {\n        display: initial; } }\n\n@media only screen and (max-device-width: 767px) {\n  div.container {\n    padding: 10px 10px 20px 10px; }\n  footer .row p {\n    text-align: left; }\n  #activity,\n  #member_for,\n  #last_seen {\n    text-align: center;\n    margin-bottom: 20px; }\n    #activity span,\n    #member_for span,\n    #last_seen span {\n      display: block; }\n  #card-wrapper {\n    margin: 30px 0 50px 0; }\n  .card-mobile {\n    display: block; }\n  footer .row div {\n    display: table;\n    margin: 0 auto; }\n    footer .row div p {\n      display: table-row; }\n    footer .row div span {\n      display: table-cell; }\n      footer .row div span:first-of-type {\n        text-align: right; }\n      footer .row div span:last-of-type {\n        font-size: 1em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profiles_service__ = __webpack_require__("../../../../../src/app/_services/profiles.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(profilesService, route) {
        this.profilesService = profilesService;
        this.route = route;
        this.profile = [];
        this.profiles = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profiles = this.profilesService.profiles;
        this._route = this.route.params.subscribe(function (params) {
            _this.username = params['username'];
            _this.profile = _this.profiles.filter(function (profile) {
                if (profile.username === _this.username) {
                    return profile;
                }
            });
            _this.profile = _this.profile[0];
        });
        console.log(this.profile);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_profiles_service__["a" /* ProfilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_profiles_service__["a" /* ProfilesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/single-question/single-question.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <span id=\"back_btn\" routerLink=\"/\"><i class=\"arrow-top\"></i><i class=\"arrow-bottom\"></i></span>\n            <div class=\"col-10 offset-2 col-md-6 offset-lg-0\">\n                <h1>Question</h1>\n                <span id=\"add_question\">+</span>\n            </div>\n            <div id=\"last_discussed\" class=\"col-6 col-md-4 col-lg-6 hidden-sm-down\">\n                <p><span class=\"cursive\">Last time discussed</span><span class=\"number\">{{ getLastActivityDate(id) }}</span><span class=\"cursive\">day ago</span></p>\n            </div>\n        </div>\n    </div>\n</header>\n<div id=\"wrapper\">\n    <main class=\"container-fluid\" *ngIf=\"question\">\n        <div id=\"question\" class=\"row no-gutters\">\n            <div class=\"col-12 col-md-9\">\n                <header class=\"col-12 no-padding\">\n                    <div class=\"row no-margins\">\n                        <aside class=\"col-2 profile\">\n                            <img class=\"profile_picture\" [routerLink]=\"['/profile',question.username]\" [attr.src]=\"getProfilePicture(question.username)\" alt=\"Profile picture\">\n                        </aside>\n                        <div class=\"col-10 title\">\n                            <span class=\"name\" [routerLink]=\"['/profile',question.username]\">{{ question.username }}</span><span class=\"asking\">is asking:</span>\n                        </div>\n                        <aside class=\"col-2 hidden-sm-down\">\n                        </aside>\n                        <div class=\"col-12 col-md-10 topic\">\n                            <h1>{{ question.topic }}</h1>\n                        </div>\n                    </div>\n                </header>\n                <article class=\"col-12 no-padding\">\n                    <div class=\"row gutter-10\">\n                        <section class=\"col-2 hidden-sm-down space\"></section>\n                        <section class=\"col-12 col-md-10 content\">\n                            <p>\n                                {{ question.content }}\n                            </p>\n                        </section>\n                    </div>\n                </article>\n            </div>\n            <aside class=\"col-12 col-md-3 info\">\n                <div class=\"row no-margins\">\n                    <div id=\"follow\" class=\"col-6 col-md-12\">\n                        <span>unfollow</span>\n                    </div>\n                    <div class=\"col-6 col-md-12 votes\">\n                        <div class=\"upvotes\"><span class=\"number\" [innerHTML]=\"toNaturalNumber(question.votes)\"></span><span class=\"cursive\" [innerHTML]=\"ifUpvotes(question.votes)\"></span>\n                            <div class=\"arrows\">\n                                <i class=\"arrow-up\"></i><i class=\"arrow-down\"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </aside>\n            <button id=\"answer_question\" class=\"button\">GIVE new answer</button>\n        </div>\n        <div id=\"answer_num\">\n            <span class=\"number\">{{ question.answers.length }}</span><span class=\"cursive\">peers already answered <span id=\"name\">{{ question.username }}</span></span>\n        </div>\n        <div *ngFor=\"let answer of question.answers\">\n            <div class=\"answer row no-gutters\">\n                <div class=\"col-12 col-md-9\">\n                    <header class=\"col-12 no-padding\">\n                        <div class=\"row no-margins\">\n                            <aside class=\"col-2 profile\">\n                                <img class=\"profile_picture\" [routerLink]=\"['/profile',question.username]\" [attr.src]=\"getProfilePicture(question.username)\" alt=\"Profile picture\">\n                            </aside>\n                            <div class=\"col-10 title\">\n                                <p><span class=\"name\" [routerLink]=\"['/profile',question.username]\">{{ answer.username }}</span><span class=\"asking\">commented it</span><span class=\"answer_date cursive\">{{ answer.date | dayDifference }}</span></p>\n                            </div>\n                        </div>\n                    </header>\n                    <article class=\"col-12 no-padding\">\n                        <div class=\"row no-margins\">\n                            <section class=\"col-2 hidden-sm-down space\"></section>\n                            <section class=\"col-12 col-md-10 content\">\n                                <p>\n                                    {{ answer.content }}\n                                </p>\n                            </section>\n                        </div>\n                    </article>\n                </div>\n                <aside class=\"col-12 col-md-3 info\">\n                    <div class=\"row\">\n                        <div class=\"col-12 votes\">\n                            <div class=\"upvotes\"><span class=\"number\" [innerHTML]=\"toNaturalNumber(answer.votes)\"></span><span class=\"cursive\" [innerHTML]=\"ifUpvotes(answer.votes)\"></span>\n                                <div class=\"arrows\">\n                                    <i class=\"arrow-up\"></i><i class=\"arrow-down\"></i>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </aside>\n                <button id=\"answer_question\" class=\"button\" *ngIf=\"answer.comments === undefined\">COMMENT</button> </div>\n            <div class=\"comment row no-gutters\" *ngFor=\"let comment of answer.comments; let isLast = last\">\n                <div class=\"col-12 col-md-9\">\n                    <header class=\"col-12 no-padding\">\n                        <div class=\"row no-margins\">\n                            <aside class=\"col-2 profile\">\n                                <img class=\"profile_picture\" [routerLink]=\"['/profile',question.username]\" [attr.src]=\"getProfilePicture(question.username)\" alt=\"Profile picture\">\n                            </aside>\n                            <div class=\"col-10 title\">\n                                <p><span class=\"name\" [routerLink]=\"['/profile',question.username]\">{{ comment.username }}</span><span class=\"asking\">commented it</span><span class=\"answer_date cursive\">{{ comment.date | dayDifference }}</span></p>\n                            </div>\n                        </div>\n                    </header>\n                    <article class=\"col-12 no-padding\">\n                        <div class=\"row no-margins\">\n                            <section class=\"col-2 hidden-sm-down space\"></section>\n                            <section class=\"col-12 col-md-10 content\">\n                                <p>\n                                    {{ comment.content }}\n                                </p>\n                            </section>\n                        </div>\n                    </article>\n                </div>\n                <aside class=\"col-12 col-md-3 info\">\n                    <div class=\"row\">\n                        <div class=\"col-12 votes\">\n                            <div class=\"upvotes\"><span class=\"number\" [innerHTML]=\"toNaturalNumber(comment.votes)\"></span><span class=\"cursive\" [innerHTML]=\"ifUpvotes(comment.votes)\"></span>\n                                <div class=\"arrows\">\n                                    <i class=\"arrow-up\"></i><i class=\"arrow-down\"></i>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </aside>\n                <button id=\"answer_question\" class=\"button\" *ngIf=\"isLast\">CONTINUE discussion</button>\n            </div>\n        </div>\n    </main>\n</div>"

/***/ }),

/***/ "../../../../../src/app/single-question/single-question.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header#header {\n  box-shadow: 0 -3px 8px 0px rgba(222, 222, 222, 0.5);\n  width: 100%;\n  position: relative; }\n  header#header .container-fluid {\n    height: inherit; }\n  header#header #back_btn {\n    border: 1px #7d8b98 solid;\n    cursor: pointer;\n    width: 45px;\n    height: 45px;\n    position: absolute;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-left-radius: 50%;\n    left: 4vw; }\n    header#header #back_btn .arrow-top,\n    header#header #back_btn .arrow-bottom {\n      height: 22px;\n      width: 22px;\n      border-top: 1px solid #7d8b98;\n      position: absolute;\n      top: 19px;\n      -webkit-transform-origin: 0px;\n              transform-origin: 0px; }\n    header#header #back_btn .arrow-top {\n      -webkit-transform: rotate(-35deg);\n              transform: rotate(-35deg);\n      left: 17px; }\n    header#header #back_btn .arrow-bottom {\n      -webkit-transform: rotate(35deg);\n              transform: rotate(35deg);\n      left: 5px; }\n  header#header h1 {\n    color: black;\n    text-transform: uppercase;\n    font-weight: bold;\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    display: inline-block; }\n  header#header #add_question {\n    margin-left: 45px;\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    cursor: pointer;\n    text-align: center;\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    color: white;\n    background: #0266b3;\n    font-size: 24px;\n    line-height: 24px;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-left-radius: 50%; }\n  header#header #last_discussed > p {\n    position: absolute;\n    bottom: 0;\n    right: 15px; }\n\nmain {\n  background-clip: content-box;\n  background: #fbfbfb; }\n  main #question {\n    box-shadow: 3px 0 8px -2px rgba(222, 222, 222, 0.5);\n    position: relative; }\n    main #question header {\n      background: #e5f5fd; }\n      main #question header .profile_picture {\n        position: relative;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n        transform: translateX(-50%); }\n      main #question header h1 {\n        font-size: 1.7em;\n        color: #0266b3;\n        font-family: \"Indie Flower\", cursive;\n        font-weight: bold; }\n      main #question header .title {\n        padding-top: 20px; }\n      main #question header img {\n        top: 20px; }\n    main #question .content {\n      padding: 30px 20px 40px; }\n    main #question .space {\n      background: #e5f5fd;\n      background-clip: content-box; }\n  main #question,\n  main .answer,\n  main .comment {\n    position: relative; }\n  main .answer {\n    margin-top: 50px; }\n  main .answer,\n  main .comment {\n    box-shadow: 3px 1px 8px 0px rgba(222, 222, 222, 0.5); }\n    main .answer .space,\n    main .comment .space {\n      border-right: 1px solid rgba(222, 222, 222, 0.5); }\n    main .answer .upvotes,\n    main .comment .upvotes {\n      top: 15px; }\n    main .answer .asking:after,\n    main .comment .asking:after {\n      content: \"\\2022\";\n      padding: 0 10px; }\n    main .answer aside,\n    main .answer .title,\n    main .comment aside,\n    main .comment .title {\n      padding-top: 20px; }\n    main .answer .content,\n    main .comment .content {\n      padding-top: 20px;\n      padding-bottom: 40px; }\n  main .comment {\n    border-top: 1px solid rgba(222, 222, 222, 0.5); }\n    main .comment button {\n      margin-left: calc(-100% / 14); }\n  main .profile_picture {\n    position: relative;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    height: 60px;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-left-radius: 50%; }\n  main header,\n  main article {\n    padding-left: 25px; }\n  main span.name {\n    margin: 0 10px 0 0;\n    font-weight: bold;\n    color: #0266b3;\n    font-size: 1.25em;\n    cursor: pointer; }\n  main span.asking {\n    color: #7d8b98;\n    text-transform: uppercase;\n    font-size: 0.9em; }\n  main .profile_picture {\n    height: 60px;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-top-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-bottom-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-top-left-radius: 50%; }\n  main .profile img {\n    position: absolute;\n    cursor: pointer; }\n  main .votes {\n    text-align: right; }\n    main .votes .upvotes {\n      position: relative; }\n      main .votes .upvotes .arrows {\n        padding: 0 0 0 25px;\n        display: inline-block; }\n        main .votes .upvotes .arrows .arrow-up,\n        main .votes .upvotes .arrows .arrow-down {\n          position: absolute;\n          cursor: pointer; }\n        main .votes .upvotes .arrows .arrow-up {\n          top: -1em; }\n  main #follow span {\n    font-weight: bold;\n    font-size: 1.1em;\n    color: #0266b3; }\n  main button {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    bottom: -23px;\n    background: white;\n    border: 1px solid rgba(222, 222, 222, 0.5);\n    font-size: 1.1em;\n    font-weight: bold;\n    padding: 5px 0;\n    width: 190px;\n    cursor: pointer; }\n  main #answer_num {\n    font-size: 1.1em;\n    font-weight: bold;\n    text-align: center;\n    margin-top: 80px;\n    margin-bottom: -30px; }\n  main .arrow-up {\n    width: 0;\n    height: 0;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-bottom: 14px solid #0266b3; }\n  main .arrow-down {\n    width: 0;\n    height: 0;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-top: 14px solid #0266b3; }\n\n@media only screen and (min-device-width: 992px) {\n  #wrapper {\n    background: #ffe1ad; }\n  #header {\n    padding: 50px 40px; }\n    #header .container-fluid {\n      padding: 0 200px; }\n  main {\n    padding: 0 200px 100px;\n    margin-left: 40px;\n    margin-right: 40px; }\n    main .votes {\n      padding: 0 4vw 0 0;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      transform: translateY(-50%); }\n    main #follow {\n      background: #e5f5fd;\n      padding: 0 4vw 0 0; }\n    main h1 {\n      padding-bottom: 30px; }\n    main .comment .profile,\n    main .answer .profile {\n      border-right: 1px solid rgba(222, 222, 222, 0.5); }\n      main .comment .profile img,\n      main .answer .profile img {\n        top: 20px; }\n    main .comment {\n      margin-left: calc(100% / 12 * 3 / 2); } }\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 991px) {\n  #header {\n    padding: 50px 0 50px 0; }\n  main {\n    padding: 0 0 100px; }\n    main footer {\n      position: absolute;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n      transform: translateX(-50%); }\n    main .votes {\n      padding: 0 4vw 0 0;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      transform: translateY(-50%); }\n    main #follow {\n      background: #e5f5fd;\n      padding: 0 4vw 0 0; }\n    main h1 {\n      padding-bottom: 30px; }\n    main .comment .profile,\n    main .answer .profile {\n      border-right: 1px solid rgba(222, 222, 222, 0.5); }\n      main .comment .profile img,\n      main .answer .profile img {\n        top: 20px; }\n    main .comment {\n      margin-left: calc(100% / 12 * 3 / 2); } }\n\n@media only screen and (max-device-width: 767px) {\n  #header {\n    padding: 15px 0; }\n    #header #last_discussed {\n      right: 4vw; }\n  #add_question {\n    right: 4vw; }\n  main {\n    padding: 0 0 100px; }\n    main .topic {\n      border-top: 1px solid white;\n      margin-top: 20px; }\n      main .topic h1 {\n        padding-top: 5px;\n        padding-bottom: 0; }\n    main .info {\n      padding-bottom: 30px; }\n    main #follow {\n      background: white;\n      padding-left: 30px; }\n    main .votes {\n      padding-right: 45px;\n      position: relative;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      transform: translateY(-50%); }\n    main .profile_picture {\n      height: 40px;\n      border-top-left-radius: 50%;\n      border-top-right-radius: 50%;\n      border-bottom-right-radius: 50%;\n      border-top-right-radius: 50%;\n      border-bottom-left-radius: 50%;\n      border-bottom-right-radius: 50%;\n      border-bottom-left-radius: 50%;\n      border-top-left-radius: 50%; }\n    main .comment .profile,\n    main .comment .title,\n    main .answer .profile,\n    main .answer .title {\n      padding-bottom: 3px;\n      border-bottom: 1px solid rgba(222, 222, 222, 0.5); }\n    main .comment {\n      border-left: 10px solid rgba(222, 222, 222, 0.5); }\n      main .comment .content {\n        padding-bottom: 0; }\n    main .profile img {\n      top: 5px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/single-question/single-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_questions_service__ = __webpack_require__("../../../../../src/app/_services/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_profiles_service__ = __webpack_require__("../../../../../src/app/_services/profiles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SingleQuestionComponent = (function () {
    function SingleQuestionComponent(questionsService, profilesService, route) {
        this.questionsService = questionsService;
        this.profilesService = profilesService;
        this.route = route;
        this.questions = [];
        this.question = [];
        this.profiles = [];
    }
    SingleQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questions = this.questionsService.questions;
        this.profiles = this.profilesService.profiles;
        this._route = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            //console.log(this.route);
            //console.log(this.id);
            _this.question = _this.questions[_this.id];
            console.log(_this.question);
        });
    };
    SingleQuestionComponent.prototype.ngOnDestroy = function () {
        this._route.unsubscribe();
    };
    SingleQuestionComponent.prototype.ifUpvotes = function (votes) {
        if (votes >= 0)
            return 'upvotes';
        else
            return 'downvotes';
    };
    SingleQuestionComponent.prototype.toNaturalNumber = function (number) {
        return number > 0 ? number : -number;
    };
    SingleQuestionComponent.prototype.getProfilePicture = function (username) {
        for (var i = 0; i < this.profiles.length; i++) {
            if (this.profiles[i].username === username)
                return this.profiles[i].picture;
        }
    };
    SingleQuestionComponent.prototype.getLastActivityDate = function (id) {
        var last = this.questions[id].date;
        console.log(last);
        for (var i = 0, _answers = this.questions[id].answers; i < _answers.length; i++) {
            last = _answers[i].date < last ? _answers[i].date : last;
            if (_answers[i].comments) {
                for (var j = void 0, _comments = _answers[i].comments; j < _comments.length; j++) {
                    last = _comments[j].date < last ? _comments[j].date : last;
                    console.log(last);
                }
            }
        }
        var create = __WEBPACK_IMPORTED_MODULE_4_moment__(this.questions[id].date);
        last = __WEBPACK_IMPORTED_MODULE_4_moment__(last);
        return last.diff(create, 'days') === 0 ? 1 : last.diff(create, 'days');
    };
    return SingleQuestionComponent;
}());
SingleQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-single-question',
        template: __webpack_require__("../../../../../src/app/single-question/single-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/single-question/single-question.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_questions_service__["a" /* QuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_questions_service__["a" /* QuestionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_profiles_service__["a" /* ProfilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_profiles_service__["a" /* ProfilesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], SingleQuestionComponent);

var _a, _b, _c;
//# sourceMappingURL=single-question.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map