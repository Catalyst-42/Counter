const maxCount = document.querySelector('script[count]').getAttribute('count');
var doDecomposition = true;

var isPrime = false;
var isHalfPrime = false;
var isFibonacci = false;
var isFactorial = false;
var isCatalan = false;
var isSquare = false

var isSecret = false;
var topics = 0; 

function factorial(n) {
  if (n == 0) return 1;

  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

function decompose(count) {
  let d = 2;
  let divs = [];
  let root = count ** .5;
  
  while (count > 1) {
    if (count % d == 0) {
      count /= d
      divs.push(d);
    }
    else {
      if (d == 2) d++;
      else d += 2;
      
      if (d > root) {
        divs.push(count);
        return divs;
      }
    }
  }
  
  return divs;
}

function PrimesCheck(count) {
  isPrime = false;
  isHalfPrime = false;

  let decomposition = decompose(count);
  if (decomposition.length == 1) {
    isPrime = true;
    $('p').first().append(`<br><span style='color: #2C3E50'>Простое число</span>`) && topics++;
  }
  if (decomposition.length == 2) {
    isHalfPrime = true;
    $('p').first().append(`<br><span style='color: #2C3E50'>Полупростое число</span>`) && topics++;
  }
}

function FibonacciCheck(count) {
  isFibonacci = false;

  let a = Math.sqrt(5 * count**2 + 4);
  if (a == Math.round(a)) {
    isFibonacci = true;
  } else {
    let b = Math.sqrt(5 * count**2 - 4);
    if (b == Math.round(b)) {
      isFibonacci = true;
    }
  }

  if (isFibonacci) $('p').first().append(`<br><span style='color: #2C3E50'>Число Фибоначчи</span>`)  && topics++;
}

function CatalanCheck(count) {
  isCatalan = false;
  
  let i = 0;
  let catalan = 0;

  while (true) {
    catalan = factorial(2 * i) / (factorial(i) * factorial(i + 1));

    if (catalan > count) break
    else if (catalan == count) { 
      isCatalan = true;
      break;
    }
    else i++;
  }

  if (count == 1) isCatalan = true;
  if (isCatalan) $('p').first().append(`<br><span style='color: #2C3E50'>Число Каталана</span>`) && topics++;
}

function FactorialCheck(count) {
  isFactorial = false;

  if (count == 1) {
    isFactorial = true;
    $('p').first().append(`<br><span style='color: #2C3E50'>0!</span>`) && topics++;
  } 
  else {
    let i = 2;
    let sum = 1;
    while (sum <= count) {
      sum *= i;
      if (sum == count) {
        isFactorial = true;
        $('p').first().append(`<br><span style='color: #2C3E50'>${i}!</span>`) && topics++;
      }
      i++;
    }
  }
}

function SquareCheck(count) {
  isSquare = false;

  let root = count**.5
  if (root == Math.round(root)) {
    isSquare = true;
    if (count < 4) return;
    $('p').first().append(`<br><span style='color: #2C3E50'>${root}<sup>2</sup></span>`) && topics++;
  }
}

function LoadSecret(count) {
  isSecret = false;

  let secrets = {
    0: '<span style="color: red">Вас тут быть не должно</span>',
    1: 'Начало',
    2: 'Корень всех зол',
    5: 'Целая команда',
    10: 'Следующий разряд',
    15: 'Змей',
    18: 'Детство закончилось',
    36: 'Смутное время',
    42: 'Любимое число админа',
    50: 'Кто все эти люди?',
    88: '∞ + ∞ = 16',
    92: '[#######...]',
    100: 'Пролог',
    123: 'Инверсный унитарный код',
    170: '0b10101010',
    192: '192.168.1.52',
    213: 'Не стоит пытаться доказать то, что является почти очевидным',
    255: 'FF<sub>16</sub>',
    314: '3.1415926535...',
    404: 'Не найдено',
    418: 'Я чайник',
    500: 'Избыток лишает ценности',
    666: 'Чёрт, где мои вилы...',
    667: 'ψ - вот вилы',
    777: 'Повезло, повезло',
    1000: 'Поздравляю, вы тысячный покупатель...',
    1111: 'Забор',
    1147: 'Год основания Москвы',
    1234: 'Убивец',
    1337: '75 U5R W8S DEL873D',
    1703: 'Год основания Петербурга',
    1729: 'Число Рамануджана-Харди',
    1984: 'Война - это мир, свобода - это рабство, незнание - сила',
    10000: 'Тьма'
  }

  if (count in secrets) {
    isSecret = true;
    $('p').first().append(`<br><span style='color: #ABB2B9'>${secrets[count]}</span>`) && topics++;
  }
}

function LoadEmotion(count) {
  let emotions = [
    ':)',
    ':|',
    ':(',
    ':p',
    '*u*', 
    '*μ*', 
    '^z^', 
    '(╮°-°)╮ ┳━━┳  ( ╯°□°)╯ ┻━━┻', 
    '^-^', 
    '-ШО-', 
    ':]', 
    ':[]', 
    ':[',
    '*г*', 
    '*Ll*', 
    '*ρ*', 
    '*()*', 
    '*...*', 
    '*ω*', 
    '^V^', 
    '*о*', 
    '*О*', 
    '.о.', 
    '*^*', 
    '^*^', 
    '*-*', 
    '*~*', 
    '*=*', 
    '*ヮ*', 
    '._.', 
    '×-×', 
    '0_о', 
    '>-<', 
    '[_]', 
    '.,_]', 
    '⁶-⁶', 
    '⁹-⁹', 
    '~Э~', 
    '^~^', 
    '!_!', 
    '%-%', 
    '⁰-⁰', 
    '¹-¹', 
    '7_7', 
    ':р', 
    ':Е', 
    '-ф-', 
    'Т~Т', 
    '*n*', 
    ':|', 
    '☆-☆', 
    ':/', 
    ',_,', 
    '°□°', 
    '°⁰°', 
    '¯\\_(ツ)_/¯', 
    '~|~', 
    '$-$', 
    '*v*', 
    '-ω-', 
    '[:]lll[:]', 
    '･ᴗ･', 
    '^ᴗ^', 
    ':D', 
    'D:', 
    '-0-', 
    '*¤*', 
    '*W*', 
    "'@'", 
    '-О-', 
    '*#*', 
    '-#-', 
    '-=-',  
    '-α-', 
    'Σ:', 
    '*σ*', 
    '*Δ*', 
    '^Δ^', 
    'VΔV', 
    "'Δ'", 
    'Q-Q', 
    '˙꒳˙', 
    'Σ-Σ', 
    'Σ"', 
    '*ψ*', 
    '-п-', 
    '⁶п⁶', 
    '-ц-', 
    '-ς-', 
    '´‾`', 
    '0w0', 
    '-€-', 
    '×^×', 
    '*((*', 
    ':C', 
    't-t', 
    '0.0', 
    ":'()", 
    '⸮_?', 
    '*>*', 
    '⨀-⨀', 
    ':!', 
    '⊹-⊹', 
    '-∪-', 
    '⊏⊐-⊏⊐', 
    '⊏*⊐_⊏*⊐', 
    '⊐-⊐', 
    '.^.', 
    'Σ|:)', 
    '˙¯˙', 
    '^⩌^', 
    '-⩋-', 
    '*⩇*', 
    '❲*-*❳', 
    '⋋_⋌', 
    '⦁-⦁', 
    '⧟', 
    '˙¯˙ !₋! .₋.',
    '¬-¬', 
    'В)', 
    'В:|', 
    ':з', 
    ' ┴┤(･_├┬', 
    'XXD', 
    '[×]-[×]', 
    '(＾▽＾)', 
    '(≥o≤)', 
    "(='X'=)", 
    '(o^^)o', 
    '(;-;)', 
    '\\(o_o)/', 
    '·_·', 
    '︻デ┳═ー', 
    '|-o-|', 
    'ಠ_ಠ', 
    '(⌐■_■)', 
    '- ┳━━┳ -',
    '(≖_≖ )',
    '`^´',
    '└o┘',
    'δ-δ',
  ];
  
  $('p').first().append(`<br><span style='color: #2C3E50'>${emotions[count % (emotions.length - 1)]}</span>`);
}

function DecompositionCheck(count) {
  let decomposition = decompose(count);
  if (isPrime || isFactorial || isSquare) return;

  let textLine = '';
  let power = 1;
  for (let i = 0; i < decomposition.length; i++) {
    if (decomposition[i] == decomposition[i+1]) {
      power++;
    }
    else {
      if (power > 1) {
        textLine += decomposition[i] + `<sup>${power}</sup> * `;
      }
      else textLine += decomposition[i] + ' * ';
      power = 1;
    }
  }

  textLine = textLine.slice(0, -2);
  $('p').first().append(`<br><span style='color: #2C3E50'>${textLine}</span>`);
}

function LoadTopics(count=maxCount) {  
  topics = 0;

  LoadSecret(count);
  PrimesCheck(count);
  
  FibonacciCheck(count);
  CatalanCheck(count);
  FactorialCheck(count);
  SquareCheck(count);
  
  if (doDecomposition) DecompositionCheck(count);
  if (!topics) LoadEmotion(count);
}

// Load all topics
$(document).ready(LoadTopics());

// Bind goto
$("#counter").bind("mousewheel", function(event) {
  if (!RegExp(/^\d+$/).test(this.value) || parseInt(this.value) > maxCount || parseInt(this.value) < 0) return;
  let delta = -event.originalEvent.wheelDelta / 120;

  if (delta > 0 && parseInt(this.value) < maxCount) {
    this.value = parseInt(this.value) + 1;
  } 
  else if (delta < 0 && parseInt(this.value) > 0) {
    this.value = parseInt(this.value) - 1;
  }

  let word = this.value%10 > 1 && this.value%10 < 5 && (this.value % 100 < 12 || this.value % 100 > 15) ? 'раза' : 'раз';
  let color = this.value == maxCount ? '' : '<span style="color: red">не</span>';
  $('p').first().html(`Эту страницу просмотрели ${color} ${this.value} ${word}`);
  LoadTopics(this.value);
});

$("#counter").bind("input", function(event) {  
  if (!RegExp(/^\d+$/).test(this.value) || parseInt(this.value) > maxCount || parseInt(this.value) < 0) return;

  let word = this.value%10 > 1 && this.value%10 < 5 && (this.value % 100 < 12 || this.value % 100 > 15) ? 'раза' : 'раз';
  let color = this.value == maxCount ? '' : '<span style="color: red">не</span>';
  $('p').first().html(`Эту страницу просмотрели ${color} ${this.value} ${word}`);
  LoadTopics(this.value);
});
