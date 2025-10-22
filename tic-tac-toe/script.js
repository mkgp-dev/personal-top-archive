const Game = (function() {
  // empty variables
  let row, col, player, normal, reverse, move, bool, pOne, pTwo;

  // variables
  const config = {
    grid: 3,
    limit: 3
  };

  const container = {
    board: document.querySelector('.board'),
    layout: document.querySelector('.layout'),
    statusText: document.getElementById('status-text'),
    settingsArea: document.querySelector('.settings-area')
  };

  const modal = {
    main: document.getElementById('modal-settings'),
    modalHeader: document.querySelector('.modal-header'),
    modalTitle: document.getElementById('modal-title'),
    inputPlayerOne: document.getElementById('player-one'),
    inputPlayerTwo: document.getElementById('player-two'),
    modalAction: document.querySelector('.action')
  };

  const defaultValue = () => {
    row = Array(config.grid).fill(0);
    col = Array(config.grid).fill(0);
    player = 1; // default as 'X'
    normal = 0;
    reverse = 0;
    move = 0;
    bool = false;
  };

  // init user
  const start = () => {
    if (modal.main) {
      modal.main.style.display = 'flex';
      modal.main.style.backgroundColor = 'transparent';
      modal.modalTitle.textContent = 'Tic Tac Toe';

      // button start
      const btnStart = document.createElement('button');
      btnStart.textContent = 'Start';
      modal.modalAction.appendChild(btnStart).classList.add('btn', 'start');

      btnStart.addEventListener('click', () => {
        // check player strings
        pOne = modal.inputPlayerOne.value !== '' ? modal.inputPlayerOne.value.trim() : 'Player One';
        pTwo = modal.inputPlayerTwo.value !== '' ? modal.inputPlayerTwo.value.trim() : 'Player Two';

        modal.main.style.display = 'none';
        modal.main.style.backgroundColor = 'rgba(0,0,0,0.5)';
        container.layout.style.display = 'block';
        
        init();
      });
    }
  };

  // generate game
  const init = () => {
    // Filling empty values
    defaultValue();

    // Status update
    updateStatus();

    // Generate grid
    generateGrid();

    // Interact with grid
    container.board.addEventListener('click', interactGrid);

    // btn settings
    const btnSettings = document.createElement('button');
    btnSettings.textContent = 'Settings';
    container.settingsArea.appendChild(btnSettings).classList.add('btn', 'settings');

    // btn reset
    const btnReset = document.createElement('button');
    btnReset.textContent = 'Reset';
    container.settingsArea.appendChild(btnReset).classList.add('btn', 'reset');

    // add close button
    const spanClose = document.createElement('span');
    spanClose.className = 'close';

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa-thin', 'fa-xmark');
    spanClose.appendChild(closeIcon);
    modal.modalHeader.appendChild(spanClose);

    // replace buttons on modal
    modal.modalAction.replaceChildren();
    const btnSave = document.createElement('button');
    btnSave.textContent = 'Save';
    modal.modalAction.appendChild(btnSave).classList.add('btn', 'start');

    // listeners
    btnSettings.addEventListener('click', () => {
      modal.main.style.display = 'flex';
      modal.modalTitle.textContent = 'Settings';

      modal.inputPlayerOne.value = pOne;
      modal.inputPlayerTwo.value = pTwo;
    });

    closeIcon.addEventListener('click', () => {
      modal.main.style.display = 'none';
    })

    btnSave.addEventListener('click', () => {
      pOne = modal.inputPlayerOne.value !== '' ? modal.inputPlayerOne.value.trim() : 'Player One';
      pTwo = modal.inputPlayerTwo.value !== '' ? modal.inputPlayerTwo.value.trim() : 'Player Two';
      if (pOne === pTwo) return;

      updateStatus();
      modal.main.style.display = 'none';
    });

    btnReset.addEventListener('click', () => {
      resetAll();
      modal.main.style.display = 'none';
    });
  };

  const updateStatus = () => {
    const p = player === 1 ? pOne : pTwo;
    if (bool) container.statusText.textContent = `${p} wins the game.`;
    else if (move === config.grid * config.grid) container.statusText.textContent = 'It\'s a tie!';
    else container.statusText.textContent = `${p}'s turn to play.`;
  }

  const interactGrid = (e) => {
    const box = e.target.closest('.box');
    if (!box || bool || box.textContent) return;

    const id = Number(box.dataset.id);
    const r = Math.floor(id / config.grid);
    const c = id % config.grid;

    box.textContent = player === 1 ? 'X' : 'O';

    row[r] += player;
    col[c] += player;
    if (r === c) normal += player;
    if (r + c === config.grid - 1) reverse += player;

    move++;

    if (
      Math.abs(row[r]) === config.limit ||
      Math.abs(col[c]) === config.limit ||
      Math.abs(normal) === config.limit ||
      Math.abs(reverse) === config.limit
    ) {
      bool = true;
      updateStatus();
      return;
    }

    if (move === config.grid * config.grid) {
      bool = true;
      updateStatus();
      return;
    }

    player *= -1;
    updateStatus();
  };

  const generateGrid = () => {
    if (container.board) {
      container.board.style.display = 'grid';
      for (let i = 0; i < (config.grid * config.grid); i++) {
        const box = document.createElement('div');
        box.dataset.id = i;
        container.board.appendChild(box).className = 'box';
      }
    }
  };
  
  const resetAll = () => {
    defaultValue();
    updateStatus();
    // clean up
    container.board.replaceChildren();
    generateGrid();
    container.board.addEventListener('click', interactGrid);
  };

  return { start };
})();

// load everything
document.addEventListener('DOMContentLoaded', () => {
  Game.start();
});