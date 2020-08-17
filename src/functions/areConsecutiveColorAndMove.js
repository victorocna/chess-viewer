export const areConsecutiveColorAndMove = (fen1, fen2) => {
  if (fen1.includes(' b ') && fen2.includes(' w ')) {
    if (fen1[fen1.length - 1] - 1 === fen2[fen2.length - 1] - 2) {
      return true;
    }
  }
  if (fen1.includes(' w ') && fen2.includes(' b ')) {
    if (fen1[fen1.length - 1] === fen2[fen2.length - 1]) {
      return true;
    }
  }
  return false;
};
