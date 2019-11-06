/******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
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
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
  /******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
  /******/ })
/************************************************************************/
/******/ ({

  /***/ "./src/index.js":
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
    /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);


    const Keyboard = {
      elements: {
        input: null,
        keysContainer: null,
        keys: [],
      },

      properties: {
        text: '',
        capsLock: false,
      },

      init() {
        this.elements.input = document.createElement('textarea');
        this.elements.input.classList.add('input');


        this.elements.keysContainer = document.createElement('div');
        this.elements.keysContainer.classList.add('keyboard');
        this.elements.keysContainer.append(...this.createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

        // анимация
        this.elements.keysContainer.addEventListener('click', (event) => {
          this.keyAnimate(this.mouseDown(event));
        });
        document.addEventListener('keydown', (event) => {
          this.keyAnimate(this.keyDown(event));
        });

        document.body.append(this.elements.input, this.elements.keysContainer);
      },

      keyDown(event) {
        const key = document.getElementById(event.code);
        this.elements.input.focus();
        this.elements.input.selectionStart = this.elements.input.value.length;
        this.elements.input.selectionStart = this.elements.input.selectionEnd;

        if (event.code === 'CapsLock') {
          this.toggleCapsLock(key);
        }
        return key;
      },

      mouseDown(event) {
        const key = document.getElementById(event.target.getAttribute('id'));
        return key;
      },

      keyAnimate(key) {
        if (!key || key.getAttribute('id') === 'CapsLock') return false;

        key.classList.toggle('keyboard__key_active');
        setTimeout(() => key.classList.toggle('keyboard__key_active'), 500);

        return false;
      },

      createKeys() {
        const fragment = [];
        const keyLayout = [
          ['Digit1', '1'],
          ['Digit2', '2'],
          ['Digit3', '3'],
          ['Digit4', '4'],
          ['Digit5', '5'],
          ['Digit6', '6'],
          ['Digit7', '7'],
          ['Digit8', '8'],
          ['Digit9', '9'],
          ['Digit0', '0'],
          ['Backspace', 'backspace'],
          ['KeyQ', 'q'],
          ['KeyW', 'w'],
          ['KeyE', 'e'],
          ['KeyR', 'r'],
          ['KeyT', 't'],
          ['KeyY', 'y'],
          ['KeyU', 'u'],
          ['KeyI', 'i'],
          ['KeyO', 'o'],
          ['KeyP', 'p'],
          ['CapsLock', 'caps'],
          ['KeyA', 'a'],
          ['KeyS', 's'],
          ['KeyD', 'd'],
          ['KeyF', 'f'],
          ['KeyG', 'g'],
          ['KeyH', 'h'],
          ['KeyJ', 'j'],
          ['KeyK', 'k'],
          ['KeyL', 'l'],
          ['Enter', 'enter'],
          ['KeyZ', 'z'],
          ['KeyX', 'x'],
          ['KeyC', 'c'],
          ['KeyV', 'v'],
          ['KeyB', 'b'],
          ['KeyN', 'n'],
          ['KeyM', 'm'],
          ['Comma', ','],
          ['Period', '.'],
          ['Space', 'space'],
        ];

        keyLayout.forEach((e) => {
          const isNewLine = ['backspace', 'p', 'enter', '.'].indexOf(e[1]) !== -1;
          const key = document.createElement('button');
          key.classList.add('keyboard__key');
          [key.id, key.textContent] = e;

          switch (e[1]) {
            case 'caps':
              key.addEventListener('click', () => {
                this.toggleCapsLock(key);
              });
              break;
            case 'space':
              key.classList.add('keyboard__key_extra-wide');
              key.addEventListener('click', () => {
                this.printKey(' ');
              });
              break;
            case 'backspace':
              key.addEventListener('click', () => {
                this.printKey('backspace');
              });
              break;
            case 'enter':
              key.addEventListener('click', () => {
                this.printKey('\r\n');
              });
              break;
            case 'tab':
              key.addEventListener('click', () => {
                this.printKey('\t');
              });
              break;
            default:
              key.addEventListener('click', () => {
                this.printKey(this.properties.capsLock ? e[1].toUpperCase() : e[1].toLowerCase());
              });
          }

          fragment.push(key);
          if (isNewLine) fragment.push(document.createElement('br'));
        });

        return fragment;
      },

      toggleCapsLock(key) {
        key.classList.toggle('keyboard__key_active');
        this.properties.capsLock = !this.properties.capsLock;

        Object.keys(this.elements.keys).forEach((i) => {
          const keyElem = this.elements.keys[i];
          if (keyElem.childElementCount === 0 && keyElem.textContent.length === 1) {
            keyElem.textContent = this.properties.capsLock
              ? keyElem.textContent.toUpperCase() : keyElem.textContent.toLowerCase();
          }
        });
      },

      printKey(key) {
        const { input } = this.elements;
        if (key === 'backspace') {
          input.value = input.value.substring(0, input.value.length - 1);
        } else {
          input.value += key;
        }
      },

    };

    window.addEventListener('DOMContentLoaded', () => {
      Keyboard.init();
    });


    /***/ }),

  /***/ "./src/style.css":
  /*!***********************!*\
    !*** ./src/style.css ***!
    \***********************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

    /***/ })

  /******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/ZTMyMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNyTEQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBLZXlib2FyZCA9IHtcclxuICBlbGVtZW50czoge1xyXG4gICAgaW5wdXQ6IG51bGwsXHJcbiAgICBrZXlzQ29udGFpbmVyOiBudWxsLFxyXG4gICAga2V5czogW10sXHJcbiAgfSxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgdGV4dDogJycsXHJcbiAgICBjYXBzTG9jazogZmFsc2UsXHJcbiAgfSxcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZWxlbWVudHMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgdGhpcy5lbGVtZW50cy5pbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xyXG5cclxuXHJcbiAgICB0aGlzLmVsZW1lbnRzLmtleXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuZWxlbWVudHMua2V5c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZCcpO1xyXG4gICAgdGhpcy5lbGVtZW50cy5rZXlzQ29udGFpbmVyLmFwcGVuZCguLi50aGlzLmNyZWF0ZUtleXMoKSk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50cy5rZXlzID0gdGhpcy5lbGVtZW50cy5rZXlzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlib2FyZF9fa2V5Jyk7XHJcblxyXG4gICAgLy8g0LDQvdC40LzQsNGG0LjRj1xyXG4gICAgdGhpcy5lbGVtZW50cy5rZXlzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMua2V5QW5pbWF0ZSh0aGlzLm1vdXNlRG93bihldmVudCkpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMua2V5QW5pbWF0ZSh0aGlzLmtleURvd24oZXZlbnQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuZWxlbWVudHMuaW5wdXQsIHRoaXMuZWxlbWVudHMua2V5c0NvbnRhaW5lcik7XHJcbiAgfSxcclxuXHJcbiAga2V5RG93bihldmVudCkge1xyXG4gICAgY29uc3Qga2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQuY29kZSk7XHJcbiAgICB0aGlzLmVsZW1lbnRzLmlucHV0LmZvY3VzKCk7XHJcbiAgICB0aGlzLmVsZW1lbnRzLmlucHV0LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5lbGVtZW50cy5pbnB1dC52YWx1ZS5sZW5ndGg7XHJcbiAgICB0aGlzLmVsZW1lbnRzLmlucHV0LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5lbGVtZW50cy5pbnB1dC5zZWxlY3Rpb25FbmQ7XHJcblxyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdDYXBzTG9jaycpIHtcclxuICAgICAgdGhpcy50b2dnbGVDYXBzTG9jayhrZXkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleTtcclxuICB9LFxyXG5cclxuICBtb3VzZURvd24oZXZlbnQpIHtcclxuICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xyXG4gICAgcmV0dXJuIGtleTtcclxuICB9LFxyXG5cclxuICBrZXlBbmltYXRlKGtleSkge1xyXG4gICAgaWYgKCFrZXkgfHwga2V5LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ0NhcHNMb2NrJykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGtleS5jbGFzc0xpc3QudG9nZ2xlKCdrZXlib2FyZF9fa2V5X2FjdGl2ZScpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBrZXkuY2xhc3NMaXN0LnRvZ2dsZSgna2V5Ym9hcmRfX2tleV9hY3RpdmUnKSwgNTAwKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgY3JlYXRlS2V5cygpIHtcclxuICAgIGNvbnN0IGZyYWdtZW50ID0gW107XHJcbiAgICBjb25zdCBrZXlMYXlvdXQgPSBbXHJcbiAgICAgIFsnRGlnaXQxJywgJzEnXSxcclxuICAgICAgWydEaWdpdDInLCAnMiddLFxyXG4gICAgICBbJ0RpZ2l0MycsICczJ10sXHJcbiAgICAgIFsnRGlnaXQ0JywgJzQnXSxcclxuICAgICAgWydEaWdpdDUnLCAnNSddLFxyXG4gICAgICBbJ0RpZ2l0NicsICc2J10sXHJcbiAgICAgIFsnRGlnaXQ3JywgJzcnXSxcclxuICAgICAgWydEaWdpdDgnLCAnOCddLFxyXG4gICAgICBbJ0RpZ2l0OScsICc5J10sXHJcbiAgICAgIFsnRGlnaXQwJywgJzAnXSxcclxuICAgICAgWydCYWNrc3BhY2UnLCAnYmFja3NwYWNlJ10sXHJcbiAgICAgIFsnS2V5UScsICdxJ10sXHJcbiAgICAgIFsnS2V5VycsICd3J10sXHJcbiAgICAgIFsnS2V5RScsICdlJ10sXHJcbiAgICAgIFsnS2V5UicsICdyJ10sXHJcbiAgICAgIFsnS2V5VCcsICd0J10sXHJcbiAgICAgIFsnS2V5WScsICd5J10sXHJcbiAgICAgIFsnS2V5VScsICd1J10sXHJcbiAgICAgIFsnS2V5SScsICdpJ10sXHJcbiAgICAgIFsnS2V5TycsICdvJ10sXHJcbiAgICAgIFsnS2V5UCcsICdwJ10sXHJcbiAgICAgIFsnQ2Fwc0xvY2snLCAnY2FwcyddLFxyXG4gICAgICBbJ0tleUEnLCAnYSddLFxyXG4gICAgICBbJ0tleVMnLCAncyddLFxyXG4gICAgICBbJ0tleUQnLCAnZCddLFxyXG4gICAgICBbJ0tleUYnLCAnZiddLFxyXG4gICAgICBbJ0tleUcnLCAnZyddLFxyXG4gICAgICBbJ0tleUgnLCAnaCddLFxyXG4gICAgICBbJ0tleUonLCAnaiddLFxyXG4gICAgICBbJ0tleUsnLCAnayddLFxyXG4gICAgICBbJ0tleUwnLCAnbCddLFxyXG4gICAgICBbJ0VudGVyJywgJ2VudGVyJ10sXHJcbiAgICAgIFsnS2V5WicsICd6J10sXHJcbiAgICAgIFsnS2V5WCcsICd4J10sXHJcbiAgICAgIFsnS2V5QycsICdjJ10sXHJcbiAgICAgIFsnS2V5VicsICd2J10sXHJcbiAgICAgIFsnS2V5QicsICdiJ10sXHJcbiAgICAgIFsnS2V5TicsICduJ10sXHJcbiAgICAgIFsnS2V5TScsICdtJ10sXHJcbiAgICAgIFsnQ29tbWEnLCAnLCddLFxyXG4gICAgICBbJ1BlcmlvZCcsICcuJ10sXHJcbiAgICAgIFsnU3BhY2UnLCAnc3BhY2UnXSxcclxuICAgIF07XHJcblxyXG4gICAga2V5TGF5b3V0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgY29uc3QgaXNOZXdMaW5lID0gWydiYWNrc3BhY2UnLCAncCcsICdlbnRlcicsICcuJ10uaW5kZXhPZihlWzFdKSAhPT0gLTE7XHJcbiAgICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2tleScpO1xyXG4gICAgICBba2V5LmlkLCBrZXkudGV4dENvbnRlbnRdID0gZTtcclxuXHJcbiAgICAgIHN3aXRjaCAoZVsxXSkge1xyXG4gICAgICAgIGNhc2UgJ2NhcHMnOlxyXG4gICAgICAgICAga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNhcHNMb2NrKGtleSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NwYWNlJzpcclxuICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fa2V5X2V4dHJhLXdpZGUnKTtcclxuICAgICAgICAgIGtleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcmludEtleSgnICcpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdiYWNrc3BhY2UnOlxyXG4gICAgICAgICAga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByaW50S2V5KCdiYWNrc3BhY2UnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZW50ZXInOlxyXG4gICAgICAgICAga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByaW50S2V5KCdcXHJcXG4nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndGFiJzpcclxuICAgICAgICAgIGtleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcmludEtleSgnXFx0Jyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBrZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpbnRLZXkodGhpcy5wcm9wZXJ0aWVzLmNhcHNMb2NrID8gZVsxXS50b1VwcGVyQ2FzZSgpIDogZVsxXS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmcmFnbWVudC5wdXNoKGtleSk7XHJcbiAgICAgIGlmIChpc05ld0xpbmUpIGZyYWdtZW50LnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgfSxcclxuXHJcbiAgdG9nZ2xlQ2Fwc0xvY2soa2V5KSB7XHJcbiAgICBrZXkuY2xhc3NMaXN0LnRvZ2dsZSgna2V5Ym9hcmRfX2tleV9hY3RpdmUnKTtcclxuICAgIHRoaXMucHJvcGVydGllcy5jYXBzTG9jayA9ICF0aGlzLnByb3BlcnRpZXMuY2Fwc0xvY2s7XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5lbGVtZW50cy5rZXlzKS5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleUVsZW0gPSB0aGlzLmVsZW1lbnRzLmtleXNbaV07XHJcbiAgICAgIGlmIChrZXlFbGVtLmNoaWxkRWxlbWVudENvdW50ID09PSAwICYmIGtleUVsZW0udGV4dENvbnRlbnQubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAga2V5RWxlbS50ZXh0Q29udGVudCA9IHRoaXMucHJvcGVydGllcy5jYXBzTG9ja1xyXG4gICAgICAgICAgPyBrZXlFbGVtLnRleHRDb250ZW50LnRvVXBwZXJDYXNlKCkgOiBrZXlFbGVtLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHByaW50S2V5KGtleSkge1xyXG4gICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5lbGVtZW50cztcclxuICAgIGlmIChrZXkgPT09ICdiYWNrc3BhY2UnKSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUuc3Vic3RyaW5nKDAsIGlucHV0LnZhbHVlLmxlbmd0aCAtIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5wdXQudmFsdWUgKz0ga2V5O1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgS2V5Ym9hcmQuaW5pdCgpO1xyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==