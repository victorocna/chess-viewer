import { getMoveNumber } from './getMoveNumber';

export const getMovePrefix = (thisItem, prevItem) => {
  const isPreceded = (prevItem) => {
    if (prevItem.comment || !prevItem.move) {
      return true;
    }
    return false;
  };

  if (thisItem.fen.includes(' b ')) {
    return getMoveNumber(thisItem.fen) + '. ';
  }

  if (thisItem.fen.includes(' w ') && isPreceded(prevItem)) {
    return getMoveNumber(thisItem.fen) + '... ';
  }

  return '';
};
