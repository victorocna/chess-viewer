import { getMoveNumber } from './getMoveNumber';

export const getMovePrefix = (thisItem, prevItem) => {
  const isPreceded = (thisItem, prevItem) => {
    if (prevItem.comment || prevItem.depth !== thisItem.depth) {
      return true;
    }
    return false;
  };

  if (thisItem.fen.includes(' b ')) {
    return getMoveNumber(thisItem.fen) + '.';
  }

  if (thisItem.fen.includes(' w ') && isPreceded(thisItem, prevItem)) {
    return getMoveNumber(thisItem.fen) + '...';
  }

  return "";
};
