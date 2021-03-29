module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Components/ToogleButton.js":
/*!****************************************!*\
  !*** ./src/Components/ToogleButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Notebook\\Desktop\\list-links-insta\\src\\Components\\ToogleButton.js";

const SwitchInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;
const SwitchLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label`
  background:${({
  theme
}) => theme.background};
  box-shadow: ${({
  theme
}) => theme.shadowInset};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 64px;
  height: 32px;
  border-radius: 50px;
  border: none;
  align-self: flex-end;
  margin: 16px 16px 0 0;
  position: relative;
  padding: 0 0.5rem;
  transition: background-color 0.2s;
`;
const SwitchButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  background: ${({
  theme
}) => theme.background};
  content: '';
  position: absolute;
  left: 2px;
  box-shadow: 0 0.25rem 0.25rem 0.25rem var(--darkShadow);
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: none;
  transition: 0.2s;
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`;

const Switch = ({
  id,
  toggled,
  onChange
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SwitchInput, {
      className: "switch-checkbox",
      id: id,
      type: "checkbox",
      checked: toggled,
      onChange: onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SwitchLabel, {
      className: "switch-label",
      htmlFor: id,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SwitchButton, {
        className: "switch-button"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./src/context/Theme.js":
/*!******************************!*\
  !*** ./src/context/Theme.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ThemeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  switchTheme: () => {}
});
/* harmony default export */ __webpack_exports__["default"] = (ThemeContext);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_ToogleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/ToogleButton */ "./src/Components/ToogleButton.js");
/* harmony import */ var _context_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/Theme */ "./src/context/Theme.js");
/* harmony import */ var _styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/HomeStyles */ "./src/styles/HomeStyles.js");

var _jsxFileName = "C:\\Users\\Notebook\\Desktop\\list-links-insta\\src\\pages\\index.js";





function Home() {
  const {
    switchTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_Theme__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const {
    0: isToggled,
    1: setIsToggled
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["Content"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["CircularGlassLeft"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["ContainerLinks"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_ToogleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "test-switch",
          toggled: isToggled,
          onChange: () => setIsToggled(switchTheme)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["ContainerAvatar"], {
          onClick: () => setIsToggled(switchTheme),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["Avatar"], {
            src: "/images/pic.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["Name"], {
          children: "@filipeleonelbatista"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["ContainerProfession"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["Profession"], {
            children: "Desenvolvedor de Aplicativos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["Divider"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["ContainerSocialMedia"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            href: "https://www.youtube.com/channel/UCYUeJiqZCXcABWukG9RvQtw",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["ContainerButton"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaYoutube"], {
                size: 32,
                style: {
                  marginRight: '0.8rem'
                },
                color: "#FFF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["TitleSocialMedia"], {
                children: "Youtube"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            href: "https://desenvolvedordeaplicativos.ga",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["ContainerButton"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGlobe"], {
                size: 32,
                style: {
                  marginRight: '0.8rem'
                },
                color: "#FFF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["TitleSocialMedia"], {
                children: "Site"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            href: "https://www.linkedin.com/in/filipeleonelbatista/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["ContainerButton"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedinIn"], {
                size: 32,
                style: {
                  marginRight: ' 0.8rem'
                },
                color: "#FFF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["TitleSocialMedia"], {
                children: "LinkedIn"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            href: "https://github.com/filipeleonelbatista",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["ContainerButton"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"], {
                size: 32,
                style: {
                  marginRight: ' 0.8rem'
                },
                color: "#FFF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["TitleSocialMedia"], {
                children: "GitHub"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            href: "mailto:filipe.x2016@gmail.com?subject=Ol\xE1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["ContainerButton"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaEnvelope"], {
                size: 32,
                style: {
                  marginRight: ' 0.8rem'
                },
                color: "#FFF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["TitleSocialMedia"], {
                children: "E-mail"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            href: "https://instagram.com/filipeleonelbatista/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["ContainerButton"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaInstagram"], {
                size: 32,
                style: {
                  marginRight: '0.8rem'
                },
                color: "#FFF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_5__["TitleSocialMedia"], {
                children: "Instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/styles/HomeStyles.js":
/*!**********************************!*\
  !*** ./src/styles/HomeStyles.js ***!
  \**********************************/
/*! exports provided: Container, Content, ContainerLinks, CircularGlassLeft, CheckBoxWrapper, DarkLightContainer, DarkLightButton, ContainerAvatar, Avatar, Name, ContainerProfession, Profession, Divider, ContainerSocialMedia, TitleSocialMedia, ContainerButton, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerLinks", function() { return ContainerLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularGlassLeft", function() { return CircularGlassLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxWrapper", function() { return CheckBoxWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkLightContainer", function() { return DarkLightContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkLightButton", function() { return DarkLightButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerAvatar", function() { return ContainerAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerProfession", function() { return ContainerProfession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profession", function() { return Profession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerSocialMedia", function() { return ContainerSocialMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleSocialMedia", function() { return TitleSocialMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerButton", function() { return ContainerButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex; 
  justify-content: center;
  padding-top: 4.4rem;
  padding-bottom: 4.4rem;
  height: 100vh;
  background-color:${({
  theme
}) => theme.background};
  transition: 0.75s ease-in-out;

  @media(max-width: 425px){    
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    height: 100%;
  }

  
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: relative; 
`;
const ContainerLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  background: ${({
  theme
}) => theme.background}; 
  box-shadow: ${({
  theme
}) => theme.shadow};
  position: relative;
  transition: 0.75s ease-in-out;

  @media(max-width: 425px){
    width: 320px;
  }
`;
const CircularGlassLeft = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 7rem;
  height: 7rem;
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 50%;
  background-image: linear-gradient(
    128.09deg,
    var(--purpleSecondary) 0%,
    var(--blueSecondary) 60%,
    transparent 100%
  );
  backdrop-filter: blur(0.625rem);
  box-shadow: 0.125rem 0.125rem 0 0 rgb(255 255 255 /10%);
  transform-style: preserve-3d;
  transition: 0.75s ease-in-out;
  backface-visibility: hidden;
  position: absolute;
  top: -40px;
  left: -40px;

  @media(max-width: 320px){
    display: none;
  }
`;
const CheckBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: relative;
`;
const DarkLightContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label`
  display: flex;
  align-items: center;
  width: 64px;
  height: 32px;
  border-radius: 50px;
  background:${({
  theme
}) => theme.background};
  border: none;
  box-shadow: ${({
  theme
}) => theme.shadowInset} ;
  align-self: flex-end;
  margin: 16px 16px 0 0;
  padding: 0 0.5rem;
  transition: 0.75s ease-in-out;
`;
const DarkLightButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  width: 1rem;
  height: 1rem;
  border: none;
  border-radius: 50%;
  background: ${({
  theme
}) => theme.background};
  box-shadow: 0 0.25rem 0.25rem 0.25rem var(--darkShadow);
  cursor: pointer;
  transition: 0.75s ease-in-out;
  transform:${props => props.isClick ? 'translateX(200%)' : 'translateX(0)'}; 
`;
const ContainerAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  height: 7.5rem;
  border: solid 2px transparent;
  margin-bottom: 0.6rem;
  border-radius: 50%; 
  background-image: linear-gradient( ${({
  theme
}) => theme.background},  ${({
  theme
}) => theme.background}),
    radial-gradient(circle at top left, var(--purplePrimary), var(--bluePrimary));
  background-clip: content-box, border-box;
  transition: 0.75s ease-in-out;
`;
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  transition: 0.75s ease-in-out;
`;
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
  font-size: 1.2rem;
  color: ${({
  theme
}) => theme.title};
  font-weight: 700;
`;
const ContainerProfession = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  border-radius: 8px;
  background: ${({
  theme
}) => theme.background};
  border: none;
  box-shadow: ${({
  theme
}) => theme.shadowInset};
  padding: 0 10px;
  margin: 0.5rem 0;
  transition: 0.75s ease-in-out;
`;
const Profession = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
  font-size: 1rem;
  color: #5D5D5D;
  font-weight: medium;
  margin: 0.5rem 0;
`;
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 100%;
  height: 0.5rem;
  background: var(--primaryDark);
  box-shadow: ${({
  theme
}) => theme.shadowInset};
  transition: 0.75s ease-in-out;
`;
const ContainerSocialMedia = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: grid;
  position: relative;
  margin: 1.4rem 0;
  grid-gap: 0.8rem;
  grid-template-columns: 1fr 1fr;
  transition: 0.75s ease-in-out;
  
  @media(max-width: 425px){
    grid-template-columns: 1fr;
    width:90%
  }
`;
const TitleSocialMedia = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
  color: #f1f2f2;
  font-weight: 700;
  font-size: 1rem;
`;
const ContainerButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  display:flex;
  flex-direction:column;
  align-items:center;
  justfy-content:center;

  background-image: linear-gradient(to right, var(--purplePrimary), var(--bluePrimary));
  padding: 1.4rem 0.8rem;
  border-radius: 10px;
  border: none;
  box-shadow: 0.25rem 0.25rem 0.25rem 0.25rem var(--darkShadow);
  cursor: pointer;
  transition: 0.75s ease-in-out;
  text-decoration: none;  

`;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVG9vZ2xlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L1RoZW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0hvbWVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiU3dpdGNoSW5wdXQiLCJzdHlsZWQiLCJpbnB1dCIsIlN3aXRjaExhYmVsIiwibGFiZWwiLCJ0aGVtZSIsImJhY2tncm91bmQiLCJzaGFkb3dJbnNldCIsIlN3aXRjaEJ1dHRvbiIsInNwYW4iLCJTd2l0Y2giLCJpZCIsInRvZ2dsZWQiLCJvbkNoYW5nZSIsIlRoZW1lQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzd2l0Y2hUaGVtZSIsIkhvbWUiLCJ1c2VDb250ZXh0IiwiaXNUb2dnbGVkIiwic2V0SXNUb2dnbGVkIiwidXNlU3RhdGUiLCJtYXJnaW5SaWdodCIsIkNvbnRhaW5lciIsImRpdiIsIkNvbnRlbnQiLCJDb250YWluZXJMaW5rcyIsInNoYWRvdyIsIkNpcmN1bGFyR2xhc3NMZWZ0IiwiQ2hlY2tCb3hXcmFwcGVyIiwiRGFya0xpZ2h0Q29udGFpbmVyIiwiRGFya0xpZ2h0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0NsaWNrIiwiQ29udGFpbmVyQXZhdGFyIiwiQXZhdGFyIiwiaW1nIiwiTmFtZSIsImgxIiwidGl0bGUiLCJDb250YWluZXJQcm9mZXNzaW9uIiwiUHJvZmVzc2lvbiIsIkRpdmlkZXIiLCJDb250YWluZXJTb2NpYWxNZWRpYSIsIlRpdGxlU29jaWFsTWVkaWEiLCJDb250YWluZXJCdXR0b24iLCJCdXR0b24iLCJhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLHdEQUFNLENBQUNDLEtBQU07QUFDakM7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQU1BLE1BQU1DLFdBQVcsR0FBR0Ysd0RBQU0sQ0FBQ0csS0FBTTtBQUNqQyxlQUFlLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsVUFBVztBQUMvQyxnQkFBZ0IsQ0FBQztBQUFFRDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRSxXQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LENBQUNFLFdBQVk7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsQ0FSTztBQVVBLE1BQU1tQyxVQUFVLEdBQUd6Qyx3REFBTSxDQUFDc0MsRUFBRztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTE87QUFPQSxNQUFNSSxPQUFPLEdBQUcxQyx3REFBTSxDQUFDdUIsR0FBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsQ0FBQztBQUFFbkI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0UsV0FBWTtBQUNqRDtBQUNBLENBTk87QUFRQSxNQUFNcUMsb0JBQW9CLEdBQUczQyx3REFBTSxDQUFDdUIsR0FBSTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaTztBQWNBLE1BQU1xQixnQkFBZ0IsR0FBRzVDLHdEQUFNLENBQUNzQyxFQUFHO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLENBSk87QUFNQSxNQUFNTyxlQUFlLEdBQUc3Qyx3REFBTSxDQUFDdUIsR0FBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBTUEsTUFBTXVCLE1BQU0sR0FBRzlDLHdEQUFNLENBQUMrQyxDQUFFO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZPLEM7Ozs7Ozs7Ozs7O0FDaExQLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgU3dpdGNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IFN3aXRjaExhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIGJhY2tncm91bmQ6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcclxuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNoYWRvd0luc2V0fTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDE2cHggMTZweCAwIDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuYDtcclxuXHJcbmNvbnN0IFN3aXRjaEJ1dHRvbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDJweDtcclxuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC4yNXJlbSAwLjI1cmVtIHZhcigtLWRhcmtTaGFkb3cpO1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgJHtTd2l0Y2hJbnB1dH06Y2hlY2tlZCArICR7U3dpdGNoTGFiZWx9ICYge1xyXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgfVxyXG5cclxuICAke1N3aXRjaExhYmVsfTphY3RpdmUgJiB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFN3aXRjaCA9ICh7IGlkLCB0b2dnbGVkLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTd2l0Y2hJbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInN3aXRjaC1jaGVja2JveFwiXHJcbiAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgY2hlY2tlZD17dG9nZ2xlZH1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTd2l0Y2hMYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2gtbGFiZWxcIiBodG1sRm9yPXtpZH0+XHJcbiAgICAgICAgPFN3aXRjaEJ1dHRvbiBjbGFzc05hbWU9XCJzd2l0Y2gtYnV0dG9uXCIgLz5cclxuICAgICAgPC9Td2l0Y2hMYWJlbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgICBzd2l0Y2hUaGVtZTogKCkgPT4ge31cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lQ29udGV4dCIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGYUVudmVsb3BlLCBGYUdpdGh1YiwgRmFHbG9iZSwgRmFJbnN0YWdyYW0sIEZhTGlua2VkaW5JbiwgRmFZb3V0dWJlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCIuLi9Db21wb25lbnRzL1Rvb2dsZUJ1dHRvblwiO1xyXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L1RoZW1lXCI7XHJcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lU3R5bGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHsgc3dpdGNoVGhlbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICBjb25zdCBbaXNUb2dnbGVkLCBzZXRJc1RvZ2dsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFMuQ29udGFpbmVyPlxyXG4gICAgICA8Uy5Db250ZW50PlxyXG4gICAgICAgIDxTLkNpcmN1bGFyR2xhc3NMZWZ0IC8+XHJcbiAgICAgICAgPFMuQ29udGFpbmVyTGlua3M+XHJcbiAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgIGlkPVwidGVzdC1zd2l0Y2hcIlxyXG4gICAgICAgICAgICB0b2dnbGVkPXtpc1RvZ2dsZWR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRJc1RvZ2dsZWQoc3dpdGNoVGhlbWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTLkNvbnRhaW5lckF2YXRhciBvbkNsaWNrPXsoKSA9PiBzZXRJc1RvZ2dsZWQoc3dpdGNoVGhlbWUpfT5cclxuICAgICAgICAgICAgPFMuQXZhdGFyIHNyYz1cIi9pbWFnZXMvcGljLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8L1MuQ29udGFpbmVyQXZhdGFyPlxyXG5cclxuICAgICAgICAgIDxTLk5hbWU+QGZpbGlwZWxlb25lbGJhdGlzdGE8L1MuTmFtZT5cclxuICAgICAgICAgIDxTLkNvbnRhaW5lclByb2Zlc3Npb24+XHJcbiAgICAgICAgICAgIDxTLlByb2Zlc3Npb24+RGVzZW52b2x2ZWRvciBkZSBBcGxpY2F0aXZvczwvUy5Qcm9mZXNzaW9uPlxyXG4gICAgICAgICAgPC9TLkNvbnRhaW5lclByb2Zlc3Npb24+XHJcblxyXG4gICAgICAgICAgPFMuRGl2aWRlciAvPlxyXG5cclxuICAgICAgICAgIDxTLkNvbnRhaW5lclNvY2lhbE1lZGlhPlxyXG4gICAgICAgICAgICA8Uy5CdXR0b24gaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNZVWVKaXFaQ1hjQUJXdWtHOVJ2UXR3XCI+XHJcbiAgICAgICAgICAgICAgPFMuQ29udGFpbmVyQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZhWW91dHViZSBzaXplPXszMn0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcwLjhyZW0nIH19IGNvbG9yPVwiI0ZGRlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Uy5UaXRsZVNvY2lhbE1lZGlhPllvdXR1YmU8L1MuVGl0bGVTb2NpYWxNZWRpYT5cclxuICAgICAgICAgICAgICA8L1MuQ29udGFpbmVyQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1MuQnV0dG9uPlxyXG4gICAgICAgICAgICA8Uy5CdXR0b24gaHJlZj1cImh0dHBzOi8vZGVzZW52b2x2ZWRvcmRlYXBsaWNhdGl2b3MuZ2FcIj5cclxuICAgICAgICAgICAgICA8Uy5Db250YWluZXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RmFHbG9iZSBzaXplPXszMn0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcwLjhyZW0nIH19IGNvbG9yPVwiI0ZGRlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Uy5UaXRsZVNvY2lhbE1lZGlhPlNpdGU8L1MuVGl0bGVTb2NpYWxNZWRpYT5cclxuICAgICAgICAgICAgICA8L1MuQ29udGFpbmVyQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1MuQnV0dG9uPlxyXG4gICAgICAgICAgICA8Uy5CdXR0b24gaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9maWxpcGVsZW9uZWxiYXRpc3RhL1wiPlxyXG4gICAgICAgICAgICAgIDxTLkNvbnRhaW5lckJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxGYUxpbmtlZGluSW4gc2l6ZT17MzJ9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnIDAuOHJlbScgfX0gY29sb3I9XCIjRkZGXCIgLz5cclxuICAgICAgICAgICAgICAgIDxTLlRpdGxlU29jaWFsTWVkaWE+TGlua2VkSW48L1MuVGl0bGVTb2NpYWxNZWRpYT5cclxuICAgICAgICAgICAgICA8L1MuQ29udGFpbmVyQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1MuQnV0dG9uPlxyXG4gICAgICAgICAgICA8Uy5CdXR0b24gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9maWxpcGVsZW9uZWxiYXRpc3RhXCI+XHJcbiAgICAgICAgICAgICAgPFMuQ29udGFpbmVyQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZhR2l0aHViIHNpemU9ezMyfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJyAwLjhyZW0nIH19IGNvbG9yPVwiI0ZGRlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Uy5UaXRsZVNvY2lhbE1lZGlhPkdpdEh1YjwvUy5UaXRsZVNvY2lhbE1lZGlhPlxyXG4gICAgICAgICAgICAgIDwvUy5Db250YWluZXJCdXR0b24+XHJcbiAgICAgICAgICAgIDwvUy5CdXR0b24+XHJcbiAgICAgICAgICAgIDxTLkJ1dHRvbiBocmVmPVwibWFpbHRvOmZpbGlwZS54MjAxNkBnbWFpbC5jb20/c3ViamVjdD1PbMOhXCI+XHJcbiAgICAgICAgICAgICAgPFMuQ29udGFpbmVyQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZhRW52ZWxvcGUgc2l6ZT17MzJ9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnIDAuOHJlbScgfX0gY29sb3I9XCIjRkZGXCIgLz5cclxuICAgICAgICAgICAgICAgIDxTLlRpdGxlU29jaWFsTWVkaWE+RS1tYWlsPC9TLlRpdGxlU29jaWFsTWVkaWE+XHJcbiAgICAgICAgICAgICAgPC9TLkNvbnRhaW5lckJ1dHRvbj5cclxuICAgICAgICAgICAgPC9TLkJ1dHRvbj5cclxuICAgICAgICAgICAgPFMuQnV0dG9uIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vZmlsaXBlbGVvbmVsYmF0aXN0YS9cIj5cclxuICAgICAgICAgICAgICA8Uy5Db250YWluZXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RmFJbnN0YWdyYW0gc2l6ZT17MzJ9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC44cmVtJyB9fSBjb2xvcj1cIiNGRkZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFMuVGl0bGVTb2NpYWxNZWRpYT5JbnN0YWdyYW08L1MuVGl0bGVTb2NpYWxNZWRpYT5cclxuICAgICAgICAgICAgICA8L1MuQ29udGFpbmVyQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1MuQnV0dG9uPlxyXG4gICAgICAgICAgPC9TLkNvbnRhaW5lclNvY2lhbE1lZGlhPlxyXG4gICAgICAgIDwvUy5Db250YWluZXJMaW5rcz5cclxuICAgICAgPC9TLkNvbnRlbnQ+XHJcbiAgICA8L1MuQ29udGFpbmVyPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQuNHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNC40cmVtO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xyXG4gIHRyYW5zaXRpb246IDAuNzVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICBAbWVkaWEobWF4LXdpZHRoOiA0MjVweCl7ICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDEuNHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjRyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lckxpbmtzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9OyBcclxuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNoYWRvd307XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IDAuNzVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICBAbWVkaWEobWF4LXdpZHRoOiA0MjVweCl7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENpcmN1bGFyR2xhc3NMZWZ0ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogN3JlbTtcclxuICBoZWlnaHQ6IDdyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSAyNTUgMjU1IC8gMjAlKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTI4LjA5ZGVnLFxyXG4gICAgdmFyKC0tcHVycGxlU2Vjb25kYXJ5KSAwJSxcclxuICAgIHZhcigtLWJsdWVTZWNvbmRhcnkpIDYwJSxcclxuICAgIHRyYW5zcGFyZW50IDEwMCVcclxuICApO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjYyNXJlbSk7XHJcbiAgYm94LXNoYWRvdzogMC4xMjVyZW0gMC4xMjVyZW0gMCAwIHJnYigyNTUgMjU1IDI1NSAvMTAlKTtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHRyYW5zaXRpb246IDAuNzVzIGVhc2UtaW4tb3V0O1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNDBweDtcclxuICBsZWZ0OiAtNDBweDtcclxuXHJcbiAgQG1lZGlhKG1heC13aWR0aDogMzIwcHgpe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDaGVja0JveFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXJrTGlnaHRDb250YWluZXIgPSBzdHlsZWQubGFiZWxgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaGFkb3dJbnNldH0gO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogMTZweCAxNnB4IDAgMDtcclxuICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjc1cyBlYXNlLWluLW91dDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXJrTGlnaHRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuMjVyZW0gMC4yNXJlbSB2YXIoLS1kYXJrU2hhZG93KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC43NXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNmb3JtOiR7cHJvcHMgPT4gcHJvcHMuaXNDbGljayA/ICd0cmFuc2xhdGVYKDIwMCUpJyA6ICd0cmFuc2xhdGVYKDApJ307IFxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJBdmF0YXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNy41cmVtO1xyXG4gIGhlaWdodDogNy41cmVtO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfSwgICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH0pLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgbGVmdCwgdmFyKC0tcHVycGxlUHJpbWFyeSksIHZhcigtLWJsdWVQcmltYXJ5KSk7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveCwgYm9yZGVyLWJveDtcclxuICB0cmFuc2l0aW9uOiAwLjc1cyBlYXNlLWluLW91dDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBdmF0YXIgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiA2LjI1cmVtO1xyXG4gIGhlaWdodDogNi4yNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogMC43NXMgZWFzZS1pbi1vdXQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50aXRsZX07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJQcm9mZXNzaW9uID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaGFkb3dJbnNldH07XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgdHJhbnNpdGlvbjogMC43NXMgZWFzZS1pbi1vdXQ7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9mZXNzaW9uID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBmb250LXdlaWdodDogbWVkaXVtO1xyXG4gIG1hcmdpbjogMC41cmVtIDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeURhcmspO1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2hhZG93SW5zZXR9O1xyXG4gIHRyYW5zaXRpb246IDAuNzVzIGVhc2UtaW4tb3V0O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lclNvY2lhbE1lZGlhID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDEuNHJlbSAwO1xyXG4gIGdyaWQtZ2FwOiAwLjhyZW07XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIHRyYW5zaXRpb246IDAuNzVzIGVhc2UtaW4tb3V0O1xyXG4gIFxyXG4gIEBtZWRpYShtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgd2lkdGg6OTAlXHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlU29jaWFsTWVkaWEgPSBzdHlsZWQuaDFgXHJcbiAgY29sb3I6ICNmMWYyZjI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmFgXHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAganVzdGZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXB1cnBsZVByaW1hcnkpLCB2YXIoLS1ibHVlUHJpbWFyeSkpO1xyXG4gIHBhZGRpbmc6IDEuNHJlbSAwLjhyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMC4yNXJlbSAwLjI1cmVtIDAuMjVyZW0gMC4yNXJlbSB2YXIoLS1kYXJrU2hhZG93KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC43NXMgZWFzZS1pbi1vdXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgXHJcblxyXG5gO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==