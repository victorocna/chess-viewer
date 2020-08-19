export const getMoveNumber = (fen) => {
  if (fen.includes(' w ')) {
    return fen[fen.length - 1] - 1;
  }
  if (fen.includes(' b ')) {
    return fen[fen.length - 1];
  }
};
