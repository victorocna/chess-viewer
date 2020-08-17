import Chess from 'chess.js';

export const areConsecutivePositions = (fen1, move, fen2) => {
  const game = new Chess(fen1);

  game.move(move);
  if (game.fen() === fen2) {
    return true;
  }

  return false;
};
