const generateBoard = function (pos1, pos2) {
  let board = [];

  for (let i = 0; i < 8; i++) {
    board.push([]);
    for (let j = 0; j < 8; j++) {
      if ((pos1[0] === i && pos1[1] === j) || (pos2[0] === i && pos2[1] === j)) {
        board[i].push(1);
      } else {
        board[i].push(0);
      }
    }
  }

  return board;
}

const queenThreat = function (board) {
  let positions = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 1)
        positions.push([i, j]);
    }
  }

  if (positions[0][0] === positions[1][0] || positions[0][1] === positions[1][1]) {
    return true;
  } else if (Math.abs(positions[0][0] - positions[1][0]) === Math.abs(positions[0][1] - positions[1][1])) {
    return true;
  } else {
    return false;
  }
}