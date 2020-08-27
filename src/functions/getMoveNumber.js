export const getMoveNumber = (fen) => {
  let moveNumber = 0;

  for(let i = fen.length - 1; fen[i] !== " "; i--) {
    moveNumber += fen[i] * Math.pow(10, fen.length - 1 - i);
  }

  if (fen.includes(' w ')) {
    moveNumber--;
  }

  return moveNumber;
};
