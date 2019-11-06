import './style.css';

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

    // анимация клавиш
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
