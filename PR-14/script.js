const container = document.getElementById('container');

// Create the grid
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.row = i;
    cell.dataset.col = j;
    container.appendChild(cell);
  }
}

// Add event listeners to toggle lights
container.addEventListener('click', (event) => {
  if (event.target.classList.contains('cell')) {
    toggleLight(event.target);
    toggleAdjacentLights(event.target.dataset.row, event.target.dataset.col);
    checkWin();
  }
});

function toggleLight(cell) {
  cell.classList.toggle('on');
}

function toggleAdjacentLights(row, col) {
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  directions.forEach(([dx, dy]) => {
    const newRow = parseInt(row) + dx;
    const newCol = parseInt(col) + dy;
    const adjacentCell = document.querySelector(`.cell[data-row="${newRow}"][data-col="${newCol}"]`);
    if (adjacentCell) {
      toggleLight(adjacentCell);
    }
  });
}

function checkWin() {
  const cells = document.querySelectorAll('.cell');
  const allLightsOff = [...cells].every(cell => !cell.classList.contains('on'));
  if (allLightsOff) {
    alert('Congratulations! You won!');
  }
}
