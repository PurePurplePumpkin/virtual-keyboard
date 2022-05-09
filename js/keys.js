const allKeys = [
  {
    E: '`', R: 'ё', SE: '~', class: 'keys-letter', name: 'Backquote',
  },
  {
    E: '1', R: '1', SE: '!', SR: '!', class: 'keys-letter', name: 'Digit1',
  },
  {
    E: '2', R: '2', SE: '@', SR: '"', class: 'keys-letter', name: 'Digit2',
  },
  {
    E: '3', R: '3', SE: '#', SR: '№', class: 'keys-letter', name: 'Digit3',
  },
  {
    E: '4', R: '4', SE: '$', SR: ';', class: 'keys-letter', name: 'Digit4',
  },
  {
    E: '5', R: '5', SE: '%', SR: '%', class: 'keys-letter', name: 'Digit5',
  },
  {
    E: '6', R: '6', SE: '^', SR: ':', class: 'keys-letter', name: 'Digit6',
  },
  {
    E: '7', R: '7', SE: '&', SR: '?', class: 'keys-letter', name: 'Digit7',
  },
  {
    E: '8', R: '8', SE: '*', SR: '*', class: 'keys-letter', name: 'Digit8',
  },
  {
    E: '9', R: '9', SE: '(', SR: '(', class: 'keys-letter', name: 'Digit9',
  },
  {
    E: '0', R: '0', SE: ')', SR: ')', class: 'keys-letter', name: 'Digit0',
  },
  {
    E: '-', R: '-', SE: '_', SR: '_', class: 'keys-letter', name: 'Minus',
  },
  {
    E: '=', R: '=', SE: '+', SR: '+', class: 'keys-letter', name: 'Equal',
  },
  {
    E: 'Backspace', R: 'Backspace', class: 'keys-long', name: 'Backspace',
  },
  {
    E: 'Tab', R: 'Tab', class: 'keys-func', name: 'Tab',
  },
  {
    E: 'q', R: 'й', class: 'keys-letter', name: 'KeyQ',
  },
  {
    E: 'w', R: 'ц', class: 'keys-letter', name: 'KeyW',
  },
  {
    E: 'e', R: 'у', class: 'keys-letter', name: 'KeyE',
  },
  {
    E: 'r', R: 'к', class: 'keys-letter', name: 'KeyR',
  },
  {
    E: 't', R: 'е', class: 'keys-letter', name: 'KeyT',
  },
  {
    E: 'y', R: 'н', class: 'keys-letter', name: 'KeyY',
  },
  {
    E: 'u', R: 'г', class: 'keys-letter', name: 'KeyU',
  },
  {
    E: 'i', R: 'ш', class: 'keys-letter', name: 'KeyI',
  },
  {
    E: 'o', R: 'щ', class: 'keys-letter', name: 'KeyO',
  },
  {
    E: 'p', R: 'з', class: 'keys-letter', name: 'KeyP',
  },
  {
    E: '[', R: 'х', SE: '{', class: 'keys-letter', name: 'BracketLeft',
  },
  {
    E: ']', R: 'ъ', SE: '}', class: 'keys-letter', name: 'BracketRight',
  },
  {
    E: '\\', R: '\\', SE: '|', SR: '/', class: 'keys-letter', name: 'Backslash',
  },
  {
    E: 'DEL', R: 'DEL', class: 'keys-func', name: 'Delete',
  },
  {
    E: 'Caps Lock', R: 'Caps Lock', class: 'keys-long', name: 'CapsLock',
  },
  {
    E: 'a', R: 'ф', class: 'keys-letter', name: 'KeyA',
  },
  {
    E: 's', R: 'ы', class: 'keys-letter', name: 'KeyS',
  },
  {
    E: 'd', R: 'в', class: 'keys-letter', name: 'KeyD',
  },
  {
    E: 'f', R: 'а', class: 'keys-letter', name: 'KeyF',
  },
  {
    E: 'g', R: 'п', class: 'keys-letter', name: 'KeyG',
  },
  {
    E: 'h', R: 'р', class: 'keys-letter', name: 'KeyH',
  },
  {
    E: 'j', R: 'о', class: 'keys-letter', name: 'KeyJ',
  },
  {
    E: 'k', R: 'л', class: 'keys-letter', name: 'KeyK',
  },
  {
    E: 'l', R: 'д', class: 'keys-letter', name: 'KeyL',
  },
  {
    E: ';', R: 'ж', SE: ':', class: 'keys-letter', name: 'Semicolon',
  },
  {
    E: '\'', R: 'э', SE: '"', class: 'keys-letter', name: 'Quote',
  },
  {
    E: 'ENTER', R: 'ENTER', class: 'keys-long', name: 'Enter',
  },
  {
    E: 'Shift', R: 'Shift', class: 'keys-long', name: 'ShiftLeft',
  },
  {
    E: 'z', R: 'я', class: 'keys-letter', name: 'KeyZ',
  },
  {
    E: 'x', R: 'ч', class: 'keys-letter', name: 'KeyX',
  },
  {
    E: 'c', R: 'с', class: 'keys-letter', name: 'KeyC',
  },
  {
    E: 'v', R: 'м', class: 'keys-letter', name: 'KeyV',
  },
  {
    E: 'b', R: 'и', class: 'keys-letter', name: 'KeyB',
  },
  {
    E: 'n', R: 'т', class: 'keys-letter', name: 'KeyN',
  },
  {
    E: 'm', R: 'ь', class: 'keys-letter', name: 'KeyM',
  },
  {
    E: ',', R: 'б', SE: '<', class: 'keys-letter', name: 'Comma',
  },
  {
    E: '.', R: 'ю', SE: '>', class: 'keys-letter', name: 'Period',
  },
  {
    E: '/', R: '.', SE: '?', SR: ',', class: 'keys-letter', name: 'Slash',
  },
  {
    E: '&#9650;', R: '&#9650;', class: 'keys-func', name: 'ArrowUp',
  },
  {
    E: 'Shift', R: 'Shift', class: 'keys-long', name: 'ShiftRight',
  },
  {
    E: 'Ctrl', R: 'Ctrl', class: 'keys-func', name: 'ControlLeft',
  },
  {
    E: 'Win', R: 'Win', class: 'keys-func', name: 'MetaLeft',
  },
  {
    E: 'Alt', R: 'Alt', class: 'keys-func', name: 'AltLeft',
  },
  {
    E: ' ', R: ' ', class: 'keys-space', name: 'Space',
  },
  {
    E: 'Alt', R: 'Alt', class: 'keys-func', name: 'AltRight',
  },
  {
    E: '&#9668;', R: '&#9668;', class: 'keys-func', name: 'ArrowLeft',
  },
  {
    E: '&#9660;', R: '&#9660;', class: 'keys-func', name: 'ArrowDown',
  },
  {
    E: '&#9658;', R: '&#9658;', class: 'keys-func', name: 'ArrowRight',
  },
  {
    E: 'Ctrl', R: 'Ctrl', class: 'keys-func', name: 'ControlRight',
  },
];

export default allKeys;
