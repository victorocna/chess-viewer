import { getMoveNumber } from './getMoveNumber';

export const areConsecutiveColorAndMove = (fen1, fen2) => {
  if (fen1.includes(' b ') && fen2.includes(' w ')) {
    if (getMoveNumber(fen1) === getMoveNumber(fen2)) {
      return true;
    }
  }
  if (fen1.includes(' w ') && fen2.includes(' b ')) {
    if (getMoveNumber(fen1) === getMoveNumber(fen2) - 1) {
      return true;
    }
  }
  return false;
};
