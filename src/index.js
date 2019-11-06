import './style.css';

const Keybl = {
  elements: {
    input: null,
    keysContainer: null,
    keys: []
  },

  properties: {
    text: "",
    capsLock: false
  },

  init()  {
    this.elements.input = document.createElement('textarea');
    this.elements.input.classList.add('input');


    this.elements.keysContainer = document.createElement('div');
    this.elements.keysContainer.classList.add('keyboard');
    this.elements.keysContainer.append(...this._createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

    // анимация клавиш
    this.elements.keysContainer.addEventListener('click', (event) => {
      this.keyAnimate(this.mouseDown(event));
    });
    document.addEventListener('keydown', (event) => {
      this.keyAnimate(this.keyDown(event))
    });

    document.body.append(this.elements.input, this.elements.keysContainer);
  },

  handler() {

  },

  keyDown(event) {
    let key = document.getElementById(event.code);
    this.elements.input.focus();
    this.elements.input.selectionStart = this.elements.input.selectionEnd = this.elements.input.value.length;

    if (event.code === 'CapsLock') {
      this._toggleCapsLock(key);
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
  },

  _createKeys() {

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
      // ['Tab', 'tab'],
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
      ['ShiftLeft', 'shift'],
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
/*      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
      "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
      "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
      "space"*/
    ];

    keyLayout.forEach(e => {
      const isNewLine = ['backspace', 'p', 'enter', '.'].indexOf(e[1]) !== -1;
      let key = document.createElement('button');
      key.classList.add('keyboard__key');
      key.id = e[0];
      key.textContent = e[1];

      switch (e[1]) {
        case "caps":
          key.addEventListener("click", () => {
            this._toggleCapsLock(key);
          });
          break;
        case "space":
          key.classList.add('keyboard__key_extra-wide');
          key.addEventListener("click", () => {
            this.printKey(' ');
          });
          break;
        case "backspace":
          key.addEventListener("click", () => {
            this.printKey('backspace');
          });
          break;
        case "enter":
          key.addEventListener("click", () => {
            this.printKey('\r\n');
          });
          break;
        case "tab":
          key.addEventListener("click", () => {
            this.printKey('\t');
          });
          break;
        default:
          key.addEventListener("click", () => {
            this.printKey(this.properties.capsLock ? e[1].toUpperCase() : e[1].toLowerCase());
          });
      }

      fragment.push(key);
      if (isNewLine) fragment.push(document.createElement('br'));
    });

    return fragment;

  },

  _triggerEvent(handlerName) {

  },

  _toggleCapsLock(key) {
    key.classList.toggle("keyboard__key_active");
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (key.childElementCount === 0 && key.textContent.length === 1) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },

  printKey(key) {
    let input = this.elements.input;
/*    let input = this.elements.input,
        from = input.selectionStart,
        to = input.selectionEnd;

    input.value = input.value.slice(0, from) + key + input.value.slice(to);
    input.selectionStart = input.selectionEnd = from + key.length;*/
    // console.log(key);
    if (key === 'backspace') {
      input.value = input.value.substring(0, input.value.length - 1);;
    } else {
      input.value = input.value + key;
    }
    // this.elements.input.focus();
    // console.log(this.elements.input);
  }

};

window.addEventListener("DOMContentLoaded", function () {
  Keybl.init();
});