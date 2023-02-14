/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/menu-bg.jpg */ "./src/images/menu-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/contacts-bg.jpg */ "./src/images/contacts-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --ff-primary: \"Raleway\", sans-serif;\n  --ff-accent: \"Lobster\", cursive;\n  --c-light: #fff;\n  --c-dark: #000;\n  --c-accent-dark: #392e2d;\n  --c-body: var(--c-light);\n  --c-text: var(--c-dark);\n  --c-text-muted: #282828;\n  --c-button: #d21200;\n}\n\n/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nul,\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n/* <-- reset */\nhtml {\n  overflow-y: scroll;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  background-color: var(--c-body);\n  color: var(--c-text);\n  font-family: var(--ff-primary);\n  scrollbar-gutter: stable;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.btn {\n  text-transform: uppercase;\n  text-align: center;\n  white-space: nowrap;\n  font-weight: 600;\n  border-style: none;\n  border-radius: 8px;\n  padding: 15px 63px 16px 62px;\n  background-color: var(--c-button);\n  color: var(--c-light);\n}\n.btn:hover {\n  background-color: var(--c-dark);\n}\n\n.card {\n  padding: 20px;\n  gap: 15px;\n  background-color: var(--c-light);\n  color: var(--c-dark);\n}\n.card h3 {\n  font-size: 1.5rem;\n  line-height: 1.2;\n}\n@media (min-width: 760px) {\n  .card {\n    padding: 30px;\n  }\n}\n\n.container {\n  max-width: 1200px;\n  padding: 1rem;\n  margin: 0 auto;\n}\n\n.header .container {\n  display: grid;\n  gap: 10px;\n}\n.header .logo {\n  font-family: var(--ff-accent);\n  font-size: 2.5rem;\n  line-height: 2.7rem;\n}\n.header nav ul {\n  display: flex;\n  gap: 10px;\n  padding: 0;\n}\n.header nav ul a {\n  display: block;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n@media (min-width: 760px) {\n  .header .container {\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    padding: 1.5rem;\n  }\n  .header nav {\n    justify-self: center;\n  }\n  .header nav ul {\n    gap: 40px;\n  }\n  .header nav ul a {\n    font-size: 1.7rem;\n  }\n}\n\nnav a.active,\nnav a:hover {\n  border-bottom: 2px solid currentColor;\n}\n\nmain {\n  display: grid;\n}\n\n.footer {\n  text-align: center;\n  padding: 1rem;\n  background: var(--c-dark);\n  color: var(--c-light);\n  font-family: system-ui, sans-serif;\n}\n\n.home {\n  background-color: #f9cfb6;\n}\n\n.hero-cards {\n  width: 80%;\n  margin: 50px auto;\n}\n.hero-cards .card-right img {\n  min-height: 400px;\n  object-fit: cover;\n}\n@media (min-width: 760px) {\n  .hero-cards {\n    display: flex;\n  }\n  .hero-cards > div {\n    flex: 1 1 50%;\n  }\n  .hero-cards .card-right img {\n    min-height: 100%;\n  }\n}\n\n.hero-card {\n  display: flex;\n  flex-direction: column;\n  padding: 40px 20px;\n}\n.hero-card img {\n  width: 165px;\n  height: 165px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.hero-card p {\n  font-weight: 700;\n}\n@media (min-width: 760px) {\n  .hero-card {\n    padding: 40px;\n    gap: 20px;\n  }\n  .hero-card img {\n    width: 234px;\n    height: 234px;\n  }\n  .hero-card p {\n    margin-right: 30px;\n  }\n  .hero-card a.btn {\n    align-self: flex-start;\n  }\n}\n\n.menu {\n  background-color: var(--c-dark);\n  color: var(--c-light);\n}\n\n.menu-bg {\n  width: 100%;\n  height: 400px;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.menu-bg h1 {\n  text-align: center;\n  font-family: var(--ff-accent);\n  font-size: 2.2rem;\n  padding-top: 139px;\n  text-shadow: 2px 2px 13px rgba(0, 0, 0, 0.35);\n}\n@media (min-width: 760px) {\n  .menu-bg {\n    height: 600px;\n  }\n  .menu-bg h1 {\n    padding-top: 200px;\n    font-size: 3.75rem;\n  }\n}\n\n.menu-cards {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  margin-top: -120px;\n  animation: fadeIn 1s;\n}\n@media (min-width: 760px) {\n  .menu-cards {\n    grid-template-columns: 1fr 1fr;\n    margin-top: -180px;\n  }\n}\n@media (min-width: 1000px) {\n  .menu-cards {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n.menu-card {\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 760px) {\n  .menu-card img {\n    height: 258px;\n    object-fit: cover;\n  }\n}\n\n.contacts {\n  width: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.contacts-cards {\n  display: grid;\n  gap: 21px;\n  width: 80%;\n  margin: 160px auto 20px;\n  animation: fadeIn 1s;\n}\n@media (min-width: 760px) {\n  .contacts-cards {\n    width: 100%;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1000px) {\n  .contacts-cards {\n    grid-template-columns: repeat(4, 1fr);\n    margin: 280px auto 20px;\n  }\n}\n\n.contacts-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border-radius: 20px;\n}\n.contacts-card img {\n  width: 64px;\n}\n.contacts-card h5 {\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n.contacts-card p {\n  font-family: system-ui, sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --ff-primary: 'Raleway', sans-serif;\r\n  --ff-accent: 'Lobster', cursive;\r\n  --c-light: #fff;\r\n  --c-dark: #000;\r\n  --c-accent-dark: #392e2d;\r\n  --c-body: var(--c-light);\r\n  --c-text: var(--c-dark);\r\n  --c-text-muted: #282828;\r\n  --c-button: #d21200;\r\n}\r\n\r\n/*\r\n  Josh's Custom CSS Reset\r\n  https://www.joshwcomeau.com/css/custom-css-reset/\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n* {\r\n  margin: 0;\r\n}\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\nul,\r\nli {\r\n  list-style: none;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n/* <-- reset */\r\n\r\n$breakpoints: (\r\n  'medium': (\r\n    min-width: 760px,\r\n  ),\r\n  'large': (\r\n    min-width: 1000px,\r\n  ),\r\n  'huge': (\r\n    min-width: 1200px,\r\n  ),\r\n);\r\n\r\n/// Responsive breakpoint manager\r\n/// @access public\r\n/// @param {String} $breakpoint - Breakpoint\r\n/// @requires $breakpoints\r\n@mixin respond-to($breakpoint) {\r\n  $raw-query: map-get($breakpoints, $breakpoint);\r\n\r\n  @if $raw-query {\r\n    $query: if(\r\n      type-of($raw-query) == 'string',\r\n      unquote($raw-query),\r\n      inspect($raw-query)\r\n    );\r\n\r\n    @media #{$query} {\r\n      @content;\r\n    }\r\n  } @else {\r\n    @error 'No value found for `#{$breakpoint}`. '\r\n         + 'Please make sure it is defined in `$breakpoints` map.';\r\n  }\r\n}\r\n\r\nhtml {\r\n  overflow-y: scroll;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n  background-color: var(--c-body);\r\n  color: var(--c-text);\r\n  font-family: var(--ff-primary);\r\n  scrollbar-gutter: stable;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.btn {\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  font-weight: 600;\r\n  border-style: none;\r\n  border-radius: 8px;\r\n  padding: 15px 63px 16px 62px;\r\n  background-color: var(--c-button);\r\n  color: var(--c-light);\r\n\r\n  &:hover {\r\n    background-color: var(--c-dark);\r\n  }\r\n}\r\n\r\n.card {\r\n  padding: 20px;\r\n  gap: 15px;\r\n  background-color: var(--c-light);\r\n  color: var(--c-dark);\r\n\r\n  h3 {\r\n    font-size: 1.5rem;\r\n    line-height: 1.2;\r\n  }\r\n\r\n  @include respond-to('medium') {\r\n    padding: 30px;\r\n  }\r\n}\r\n\r\n.container {\r\n  max-width: 1200px;\r\n  padding: 1rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header {\r\n  .container {\r\n    display: grid;\r\n    gap: 10px;\r\n  }\r\n\r\n  .logo {\r\n    font-family: var(--ff-accent);\r\n    font-size: 2.5rem;\r\n    line-height: 2.7rem;\r\n  }\r\n\r\n  nav ul {\r\n    display: flex;\r\n    gap: 10px;\r\n    padding: 0;\r\n\r\n    a {\r\n      display: block;\r\n      font-size: 1.2rem;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  @include respond-to('medium') {\r\n    .container {\r\n      grid-template-columns: repeat(3, 1fr);\r\n      align-items: center;\r\n      padding: 1.5rem;\r\n    }\r\n\r\n    nav {\r\n      justify-self: center;\r\n\r\n      ul {\r\n        gap: 40px;\r\n\r\n        a {\r\n          font-size: 1.7rem;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nnav a.active,\r\nnav a:hover {\r\n  border-bottom: 2px solid currentColor;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n}\r\n\r\n.footer {\r\n  text-align: center;\r\n  padding: 1rem;\r\n  background: var(--c-dark);\r\n  color: var(--c-light);\r\n  font-family: system-ui, sans-serif;\r\n}\r\n\r\n.home {\r\n  background-color: #f9cfb6;\r\n}\r\n\r\n.hero-cards {\r\n  width: 80%;\r\n  margin: 50px auto;\r\n\r\n  .card-right {\r\n    img {\r\n      min-height: 400px;\r\n      object-fit: cover;\r\n    }\r\n  }\r\n\r\n  @include respond-to('medium') {\r\n    display: flex;\r\n\r\n    & > div {\r\n      flex: 1 1 50%;\r\n    }\r\n\r\n    .card-right {\r\n      img {\r\n        min-height: 100%;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.hero-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 40px 20px;\r\n\r\n  img {\r\n    width: 165px;\r\n    height: 165px;\r\n    border-radius: 50%;\r\n    object-fit: cover;\r\n  }\r\n\r\n  p {\r\n    font-weight: 700;\r\n  }\r\n\r\n  @include respond-to('medium') {\r\n    padding: 40px;\r\n    gap: 20px;\r\n\r\n    img {\r\n      width: 234px;\r\n      height: 234px;\r\n    }\r\n\r\n    p {\r\n      margin-right: 30px;\r\n    }\r\n\r\n    a.btn {\r\n      align-self: flex-start;\r\n    }\r\n  }\r\n}\r\n\r\n.menu {\r\n  background-color: var(--c-dark);\r\n  color: var(--c-light);\r\n}\r\n\r\n.menu-bg {\r\n  width: 100%;\r\n  height: 400px;\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),\r\n    url('images/menu-bg.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n\r\n  h1 {\r\n    text-align: center;\r\n    font-family: var(--ff-accent);\r\n    font-size: 2.2rem;\r\n    padding-top: 139px;\r\n    text-shadow: 2px 2px 13px rgb(0 0 0 / 35%);\r\n  }\r\n\r\n  @include respond-to('medium') {\r\n    height: 600px;\r\n\r\n    h1 {\r\n      padding-top: 200px;\r\n      font-size: 3.75rem;\r\n    }\r\n  }\r\n}\r\n\r\n.menu-cards {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 20px;\r\n  margin-top: -120px;\r\n  animation: fadeIn 1s;\r\n\r\n  @include respond-to('medium') {\r\n    grid-template-columns: 1fr 1fr;\r\n    margin-top: -180px;\r\n  }\r\n\r\n  @include respond-to('large') {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n.menu-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  @include respond-to('medium') {\r\n    img {\r\n      height: 258px;\r\n      object-fit: cover;\r\n    }\r\n  }\r\n}\r\n\r\n.contacts {\r\n  width: 100%;\r\n  background-image: url('images/contacts-bg.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.contacts-cards {\r\n  display: grid;\r\n  gap: 21px;\r\n  width: 80%;\r\n  margin: 160px auto 20px;\r\n  animation: fadeIn 1s;\r\n\r\n  @include respond-to('medium') {\r\n    width: 100%;\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  @include respond-to('large') {\r\n    grid-template-columns: repeat(4, 1fr);\r\n    margin: 280px auto 20px;\r\n  }\r\n}\r\n\r\n.contacts-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  border-radius: 20px;\r\n\r\n  img {\r\n    width: 64px;\r\n  }\r\n\r\n  h5 {\r\n    text-transform: uppercase;\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n  }\r\n\r\n  p {\r\n    font-family: system-ui, sans-serif;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/js/contacts.js":
/*!****************************!*\
  !*** ./src/js/contacts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactsItems = [
  {
    img: 'images/icon-1.png',
    title: 'our main office',
    para: 'SoHo 94 Broadway St New York, NY 1001',
  },
  {
    img: 'images/icon-2.png',
    title: 'PHONE NUMBER',
    para: '234-9876-5400 <br> 888-0123-4567 (Toll Free)',
  },
  {
    img: 'images/icon-3.png',
    title: 'FAX',
    para: '1-234-567-8900',
  },
  {
    img: 'images/icon-4.png',
    title: 'email',
    para: 'hello@freshy.com',
  },
];

const cardHtml = (cardItem) => /* html */ `
    <div class="card contacts-card">
      <img src=${cardItem.img} />
      <h5>${cardItem.title}</h5>
      <p>${cardItem.para}</p>
    </div>
`;

const contactsHtml = /* html */ `
    <div class="contacts">
      <div class="container">
        <div class="contacts-cards">
          ${contactsItems.map((item) => cardHtml(item)).join('')}
        </div>
      </div>
    </div>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactsHtml);


/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homeHtml = /* html */ `
    <div class="home">
      <div class="container">
        <div class="hero-cards">
          <div class="card hero-card">
            <img src="images/sauted-mixed-vegetables.jpg" />
            <p>
                Vitae congue mauris rhoncus aenean vel elit scelerisque.
                Consequat nisl vel pretium lectus quam id leo in vitae. Dictum
                sit amet justo donec enim diam vulputate. Sociis natoque
                penatibus et magnis dis parturient. Molestie ac feugiat sed
                lectus vestibulum mattis.
            </p>
            <a href="#" class="btn">learn more</a>
            </div>
            <div class="card-right">
            <img src="images/esrt.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeHtml);


/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/js/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts */ "./src/js/contacts.js");




/**
 * Replace innerHTML of the nodeElement
 * @param { Node } nodeElement
 * @param { String } html
 */
const render = (nodeElement, html) => {
  if (!nodeElement) return;
  nodeElement.innerHTML = html;
};

// Initialize
const init = () => {
  const content = document.querySelector('#content');
  const homeTab = document.querySelector('.header nav a[data-tab="home"]');
  const menuTab = document.querySelector(`.header nav a[data-tab="menu"]`);
  const contactsTab = document.querySelector(
    `.header nav a[data-tab="contacts"]`
  );

  // Render pages content on tab clicked
  homeTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    render(content, _home__WEBPACK_IMPORTED_MODULE_0__["default"]);
  });

  menuTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    render(content, _menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
  });

  contactsTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    render(content, _contacts__WEBPACK_IMPORTED_MODULE_2__["default"]);
  });

  const tabs = document.querySelectorAll('.header nav a');

  // Set active tab
  tabs.forEach((clickedTab) => {
    clickedTab.addEventListener('click', (e) => {
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });
      e.target.classList.add('active');
    });
  });

  // Render Home page
  render(content, _home__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);


/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menuItems = [
  {
    title: 'Cheese Pizza',
    description:
      'Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.',
    img: 'images/1.jpg',
  },
  {
    title: 'Pepperoni Pizza',
    description:
      'Get our classic Pepperoni pizza with your choice of sauce and crust.',
    img: 'images/2.jpg',
  },
  {
    title: 'Vegetarian Pizza',
    description:
      'Tomato Sauce, Mozzarella, Green Pepper, Onions, Fresh Mushrooms, Tomatoes, and Black Olives.',
    img: 'images/3.jpg',
  },
  {
    title: 'Original',
    description: 'Tomato sauce, mozzarella & oregano',
    img: 'images/4.jpg',
  },
  {
    title: 'Salami',
    description: 'Tomato sauce, mozzarella & mild salami.',
    img: 'images/5.jpg',
  },
  {
    title: 'Chicken',
    description: 'Tomato sauce, mozzarella, chicken, pineapple* & bbq sauce.',
    img: 'images/6.jpg',
  },
];

const cardHtml = (menuItem) => /* html */ `
    <div class="card menu-card">
        <img src=${menuItem.img} />
        <h3>${menuItem.title}</h3>
        <p>${menuItem.description}</p>
    </div>
`;

const menuHtml = /* html */ `
    <div class="menu">
      <div class="menu-bg">
        <h1>Italy Pizza Menu</h1>
      </div>

      <div class="container">
        <div class="menu-cards"> 
          ${menuItems.map((item) => cardHtml(item)).join('')}
        </div>
      </div>
    </div>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuHtml);


/***/ }),

/***/ "./src/images/contacts-bg.jpg":
/*!************************************!*\
  !*** ./src/images/contacts-bg.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a05366b10cb38f57f88.jpg";

/***/ }),

/***/ "./src/images/menu-bg.jpg":
/*!********************************!*\
  !*** ./src/images/menu-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5967acc32cfc9618b895.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _js_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/init */ "./src/js/init.js");



(0,_js_init__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxpQ0FBaUMsMENBQTBDLHNDQUFzQyxzQkFBc0IscUJBQXFCLCtCQUErQiwrQkFBK0IsOEJB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LG1CQUFtQixjQUFjO0FBQ2pDLGNBQWMsZUFBZTtBQUM3QixhQUFhLHFCQUFxQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFEeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ087QUFDN0I7QUFDQSxvREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2pzL2NvbnRhY3RzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvanMvaG9tZS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2pzL2luaXQuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL21lbnUtYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2NvbnRhY3RzLWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWZmLXByaW1hcnk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tZmYtYWNjZW50OiBcXFwiTG9ic3RlclxcXCIsIGN1cnNpdmU7XFxuICAtLWMtbGlnaHQ6ICNmZmY7XFxuICAtLWMtZGFyazogIzAwMDtcXG4gIC0tYy1hY2NlbnQtZGFyazogIzM5MmUyZDtcXG4gIC0tYy1ib2R5OiB2YXIoLS1jLWxpZ2h0KTtcXG4gIC0tYy10ZXh0OiB2YXIoLS1jLWRhcmspO1xcbiAgLS1jLXRleHQtbXV0ZWQ6ICMyODI4Mjg7XFxuICAtLWMtYnV0dG9uOiAjZDIxMjAwO1xcbn1cXG5cXG4vKlxcbiAgSm9zaCdzIEN1c3RvbSBDU1MgUmVzZXRcXG4gIGh0dHBzOi8vd3d3Lmpvc2h3Y29tZWF1LmNvbS9jc3MvY3VzdG9tLWNzcy1yZXNldC9cXG4qL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qIDwtLSByZXNldCAqL1xcbmh0bWwge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWJvZHkpO1xcbiAgY29sb3I6IHZhcigtLWMtdGV4dCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxuICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGU7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uYnRuIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDE1cHggNjNweCAxNnB4IDYycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWJ1dHRvbik7XFxuICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxufVxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1kYXJrKTtcXG59XFxuXFxuLmNhcmQge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtbGlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWMtZGFyayk7XFxufVxcbi5jYXJkIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2MHB4KSB7XFxuICAuY2FyZCB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICB9XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5oZWFkZXIgLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uaGVhZGVyIC5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1hY2NlbnQpO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBsaW5lLWhlaWdodDogMi43cmVtO1xcbn1cXG4uaGVhZGVyIG5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmhlYWRlciBuYXYgdWwgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzYwcHgpIHtcXG4gIC5oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gIH1cXG4gIC5oZWFkZXIgbmF2IHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuICAuaGVhZGVyIG5hdiB1bCB7XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG4gIC5oZWFkZXIgbmF2IHVsIGEge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gIH1cXG59XFxuXFxubmF2IGEuYWN0aXZlLFxcbm5hdiBhOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYy1kYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XFxufVxcblxcbi5ob21lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWNmYjY7XFxufVxcblxcbi5oZXJvLWNhcmRzIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG59XFxuLmhlcm8tY2FyZHMgLmNhcmQtcmlnaHQgaW1nIHtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjBweCkge1xcbiAgLmhlcm8tY2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmhlcm8tY2FyZHMgPiBkaXYge1xcbiAgICBmbGV4OiAxIDEgNTAlO1xcbiAgfVxcbiAgLmhlcm8tY2FyZHMgLmNhcmQtcmlnaHQgaW1nIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLmhlcm8tY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcXG59XFxuLmhlcm8tY2FyZCBpbWcge1xcbiAgd2lkdGg6IDE2NXB4O1xcbiAgaGVpZ2h0OiAxNjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uaGVyby1jYXJkIHAge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2MHB4KSB7XFxuICAuaGVyby1jYXJkIHtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgfVxcbiAgLmhlcm8tY2FyZCBpbWcge1xcbiAgICB3aWR0aDogMjM0cHg7XFxuICAgIGhlaWdodDogMjM0cHg7XFxuICB9XFxuICAuaGVyby1jYXJkIHAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICB9XFxuICAuaGVyby1jYXJkIGEuYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIH1cXG59XFxuXFxuLm1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1kYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXG59XFxuXFxuLm1lbnUtYmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xNSksIHJnYmEoMCwgMCwgMCwgMC4xNSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcbi5tZW51LWJnIGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1hY2NlbnQpO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBwYWRkaW5nLXRvcDogMTM5cHg7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjBweCkge1xcbiAgLm1lbnUtYmcge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgfVxcbiAgLm1lbnUtYmcgaDEge1xcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcXG4gIH1cXG59XFxuXFxuLm1lbnUtY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogLTEyMHB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjBweCkge1xcbiAgLm1lbnUtY2FyZHMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIG1hcmdpbi10b3A6IC0xODBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgLm1lbnUtY2FyZHMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgfVxcbn1cXG5cXG4ubWVudS1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzYwcHgpIHtcXG4gIC5tZW51LWNhcmQgaW1nIHtcXG4gICAgaGVpZ2h0OiAyNThweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB9XFxufVxcblxcbi5jb250YWN0cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3RzLWNhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIxcHg7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxNjBweCBhdXRvIDIwcHg7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2MHB4KSB7XFxuICAuY29udGFjdHMtY2FyZHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgLmNvbnRhY3RzLWNhcmRzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgbWFyZ2luOiAyODBweCBhdXRvIDIwcHg7XFxuICB9XFxufVxcblxcbi5jb250YWN0cy1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5jb250YWN0cy1jYXJkIGltZyB7XFxuICB3aWR0aDogNjRweDtcXG59XFxuLmNvbnRhY3RzLWNhcmQgaDUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmNvbnRhY3RzLWNhcmQgcCB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTs7O0NBQUE7QUFJQTs7O0VBR0Usc0JBQUE7QUFDRjs7QUFDQTtFQUNFLFNBQUE7QUFFRjs7QUFBQTs7RUFFRSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLG1DQUFBO0FBSUY7O0FBRkE7Ozs7O0VBS0UsY0FBQTtFQUNBLGVBQUE7QUFLRjs7QUFIQTs7OztFQUlFLGFBQUE7QUFNRjs7QUFKQTs7Ozs7OztFQU9FLHlCQUFBO0FBT0Y7O0FBTEE7O0VBRUUsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQVNGOztBQU5BLGNBQUE7QUFxQ0E7RUFDRSxrQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQTNCRjs7QUE4QkE7RUFDRTtJQUNFLFVBQUE7RUEzQkY7RUE4QkE7SUFDRSxVQUFBO0VBNUJGO0FBQ0Y7QUErQkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUE3QkY7QUErQkU7RUFDRSwrQkFBQTtBQTdCSjs7QUFpQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUE5QkY7QUFnQ0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFB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J1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1mZi1hY2NlbnQ6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG4gIC0tYy1saWdodDogI2ZmZjtcXHJcXG4gIC0tYy1kYXJrOiAjMDAwO1xcclxcbiAgLS1jLWFjY2VudC1kYXJrOiAjMzkyZTJkO1xcclxcbiAgLS1jLWJvZHk6IHZhcigtLWMtbGlnaHQpO1xcclxcbiAgLS1jLXRleHQ6IHZhcigtLWMtZGFyayk7XFxyXFxuICAtLWMtdGV4dC1tdXRlZDogIzI4MjgyODtcXHJcXG4gIC0tYy1idXR0b246ICNkMjEyMDA7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICBKb3NoJ3MgQ3VzdG9tIENTUyBSZXNldFxcclxcbiAgaHR0cHM6Ly93d3cuam9zaHdjb21lYXUuY29tL2Nzcy9jdXN0b20tY3NzLXJlc2V0L1xcclxcbiovXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbn1cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcbnAsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPC0tIHJlc2V0ICovXFxyXFxuXFxyXFxuJGJyZWFrcG9pbnRzOiAoXFxyXFxuICAnbWVkaXVtJzogKFxcclxcbiAgICBtaW4td2lkdGg6IDc2MHB4LFxcclxcbiAgKSxcXHJcXG4gICdsYXJnZSc6IChcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAwcHgsXFxyXFxuICApLFxcclxcbiAgJ2h1Z2UnOiAoXFxyXFxuICAgIG1pbi13aWR0aDogMTIwMHB4LFxcclxcbiAgKSxcXHJcXG4pO1xcclxcblxcclxcbi8vLyBSZXNwb25zaXZlIGJyZWFrcG9pbnQgbWFuYWdlclxcclxcbi8vLyBAYWNjZXNzIHB1YmxpY1xcclxcbi8vLyBAcGFyYW0ge1N0cmluZ30gJGJyZWFrcG9pbnQgLSBCcmVha3BvaW50XFxyXFxuLy8vIEByZXF1aXJlcyAkYnJlYWtwb2ludHNcXHJcXG5AbWl4aW4gcmVzcG9uZC10bygkYnJlYWtwb2ludCkge1xcclxcbiAgJHJhdy1xdWVyeTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcXHJcXG5cXHJcXG4gIEBpZiAkcmF3LXF1ZXJ5IHtcXHJcXG4gICAgJHF1ZXJ5OiBpZihcXHJcXG4gICAgICB0eXBlLW9mKCRyYXctcXVlcnkpID09ICdzdHJpbmcnLFxcclxcbiAgICAgIHVucXVvdGUoJHJhdy1xdWVyeSksXFxyXFxuICAgICAgaW5zcGVjdCgkcmF3LXF1ZXJ5KVxcclxcbiAgICApO1xcclxcblxcclxcbiAgICBAbWVkaWEgI3skcXVlcnl9IHtcXHJcXG4gICAgICBAY29udGVudDtcXHJcXG4gICAgfVxcclxcbiAgfSBAZWxzZSB7XFxyXFxuICAgIEBlcnJvciAnTm8gdmFsdWUgZm91bmQgZm9yIGAjeyRicmVha3BvaW50fWAuICdcXHJcXG4gICAgICAgICArICdQbGVhc2UgbWFrZSBzdXJlIGl0IGlzIGRlZmluZWQgaW4gYCRicmVha3BvaW50c2AgbWFwLic7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWJvZHkpO1xcclxcbiAgY29sb3I6IHZhcigtLWMtdGV4dCk7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxyXFxuICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHggNjNweCAxNnB4IDYycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWJ1dHRvbik7XFxyXFxuICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1kYXJrKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtbGlnaHQpO1xcclxcbiAgY29sb3I6IHZhcigtLWMtZGFyayk7XFxyXFxuXFxyXFxuICBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgcmVzcG9uZC10bygnbWVkaXVtJykge1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1hY2NlbnQpO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIuN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gICAgYSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSByZXNwb25kLXRvKCdtZWRpdW0nKSB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbmF2IHtcXHJcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICB1bCB7XFxyXFxuICAgICAgICBnYXA6IDQwcHg7XFxyXFxuXFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbm5hdiBhLmFjdGl2ZSxcXHJcXG5uYXYgYTpob3ZlciB7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgY3VycmVudENvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWMtZGFyayk7XFxyXFxuICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxyXFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjljZmI2O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jYXJkcyB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuXFxyXFxuICAuY2FyZC1yaWdodCB7XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgbWluLWhlaWdodDogNDAwcHg7XFxyXFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8oJ21lZGl1bScpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgJiA+IGRpdiB7XFxyXFxuICAgICAgZmxleDogMSAxIDUwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FyZC1yaWdodCB7XFxyXFxuICAgICAgaW1nIHtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiA0MHB4IDIwcHg7XFxyXFxuXFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMTY1cHg7XFxyXFxuICAgIGhlaWdodDogMTY1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8oJ21lZGl1bScpIHtcXHJcXG4gICAgcGFkZGluZzogNDBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHdpZHRoOiAyMzRweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIzNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBhLmJ0biB7XFxyXFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWRhcmspO1xcclxcbiAgY29sb3I6IHZhcigtLWMtbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1iZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjE1KSwgcmdiYSgwLCAwLCAwLCAwLjE1KSksXFxyXFxuICAgIHVybCgnaW1hZ2VzL21lbnUtYmcuanBnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtYWNjZW50KTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMzlweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMTNweCByZ2IoMCAwIDAgLyAzNSUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgcmVzcG9uZC10bygnbWVkaXVtJykge1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDIwMHB4O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkcyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTIwcHg7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8oJ21lZGl1bScpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMTgwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSByZXNwb25kLXRvKCdsYXJnZScpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8oJ21lZGl1bScpIHtcXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBoZWlnaHQ6IDI1OHB4O1xcclxcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2NvbnRhY3RzLWJnLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cy1jYXJkcyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAyMXB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMTYwcHggYXV0byAyMHB4O1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSByZXNwb25kLXRvKCdtZWRpdW0nKSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgcmVzcG9uZC10bygnbGFyZ2UnKSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICAgIG1hcmdpbjogMjgwcHggYXV0byAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHMtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDY0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoNSB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGFjdHNJdGVtcyA9IFtcclxuICB7XHJcbiAgICBpbWc6ICdpbWFnZXMvaWNvbi0xLnBuZycsXHJcbiAgICB0aXRsZTogJ291ciBtYWluIG9mZmljZScsXHJcbiAgICBwYXJhOiAnU29IbyA5NCBCcm9hZHdheSBTdCBOZXcgWW9yaywgTlkgMTAwMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICdpbWFnZXMvaWNvbi0yLnBuZycsXHJcbiAgICB0aXRsZTogJ1BIT05FIE5VTUJFUicsXHJcbiAgICBwYXJhOiAnMjM0LTk4NzYtNTQwMCA8YnI+IDg4OC0wMTIzLTQ1NjcgKFRvbGwgRnJlZSknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnaW1hZ2VzL2ljb24tMy5wbmcnLFxyXG4gICAgdGl0bGU6ICdGQVgnLFxyXG4gICAgcGFyYTogJzEtMjM0LTU2Ny04OTAwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2ltYWdlcy9pY29uLTQucG5nJyxcclxuICAgIHRpdGxlOiAnZW1haWwnLFxyXG4gICAgcGFyYTogJ2hlbGxvQGZyZXNoeS5jb20nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBjYXJkSHRtbCA9IChjYXJkSXRlbSkgPT4gLyogaHRtbCAqLyBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjb250YWN0cy1jYXJkXCI+XHJcbiAgICAgIDxpbWcgc3JjPSR7Y2FyZEl0ZW0uaW1nfSAvPlxyXG4gICAgICA8aDU+JHtjYXJkSXRlbS50aXRsZX08L2g1PlxyXG4gICAgICA8cD4ke2NhcmRJdGVtLnBhcmF9PC9wPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBjb250YWN0c0h0bWwgPSAvKiBodG1sICovIGBcclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0c1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RzLWNhcmRzXCI+XHJcbiAgICAgICAgICAke2NvbnRhY3RzSXRlbXMubWFwKChpdGVtKSA9PiBjYXJkSHRtbChpdGVtKSkuam9pbignJyl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0c0h0bWw7XHJcbiIsImNvbnN0IGhvbWVIdG1sID0gLyogaHRtbCAqLyBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaG9tZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlcm8tY2FyZHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGhlcm8tY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zYXV0ZWQtbWl4ZWQtdmVnZXRhYmxlcy5qcGdcIiAvPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFZpdGFlIGNvbmd1ZSBtYXVyaXMgcmhvbmN1cyBhZW5lYW4gdmVsIGVsaXQgc2NlbGVyaXNxdWUuXHJcbiAgICAgICAgICAgICAgICBDb25zZXF1YXQgbmlzbCB2ZWwgcHJldGl1bSBsZWN0dXMgcXVhbSBpZCBsZW8gaW4gdml0YWUuIERpY3R1bVxyXG4gICAgICAgICAgICAgICAgc2l0IGFtZXQganVzdG8gZG9uZWMgZW5pbSBkaWFtIHZ1bHB1dGF0ZS4gU29jaWlzIG5hdG9xdWVcclxuICAgICAgICAgICAgICAgIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQuIE1vbGVzdGllIGFjIGZldWdpYXQgc2VkXHJcbiAgICAgICAgICAgICAgICBsZWN0dXMgdmVzdGlidWx1bSBtYXR0aXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0blwiPmxlYXJuIG1vcmU8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1yaWdodFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9lc3J0LmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVIdG1sO1xyXG4iLCJpbXBvcnQgaG9tZUh0bWwgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IG1lbnVIdG1sIGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBjb250YWN0c0h0bWwgZnJvbSAnLi9jb250YWN0cyc7XHJcblxyXG4vKipcclxuICogUmVwbGFjZSBpbm5lckhUTUwgb2YgdGhlIG5vZGVFbGVtZW50XHJcbiAqIEBwYXJhbSB7IE5vZGUgfSBub2RlRWxlbWVudFxyXG4gKiBAcGFyYW0geyBTdHJpbmcgfSBodG1sXHJcbiAqL1xyXG5jb25zdCByZW5kZXIgPSAobm9kZUVsZW1lbnQsIGh0bWwpID0+IHtcclxuICBpZiAoIW5vZGVFbGVtZW50KSByZXR1cm47XHJcbiAgbm9kZUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxufTtcclxuXHJcbi8vIEluaXRpYWxpemVcclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlciBuYXYgYVtkYXRhLXRhYj1cImhvbWVcIl0nKTtcclxuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhlYWRlciBuYXYgYVtkYXRhLXRhYj1cIm1lbnVcIl1gKTtcclxuICBjb25zdCBjb250YWN0c1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBgLmhlYWRlciBuYXYgYVtkYXRhLXRhYj1cImNvbnRhY3RzXCJdYFxyXG4gICk7XHJcblxyXG4gIC8vIFJlbmRlciBwYWdlcyBjb250ZW50IG9uIHRhYiBjbGlja2VkXHJcbiAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xyXG4gICAgcmVuZGVyKGNvbnRlbnQsIGhvbWVIdG1sKTtcclxuICB9KTtcclxuXHJcbiAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xyXG4gICAgcmVuZGVyKGNvbnRlbnQsIG1lbnVIdG1sKTtcclxuICB9KTtcclxuXHJcbiAgY29udGFjdHNUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcclxuICAgIHJlbmRlcihjb250ZW50LCBjb250YWN0c0h0bWwpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlciBuYXYgYScpO1xyXG5cclxuICAvLyBTZXQgYWN0aXZlIHRhYlxyXG4gIHRhYnMuZm9yRWFjaCgoY2xpY2tlZFRhYikgPT4ge1xyXG4gICAgY2xpY2tlZFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gUmVuZGVyIEhvbWUgcGFnZVxyXG4gIHJlbmRlcihjb250ZW50LCBob21lSHRtbCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iLCJjb25zdCBtZW51SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdDaGVlc2UgUGl6emEnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdHZXQgb3VyIE1hbmhhdHRhbiBDbGFzc2ljIENoZWVzZSBQaXp6YSB3aXRoIHlvdXIgY2hvaWNlIG9mIHNhdWNlIGFuZCBjcnVzdC4nLFxyXG4gICAgaW1nOiAnaW1hZ2VzLzEuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUGVwcGVyb25pIFBpenphJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnR2V0IG91ciBjbGFzc2ljIFBlcHBlcm9uaSBwaXp6YSB3aXRoIHlvdXIgY2hvaWNlIG9mIHNhdWNlIGFuZCBjcnVzdC4nLFxyXG4gICAgaW1nOiAnaW1hZ2VzLzIuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVmVnZXRhcmlhbiBQaXp6YScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1RvbWF0byBTYXVjZSwgTW96emFyZWxsYSwgR3JlZW4gUGVwcGVyLCBPbmlvbnMsIEZyZXNoIE11c2hyb29tcywgVG9tYXRvZXMsIGFuZCBCbGFjayBPbGl2ZXMuJyxcclxuICAgIGltZzogJ2ltYWdlcy8zLmpwZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ09yaWdpbmFsJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnVG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhICYgb3JlZ2FubycsXHJcbiAgICBpbWc6ICdpbWFnZXMvNC5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdTYWxhbWknLFxyXG4gICAgZGVzY3JpcHRpb246ICdUb21hdG8gc2F1Y2UsIG1venphcmVsbGEgJiBtaWxkIHNhbGFtaS4nLFxyXG4gICAgaW1nOiAnaW1hZ2VzLzUuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ2hpY2tlbicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RvbWF0byBzYXVjZSwgbW96emFyZWxsYSwgY2hpY2tlbiwgcGluZWFwcGxlKiAmIGJicSBzYXVjZS4nLFxyXG4gICAgaW1nOiAnaW1hZ2VzLzYuanBnJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY2FyZEh0bWwgPSAobWVudUl0ZW0pID0+IC8qIGh0bWwgKi8gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQgbWVudS1jYXJkXCI+XHJcbiAgICAgICAgPGltZyBzcmM9JHttZW51SXRlbS5pbWd9IC8+XHJcbiAgICAgICAgPGgzPiR7bWVudUl0ZW0udGl0bGV9PC9oMz5cclxuICAgICAgICA8cD4ke21lbnVJdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgbWVudUh0bWwgPSAvKiBodG1sICovIGBcclxuICAgIDxkaXYgY2xhc3M9XCJtZW51XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWJnXCI+XHJcbiAgICAgICAgPGgxPkl0YWx5IFBpenphIE1lbnU8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jYXJkc1wiPiBcclxuICAgICAgICAgICR7bWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4gY2FyZEh0bWwoaXRlbSkpLmpvaW4oJycpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudUh0bWw7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBpbml0IGZyb20gJy4vanMvaW5pdCc7XHJcblxyXG5pbml0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==