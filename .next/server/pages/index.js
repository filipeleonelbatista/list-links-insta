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
  height: 100vh;
  background-color:${({
  theme
}) => theme.background};
  transition: 0.75s ease-in-out;
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

  @media(max-width: 400px){
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

  @media(max-width: 700px){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVG9vZ2xlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L1RoZW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0hvbWVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiU3dpdGNoSW5wdXQiLCJzdHlsZWQiLCJpbnB1dCIsIlN3aXRjaExhYmVsIiwibGFiZWwiLCJ0aGVtZSIsImJhY2tncm91bmQiLCJzaGFkb3dJbnNldCIsIlN3aXRjaEJ1dHRvbiIsInNwYW4iLCJTd2l0Y2giLCJpZCIsInRvZ2dsZWQiLCJvbkNoYW5nZSIsIlRoZW1lQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzd2l0Y2hUaGVtZSIsIkhvbWUiLCJ1c2VDb250ZXh0IiwiaXNUb2dnbGVkIiwic2V0SXNUb2dnbGVkIiwidXNlU3RhdGUiLCJtYXJnaW5SaWdodCIsIkNvbnRhaW5lciIsImRpdiIsIkNvbnRlbnQiLCJDb250YWluZXJMaW5rcyIsInNoYWRvdyIsIkNpcmN1bGFyR2xhc3NMZWZ0IiwiQ2hlY2tCb3hXcmFwcGVyIiwiRGFya0xpZ2h0Q29udGFpbmVyIiwiRGFya0xpZ2h0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0NsaWNrIiwiQ29udGFpbmVyQXZhdGFyIiwiQXZhdGFyIiwiaW1nIiwiTmFtZSIsImgxIiwidGl0bGUiLCJDb250YWluZXJQcm9mZXNzaW9uIiwiUHJvZmVzc2lvbiIsIkRpdmlkZXIiLCJDb250YWluZXJTb2NpYWxNZWRpYSIsIlRpdGxlU29jaWFsTWVkaWEiLCJDb250YWluZXJCdXR0b24iLCJCdXR0b24iLCJhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLHdEQUFNLENBQUNDLEtBQU07QUFDakM7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQU1BLE1BQU1DLFdBQVcsR0FBR0Ysd0RBQU0sQ0FBQ0csS0FBTTtBQUNqQyxlQUFlLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsVUFBVztBQUMvQyxnQkFBZ0IsQ0FBQztBQUFFRDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDRSxXQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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bUMsVUFBVSxHQUFHekMsd0RBQU0sQ0FBQ3NDLEVBQUc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxPO0FBT0EsTUFBTUksT0FBTyxHQUFHMUMsd0RBQU0sQ0FBQ3VCLEdBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLENBQUM7QUFBRW5CO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNFLFdBQVk7QUFDakQ7QUFDQSxDQU5PO0FBUUEsTUFBTXFDLG9CQUFvQixHQUFHM0Msd0RBQU0sQ0FBQ3VCLEdBQUk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWk87QUFjQSxNQUFNcUIsZ0JBQWdCLEdBQUc1Qyx3REFBTSxDQUFDc0MsRUFBRztBQUMxQztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBTUEsTUFBTU8sZUFBZSxHQUFHN0Msd0RBQU0sQ0FBQ3VCLEdBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsQ0FKTztBQU1BLE1BQU11QixNQUFNLEdBQUc5Qyx3REFBTSxDQUFDK0MsQ0FBRTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FmTyxDOzs7Ozs7Ozs7OztBQ3ZLUCxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFN3aXRjaElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBTd2l0Y2hMYWJlbCA9IHN0eWxlZC5sYWJlbGBcclxuICBiYWNrZ3JvdW5kOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaGFkb3dJbnNldH07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgbWFyZ2luOiAxNnB4IDE2cHggMCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XHJcbmA7XHJcblxyXG5jb25zdCBTd2l0Y2hCdXR0b24gPSBzdHlsZWQuc3BhbmBcclxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAycHg7XHJcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuMjVyZW0gMC4yNXJlbSB2YXIoLS1kYXJrU2hhZG93KTtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICR7U3dpdGNoSW5wdXR9OmNoZWNrZWQgKyAke1N3aXRjaExhYmVsfSAmIHtcclxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDJweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIH1cclxuXHJcbiAgJHtTd2l0Y2hMYWJlbH06YWN0aXZlICYge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTd2l0Y2ggPSAoeyBpZCwgdG9nZ2xlZCwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U3dpdGNoSW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJzd2l0Y2gtY2hlY2tib3hcIlxyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGNoZWNrZWQ9e3RvZ2dsZWR9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3dpdGNoTGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoLWxhYmVsXCIgaHRtbEZvcj17aWR9PlxyXG4gICAgICAgIDxTd2l0Y2hCdXR0b24gY2xhc3NOYW1lPVwic3dpdGNoLWJ1dHRvblwiIC8+XHJcbiAgICAgIDwvU3dpdGNoTGFiZWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gICAgc3dpdGNoVGhlbWU6ICgpID0+IHt9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZUNvbnRleHQiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFFbnZlbG9wZSwgRmFHaXRodWIsIEZhR2xvYmUsIEZhSW5zdGFncmFtLCBGYUxpbmtlZGluSW4sIEZhWW91dHViZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwiLi4vQ29tcG9uZW50cy9Ub29nbGVCdXR0b25cIjtcclxuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9UaGVtZVwiO1xyXG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuLi9zdHlsZXMvSG9tZVN0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCB7IHN3aXRjaFRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgY29uc3QgW2lzVG9nZ2xlZCwgc2V0SXNUb2dnbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTLkNvbnRhaW5lcj5cclxuICAgICAgPFMuQ29udGVudD5cclxuICAgICAgICA8Uy5DaXJjdWxhckdsYXNzTGVmdCAvPlxyXG4gICAgICAgIDxTLkNvbnRhaW5lckxpbmtzPlxyXG4gICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICBpZD1cInRlc3Qtc3dpdGNoXCJcclxuICAgICAgICAgICAgdG9nZ2xlZD17aXNUb2dnbGVkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0SXNUb2dnbGVkKHN3aXRjaFRoZW1lKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Uy5Db250YWluZXJBdmF0YXIgb25DbGljaz17KCkgPT4gc2V0SXNUb2dnbGVkKHN3aXRjaFRoZW1lKX0+XHJcbiAgICAgICAgICAgIDxTLkF2YXRhciBzcmM9XCIvaW1hZ2VzL3BpYy5wbmdcIiAvPlxyXG4gICAgICAgICAgPC9TLkNvbnRhaW5lckF2YXRhcj5cclxuXHJcbiAgICAgICAgICA8Uy5OYW1lPkBmaWxpcGVsZW9uZWxiYXRpc3RhPC9TLk5hbWU+XHJcbiAgICAgICAgICA8Uy5Db250YWluZXJQcm9mZXNzaW9uPlxyXG4gICAgICAgICAgICA8Uy5Qcm9mZXNzaW9uPkRlc2Vudm9sdmVkb3IgZGUgQXBsaWNhdGl2b3M8L1MuUHJvZmVzc2lvbj5cclxuICAgICAgICAgIDwvUy5Db250YWluZXJQcm9mZXNzaW9uPlxyXG5cclxuICAgICAgICAgIDxTLkRpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICA8Uy5Db250YWluZXJTb2NpYWxNZWRpYT5cclxuICAgICAgICAgICAgPFMuQnV0dG9uIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDWVVlSmlxWkNYY0FCV3VrRzlSdlF0d1wiPlxyXG4gICAgICAgICAgICAgIDxTLkNvbnRhaW5lckJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxGYVlvdXR1YmUgc2l6ZT17MzJ9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC44cmVtJyB9fSBjb2xvcj1cIiNGRkZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFMuVGl0bGVTb2NpYWxNZWRpYT5Zb3V0dWJlPC9TLlRpdGxlU29jaWFsTWVkaWE+XHJcbiAgICAgICAgICAgICAgPC9TLkNvbnRhaW5lckJ1dHRvbj5cclxuICAgICAgICAgICAgPC9TLkJ1dHRvbj5cclxuICAgICAgICAgICAgPFMuQnV0dG9uIGhyZWY9XCJodHRwczovL2Rlc2Vudm9sdmVkb3JkZWFwbGljYXRpdm9zLmdhXCI+XHJcbiAgICAgICAgICAgICAgPFMuQ29udGFpbmVyQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZhR2xvYmUgc2l6ZT17MzJ9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC44cmVtJyB9fSBjb2xvcj1cIiNGRkZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFMuVGl0bGVTb2NpYWxNZWRpYT5TaXRlPC9TLlRpdGxlU29jaWFsTWVkaWE+XHJcbiAgICAgICAgICAgICAgPC9TLkNvbnRhaW5lckJ1dHRvbj5cclxuICAgICAgICAgICAgPC9TLkJ1dHRvbj5cclxuICAgICAgICAgICAgPFMuQnV0dG9uIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZmlsaXBlbGVvbmVsYmF0aXN0YS9cIj5cclxuICAgICAgICAgICAgICA8Uy5Db250YWluZXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RmFMaW5rZWRpbkluIHNpemU9ezMyfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJyAwLjhyZW0nIH19IGNvbG9yPVwiI0ZGRlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Uy5UaXRsZVNvY2lhbE1lZGlhPkxpbmtlZEluPC9TLlRpdGxlU29jaWFsTWVkaWE+XHJcbiAgICAgICAgICAgICAgPC9TLkNvbnRhaW5lckJ1dHRvbj5cclxuICAgICAgICAgICAgPC9TLkJ1dHRvbj5cclxuICAgICAgICAgICAgPFMuQnV0dG9uIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZmlsaXBlbGVvbmVsYmF0aXN0YVwiPlxyXG4gICAgICAgICAgICAgIDxTLkNvbnRhaW5lckJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxGYUdpdGh1YiBzaXplPXszMn0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcgMC44cmVtJyB9fSBjb2xvcj1cIiNGRkZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFMuVGl0bGVTb2NpYWxNZWRpYT5HaXRIdWI8L1MuVGl0bGVTb2NpYWxNZWRpYT5cclxuICAgICAgICAgICAgICA8L1MuQ29udGFpbmVyQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1MuQnV0dG9uPlxyXG4gICAgICAgICAgICA8Uy5CdXR0b24gaHJlZj1cIm1haWx0bzpmaWxpcGUueDIwMTZAZ21haWwuY29tP3N1YmplY3Q9T2zDoVwiPlxyXG4gICAgICAgICAgICAgIDxTLkNvbnRhaW5lckJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxGYUVudmVsb3BlIHNpemU9ezMyfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJyAwLjhyZW0nIH19IGNvbG9yPVwiI0ZGRlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Uy5UaXRsZVNvY2lhbE1lZGlhPkUtbWFpbDwvUy5UaXRsZVNvY2lhbE1lZGlhPlxyXG4gICAgICAgICAgICAgIDwvUy5Db250YWluZXJCdXR0b24+XHJcbiAgICAgICAgICAgIDwvUy5CdXR0b24+XHJcbiAgICAgICAgICAgIDxTLkJ1dHRvbiBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL2ZpbGlwZWxlb25lbGJhdGlzdGEvXCI+XHJcbiAgICAgICAgICAgICAgPFMuQ29udGFpbmVyQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIHNpemU9ezMyfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzAuOHJlbScgfX0gY29sb3I9XCIjRkZGXCIgLz5cclxuICAgICAgICAgICAgICAgIDxTLlRpdGxlU29jaWFsTWVkaWE+SW5zdGFncmFtPC9TLlRpdGxlU29jaWFsTWVkaWE+XHJcbiAgICAgICAgICAgICAgPC9TLkNvbnRhaW5lckJ1dHRvbj5cclxuICAgICAgICAgICAgPC9TLkJ1dHRvbj5cclxuICAgICAgICAgIDwvUy5Db250YWluZXJTb2NpYWxNZWRpYT5cclxuICAgICAgICA8L1MuQ29udGFpbmVyTGlua3M+XHJcbiAgICAgIDwvUy5Db250ZW50PlxyXG4gICAgPC9TLkNvbnRhaW5lcj5cclxuICApO1xyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0LjRyZW07XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgdHJhbnNpdGlvbjogMC43NXMgZWFzZS1pbi1vdXQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJMaW5rcyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTsgXHJcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zaGFkb3d9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAwLjc1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgQG1lZGlhKG1heC13aWR0aDogNDAwcHgpe1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDaXJjdWxhckdsYXNzTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDdyZW07XHJcbiAgaGVpZ2h0OiA3cmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUgMjU1IDI1NSAvIDIwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDEyOC4wOWRlZyxcclxuICAgIHZhcigtLXB1cnBsZVNlY29uZGFyeSkgMCUsXHJcbiAgICB2YXIoLS1ibHVlU2Vjb25kYXJ5KSA2MCUsXHJcbiAgICB0cmFuc3BhcmVudCAxMDAlXHJcbiAgKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC42MjVyZW0pO1xyXG4gIGJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMTI1cmVtIDAgMCByZ2IoMjU1IDI1NSAyNTUgLzEwJSk7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2l0aW9uOiAwLjc1cyBlYXNlLWluLW91dDtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTQwcHg7XHJcbiAgbGVmdDogLTQwcHg7XHJcblxyXG4gIEBtZWRpYShtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQ2hlY2tCb3hXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGFya0xpZ2h0Q29udGFpbmVyID0gc3R5bGVkLmxhYmVsYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2hhZG93SW5zZXR9IDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDE2cHggMTZweCAwIDA7XHJcbiAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgdHJhbnNpdGlvbjogMC43NXMgZWFzZS1pbi1vdXQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGFya0xpZ2h0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xyXG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjI1cmVtIDAuMjVyZW0gdmFyKC0tZGFya1NoYWRvdyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNzVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zZm9ybToke3Byb3BzID0+IHByb3BzLmlzQ2xpY2sgPyAndHJhbnNsYXRlWCgyMDAlKScgOiAndHJhbnNsYXRlWCgwKSd9OyBcclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyQXZhdGFyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDcuNXJlbTtcclxuICBoZWlnaHQ6IDcuNXJlbTtcclxuICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH0sICAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9KSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgdG9wIGxlZnQsIHZhcigtLXB1cnBsZVByaW1hcnkpLCB2YXIoLS1ibHVlUHJpbWFyeSkpO1xyXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3gsIGJvcmRlci1ib3g7XHJcbiAgdHJhbnNpdGlvbjogMC43NXMgZWFzZS1pbi1vdXQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQXZhdGFyID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogNi4yNXJlbTtcclxuICBoZWlnaHQ6IDYuMjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zaXRpb246IDAuNzVzIGVhc2UtaW4tb3V0O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hbWUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGl0bGV9O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyUHJvZmVzc2lvbiA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2hhZG93SW5zZXR9O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gIHRyYW5zaXRpb246IDAuNzVzIGVhc2UtaW4tb3V0O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmVzc2lvbiA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcclxuICBtYXJnaW46IDAuNXJlbSAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpdmlkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMC41cmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnlEYXJrKTtcclxuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNoYWRvd0luc2V0fTtcclxuICB0cmFuc2l0aW9uOiAwLjc1cyBlYXNlLWluLW91dDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJTb2NpYWxNZWRpYSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxLjRyZW0gMDtcclxuICBncmlkLWdhcDogMC44cmVtO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICB0cmFuc2l0aW9uOiAwLjc1cyBlYXNlLWluLW91dDtcclxuICBcclxuICBAbWVkaWEobWF4LXdpZHRoOiA0MjVweCl7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIHdpZHRoOjkwJVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZVNvY2lhbE1lZGlhID0gc3R5bGVkLmgxYFxyXG4gIGNvbG9yOiAjZjFmMmYyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lckJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5hYFxyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGp1c3RmeS1jb250ZW50OmNlbnRlcjtcclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1wdXJwbGVQcmltYXJ5KSwgdmFyKC0tYmx1ZVByaW1hcnkpKTtcclxuICBwYWRkaW5nOiAxLjRyZW0gMC44cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwLjI1cmVtIDAuMjVyZW0gdmFyKC0tZGFya1NoYWRvdyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNzVzIGVhc2UtaW4tb3V0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgIFxyXG5cclxuYDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=