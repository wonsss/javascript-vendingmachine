/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Auth.js":
/*!************************!*\
  !*** ./src/ts/Auth.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domains_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domains/validator */ "./src/ts/domains/validator.ts");
/* harmony import */ var _cookie_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie.ts */ "./src/ts/cookie.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




var _isLoggedIn = /*#__PURE__*/new WeakMap();

var _setUserAuth = /*#__PURE__*/new WeakMap();

var _getUserTokenId = /*#__PURE__*/new WeakMap();

var Auth = /*#__PURE__*/function () {
  function Auth() {
    var _this = this;

    _classCallCheck(this, Auth);

    _classPrivateFieldInitSpec(this, _isLoggedIn, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _setUserAuth, {
      writable: true,
      value: function value(userAuth) {
        (0,_cookie_ts__WEBPACK_IMPORTED_MODULE_1__.setCookie)('userAuth', JSON.stringify(userAuth));
      }
    });

    _defineProperty(this, "getUserAuth", function () {
      return (0,_cookie_ts__WEBPACK_IMPORTED_MODULE_1__.getCookie)('userAuth') ? JSON.parse((0,_cookie_ts__WEBPACK_IMPORTED_MODULE_1__.getCookie)('userAuth')) : undefined;
    });

    _classPrivateFieldInitSpec(this, _getUserTokenId, {
      writable: true,
      value: function value() {
        var userAuth = _this.getUserAuth();

        return {
          accessToken: "Bearer ".concat(userAuth.accessToken),
          userUrl: "".concat("https://json-server-marco.herokuapp.com", "/664/users/").concat(userAuth.id)
        };
      }
    });

    _defineProperty(this, "deleteUserAuth", function () {
      _classPrivateFieldSet(_this, _isLoggedIn, false);

      (0,_cookie_ts__WEBPACK_IMPORTED_MODULE_1__.deleteCookie)('userAuth');
    });

    _defineProperty(this, "getUserData", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _classPrivateFieldGet2, accessToken, userUrl, response, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _classPrivateFieldGet2 = _classPrivateFieldGet(_this, _getUserTokenId).call(_this), accessToken = _classPrivateFieldGet2.accessToken, userUrl = _classPrivateFieldGet2.userUrl;
              _context.next = 3;
              return fetch(userUrl, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': accessToken
                }
              });

            case 3:
              response = _context.sent;

              if (response.ok) {
                _context.next = 12;
                break;
              }

              _context.t0 = Error;
              _context.t1 = "API\uC5D0\uB7EC: ";
              _context.next = 9;
              return response.text();

            case 9:
              _context.t2 = _context.sent;
              _context.t3 = _context.t1.concat.call(_context.t1, _context.t2);
              throw new _context.t0(_context.t3);

            case 12:
              _context.next = 14;
              return response.json();

            case 14:
              data = _context.sent;
              return _context.abrupt("return", {
                email: data.email,
                name: data.name
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(this, "checkUserLoginStatus", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var userAuth, accessToken, userUrl, response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userAuth = _this.getUserAuth();

              if (userAuth) {
                _context2.next = 4;
                break;
              }

              _classPrivateFieldSet(_this, _isLoggedIn, false);

              return _context2.abrupt("return");

            case 4:
              accessToken = "Bearer ".concat(userAuth.accessToken);
              userUrl = "".concat("https://json-server-marco.herokuapp.com", "/440/users/").concat(userAuth.id);
              _context2.next = 8;
              return fetch(userUrl, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': accessToken
                }
              });

            case 8:
              response = _context2.sent;

              if (!response.ok) {
                _classPrivateFieldSet(_this, _isLoggedIn, false);
              }

              _classPrivateFieldSet(_this, _isLoggedIn, true);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(this, "signupAuth", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3) {
        var email, name, password, passwordCheck, response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                email = _ref3.email, name = _ref3.name, password = _ref3.password, passwordCheck = _ref3.passwordCheck;

                if (!(0,_domains_validator__WEBPACK_IMPORTED_MODULE_0__.checkValidProfile)(name, password, passwordCheck)) {
                  _context3.next = 14;
                  break;
                }

                _context3.next = 4;
                return fetch("".concat("https://json-server-marco.herokuapp.com", "/signup"), {
                  method: 'POST',
                  body: JSON.stringify({
                    email: email,
                    password: password,
                    name: name
                  }),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });

              case 4:
                response = _context3.sent;

                if (response.ok) {
                  _context3.next = 13;
                  break;
                }

                _context3.t0 = Error;
                _context3.t1 = "API\uC5D0\uB7EC: ";
                _context3.next = 10;
                return response.text();

              case 10:
                _context3.t2 = _context3.sent;
                _context3.t3 = _context3.t1.concat.call(_context3.t1, _context3.t2);
                throw new _context3.t0(_context3.t3);

              case 13:
                return _context3.abrupt("return", true);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(this, "loginAuth", /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref5) {
        var email, password, response, data, userAuth;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                email = _ref5.email, password = _ref5.password;
                _context4.next = 3;
                return fetch("".concat("https://json-server-marco.herokuapp.com", "/login"), {
                  method: 'POST',
                  body: JSON.stringify({
                    email: email,
                    password: password
                  }),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });

              case 3:
                response = _context4.sent;

                if (response.ok) {
                  _context4.next = 12;
                  break;
                }

                _context4.t0 = Error;
                _context4.t1 = "API\uC5D0\uB7EC: ";
                _context4.next = 9;
                return response.text();

              case 9:
                _context4.t2 = _context4.sent;
                _context4.t3 = _context4.t1.concat.call(_context4.t1, _context4.t2);
                throw new _context4.t0(_context4.t3);

              case 12:
                _context4.next = 14;
                return response.json();

              case 14:
                data = _context4.sent;
                userAuth = {
                  accessToken: data.accessToken,
                  id: String(data.user.id)
                };

                _classPrivateFieldGet(_this, _setUserAuth).call(_this, userAuth);

                _classPrivateFieldSet(_this, _isLoggedIn, true);

                return _context4.abrupt("return", true);

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x2) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(this, "editProfileAuth", /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref7) {
        var name, password, passwordCheck, _classPrivateFieldGet3, accessToken, userUrl, response;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                name = _ref7.name, password = _ref7.password, passwordCheck = _ref7.passwordCheck;

                if (!(0,_domains_validator__WEBPACK_IMPORTED_MODULE_0__.checkValidProfile)(name, password, passwordCheck)) {
                  _context5.next = 15;
                  break;
                }

                _classPrivateFieldGet3 = _classPrivateFieldGet(_this, _getUserTokenId).call(_this), accessToken = _classPrivateFieldGet3.accessToken, userUrl = _classPrivateFieldGet3.userUrl;
                _context5.next = 5;
                return fetch(userUrl, {
                  method: 'PATCH',
                  body: JSON.stringify({
                    name: name,
                    password: password
                  }),
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': accessToken
                  }
                });

              case 5:
                response = _context5.sent;

                if (response.ok) {
                  _context5.next = 14;
                  break;
                }

                _context5.t0 = Error;
                _context5.t1 = "API\uC5D0\uB7EC: ";
                _context5.next = 11;
                return response.text();

              case 11:
                _context5.t2 = _context5.sent;
                _context5.t3 = _context5.t1.concat.call(_context5.t1, _context5.t2);
                throw new _context5.t0(_context5.t3);

              case 14:
                return _context5.abrupt("return", true);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x3) {
        return _ref8.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getUserFirstName", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var _classPrivateFieldGet4, accessToken, userUrl, response, data;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _classPrivateFieldGet4 = _classPrivateFieldGet(_this, _getUserTokenId).call(_this), accessToken = _classPrivateFieldGet4.accessToken, userUrl = _classPrivateFieldGet4.userUrl;

              if (!(!userUrl || !accessToken)) {
                _context6.next = 3;
                break;
              }

              return _context6.abrupt("return");

            case 3:
              _context6.next = 5;
              return fetch(userUrl, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': accessToken
                }
              });

            case 5:
              response = _context6.sent;

              if (response.ok) {
                _context6.next = 9;
                break;
              }

              _this.deleteUserAuth();

              return _context6.abrupt("return", false);

            case 9:
              _context6.next = 11;
              return response.json();

            case 11:
              data = _context6.sent;
              return _context6.abrupt("return", data.name[0]);

            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));

    _classPrivateFieldSet(this, _isLoggedIn, false);
  }

  _createClass(Auth, [{
    key: "isLoggedIn",
    get: function get() {
      return _classPrivateFieldGet(this, _isLoggedIn);
    }
  }]);

  return Auth;
}();

var auth = new Auth();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: var(--secondary-lighten);\r\n}\r\n\r\nh1 {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nbutton {\r\n  background: var(--primary);\r\n  border-radius: 4px;\r\n  height: 36px;\r\n  border-style: none;\r\n  color: var(--white);\r\n}\r\n\r\nbutton:hover {\r\n  background: var(--primary-darken);\r\n  cursor: pointer;\r\n}\r\n\r\ninput {\r\n  padding: 0 8px;\r\n  border: 1px solid var(--secondary);\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  height: 36px;\r\n  line-height: 36px;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n\r\ninput::placeholder {\r\n  color: var(--secondary-darken);\r\n}\r\n\r\n.tab-result-container {\r\n  margin: 52px 0;\r\n}\r\n\r\ncaption {\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n  margin: 48px 0 16px;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 471px;\r\n}\r\n\r\ntr {\r\n  border: 1px solid var(--secondary-lighten);\r\n  border-left: 0;\r\n  border-right: 0;\r\n  text-align: center;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 8px;\r\n  font-weight: 400;\r\n}\r\n\r\nth {\r\n  font-weight: 600;\r\n}\r\n\r\ncol {\r\n  width: 23%;\r\n}\r\n\r\n.hide {\r\n  display: none !important;\r\n}\r\n\r\n.short-button {\r\n  width: 56px;\r\n  margin-left: 16px;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n\r\n.small-button {\r\n  background: var(--secondary-lighten);\r\n  color: var(--black);\r\n  width: 50px;\r\n}\r\n\r\n.small-button:hover {\r\n  background: var(--secondary);\r\n}\r\n\r\n.long-button {\r\n  background: var(--secondary-lighten);\r\n  color: var(--black);\r\n  width: 100px;\r\n  margin: 23px;\r\n}\r\n\r\n.long-button:hover {\r\n  background: var(--secondary);\r\n}\r\n\r\n.edit-confirm-button {\r\n  width: 100px;\r\n  height: 32px;\r\n}\r\n\r\n.paper-money-wrapper {\r\n  margin-top: 20px;\r\n}\r\n\r\n#app {\r\n  margin-top: 40px;\r\n  width: 500px;\r\n  background-color: var(--white);\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.header-wrapper {\r\n  width: 100%;\r\n  position: relative;\r\n  margin: 20px 0;\r\n}\r\n\r\nuser-menu {\r\n  margin: 10px;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAEA;EACE,iCAAiC;EACjC,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,kCAAkC;EAClC,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,0CAA0C;EAC1C,cAAc;EACd,eAAe;EACf,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,QAAQ;AACV","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Roboto');\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: var(--secondary-lighten);\r\n}\r\n\r\nh1 {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nbutton {\r\n  background: var(--primary);\r\n  border-radius: 4px;\r\n  height: 36px;\r\n  border-style: none;\r\n  color: var(--white);\r\n}\r\n\r\nbutton:hover {\r\n  background: var(--primary-darken);\r\n  cursor: pointer;\r\n}\r\n\r\ninput {\r\n  padding: 0 8px;\r\n  border: 1px solid var(--secondary);\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  height: 36px;\r\n  line-height: 36px;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n\r\ninput::placeholder {\r\n  color: var(--secondary-darken);\r\n}\r\n\r\n.tab-result-container {\r\n  margin: 52px 0;\r\n}\r\n\r\ncaption {\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n  margin: 48px 0 16px;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 471px;\r\n}\r\n\r\ntr {\r\n  border: 1px solid var(--secondary-lighten);\r\n  border-left: 0;\r\n  border-right: 0;\r\n  text-align: center;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 8px;\r\n  font-weight: 400;\r\n}\r\n\r\nth {\r\n  font-weight: 600;\r\n}\r\n\r\ncol {\r\n  width: 23%;\r\n}\r\n\r\n.hide {\r\n  display: none !important;\r\n}\r\n\r\n.short-button {\r\n  width: 56px;\r\n  margin-left: 16px;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n}\r\n\r\n.small-button {\r\n  background: var(--secondary-lighten);\r\n  color: var(--black);\r\n  width: 50px;\r\n}\r\n\r\n.small-button:hover {\r\n  background: var(--secondary);\r\n}\r\n\r\n.long-button {\r\n  background: var(--secondary-lighten);\r\n  color: var(--black);\r\n  width: 100px;\r\n  margin: 23px;\r\n}\r\n\r\n.long-button:hover {\r\n  background: var(--secondary);\r\n}\r\n\r\n.edit-confirm-button {\r\n  width: 100px;\r\n  height: 32px;\r\n}\r\n\r\n.paper-money-wrapper {\r\n  margin-top: 20px;\r\n}\r\n\r\n#app {\r\n  margin-top: 40px;\r\n  width: 500px;\r\n  background-color: var(--white);\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.header-wrapper {\r\n  width: 100%;\r\n  position: relative;\r\n  margin: 20px 0;\r\n}\r\n\r\nuser-menu {\r\n  margin: 10px;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./root.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/nav.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_productManageTab_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./productManageTab.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/productManageTab.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_rechargeTab_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./rechargeTab.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/rechargeTab.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_notFound_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./notFound.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/notFound.css");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_productManageTab_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_rechargeTab_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_notFound_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/nav.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/nav.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-tab {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 32px 0 0;\r\n}\r\n\r\n.tab-input {\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.tab-label {\r\n  display: inline-block;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  height: 36px;\r\n  width: 117px;\r\n  font-weight: 500;\r\n  line-height: 36px;\r\n  background-color: var(--secondary);\r\n  border-radius: 4px;\r\n  font-weight: 700;\r\n  color: var(--white);\r\n}\r\n\r\n.tab-input:checked + label {\r\n  background: var(--primary);\r\n}\r\n\r\n.tab-label:hover {\r\n  cursor: pointer;\r\n  background-color: var(--primary);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/nav.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,kCAAkC;EAClC,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,gCAAgC;AAClC","sourcesContent":[".nav-tab {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 32px 0 0;\r\n}\r\n\r\n.tab-input {\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.tab-label {\r\n  display: inline-block;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  height: 36px;\r\n  width: 117px;\r\n  font-weight: 500;\r\n  line-height: 36px;\r\n  background-color: var(--secondary);\r\n  border-radius: 4px;\r\n  font-weight: 700;\r\n  color: var(--white);\r\n}\r\n\r\n.tab-input:checked + label {\r\n  background: var(--primary);\r\n}\r\n\r\n.tab-label:hover {\r\n  cursor: pointer;\r\n  background-color: var(--primary);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/notFound.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/notFound.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#not-found {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: white;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/notFound.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,uBAAuB;AACzB","sourcesContent":["#not-found {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: white;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/productManageTab.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/productManageTab.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tab-result-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.label-wrapper {\r\n  margin: 10px 0;\r\n}\r\n\r\n.product-manage-input {\r\n  width: 120px;\r\n}\r\n\r\n.edit-form {\r\n  display: flex;\r\n}\r\n\r\n.edit-input {\r\n  width: 84px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/productManageTab.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb","sourcesContent":[".tab-result-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.label-wrapper {\r\n  margin: 10px 0;\r\n}\r\n\r\n.product-manage-input {\r\n  width: 120px;\r\n}\r\n\r\n.edit-form {\r\n  display: flex;\r\n}\r\n\r\n.edit-input {\r\n  width: 84px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/rechargeTab.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/rechargeTab.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".long-input {\r\n  width: 300px;\r\n}\r\n\r\n.recharge-button {\r\n  width: 56px;\r\n}\r\n\r\n.holding-money-wrapper {\r\n  margin-top: 16px;\r\n}\r\n\r\n.change-table {\r\n  width: 237px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/rechargeTab.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd","sourcesContent":[".long-input {\r\n  width: 300px;\r\n}\r\n\r\n.recharge-button {\r\n  width: 56px;\r\n}\r\n\r\n.holding-money-wrapper {\r\n  margin-top: 16px;\r\n}\r\n\r\n.change-table {\r\n  width: 237px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/root.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --primary: #00bcd4;\r\n  --primary-lighten: #80deea;\r\n  --primary-darken: #009eb3;\r\n  --secondary: #b4b4b4;\r\n  --secondary-lighten: #f5f5f5;\r\n  --secondary-darken: #8b8b8b;\r\n  --menu: #cfcfcf;\r\n  --white: #fff;\r\n  --black: #000;\r\n  --dimmer: rgba(0, 0, 0, 0.5);\r\n  --box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),\r\n    0px 1px 3px rgba(0, 0, 0, 0.2);\r\n  --thumbnail: rgb(0, 110, 255);\r\n  --thumbnail-darken: rgb(0, 85, 195);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/root.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,yBAAyB;EACzB,oBAAoB;EACpB,4BAA4B;EAC5B,2BAA2B;EAC3B,eAAe;EACf,aAAa;EACb,aAAa;EACb,4BAA4B;EAC5B;kCACgC;EAChC,6BAA6B;EAC7B,mCAAmC;AACrC","sourcesContent":[":root {\r\n  --primary: #00bcd4;\r\n  --primary-lighten: #80deea;\r\n  --primary-darken: #009eb3;\r\n  --secondary: #b4b4b4;\r\n  --secondary-lighten: #f5f5f5;\r\n  --secondary-darken: #8b8b8b;\r\n  --menu: #cfcfcf;\r\n  --white: #fff;\r\n  --black: #000;\r\n  --dimmer: rgba(0, 0, 0, 0.5);\r\n  --box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),\r\n    0px 1px 3px rgba(0, 0, 0, 0.2);\r\n  --thumbnail: rgb(0, 110, 255);\r\n  --thumbnail-darken: rgb(0, 85, 195);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ts/components/Login.ts":
/*!************************************!*\
  !*** ./src/ts/components/Login.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Auth.js */ "./src/ts/Auth.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");
/* harmony import */ var _ToastNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastNotification */ "./src/ts/components/ToastNotification.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const loginTemplate = document.createElement('template');
loginTemplate.innerHTML = `
  <style>
    .modal-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: transparent;
    }

    .hide {
      display: none !important;
    }

    .dimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--dimmer);
    }

    .modal-inner {
      position: absolute;
      top: 0;
      margin-top: 60px;
      background: var(--white);
      border: 1px solid var(--secondary);
      border-radius: 4px;
      padding: 20px 30px;
    }

    .x-shape {
      float: right;
      cursor: pointer;
    }

    section {
      font-family: 'Roboto', sans-serif;
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    button {
      background: var(--primary);
      border-radius: 4px;
      height: 36px;
      border-style: none;
      color: var(--white);
      margin: 20px 0;
    }

    button:hover {
      background: var(--primary-darken);
      cursor: pointer;
    }

    input {
      padding: 0 8px;
      border: 1px solid var(--secondary);
      box-sizing: border-box;
      border-radius: 4px;
      height: 36px;
      line-height: 36px;
      font-weight: 400;
      font-size: 16px;
      margin: 7px 0;
    }

    input::placeholder {
      color: var(--secondary-darken);
    }

    form {
      display: flex;
      flex-direction: column;
      width: 300px;
    }

    #signup-span {
      cursor: pointer;
      color: blue;
      text-decoration: underline
    }

  </style>

  <div class="modal-container" >
    <div class="dimmer"></div>
    <div class="modal-inner" role="dialog">
      <div class="x-shape">X</div>
      <section>
        <h1>로그인</h1>
        <form>
          <label>이메일</label>
          <input id="email-input" type="email" placeholder="woowacourse@gmail.com" />
          <label>비밀번호</label>
          <input id="password-input" type="password" placeholder="비밀번호를 입력해주세요" />
          <button type="submit">확인</button>
        </form>
        <span>아직 회원이 아닌가요? <span id="signup-span">회원가입</span></span>
      </section>
    </div>
  </div>
`;
class Login extends HTMLElement {
    constructor() {
        super();
        this.closeModalDimmer = (event) => {
            if (event.target === this.dimmer) {
                this.closeModal();
            }
        };
        this.closeModal = () => {
            this.remove();
        };
        this.login = (event) => __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const payload = {
                email: this.emailInput.value,
                password: this.passwordInput.value,
            };
            try {
                const isLogin = yield _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].loginAuth(payload);
                if (!isLogin) {
                    return;
                }
                this.emitRouteLogin();
                (0,_ToastNotification__WEBPACK_IMPORTED_MODULE_2__.renderToastModal)('success', _constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS_MESSAGE.LOGIN_COMPLETE);
            }
            catch (error) {
                (0,_ToastNotification__WEBPACK_IMPORTED_MODULE_2__.renderToastModal)('error', _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.LOGIN_FAILED);
            }
        });
        this.emitRouteLogin = () => {
            this.closeModal();
            const event = new CustomEvent('@route-login', {});
            window.dispatchEvent(event);
        };
        this.emitRenderSignup = () => {
            this.closeModal();
            const event = new CustomEvent('@render-signup', {});
            window.dispatchEvent(event);
        };
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(loginTemplate.content.cloneNode(true));
        this.emailInput = this.shadowRoot.getElementById('email-input');
        this.passwordInput = this.shadowRoot.getElementById('password-input');
        this.dimmer = this.shadowRoot.querySelector('.dimmer');
    }
    connectedCallback() {
        this.shadowRoot.querySelector('form').addEventListener('submit', this.login);
        this.shadowRoot.querySelector('.x-shape').addEventListener('click', this.closeModal);
        this.shadowRoot.addEventListener('click', this.closeModalDimmer);
        this.shadowRoot.querySelector('#signup-span').addEventListener('click', this.emitRenderSignup);
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector('form').removeEventListener('submit', this.login);
        this.shadowRoot.querySelector('.x-shape').removeEventListener('click', this.closeModal);
        this.shadowRoot.removeEventListener('click', this.closeModalDimmer);
    }
}
customElements.define('log-in', Login);


/***/ }),

/***/ "./src/ts/components/ProfileEdit.ts":
/*!******************************************!*\
  !*** ./src/ts/components/ProfileEdit.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Auth.js */ "./src/ts/Auth.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");
/* harmony import */ var _ToastNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastNotification */ "./src/ts/components/ToastNotification.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const profileEditTemplate = document.createElement('template');
profileEditTemplate.innerHTML = `
  <style>
    .modal-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: transparent;
    }

    .hide {
      display: none !important;
    }

    .dimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--dimmer);
    }

    .modal-inner {
      position: absolute;
      top: 0;
      margin-top: 60px;
      background: var(--white);
      border: 1px solid var(--secondary);
      border-radius: 4px;
      padding: 20px 30px;
    }

    .x-shape {
      float: right;
      cursor: pointer;
    }

    section {
      font-family: 'Roboto', sans-serif;
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    button {
      background: var(--primary);
      border-radius: 4px;
      height: 36px;
      border-style: none;
      color: var(--white);
      margin: 20px 0;
    }

    button:hover {
      background: var(--primary-darken);
      cursor: pointer;
    }

    input {
      padding: 0 8px;
      border: 1px solid var(--secondary);
      box-sizing: border-box;
      border-radius: 4px;
      height: 36px;
      line-height: 36px;
      font-weight: 400;
      font-size: 16px;
      margin: 7px 0;
    }

    input::placeholder {
      color: var(--secondary-darken);
    }

    form {
      display: flex;
      flex-direction: column;
      width: 300px;
    }
  </style>

  <div class="modal-container" >
    <div class="dimmer"></div>
    <div class="modal-inner" role="dialog">
      <div class="x-shape">X</div>
      <section>
        <h1>회원 정보 수정</h1>
        <form>
          <label for="email-edit-input">이메일</label>
          <input id="email-edit-input" type="email" disabled/>
          <label for="name-edit-input">이름</label>
          <input id="name-edit-input" type="text" placeholder="이름을 입력해주세요" />
          <label for="password-edit-input">비밀번호</label>
          <input id="password-edit-input" type="password" placeholder="비밀번호를 입력해주세요" />
          <label for="password-check-edit-input">비밀번호 확인</label>
          <input id="password-check-edit-input" type="password" placeholder="비밀번호를 입력해주세요" />
          <button id="submit-edit-button" type="submit">확인</button>
        </form>
      </section>
    </div>
  </div>
`;
class ProfileEdit extends HTMLElement {
    constructor() {
        super();
        this.edit = (event) => __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const payload = {
                name: this.nameEditInput.value,
                password: this.passwordEditInput.value,
                passwordCheck: this.passwordCheckEditInput.value,
            };
            try {
                const isEdited = yield _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].editProfileAuth(payload);
                if (!isEdited) {
                    return;
                }
                this.closeModal();
                window.dispatchEvent(new CustomEvent('@route-login', {}));
                (0,_ToastNotification__WEBPACK_IMPORTED_MODULE_2__.renderToastModal)('success', _constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS_MESSAGE.EDIT_COMPLETE);
            }
            catch (error) {
                (0,_ToastNotification__WEBPACK_IMPORTED_MODULE_2__.renderToastModal)('error', error.message);
            }
        });
        this.closeModalDimmer = (event) => {
            if (event.target === this.dimmer) {
                this.closeModal();
            }
        };
        this.closeModal = () => {
            this.remove();
        };
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(profileEditTemplate.content.cloneNode(true));
        this.emailEditInput = this.shadowRoot.getElementById('email-edit-input');
        this.nameEditInput = this.shadowRoot.getElementById('name-edit-input');
        this.passwordEditInput = (this.shadowRoot.getElementById('password-edit-input'));
        this.passwordCheckEditInput = (this.shadowRoot.getElementById('password-check-edit-input'));
        this.dimmer = this.shadowRoot.querySelector('.dimmer');
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, name } = yield _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUserData();
            this.emailEditInput.value = String(email);
            this.nameEditInput.value = String(name);
            this.shadowRoot.querySelector('form').addEventListener('submit', this.edit);
            this.shadowRoot.querySelector('.x-shape').addEventListener('click', this.closeModal);
            this.shadowRoot.addEventListener('click', this.closeModalDimmer);
        });
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector('.x-shape').removeEventListener('click', this.closeModal);
        this.shadowRoot.removeEventListener('click', this.closeModalDimmer);
    }
}
customElements.define('profile-edit', ProfileEdit);


/***/ }),

/***/ "./src/ts/components/Signup.ts":
/*!*************************************!*\
  !*** ./src/ts/components/Signup.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Auth.js */ "./src/ts/Auth.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/ts/utils.ts");
/* harmony import */ var _ToastNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToastNotification */ "./src/ts/components/ToastNotification.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const signupTemplate = document.createElement('template');
signupTemplate.innerHTML = `
  <style>
    .modal-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: transparent;
    }

    .hide {
      display: none !important;
    }

    .dimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--dimmer);
    }

    .modal-inner {
      position: absolute;
      top: 0;
      margin-top: 60px;
      background: var(--white);
      border: 1px solid var(--secondary);
      border-radius: 4px;
      padding: 20px 30px;
    }

    .x-shape {
      float: right;
      cursor: pointer;
    }

    section {
      font-family: 'Roboto', sans-serif;
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    button {
      background: var(--primary);
      border-radius: 4px;
      height: 36px;
      border-style: none;
      color: var(--white);
      margin: 20px 0;
    }

    button:hover {
      background: var(--primary-darken);
      cursor: pointer;
    }

    input {
      padding: 0 8px;
      border: 1px solid var(--secondary);
      box-sizing: border-box;
      border-radius: 4px;
      height: 36px;
      line-height: 36px;
      font-weight: 400;
      font-size: 16px;
      margin: 7px 0;
    }

    input::placeholder {
      color: var(--secondary-darken);
    }

    form {
      display: flex;
      flex-direction: column;
      width: 300px;
    }
  </style>

  <div class="modal-container" >
    <div class="dimmer"></div>
    <div class="modal-inner" role="dialog">
      <div class="x-shape">X</div>
      <section>
        <h1>회원가입</h1>
        <form>
          <label for="email-input">이메일</label>
          <input id="email-input" type="email" placeholder="이메일을 입력해주세요"/>
          <label for="name-input">이름</label>
          <input id="name-input" type="text" placeholder="이름을 입력해주세요" />
          <label for="password-input">비밀번호</label>
          <input id="password-input" type="password" placeholder="비밀번호를 입력해주세요" />
          <label for="password-check-input">비밀번호 확인</label>
          <input id="password-check-input" type="password" placeholder="비밀번호를 입력해주세요" />
          <button id="submit-button" type="submit">확인</button>
        </form>
      </section>
    </div>
  </div>
`;
class Signup extends HTMLElement {
    constructor() {
        super();
        this.closeModalDimmer = (event) => {
            if (event.target === this.dimmer) {
                this.closeModal();
            }
        };
        this.closeModal = () => {
            this.remove();
        };
        this.signup = (event) => __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const payload = {
                email: this.emailInput.value,
                name: this.nameInput.value,
                password: this.passwordInput.value,
                passwordCheck: this.passwordCheckInput.value,
            };
            try {
                const isSignup = yield _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].signupAuth(payload);
                if (!isSignup) {
                    return;
                }
                this.closeModal();
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.renderComponent)('log-in');
                (0,_ToastNotification__WEBPACK_IMPORTED_MODULE_3__.renderToastModal)('success', _constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS_MESSAGE.SIGNUP_COMPLETE);
            }
            catch (error) {
                (0,_ToastNotification__WEBPACK_IMPORTED_MODULE_3__.renderToastModal)('error', error.message);
            }
        });
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(signupTemplate.content.cloneNode(true));
        this.emailInput = this.shadowRoot.getElementById('email-input');
        this.nameInput = this.shadowRoot.getElementById('name-input');
        this.passwordInput = this.shadowRoot.getElementById('password-input');
        this.passwordCheckInput = (this.shadowRoot.getElementById('password-check-input'));
        this.dimmer = this.shadowRoot.querySelector('.dimmer');
    }
    connectedCallback() {
        this.shadowRoot.querySelector('form').addEventListener('submit', this.signup);
        this.shadowRoot.querySelector('.x-shape').addEventListener('click', this.closeModal);
        this.shadowRoot.addEventListener('click', this.closeModalDimmer);
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector('form').removeEventListener('submit', this.signup);
        this.shadowRoot.querySelector('.x-shape').removeEventListener('click', this.closeModal);
        this.shadowRoot.removeEventListener('click', this.closeModalDimmer);
    }
}
customElements.define('sign-up', Signup);


/***/ }),

/***/ "./src/ts/components/ToastNotification.ts":
/*!************************************************!*\
  !*** ./src/ts/components/ToastNotification.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderToastModal": () => (/* binding */ renderToastModal)
/* harmony export */ });
const template = document.createElement('template');
template.innerHTML = `
  <style>
    .toast {
    visibility: hidden;
    min-width: 250px;
    margin: 0;
    color: #fff;
    text-align: center;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
    font-size: 17px;
    border-radius: 5px;
    }

    .toast--visible {
      visibility: visible;
      -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
      animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    .success {
      background-color: #61d688;
    }

    .error {
      background-color: #f08383;
    }

    @-webkit-keyframes fadein {
      from {
        bottom: 0;
        opacity: 0;
      }
      to {
        bottom: 30px;
        opacity: 1;
      }
    }

    @keyframes fadein {
      from {
        bottom: 0;
        opacity: 0;
      }
      to {
        bottom: 30px;
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeout {
      from {
        bottom: 30px;
        opacity: 1;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
    }

    @keyframes fadeout {
      from {
        bottom: 30px;
        opacity: 1;
      }
      to {
        bottom: 0;
        opacity: 0;
      }
    }
  </style>
  <div class="toast">
  </div>
`;
class ToastNotification extends HTMLElement {
    static get observedAttributes() {
        return ['state', 'message'];
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (!oldValue) {
            return;
        }
        const toastDiv = this.shadowRoot.querySelector('div');
        toastDiv.classList.add('toast--visible');
        if (name === 'state') {
            toastDiv.classList.add(newValue);
            if (newValue !== oldValue) {
                toastDiv.classList.remove(oldValue);
            }
        }
        if (name === 'message') {
            toastDiv.textContent = newValue;
            hideToast(toastDiv);
        }
    }
}
customElements.define('toast-modal', ToastNotification);
let hideTimeout = null;
function hideToast(toastDiv) {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        toastDiv.classList.remove('toast--visible');
    }, 2000);
}
const $toastModal = document.querySelector('toast-modal');
const renderToastModal = (state, message) => {
    $toastModal.setAttribute('state', state);
    $toastModal.setAttribute('message', message);
};


/***/ }),

/***/ "./src/ts/components/UserMenu.ts":
/*!***************************************!*\
  !*** ./src/ts/components/UserMenu.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Auth.js */ "./src/ts/Auth.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");
/* harmony import */ var _ToastNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastNotification */ "./src/ts/components/ToastNotification.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const userMenuTemplate = document.createElement('template');
userMenuTemplate.innerHTML = `
  <style>
    button {
      background: var(--primary);
      border-radius: 4px;
      height: 36px;
      border-style: none;
      color: var(--white);
      width: 56px;
      margin-left: 16px;
      font-size: 14px;
      font-weight: 700;
    }

    button:hover {
      background: var(--primary-darken);
      cursor: pointer;
    }


    form {
      display: flex;
      flex-direction: column;
      width: 300px;
    }

    #login-button {
      margin: 0;
    }

    #menu-wrapper {
      cursor: pointer;
    }

    #thumbnail {
      font-family: 'Roboto', sans-serif;
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      background-color: var(--thumbnail);
      font-weight: bold;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      color: var(--white);
      box-shadow: var(--box-shadow);
    }

    #thumbnail:hover {
      background-color: var(--thumbnail-darken);
    }

    .hide {
      display: none;
    }

    #menu {
      background: var(--thumbnail);
      color: var(--white);
      border-radius: 5px;
      padding: 0;
      width: 110px;
      position: absolute;
      right: 0;
    }

    .menu-item {
      margin: 0;
      font-size: 13px;
      padding: 6px;
      text-align: center;
      font-weight: bold;
    }

    .menu-item:hover {
      background-color: var(--thumbnail-darken);
      border-radius: 5px;
    }

    hr {
      border: 1px solid var(--white);
      margin: 0;
    }
  </style>
  <button id="login-button">로그인</button>
  <div id="menu-wrapper" class="hide">
    <div id="thumbnail">
    </div>
    <div class="hide" id="menu">
      <div class="menu-item" id="profile-edit-button">회원정보 수정</div>
      <hr>
      <div class="menu-item" id="logout-button">로그아웃</div>
    </div>
  </div>
`;
class UserMenu extends HTMLElement {
    constructor() {
        super();
        this.handleLoginButton = () => {
            const event = new CustomEvent('@render-login', {});
            window.dispatchEvent(event);
        };
        this.checkLoginStatus = () => __awaiter(this, void 0, void 0, function* () {
            if (!_Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUserAuth()) {
                this.renderLoginButton();
                return;
            }
            const userFirstName = yield _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUserFirstName();
            if (!userFirstName) {
                this.renderLoginButton();
                return;
            }
            this.renderUserThumbnail(userFirstName);
        });
        this.renderLoginButton = () => {
            this.loginButton.classList.remove('hide');
            this.menuWrapper.classList.add('hide');
        };
        this.renderUserThumbnail = (firstName) => {
            this.thumbnail.textContent = firstName;
            this.loginButton.classList.add('hide');
            this.menuWrapper.classList.remove('hide');
            this.menu.classList.add('hide');
        };
        this.toggleMenu = () => {
            this.menu.classList.toggle('hide');
        };
        this.emitRenderProfileEdit = () => {
            this.menu.classList.add('hide');
            window.dispatchEvent(new CustomEvent('@render-profile-edit', {}));
        };
        this.logout = () => {
            _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteUserAuth();
            window.dispatchEvent(new CustomEvent('@route-logout', {}));
            (0,_ToastNotification__WEBPACK_IMPORTED_MODULE_2__.renderToastModal)('success', _constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS_MESSAGE.LOGOUT_COMPLETE);
        };
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(userMenuTemplate.content.cloneNode(true));
        this.loginButton = this.shadowRoot.querySelector('#login-button');
        this.thumbnail = this.shadowRoot.querySelector('#thumbnail');
        this.profileEditButton = this.shadowRoot.querySelector('#profile-edit-button');
        this.logoutButton = this.shadowRoot.querySelector('#logout-button');
        this.menuWrapper = this.shadowRoot.querySelector('#menu-wrapper');
        this.menu = this.shadowRoot.querySelector('#menu');
    }
    static get observedAttributes() {
        return ['auth'];
    }
    connectedCallback() {
        this.loginButton.addEventListener('click', this.handleLoginButton);
        this.thumbnail.addEventListener('click', this.toggleMenu);
        this.profileEditButton.addEventListener('click', this.emitRenderProfileEdit);
        this.logoutButton.addEventListener('click', this.logout);
    }
    disconnectedCallback() {
        this.shadowRoot.removeEventListener('click', this.handleLoginButton);
        this.thumbnail.removeEventListener('click', this.toggleMenu);
        this.profileEditButton.removeEventListener('click', this.emitRenderProfileEdit);
        this.logoutButton.removeEventListener('click', this.logout);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.checkLoginStatus();
    }
}
customElements.define('user-menu', UserMenu);


/***/ }),

/***/ "./src/ts/constants.ts":
/*!*****************************!*\
  !*** ./src/ts/constants.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PATH_ID": () => (/* binding */ PATH_ID),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "SUCCESS_MESSAGE": () => (/* binding */ SUCCESS_MESSAGE),
/* harmony export */   "CONFIRM_MESSAGE": () => (/* binding */ CONFIRM_MESSAGE),
/* harmony export */   "VENDING_MACHINE_RULE": () => (/* binding */ VENDING_MACHINE_RULE),
/* harmony export */   "STORAGE_ID": () => (/* binding */ STORAGE_ID)
/* harmony export */ });
const PATH_ID = {
    PRODUCT_MANAGE: '/javascript-vendingmachine/#!/product-manage',
    RECHARGE: '/javascript-vendingmachine/#!/recharge',
    PURCHASE_PRODUCT: '/javascript-vendingmachine/#!/purchase-product',
    LOGIN: '/javascript-vendingmachine/#!/login',
    SIGNUP: '/javascript-vendingmachine/#!/signup',
    NOT_FOUND: '/javascript-vendingmachine/#!/not-found',
};
const ERROR_MESSAGE = {
    NAME_EMPTY: '상품명은 최소 한 글자 이상이어야 합니다.',
    NAME_LENGTH: '상품명은 최대 10글자까지 가능합니다. 상품명을 10글자 이하로 입력해주세요.',
    PRICE_RANGE: '상품 가격은 100원부터 시작하며, 최대 10,000원까지 가능합니다.',
    PRICE_UNIT: '상품 가격은 10의 배수여야 합니다.',
    EXCEED_QUANTITY: '상품의 수량은 최대 20개 입니다.',
    DUPLICATED_PRODUCT: '현재 상품은 이미 자판기에 있습니다. 중복되지 않는 상품명을 입력해주세요.',
    RECHARGE_MONEY_UNIT: '충전할 금액은 10의 배수여야 합니다.',
    EXCEED_HOLDING_MONEY: '보유할 수 있는 최대 금액은 10만원입니다.',
    UNDER_MIN_RECHARGING_MONEY: '충전할 금액은 10원 이상이어야 합니다.',
    NOT_INTEGER: '정수를 입력하셔야 합니다.',
    INSERT_MONEY_UNIT: '투입할 금액은 10의 배수여야 합니다.',
    EXCEED_INSERTED_HOLDING_MONEY: '투입할 수 있는 최대 금액은 1만원입니다.',
    UNDER_MIN_INSERTED_HOLDING_MONEY: '투입 금액은 10원 이상이어야 합니다.',
    NOT_INSERTED_HOLDING_MONEY: '투입된 돈이 없으므로, 잔돈을 반환할 수 없습니다.',
    SOLD_OUT: '해당 상품에 재고가 없습니다.',
    INSUFFICIENT_MONEY: '해당 상품을 구입하기에 투입한 돈이 충분하지 않습니다.',
    OUT_OF_NAME_LENGTH: '유효하지 않은 이름을 입력하셨습니다. 이름은 2글자에서 6글자 사이여야 합니다.',
    DIFFERENT_PASSWORD: '유효하지 않은 비밀번호를 입력하셨습니다. 비밀번호 확인 칸에 동일한 비밀번호를 입력하세요.',
    INVALID_PASSWORD: '유효하지 않은 비밀번호를 입력하셨습니다.  password는 8자리에서 16자리 사이여야 하며, 영어, 숫자, 특수문자 각각 최소 1개 이상 조합이어야 한다.',
    LOGIN_FAILED: '로그인에 실패하였습니다. 가입하신 정확한 아이디와 비밀번호를 입력해주세요.',
};
const SUCCESS_MESSAGE = {
    PRODUCT_REGISTERED: '입력하신 상품 정보가 등록되었습니다.',
    PRODUCT_EDITED: '선택하신 상품 정보가 수정되었습니다.',
    PRODUCT_DELETED: '선택하신 상품 정보가 삭제되었습니다.',
    MONEY_RECHARGED: '충전하신 금액만큼 동전을 보충하였습니다.',
    PURCHASE: '해당 상품을 구매하였습니다.',
    MONEY_INSERTED: '입력하신 금액이 투입되었습니다.',
    LOGIN_COMPLETE: '로그인 되었습니다.',
    EDIT_COMPLETE: '회원정보가 수정되었습니다.',
    SIGNUP_COMPLETE: '회원가입이 완료되었습니다. 로그인 하시기 바랍니다.',
    LOGOUT_COMPLETE: '로그아웃 되었습니다.',
    REFUND_COMPLETE: '모든 잔돈을 반환하였습니다.',
};
const CONFIRM_MESSAGE = {
    DELETE: '정말 삭제하시겠습니까?',
};
const VENDING_MACHINE_RULE = {
    MAX_QUANTITY: 20,
    MIN_PRICE: 100,
    MAX_PRICE: 10000,
    MAX_NAME_LENGTH: 10,
    UNIT: 10,
    MAX_HOLDING_MONEY: 100000,
    MIN_RECHARGING_MONEY: 10,
    MAX_INSERTED_HOLDING_MONEY: 10000,
    MIN_INSERTING_MONEY: 10,
    COIN_VALUES: [500, 100, 50, 10],
};
const STORAGE_ID = {
    MONEY: 'money',
    PRODUCTS: 'products',
    CURRENT_TAB: 'current-tab',
};


/***/ }),

/***/ "./src/ts/cookie.ts":
/*!**************************!*\
  !*** ./src/ts/cookie.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "setCookie": () => (/* binding */ setCookie),
/* harmony export */   "deleteCookie": () => (/* binding */ deleteCookie)
/* harmony export */ });
const getCookie = (name) => {
    const matches = document.cookie.match(new RegExp(`${name}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};
const setCookie = (name, value) => {
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; max-age=3600`;
};
const deleteCookie = (name) => {
    document.cookie = `${encodeURIComponent(name)}=; max-age=1000`;
};


/***/ }),

/***/ "./src/ts/domains/Money.ts":
/*!*********************************!*\
  !*** ./src/ts/domains/Money.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Money)
/* harmony export */ });
class Money {
    constructor(value, count) {
        this._value = value;
        this._count = count;
    }
    get value() {
        return this._value;
    }
    get count() {
        return this._count;
    }
    deductCount(refundableCount) {
        this._count = this._count - refundableCount;
    }
    increaseCount() {
        this._count += 1;
    }
}


/***/ }),

/***/ "./src/ts/domains/Product.ts":
/*!***********************************!*\
  !*** ./src/ts/domains/Product.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ "./src/ts/domains/validator.ts");

class Product {
    constructor({ name, price, quantity }) {
        (0,_validator__WEBPACK_IMPORTED_MODULE_0__.checkProductValidation)({ name, price, quantity });
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get quantity() {
        return this._quantity;
    }
    setProduct({ name, price, quantity }) {
        (0,_validator__WEBPACK_IMPORTED_MODULE_0__.checkProductValidation)({ name, price, quantity });
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }
    set quantity(quantity) {
        this._quantity = quantity;
    }
}


/***/ }),

/***/ "./src/ts/domains/VendingMachine.ts":
/*!******************************************!*\
  !*** ./src/ts/domains/VendingMachine.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VendingMachine)
/* harmony export */ });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "./src/ts/domains/Product.ts");
/* harmony import */ var _Money__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Money */ "./src/ts/domains/Money.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validator */ "./src/ts/domains/validator.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/ts/utils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");





class VendingMachine {
    constructor() {
        this.resetProducts = () => {
            this._products = [];
        };
        this.resetMoneys = () => {
            this._moneys = [new _Money__WEBPACK_IMPORTED_MODULE_1__["default"](500, 0), new _Money__WEBPACK_IMPORTED_MODULE_1__["default"](100, 0), new _Money__WEBPACK_IMPORTED_MODULE_1__["default"](50, 0), new _Money__WEBPACK_IMPORTED_MODULE_1__["default"](10, 0)];
        };
        this.resetInsertedMoney = () => {
            this._insertedMoney = 0;
        };
        this.rechargeMoney = (money) => {
            (0,_validator__WEBPACK_IMPORTED_MODULE_2__.checkMoneyValidation)(money, money + this.getHoldingMoney());
            this.generateRandomCoins(money);
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_ID.MONEY, JSON.stringify(this._moneys));
        };
        this.getHoldingMoney = () => {
            return this._moneys.reduce((holdingMoney, currentMoney) => {
                return holdingMoney + currentMoney.value * currentMoney.count;
            }, 0);
        };
        this.getCoin = (value) => {
            return this._moneys.find((coin) => coin.value === value);
        };
        this.getProduct = (name) => {
            return this._products.find((product) => product.name === name);
        };
        this.addProduct = (newProduct) => {
            const productToAdd = new _Product__WEBPACK_IMPORTED_MODULE_0__["default"](newProduct);
            (0,_validator__WEBPACK_IMPORTED_MODULE_2__.checkDuplicatedProduct)(this._products, productToAdd.name);
            this._products.push(productToAdd);
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_ID.PRODUCTS, JSON.stringify(this._products));
            return productToAdd;
        };
        this.deleteProduct = (name) => {
            this._products = this._products.filter((product) => product.name !== name);
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_ID.PRODUCTS, JSON.stringify(this._products));
        };
        this.editProduct = (name, product) => {
            const targetIndex = this.findIndexByName(name);
            if (this._products[targetIndex].name !== product.name) {
                (0,_validator__WEBPACK_IMPORTED_MODULE_2__.checkDuplicatedProduct)(this._products, product.name);
            }
            this._products[targetIndex].setProduct(product);
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_ID.PRODUCTS, JSON.stringify(this._products));
        };
        this.decreaseProductQuantity = (name) => {
            const targetIndex = this.findIndexByName(name);
            if (this._products[targetIndex].quantity <= 0) {
                throw new Error(_constants__WEBPACK_IMPORTED_MODULE_4__.ERROR_MESSAGE.SOLD_OUT);
            }
            this._products[targetIndex].quantity -= 1;
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_ID.PRODUCTS, JSON.stringify(this._products));
        };
        this.deductInsertedMoney = (name) => {
            const targetPrice = this._products[this.findIndexByName(name)].price;
            if (this._insertedMoney - targetPrice < 0) {
                throw new Error(_constants__WEBPACK_IMPORTED_MODULE_4__.ERROR_MESSAGE.INSUFFICIENT_MONEY);
            }
            this._insertedMoney -= targetPrice;
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_ID.PRODUCTS, JSON.stringify(this._products));
            return this._insertedMoney;
        };
        this.findIndexByName = (name) => {
            return this._products.findIndex((product) => product.name === name);
        };
        this.getProductsFromStorage = (key) => {
            const copy = JSON.parse(localStorage.getItem(key));
            return copy === null || copy === void 0 ? void 0 : copy.map((product) => {
                const productToCopy = {
                    name: product._name,
                    price: product._price,
                    quantity: product._quantity,
                };
                return new _Product__WEBPACK_IMPORTED_MODULE_0__["default"](productToCopy);
            });
        };
        this.getMoneyFromStorage = (key) => {
            const copy = JSON.parse(localStorage.getItem(key));
            return copy === null || copy === void 0 ? void 0 : copy.map((money) => new _Money__WEBPACK_IMPORTED_MODULE_1__["default"](money._value, money._count));
        };
        this.generateRandomCoins = (money) => {
            while (money !== 0) {
                const moneyRandomIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getRandomNumber)(0, 3);
                const coinValue = this._moneys[moneyRandomIndex].value;
                if (coinValue <= money) {
                    this._moneys[moneyRandomIndex].increaseCount();
                    money -= coinValue;
                }
            }
        };
        this.addInsertedMoney = (money) => {
            (0,_validator__WEBPACK_IMPORTED_MODULE_2__.checkInsertedMoneyValidation)(money, this._insertedMoney);
            this._insertedMoney = this._insertedMoney + money;
            return this._insertedMoney;
        };
        this.deductRefundableCoins = ([coin500Count, coin100Count, coin50Count, coin10Count,]) => {
            this.getCoin(500).deductCount(coin500Count);
            this.getCoin(100).deductCount(coin100Count);
            this.getCoin(50).deductCount(coin50Count);
            this.getCoin(10).deductCount(coin10Count);
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_ID.MONEY, JSON.stringify(this._moneys));
        };
        this.getRefundableCoins = () => {
            let targetAmount = this._insertedMoney;
            const getRefundableCoin = (value) => {
                const coinCount = this.getCoin(value).count >= Math.floor(targetAmount / value)
                    ? Math.floor(targetAmount / value)
                    : this.getCoin(value).count;
                targetAmount = targetAmount - value * coinCount;
                return coinCount;
            };
            return _constants__WEBPACK_IMPORTED_MODULE_4__.VENDING_MACHINE_RULE.COIN_VALUES.map((value) => getRefundableCoin(value));
        };
        this.getNonRefundableCoinMoney = () => {
            const refundableCoins = this.getRefundableCoins();
            return (this.insertedMoney -
                refundableCoins.reduce((totalMoney, coinCount, index) => totalMoney + coinCount * _constants__WEBPACK_IMPORTED_MODULE_4__.VENDING_MACHINE_RULE.COIN_VALUES[index], 0));
        };
        this._products = this.getProductsFromStorage(_constants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_ID.PRODUCTS) || [];
        this._moneys = this.getMoneyFromStorage(_constants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_ID.MONEY) || [
            new _Money__WEBPACK_IMPORTED_MODULE_1__["default"](500, 0),
            new _Money__WEBPACK_IMPORTED_MODULE_1__["default"](100, 0),
            new _Money__WEBPACK_IMPORTED_MODULE_1__["default"](50, 0),
            new _Money__WEBPACK_IMPORTED_MODULE_1__["default"](10, 0),
        ];
        this._insertedMoney = 0;
    }
    get products() {
        return this._products;
    }
    get moneys() {
        return this._moneys;
    }
    get insertedMoney() {
        return this._insertedMoney;
    }
}


/***/ }),

/***/ "./src/ts/domains/validator.ts":
/*!*************************************!*\
  !*** ./src/ts/domains/validator.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkProductValidation": () => (/* binding */ checkProductValidation),
/* harmony export */   "checkDuplicatedProduct": () => (/* binding */ checkDuplicatedProduct),
/* harmony export */   "checkMoneyValidation": () => (/* binding */ checkMoneyValidation),
/* harmony export */   "checkInsertedMoneyValidation": () => (/* binding */ checkInsertedMoneyValidation),
/* harmony export */   "checkValidProfile": () => (/* binding */ checkValidProfile)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");

const isEmptyName = (name) => name.trim().length === 0;
const isOverNameMinLength = (name) => name.length > _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULE.MAX_NAME_LENGTH;
const isOutOfPriceRange = (price) => price < _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULE.MIN_PRICE || price > _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULE.MAX_PRICE;
const isInvalidUnit = (price, unit) => price % unit !== 0;
const isOverMaxValue = (value, max) => value > max;
const isUnderMinValue = (value, min) => value < min;
const isOutOfNameLength = (name) => name.length < 2 || name.length > 6;
const isInvalidPassword = (password) => {
    const regExp = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
    return !regExp.test(password);
};
const isDifferentPassword = (password, passwordCheck) => password !== passwordCheck;
const checkProductValidation = (product) => {
    if (isEmptyName(product.name)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NAME_EMPTY);
    }
    if (isOverNameMinLength(product.name)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NAME_LENGTH);
    }
    if (isOutOfPriceRange(product.price)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRICE_RANGE);
    }
    if (isInvalidUnit(product.price, _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULE.UNIT)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRICE_UNIT);
    }
    if (isOverMaxValue(product.quantity, _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULE.MAX_QUANTITY)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.EXCEED_QUANTITY);
    }
    if (!Number.isInteger(product.quantity)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NOT_INTEGER);
    }
};
const checkDuplicatedProduct = (products, name) => {
    if (products.find((product) => product.name === name.trim())) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.DUPLICATED_PRODUCT);
    }
};
const checkMoneyValidation = (money, holdingMoney) => {
    if (isInvalidUnit(money, _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULE.UNIT)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.RECHARGE_MONEY_UNIT);
    }
    if (isOverMaxValue(holdingMoney, _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULE.MAX_HOLDING_MONEY)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.EXCEED_HOLDING_MONEY);
    }
    if (isUnderMinValue(money, _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULE.MIN_RECHARGING_MONEY)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.UNDER_MIN_RECHARGING_MONEY);
    }
};
const checkInsertedMoneyValidation = (money, holdingMoney) => {
    if (isInvalidUnit(money, _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULE.UNIT)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.INSERT_MONEY_UNIT);
    }
    if (isOverMaxValue(money + holdingMoney, _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULE.MAX_INSERTED_HOLDING_MONEY)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.EXCEED_INSERTED_HOLDING_MONEY);
    }
    if (isUnderMinValue(money, _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULE.MIN_INSERTING_MONEY)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.UNDER_MIN_INSERTED_HOLDING_MONEY);
    }
};
const checkValidProfile = (name, password, passwordCheck) => {
    if (isOutOfNameLength(name)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.OUT_OF_NAME_LENGTH);
    }
    if (isInvalidPassword(password)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.INVALID_PASSWORD);
    }
    if (isDifferentPassword(password, passwordCheck)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.DIFFERENT_PASSWORD);
    }
    return true;
};


/***/ }),

/***/ "./src/ts/router.ts":
/*!**************************!*\
  !*** ./src/ts/router.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/ts/constants.ts");
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth.js */ "./src/ts/Auth.js");


class Router {
    constructor(view) {
        this.routeLogin = (url) => {
            this.tabRouter(url, false);
        };
        this.routeLogout = () => {
            this.tabRouter(_constants__WEBPACK_IMPORTED_MODULE_0__.PATH_ID.PURCHASE_PRODUCT, false);
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_ID.CURRENT_TAB, _constants__WEBPACK_IMPORTED_MODULE_0__.PATH_ID.PURCHASE_PRODUCT);
        };
        this.tabRouter = (url, isPopState = false) => {
            this.view.renderPage(url);
            if (!_Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].isLoggedIn) {
                this.renderPublicPage();
                history.pushState({ url }, null, url);
                return;
            }
            this.renderUserPrivatePage();
            if (!isPopState && url !== location.pathname + location.hash) {
                history.pushState({ url }, null, url);
            }
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_ID.CURRENT_TAB, url);
        };
        this.renderUserPrivatePage = () => {
            document.querySelector('.nav-tab').classList.remove('hide');
            document.querySelector('user-menu').setAttribute('auth', 'login');
        };
        this.renderPublicPage = () => {
            document.querySelector('.nav-tab').classList.add('hide');
            document.querySelector('user-menu').setAttribute('auth', 'logout');
        };
        this.view = view;
        // this.currentTab = localStorage.getItem(STORAGE_ID.CURRENT_TAB) || PATH_ID.PURCHASE_PRODUCT;
        this.currentTab = location.pathname + location.hash;
        console.log('@@@', location.pathname + location.hash);
        this.tabRouter(this.currentTab, false);
        window.addEventListener('popstate', (event) => {
            const url = event.state ? event.state.url : location.pathname + location.hash;
            // this.currentTab = location.pathname + location.hash;
            console.log(url);
            this.tabRouter(url, true);
        });
        this.view.$navTab.addEventListener('@route-tab', (event) => {
            const url = event.detail;
            console.log('메뉴버튼', url);
            this.tabRouter(url, false);
        });
        // 웹컴포넌트에서 보낸 커스텀 이벤트
        window.addEventListener('@route-login', () => {
            this.routeLogin(_constants__WEBPACK_IMPORTED_MODULE_0__.PATH_ID.PRODUCT_MANAGE);
        });
        window.addEventListener('@route-logout', this.routeLogout);
    }
}


/***/ }),

/***/ "./src/ts/utils.ts":
/*!*************************!*\
  !*** ./src/ts/utils.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "getRandomNumber": () => (/* binding */ getRandomNumber),
/* harmony export */   "renderComponent": () => (/* binding */ renderComponent),
/* harmony export */   "renderTemplate": () => (/* binding */ renderTemplate)
/* harmony export */ });
const $ = (selector, baseElement = document) => baseElement.querySelector(selector);
const $$ = (selector, baseElement = document) => baseElement.querySelectorAll(selector);
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const renderComponent = (tagName) => {
    document.body.appendChild(document.createElement(tagName));
};
const renderTemplate = (htmlString) => {
    const $tabResult = document.getElementById('tab-result');
    $tabResult.insertAdjacentHTML('beforeend', htmlString);
};


/***/ }),

/***/ "./src/ts/views/ProductManageView.ts":
/*!*******************************************!*\
  !*** ./src/ts/views/ProductManageView.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductManageView)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/ts/utils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");
/* harmony import */ var _components_ToastNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ToastNotification */ "./src/ts/components/ToastNotification.ts");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template */ "./src/ts/views/template.ts");




class ProductManageView {
    constructor(vendingMachine) {
        this.render = () => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)(_template__WEBPACK_IMPORTED_MODULE_3__.getProductManageTemplate);
            this.$productNameInput = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#product-name');
            this.$productPriceInput = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#product-price');
            this.$productQuantityInput = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#product-quantity');
            this.$productManageForm = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#product-manage-form');
            this.$currentProductTable = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#current-product-table');
            this.$productManageForm.addEventListener('submit', this.handleSubmit);
            this.$currentProductTable.addEventListener('click', this.handleModifierButton);
            const tableTemplate = this.vendingMachine.products
                .map((product) => this.getProductTemplate(product))
                .join('');
            this.$currentProductTable.insertAdjacentHTML('beforeend', tableTemplate);
            this.$productNameInput.focus();
        };
        this.handleSubmit = (event) => {
            event.preventDefault();
            const input = {
                name: this.$productNameInput.value.trim(),
                price: +this.$productPriceInput.value,
                quantity: +this.$productQuantityInput.value,
            };
            try {
                const addedProduct = this.vendingMachine.addProduct(input);
                this.renderAddedProduct(addedProduct);
                this.resetProductManageForm();
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_2__.renderToastModal)('success', _constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS_MESSAGE.PRODUCT_REGISTERED);
            }
            catch (error) {
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_2__.renderToastModal)('error', error.message);
            }
        };
        this.renderAddedProduct = (addedProduct) => {
            const template = this.getProductTemplate(addedProduct);
            this.$currentProductTable.insertAdjacentHTML('beforeend', template);
        };
        this.getProductTemplate = ({ name, price, quantity }) => {
            return `
      <tr class="product-row" data-name="${name}">
        <td class="product-row-name">${name}</td>
        <td class="product-row-price">${price}</td>
        <td class="product-row-quantity">${quantity}</td>
        <td>
          <button class="small-button edit-button" data-name="${name}">수정</button>
          <button class="small-button delete-button" data-name="${name}">삭제</button>
        </td>
      </tr>
      `;
        };
        this.handleModifierButton = (event) => {
            const target = event.target;
            if (target.classList.contains('edit-button')) {
                this.handleEdit(target);
            }
            if (target.classList.contains('delete-button')) {
                this.handleDelete(target);
            }
        };
        this.handleEdit = (target) => {
            const { name, price, quantity } = this.vendingMachine.getProduct(target.dataset.name);
            const editTemplate = this.getEditTemplate({ name, price, quantity });
            const targetEdit = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(`tr[data-name='${name}']`, this.$currentProductTable);
            targetEdit.replaceChildren();
            targetEdit.insertAdjacentHTML('beforeend', editTemplate);
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.edit-confirm-button').addEventListener('click', () => this.handleConfirmEdit(name));
        };
        this.getEditTemplate = ({ name, price, quantity }) => {
            return `
      <tr class="product-row" dataset-name=${name} >
        <td class="product-row-name">
          <input class="edit-input" id="edit-name-input" type="text" size="10" minlength="1" maxlength="10" value="${name}">
        </td>
        <td class="product-row-price">
          <input class="edit-input" id="edit-price-input" type="number" step="10" min="100" max="100000" value="${price}">
        </td>
        <td class="product-row-quantity">
          <input class="edit-input" id="edit-quantity-input" type="number" min="1" max="20" value="${quantity}">
        </td>
        <td>
          <button class="small-button edit-confirm-button" data-name="${name}" >확인</button>
        </td>
      </tr>
    `;
        };
        this.handleConfirmEdit = (targetName) => {
            const targetEdit = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(`tr[data-name='${targetName}']`, this.$currentProductTable);
            const productToEdit = {
                name: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#edit-name-input').value,
                price: +(0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#edit-price-input').value,
                quantity: +(0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#edit-quantity-input').value,
            };
            try {
                this.vendingMachine.editProduct(targetName, productToEdit);
                this.renderEditedProduct(productToEdit, targetEdit);
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_2__.renderToastModal)('success', _constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS_MESSAGE.PRODUCT_EDITED);
            }
            catch (error) {
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_2__.renderToastModal)('error', error.message);
            }
        };
        this.renderEditedProduct = (productToEdit, targetEdit) => {
            const editedProduct = this.vendingMachine.getProduct(productToEdit.name);
            const newTr = document.createElement('tr');
            newTr.className = 'product-row';
            newTr.dataset.name = editedProduct.name;
            const template = this.getProductTemplate(editedProduct);
            newTr.insertAdjacentHTML('beforeend', template);
            this.$currentProductTable.replaceChild(newTr, targetEdit);
        };
        this.handleDelete = (target) => {
            if (window.confirm(_constants__WEBPACK_IMPORTED_MODULE_1__.CONFIRM_MESSAGE.DELETE)) {
                const name = target.dataset.name;
                this.vendingMachine.deleteProduct(name);
                this.removeProductRow(name);
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_2__.renderToastModal)('success', _constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS_MESSAGE.PRODUCT_DELETED);
            }
        };
        this.vendingMachine = vendingMachine;
        this.$toastModal = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('toast-modal');
    }
    resetProductManageForm() {
        this.$productNameInput.value = '';
        this.$productPriceInput.value = '';
        this.$productQuantityInput.value = '';
        this.$productNameInput.focus();
    }
    removeProductRow(name) {
        const targetDelete = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(`tr[data-name='${name}']`);
        this.$currentProductTable.removeChild(targetDelete);
    }
}


/***/ }),

/***/ "./src/ts/views/PurchaseView.ts":
/*!**************************************!*\
  !*** ./src/ts/views/PurchaseView.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseView)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/ts/utils.ts");
/* harmony import */ var _components_ToastNotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ToastNotification */ "./src/ts/components/ToastNotification.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template */ "./src/ts/views/template.ts");




class PurchaseView {
    constructor(vendingMachine) {
        this.render = () => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.renderTemplate)(_template__WEBPACK_IMPORTED_MODULE_3__.getPurchaseProduct);
            this.$insertMoneyForm = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#insert-money-form');
            this.$insertMoneyInput = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#insert-money-input');
            this.$currentInsertedMoney = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#current-inserted-money');
            this.$purchasableProductTable = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#purchasable-product-table');
            this.$coin500 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#purchase-tab-coin-500');
            this.$coin100 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#purchase-tab-coin-100');
            this.$coin50 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#purchase-tab-coin-50');
            this.$coin10 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#purchase-tab-coin-10');
            this.$refundButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#refund-button');
            this.$insertMoneyForm.addEventListener('submit', this.handleInsertMoneyForm);
            this.$purchasableProductTable.addEventListener('click', this.handlePurchaseButton);
            this.$refundButton.addEventListener('click', this.handleRefundButton);
            this.renderPurchaseTable();
            this.$insertMoneyInput.focus();
        };
        this.renderPurchaseTable = () => {
            this.$purchasableProductTable.textContent = '';
            const template = this.vendingMachine.products
                .map((product) => this.getProductTemplate(product))
                .join('');
            this.$purchasableProductTable.insertAdjacentHTML('beforeend', template);
        };
        this.getProductTemplate = ({ name, price, quantity }) => {
            return `
      <tr class="product-row" data-name="${name}">
        <td class="product-row-name">${name}</td>
        <td class="product-row-price">${price}</td>
        <td class="product-row-quantity">${quantity}</td>
        <td>
          <button class="small-button purchase-button" data-name="${name}">구매</button>
        </td>
      </tr>
      `;
        };
        this.handlePurchaseButton = (event) => {
            const target = event.target;
            if (!target.classList.contains('purchase-button')) {
                return;
            }
            const productName = target.dataset.name;
            try {
                const currentInsertedMoney = String(this.vendingMachine.deductInsertedMoney(productName));
                this.renderInsertedMoney(currentInsertedMoney);
                this.vendingMachine.decreaseProductQuantity(productName);
                this.renderPurchaseTable();
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_1__.renderToastModal)('success', _constants__WEBPACK_IMPORTED_MODULE_2__.SUCCESS_MESSAGE.PURCHASE);
            }
            catch (error) {
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_1__.renderToastModal)('error', error.message);
            }
        };
        this.handleInsertMoneyForm = (event) => {
            event.preventDefault();
            try {
                const insertedMoney = String(this.vendingMachine.addInsertedMoney(+this.$insertMoneyInput.value));
                this.renderInsertedMoney(insertedMoney);
                this.$insertMoneyInput.value = '';
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_1__.renderToastModal)('success', _constants__WEBPACK_IMPORTED_MODULE_2__.SUCCESS_MESSAGE.MONEY_INSERTED);
            }
            catch (error) {
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_1__.renderToastModal)('error', error.message);
            }
        };
        this.renderInsertedMoney = (money) => {
            this.$currentInsertedMoney.textContent = money;
        };
        this.handleRefundButton = () => {
            if (this.vendingMachine.insertedMoney === 0) {
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_1__.renderToastModal)('error', _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.NOT_INSERTED_HOLDING_MONEY);
                const initializedCoins = [0, 0, 0, 0];
                this.renderRefundableCoinTable(initializedCoins);
                return;
            }
            const refundableCoins = this.vendingMachine.getRefundableCoins();
            this.renderRefundableCoinTable(refundableCoins);
            const nonRefundableCoinMoney = this.vendingMachine.getNonRefundableCoinMoney();
            this.renderRefundMoneyToastModal(nonRefundableCoinMoney);
            this.renderInsertedMoney('0');
            this.vendingMachine.deductRefundableCoins(refundableCoins);
            this.vendingMachine.resetInsertedMoney();
        };
        this.renderRefundableCoinTable = ([coin500Count, coin100Count, coin50Count, coin10Count,]) => {
            this.$coin500.textContent = String(coin500Count);
            this.$coin100.textContent = String(coin100Count);
            this.$coin50.textContent = String(coin50Count);
            this.$coin10.textContent = String(coin10Count);
        };
        this.renderRefundMoneyToastModal = (nonRefundableCoinMoney) => {
            if (nonRefundableCoinMoney > 0) {
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_1__.renderToastModal)('error', `보유 중인 잔돈이 부족하여, ${nonRefundableCoinMoney}원은 반환하지 못하였습니다.`);
            }
            else {
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_1__.renderToastModal)('success', _constants__WEBPACK_IMPORTED_MODULE_2__.SUCCESS_MESSAGE.REFUND_COMPLETE);
            }
        };
        this.vendingMachine = vendingMachine;
    }
}


/***/ }),

/***/ "./src/ts/views/RechargeView.ts":
/*!**************************************!*\
  !*** ./src/ts/views/RechargeView.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RechargeView)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/ts/utils.ts");
/* harmony import */ var _components_ToastNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ToastNotification */ "./src/ts/components/ToastNotification.ts");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template */ "./src/ts/views/template.ts");




class RechargeView {
    constructor(vendingMachine) {
        this.render = () => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.renderTemplate)(_template__WEBPACK_IMPORTED_MODULE_3__.getRechargeTemplate);
            this.$rechargeForm = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#recharge-form');
            this.$rechargeInput = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#recharge-input', this.$rechargeForm);
            this.$currentHoldingMoney = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#current-holding-money');
            this.$coin500 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#coin-500');
            this.$coin100 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#coin-100');
            this.$coin50 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#coin-50');
            this.$coin10 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#coin-10');
            this.$rechargeForm.addEventListener('submit', this.handleSubmit);
            this.renderHoldingMoney();
            this.renderCoinTable();
            this.$rechargeInput.focus();
        };
        this.renderHoldingMoney = () => {
            this.$currentHoldingMoney.textContent = String(this.vendingMachine.getHoldingMoney());
        };
        this.renderCoinTable = () => {
            this.$coin500.textContent = String(this.vendingMachine.getCoin(500).count);
            this.$coin100.textContent = String(this.vendingMachine.getCoin(100).count);
            this.$coin50.textContent = String(this.vendingMachine.getCoin(50).count);
            this.$coin10.textContent = String(this.vendingMachine.getCoin(10).count);
        };
        this.handleSubmit = (event) => {
            event.preventDefault();
            const moneyToRecharge = +this.$rechargeInput.value;
            try {
                this.vendingMachine.rechargeMoney(moneyToRecharge);
                this.renderHoldingMoney();
                this.renderCoinTable();
                this.$rechargeInput.value = '';
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_2__.renderToastModal)('success', _constants__WEBPACK_IMPORTED_MODULE_0__.SUCCESS_MESSAGE.MONEY_RECHARGED);
            }
            catch (error) {
                (0,_components_ToastNotification__WEBPACK_IMPORTED_MODULE_2__.renderToastModal)('error', error.message);
            }
        };
        this.vendingMachine = vendingMachine;
    }
}


/***/ }),

/***/ "./src/ts/views/View.ts":
/*!******************************!*\
  !*** ./src/ts/views/View.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/ts/utils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");
/* harmony import */ var _ProductManageView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductManageView */ "./src/ts/views/ProductManageView.ts");
/* harmony import */ var _RechargeView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RechargeView */ "./src/ts/views/RechargeView.ts");
/* harmony import */ var _PurchaseView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PurchaseView */ "./src/ts/views/PurchaseView.ts");






class View {
    constructor(vendingMachine) {
        this.hideMenu = (event) => {
            event.target === this.$userMenu
                ? false
                : this.$userMenu.shadowRoot.querySelector('#menu').classList.add('hide');
        };
        this.handleClickTabButton = (url) => {
            const detail = url;
            const event = new CustomEvent('@route-tab', { detail });
            this.$navTab.dispatchEvent(event);
        };
        this.renderPage = (url) => {
            this.$tabResult.replaceChildren();
            switch (url) {
                case _constants__WEBPACK_IMPORTED_MODULE_1__.PATH_ID.PRODUCT_MANAGE:
                    new _ProductManageView__WEBPACK_IMPORTED_MODULE_2__["default"](this.vendingMachine).render();
                    this.$tabProductManageButton.checked = true;
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_1__.PATH_ID.RECHARGE:
                    new _RechargeView__WEBPACK_IMPORTED_MODULE_3__["default"](this.vendingMachine).render();
                    this.$tabRechargeButton.checked = true;
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_1__.PATH_ID.PURCHASE_PRODUCT:
                    new _PurchaseView__WEBPACK_IMPORTED_MODULE_4__["default"](this.vendingMachine).render();
                    this.$tabPurchaseProductButton.checked = true;
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_1__.PATH_ID.LOGIN:
                    console.log('login');
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_1__.PATH_ID.SIGNUP:
                    console.log('signup');
                    break;
                default:
                    break;
            }
            // this.$notFound.classList.toggle('hide', url !== PATH_ID.NOT_FOUND);
        };
        this.removeTabs = () => {
            this.$tabResult.replaceChildren();
        };
        this.vendingMachine = vendingMachine;
        this.$app = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#app');
        this.$tabResult = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#tab-result');
        this.$notFound = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#not-found');
        this.$navTab = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.nav-tab');
        this.$$tabButtons = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$$)('.tab-input');
        this.$tabProductManageButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#tab-product-manage');
        this.$tabRechargeButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#tab-recharge');
        this.$tabPurchaseProductButton = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#tab-purchase-product');
        this.$userMenu = document.querySelector('user-menu');
        this.$tabProductManageButton.addEventListener('click', () => this.handleClickTabButton(_constants__WEBPACK_IMPORTED_MODULE_1__.PATH_ID.PRODUCT_MANAGE));
        this.$tabRechargeButton.addEventListener('click', () => this.handleClickTabButton(_constants__WEBPACK_IMPORTED_MODULE_1__.PATH_ID.RECHARGE));
        this.$tabPurchaseProductButton.addEventListener('click', () => this.handleClickTabButton(_constants__WEBPACK_IMPORTED_MODULE_1__.PATH_ID.PURCHASE_PRODUCT));
        // 웹컴포넌트에서 보낸 커스텀 이벤트
        window.addEventListener('@render-login', () => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.renderComponent)('log-in');
        });
        window.addEventListener('@render-signup', () => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.renderComponent)('sign-up');
        });
        window.addEventListener('@render-profile-edit', () => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.renderComponent)('profile-edit');
        });
        this.$app.addEventListener('click', this.hideMenu);
    }
}


/***/ }),

/***/ "./src/ts/views/template.ts":
/*!**********************************!*\
  !*** ./src/ts/views/template.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductManageTemplate": () => (/* binding */ getProductManageTemplate),
/* harmony export */   "getRechargeTemplate": () => (/* binding */ getRechargeTemplate),
/* harmony export */   "getPurchaseProduct": () => (/* binding */ getPurchaseProduct)
/* harmony export */ });
const getProductManageTemplate = `      
  <section class="tab-result-container" id="/javascript-vendingmachine/#!/product-manage">
    <h2 hidden>상품 관리</h2>
    <div class="tab-result-wrapper">
      <form id="product-manage-form">
        <div class="label-wrapper">
          <label for="product-name">추가할 상품 정보를 입력해주세요.</label>
        </div>
        <input class="product-manage-input" id="product-name" placeholder="상품명" type="text" size="10" minlength="1" maxlength="10" required />
        <input class="product-manage-input" id="product-price" placeholder="가격" type="number" step="10" min="100" max="100000" required />
        <input class="product-manage-input" id="product-quantity" placeholder="수량" type="number" min="1" max="20" required />
        <button class="short-button" id="add-button">추가</button>
      </form>
      <table>
        <colgroup>
          <col></col>
          <col></col>
          <col></col>
        </colgroup>
        <caption>
          상품 현황
        </caption>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="current-product-table"></tbody>
      </table>
    </div>
  </section> 
`;
const getRechargeTemplate = `
  <section class="tab-result-container" id="/javascript-vendingmachine/#!/recharge">
    <h2 hidden>잔돈 충전</h2>
    <div class="tab-result-wrapper">
      <form id="recharge-form">
        <div class="label-wrapper">
          <label for="recharge-input">자판기가 보유할 금액을 입력해주세요</label>
        </div>
        <input class="long-input" id="recharge-input" placeholder="금액" type="number" step="10" max="100000" min="10" required />
        <button class="short-button" id="recharge-button">충전</button>
        <div class="holding-money-wrapper">현재 보유 금액: <span id="current-holding-money"></span>원</div>
      </form>
      <table class="change-table">
        <colgroup>
          <col style="width:30%"></col>
          <col style="width:30%"></col>
        </colgroup>
        <caption>
          자판기가 보유한 동전
        </caption>
        <thead>
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>500원</td>
            <td><span id="coin-500"></span>개</td>
          </tr>
          <tr>
            <td>100원</td>
            <td><span id="coin-100"></span>개</td>
          </tr>
          <tr>
            <td>50원</td>
            <td><span id="coin-50"></span>개</td>
          </tr>
          <tr>
            <td>10원</td>
            <td><span id="coin-10"></span>개</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
`;
const getPurchaseProduct = `
  <section class="tab-result-container" id="/javascript-vendingmachine/#!/purchase-product">
    <h2 hidden>상품 구매</h2>
    <div class="tab-result-wrapper">
      <div>
        <form id="insert-money-form">
          <div class="label-wrapper">
            <label for="insert-money-input">상품을 구매할 금액을 투입해주세요</label>
          </div>
          <input class="long-input" id="insert-money-input" placeholder="금액" type="number" step="10" max="10000" min="10" required />
          <button class="short-button" id="insert-button">투입</button>
          <div class="holding-money-wrapper">투입한 금액: <span id="current-inserted-money">0</span>원</div>
        </form>
      </div>

      <div>
        <table>
          <colgroup>
            <col></col>
            <col></col>
            <col></col>
          </colgroup>
          <caption>
            구매 가능 상품 현황
          </caption>
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
              <th>구매</th>
            </tr>
          </thead>
          <tbody id="purchasable-product-table"></tbody>
        </table>
      </div>

      <div>
        <table class="change-table">
          <colgroup>
            <col style="width:30%"></col>
            <col style="width:30%"></col>
          </colgroup>
          <caption>
            잔돈 반환
          </caption>
          <thead>
            <tr>
              <th>동전</th>
              <th>개수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>500원</td>
              <td><span id="purchase-tab-coin-500">0</span>개</td>
            </tr>
            <tr>
              <td>100원</td>
              <td><span id="purchase-tab-coin-100">0</span>개</td>
            </tr>
            <tr>
              <td>50원</td>
              <td><span id="purchase-tab-coin-50">0</span>개</td>
            </tr>
            <tr>
              <td>10원</td>
              <td><span id="purchase-tab-coin-10">0</span>개</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button id="refund-button" class="long-button">반환</button>
    </div>
  </section>
`;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _ts_views_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/views/View */ "./src/ts/views/View.ts");
/* harmony import */ var _ts_domains_VendingMachine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts/domains/VendingMachine */ "./src/ts/domains/VendingMachine.ts");
/* harmony import */ var _ts_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ts/router */ "./src/ts/router.ts");
/* harmony import */ var _ts_Auth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ts/Auth.js */ "./src/ts/Auth.js");
/* harmony import */ var _ts_components_ToastNotification_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ts/components/ToastNotification.ts */ "./src/ts/components/ToastNotification.ts");
/* harmony import */ var _ts_components_Signup_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ts/components/Signup.ts */ "./src/ts/components/Signup.ts");
/* harmony import */ var _ts_components_Login_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ts/components/Login.ts */ "./src/ts/components/Login.ts");
/* harmony import */ var _ts_components_ProfileEdit_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ts/components/ProfileEdit.ts */ "./src/ts/components/ProfileEdit.ts");
/* harmony import */ var _ts_components_UserMenu_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ts/components/UserMenu.ts */ "./src/ts/components/UserMenu.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











(() => __awaiter(void 0, void 0, void 0, function* () {
    yield _ts_Auth_js__WEBPACK_IMPORTED_MODULE_5__["default"].checkUserLoginStatus();
    const vendingMachine = new _ts_domains_VendingMachine__WEBPACK_IMPORTED_MODULE_3__["default"]();
    const view = new _ts_views_View__WEBPACK_IMPORTED_MODULE_2__["default"](vendingMachine);
    new _ts_router__WEBPACK_IMPORTED_MODULE_4__["default"](view);
}))();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map