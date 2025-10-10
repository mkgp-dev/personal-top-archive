// generate grid
const generateGrid = (n) => {
  const container = document.querySelector('.grid');

  // adjust size in stylesheet
  document.documentElement.style.setProperty('--size', n);

  // row
  for (let i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    // column
    for (let j = 0; j < n; j++) {
      const box = document.createElement('div');
      box.className = 'box';
      row.appendChild(box);
    }
  }
};

const resetGrid = () => {
  const container = document.querySelector('.grid');
  container.innerHTML = '';
};

const resetColor = () => {
  const box = document.querySelectorAll('.box');
  box.forEach((b) => {
    b.style.backgroundColor = '';
  });
}

const paintGrid = () => {
  const box = document.querySelectorAll('.box');
  box.forEach((b) => {
    b.addEventListener('mouseenter', () => {
      b.style.backgroundColor = '#84A7A1';
    })
  });
}

const init = () => {
  const n = prompt('How many grids you want to generate?');

  // limitations
  if (isNaN(n) || n >= 100) return;
  
  // clear first
  resetGrid();

  // then generate
  generateGrid(n);

  // then have the capability to paint boxes
  paintGrid();
};

document.addEventListener('DOMContentLoaded', () => {
  const g = document.getElementById('generate');
  g.addEventListener('click', init);

  const r = document.getElementById('reset');
  r.addEventListener('click', resetColor);
});
