// empty var
let operator = null;
let current = '0';
let previous = null;
let bool = false;
let frml = [];

// global use
const display = document.getElementById('display');
const formula = document.getElementById('formula');

// modify display
const editDisplay = (s) => {
  s = s.trim();

  if (display.innerHTML === 'Error' || display.innerHTML.length >= 9) return;

  if (bool) {
    display.innerHTML = s;
    bool = false;
  } else if (display.innerHTML === '0' && s === '0') return;
    else if (display.innerHTML === '0' && s !== '0') display.innerHTML = s;
    else display.innerHTML += s;

    current = display.innerHTML;
};

// create basic formula
const showFormula = (a, b) => {
  const boolOpr = (s) => ['+', '-', 'x', '/'].includes(s);

  switch (a) {
    case 'num':
      if (frml.length === 0 || boolOpr(frml[frml.length - 1])) frml.push(b);
      else frml[frml.length - 1] = b;
      break;
    case 'opr':
      if (frml.length === 0) frml.push(display.innerHTML);
      frml.push(b);
      break;
    case 'rOpr':
      if (frml.length === 0 && boolOpr(frml[frml.length - 1])) frml[frml.length - 1] = b;
      break;
    case 'clr':
      frml = [];
      break;
    case 'init':
    default:
      break;
  }

  formula.innerHTML = frml.join(' ');
};

// debug
const updateStatus = () => {
  console.log(current, previous, operator, bool);
};

// button function
const calculator = () => {
  // button for numbers
  const btnNum = document.querySelectorAll('#num');
  btnNum.forEach(bN => {
    bN.addEventListener('click', () => {
      if (display.innerHTML === 'Error') return;
      editDisplay(bN.innerHTML);
      showFormula('num', display.innerHTML);
      //updateStatus();
    });
  });

  // button for clear
  const btnClear = document.getElementById('clr');
  btnClear.addEventListener('click', () => {
    display.innerHTML = '0';
    current = '0';
    previous = null;
    operator = null;
    bool = false;
    showFormula('clr');
    //updateStatus();
  });

  // button for delete
  const btnDel = document.getElementById('del');
  btnDel.addEventListener('click', () => {
    if (display.innerHTML === 'Error') return;
    else if (display.innerHTML === '0') return;
    const del = display.innerHTML.slice(0, -1);
    display.innerHTML = del === '' ? '0' : del;
    current = display.innerHTML;
    showFormula('num', display.innerHTML);
    //updateStatus();
  });

  // button for math operation
  const btnOpr = document.querySelectorAll('#operator');
  btnOpr.forEach(bO => {
    bO.addEventListener('click', () => {
      if (display.innerHTML === 'Error') return;
      const nOpr = (bO.innerHTML).trim();

      if (operator && !bool && previous !== null) {
        showFormula('opr', nOpr);

        const result = operate(previous, current, operator);
        display.innerHTML = result;
        current = result;
        previous = result;
      } else if (operator && bool && previous !== null) {
        showFormula('rOpr', nOpr);
      } else {
        showFormula('opr', nOpr);
        previous = current;
      }

      operator = nOpr;
      bool = true;
      //updateStatus();
    });
  });

  // button for equal
  const btnEqual = document.getElementById('equal');
  btnEqual.addEventListener('click', () => {
    if (display.innerHTML === 'Error') return;
    const result = operate(previous, current, operator);
    display.innerHTML = result;
    current = result;
    previous = null;
    operator = null;
    bool = true;
    showFormula('clr');
    //updateStatus();
  });

  // button for decimal
  const btnDecimal = document.getElementById('dec');
  btnDecimal.addEventListener('click', () => {
    if (display.innerHTML === 'Error') return;
    if (bool) {
      display.innerHTML = '0.';
      bool = false;
    } else if (!display.innerHTML.includes('.')) display.innerHTML += '.';
    current = display.innerHTML;
    showFormula('num', display.innerHTML);
    //updateStatus();
  });
};

// operate function
const operate = (a, b, opr) => {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (opr) {
    case '+':
      return (a + b).toString();
    case '-':
      return (a - b).toString();
    case 'x':
      return (a * b).toString();
    case '/':
      return b === 0 ? 'Error' : (a / b).toString();
    default:
      return b;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  calculator();
});
