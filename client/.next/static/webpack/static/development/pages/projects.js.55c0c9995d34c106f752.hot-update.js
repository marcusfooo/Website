webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./components/ProjectTable.js":
/*!************************************!*\
  !*** ./components/ProjectTable.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\components\\ProjectTable.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ProjectTable = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ProjectTable, _React$Component);

  var _super = _createSuper(ProjectTable);

  function ProjectTable(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProjectTable);

    _this = _super.call(this, props);
    _this.state = {
      data: [{}]
    };
    _this.fetchGithub = _this.fetchGithub.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProjectTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchGithub();
    }
  }, {
    key: "fetchGithub",
    value: function fetchGithub() {
      var _this2 = this;

      var query = "\n    query {\n      repos {\n        id\n        name\n        description\n        url\n        language\n      }\n    }\n    ";
      var url = "/graphql";
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: query
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return _this2.setState({
          data: res.data.repos
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        style: {
          textAlign: "center"
        },
        className: "jsx-2116736506",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }
      }, __jsx("div", {
        style: {
          maxWidth: "80vw",
          display: "inline-block",
          fontFamily: "Roboto"
        },
        className: "jsx-2116736506" + " " + "tableContainer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Table"], {
        bordered: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, __jsx("thead", {
        style: {
          background: "#808080",
          borderStyle: "inset"
        },
        className: "jsx-2116736506",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx("tr", {
        className: "jsx-2116736506",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, __jsx("th", {
        className: "jsx-2116736506",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, "ID"), __jsx("th", {
        className: "jsx-2116736506",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, "Repository Name"), __jsx("th", {
        className: "jsx-2116736506",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, "Description"), __jsx("th", {
        className: "jsx-2116736506",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, "Language"))), this.state.data.map(function (row) {
        var _jsx;

        return __jsx("tr", {
          scope: "row",
          className: "jsx-2116736506",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 37
          }
        }, __jsx("td", {
          className: "jsx-2116736506",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 53
          }
        }, row.id), __jsx("td", {
          className: "jsx-2116736506",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 70
          }
        }, __jsx("a", (_jsx = {
          href: true,
          target: "_blank"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "href", row.url), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-2116736506"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 74
        }), _jsx), row.name)), __jsx("td", {
          className: "jsx-2116736506",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 132
          }
        }, row.description), __jsx("td", {
          className: "jsx-2116736506",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 158
          }
        }, row.language));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2116736506",
        __self: this
      }, "@media (max-width:768px){.tableContainer.jsx-2116736506{overflow:scroll;margin-bottom:5vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxQcm9qZWN0VGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RvQixBQUlpQyxnQkFDRSxrQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXJjdXNcXERlc2t0b3BcXFByb2plY3RzXFxXZWJzaXRlXFxjbGllbnRcXGNvbXBvbmVudHNcXFByb2plY3RUYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBQcm9qZWN0VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IGRhdGE6IFt7fV19O1xyXG4gICAgdGhpcy5mZXRjaEdpdGh1YiA9IHRoaXMuZmV0Y2hHaXRodWIuYmluZCh0aGlzKVxyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgdGhpcy5mZXRjaEdpdGh1YigpXHJcbiB9XHJcbiAgZmV0Y2hHaXRodWIoKSB7ICAgIFxyXG4gICAgY29uc3QgcXVlcnkgPSBgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIHJlcG9zIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIHVybFxyXG4gICAgICAgIGxhbmd1YWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGA7XHJcbiAgY29uc3QgdXJsID0gXCIvZ3JhcGhxbFwiO1xyXG4gIGZldGNoKHVybCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7IFxyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICAgICAgXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeTogcXVlcnkgfSksXHJcbiAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzID0+IHRoaXMuc2V0U3RhdGUoe2RhdGE6IHJlcy5kYXRhLnJlcG9zfSkpXHJcblxyXG59XHJcbiAgcmVuZGVyKCkge1xyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZUNvbnRhaW5lclwic3R5bGU9IHt7bWF4V2lkdGg6XCI4MHZ3XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIGZvbnRGYW1pbHk6XCJSb2JvdG9cIn19PlxyXG4gICAgICAgIDxUYWJsZSBib3JkZXJlZD5cclxuICAgICAgICA8dGhlYWQgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzgwODA4MFwiLCBib3JkZXJTdHlsZTpcImluc2V0XCJ9fT5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+SUQ8L3RoPlxyXG4gICAgICAgICAgPHRoPlJlcG9zaXRvcnkgTmFtZTwvdGg+XHJcbiAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgPHRoPkxhbmd1YWdlPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKHJvdyA9PiA8dHIgc2NvcGU9XCJyb3dcIj48dGQ+e3Jvdy5pZH08L3RkPjx0ZD48YSBocmVmIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3Jvdy51cmx9Pntyb3cubmFtZX08L2E+PC90ZD48dGQ+e3Jvdy5kZXNjcmlwdGlvbn08L3RkPjx0ZD57cm93Lmxhbmd1YWdlfTwvdGQ+PC90cj4gKX1cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAudGFibGVDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9IDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICApO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFRhYmxlOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Marcus\\\\Desktop\\\\Projects\\\\Website\\\\client\\\\components\\\\ProjectTable.js */"));
    }
  }]);

  return ProjectTable;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProjectTable);

/***/ })

})
//# sourceMappingURL=projects.js.55c0c9995d34c106f752.hot-update.js.map