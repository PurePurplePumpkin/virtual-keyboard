import allKeys from './keys.js';

class Keyboard {
  constructor() {
    this.keyboard = null;
    this.language = 'en';
    this.CapsLock = false;
    this.ShiftLeft = false;
    this.ShiftRight = false;
    this.AltLeft = false;
    this.AltRight = false;
    this.ControlLeft = false;
    this.ControlRight = false;
    this.Backspace = false;
    this.Delete = false;
  }

  prepare() {
    for (let i = 0; i < allKeys.length; i += 1) {
      this.keyboard.append(this.addKey(allKeys[i]));
    }
  }

  checkLang() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i += 1) {
      if (cookies[i].indexOf('language=') !== -1) {
        this.language = cookies[i].slice(-2);
      }
    }
    return this.language;
  }

  refresh() {
    for (let i = 0; i < allKeys.length; i += 1) {
      const item = allKeys[i];

      document.getElementById(item.name).innerHTML = (this.language === 'en') ? item.E : item.R;
      if (this.CapsLock && item.class === 'keys-letter') {
        document.getElementById(item.name).innerHTML = (this.language === 'en') ? item.E.toUpperCase() : item.R.toUpperCase();
      }
      if ((this.ShiftLeft || this.ShiftRight) && item.class === 'keys-letter') {
        if (this.language === 'en') {
          document.getElementById(item.name)
            .innerHTML = (item.SE === undefined) ? item.E.toUpperCase() : item.SE;
        } else {
          document.getElementById(item.name)
            .innerHTML = (item.SR === undefined) ? item.R.toUpperCase() : item.SR;
        }
      }
      if (this.CapsLock && (this.ShiftLeft || this.ShiftRight) && item.class === 'keys-letter') {
        if (this.language === 'en') {
          document.getElementById(item.name)
            .innerHTML = (item.SE === undefined) ? item.E : item.SE;
        } else {
          document.getElementById(item.name)
            .innerHTML = (item.SR === undefined) ? item.R : item.SR;
        }
      }
    }
  }

  delete() {
    const area = document.getElementById('area');
    const start = area.selectionStart;
    const end = area.selectionEnd;
    const lgth = area.value.length;
    const textbefore = area.value.substring(0, start);
    const textafter = area.value.substring(end, lgth);
    let optionStart = start;
    let optionEnd = end;
    if (this.Backspace) {
      if (start !== 0) {
        optionStart = start - 1;
      }
    } else if (this.Delete) {
      optionEnd = end + 1;
    }
    if (start === end) {
      area.value = area.value.substring(0, optionStart) + area.value.substring(optionEnd, lgth);
      area.focus();
      area.selectionStart = optionStart;
      area.selectionEnd = optionStart;
    } else {
      area.value = textbefore + textafter;
      area.focus();
      area.selectionStart = start;
      area.selectionEnd = start;
    }
  }

  write(item) {
    const area = document.getElementById('area');
    let letter = item;
    if (this.CapsLock) {
      if (!this.ShiftLeft && !this.ShiftRight) letter = item.toUpperCase();
    }
    if (this.ShiftLeft || this.ShiftRight) {
      if (!this.CapsLock) letter = item.toUpperCase();
    }
    if (area.selectionStart || area.selectionStart === '0') {
      const start = area.selectionStart;
      const end = area.selectionEnd;
      area.value = area.value.substring(0, start)
            + letter
            + area.value.substring(end, area.value.length);
      area.selectionEnd = start + 1;
    } else {
      area.value += letter;
    }
  }

  addKey(item) {
    const key = document.createElement('div');
    key.id = item.name;
    key.classList.add('keys', item.class);
    key.innerHTML = (this.language === 'en') ? item.E : item.R;
    key.addEventListener('mousedown', () => {
      key.classList.add('click');
      if (key.id === 'ShiftRight') {
        this.ShiftRight = true;
        this.refresh();
      }
      if (key.id === 'ShiftLeft') {
        this.ShiftLeft = true;
        this.refresh();
      }
      if (key.id === 'AltLeft') this.AltLeft = true;
      if (key.id === 'Backspace') this.Backspace = true;
      if (key.id === 'Delete') this.Delete = true;
      if (this.ControlLeft && this.AltLeft) {
        this.language = (this.language === 'ru') ? 'en' : 'ru';
        document.cookie = `language=${this.language}`;
        this.refresh();
      }
      if (key.id === 'Backspace' || key.id === 'Delete') this.delete();
      if (key.id === 'Tab') this.write('\t');
    });
    key.addEventListener('mouseup', () => {
      key.classList.remove('click');
      if (key.id === 'ShiftRight') {
        this.ShiftRight = false;
        this.refresh();
      }
      if (key.id === 'ShiftLeft') {
        this.ShiftLeft = false;
        this.refresh();
      }
      if (key.id === 'AltLeft') this.AltLeft = false;
      if (key.id === 'Backspace') this.Backspace = false;
      if (key.id === 'Delete') this.Delete = false;
    });
    key.addEventListener('click', () => {
      if (key.id === 'Digit7' && (this.ShiftLeft || this.ShiftRight) && this.language === 'en') {
        this.write('&');
      } else if (key.classList.contains('keys-letter') || key.classList.contains('keys-space') || key.id.indexOf('Arrow') !== -1) this.write(key.innerHTML);
      if (key.id === 'CapsLock') {
        if (this.CapsLock) {
          this.CapsLock = false;
          key.classList.remove('click');
          this.refresh();
        } else {
          this.CapsLock = true;
          key.classList.add('click');
          this.refresh();
        }
      }
      if (key.id === 'Enter') this.write('\n');
    });
    return key;
  }

  create() {
    const container = document.createElement('div');
    container.className = 'container';

    const textarea = document.createElement('textarea');
    textarea.className = 'area';
    textarea.id = 'area';
    textarea.addEventListener('blur', () => {
      document.getElementById('area').focus();
    });
    container.append(textarea);

    this.keyboard = document.createElement('div');
    this.keyboard.className = 'keyboard';
    container.append(this.keyboard);

    const desc = document.createElement('div');
    desc.innerText = 'Клавиатура создана в операционной системе Kubuntu\n\n Переключение языка: Control Left + Alt Left';
    desc.style = 'text-align:center';
    container.append(desc);

    this.prepare();

    document.body.append(container);
  }
}

const keyboard = new Keyboard();

function press(e) {
  if (e.code === 'F5') return true;
  if (e.code === 'Tab') {
    keyboard.write('\t');
    document.getElementById(e.code).classList.add('click');
    return false;
  }
  const el = document.getElementById(e.code);
  if (el == null) return false;
  if (e.code === 'CapsLock') {
    if (keyboard.CapsLock) {
      keyboard.CapsLock = false;
      el.classList.remove('click');
      keyboard.refresh();
    } else {
      keyboard.CapsLock = true;
      el.classList.add('click');
      keyboard.refresh();
    }
    return true;
  }
  if (e.code === 'ShiftLeft') {
    keyboard.ShiftLeft = true;
    keyboard.refresh();
  }
  if (e.code === 'ShiftRight') {
    keyboard.ShiftRight = true;
    keyboard.refresh();
  }
  if (e.code === 'AltLeft') keyboard.AltLeft = true;
  if (e.code === 'AltRight') keyboard.AltRight = true;
  if (e.code === 'ControlLeft') keyboard.ControlLeft = true;
  if (e.code === 'ControlRight') keyboard.ControlRight = true;
  el.classList.add('click');
  if (keyboard.ControlLeft && keyboard.AltLeft) {
    keyboard.language = (keyboard.language === 'ru') ? 'en' : 'ru';
    document.cookie = `language=${keyboard.language}`;
    keyboard.refresh();
  }
  if (keyboard.CapsLock && (keyboard.ShiftLeft || keyboard.ShiftRight)) {
    keyboard.refresh();
  }
  for (let i = 0; i < allKeys.length; i += 1) {
    if (allKeys[i].name === e.code) {
      if (allKeys[i].class === 'keys-long' || allKeys[i].class === 'keys-func') {
        return true;
      }
      if (keyboard.ShiftLeft || keyboard.ShiftRight) {
        if (keyboard.language === 'en') {
          keyboard.write((allKeys[i].SE === undefined) ? allKeys[i].E : allKeys[i].SE);
        } else {
          keyboard.write((allKeys[i].SR === undefined) ? allKeys[i].R : allKeys[i].SR);
        }
      } else {
        keyboard.write((keyboard.language === 'en') ? allKeys[i].E : allKeys[i].R);
      }
    }
  }
  return false;
}

function dismiss(e) {
  const el = document.getElementById(e.code);
  if (el == null) return false;
  if (e.code === 'CapsLock') return true;
  if (e.code === 'ShiftLeft') {
    keyboard.ShiftLeft = false;
    keyboard.refresh();
  }
  if (e.code === 'ShiftRight') {
    keyboard.ShiftRight = false;
    keyboard.refresh();
  }
  if (e.code === 'AltLeft') keyboard.AltLeft = false;
  if (e.code === 'AltRight') keyboard.AltRight = false;
  if (e.code === 'ControlLeft') keyboard.ControlLeft = false;
  if (e.code === 'ControlRight') keyboard.ControlRight = false;
  el.classList.remove('click');
  return true;
}

keyboard.language = keyboard.checkLang();
document.body.onload = keyboard.create();
document.getElementById('area').focus();
document.body.onkeydown = press;
document.body.onkeyup = dismiss;
