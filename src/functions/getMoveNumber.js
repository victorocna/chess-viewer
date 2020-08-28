export const getMoveNumber = (fen) => {
  const split = fen.split(' ');
  const side = split[1];
  const fullmove = split[5];

  return side === 'w' ? fullmove - 1 : fullmove;
};
