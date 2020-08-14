export const getMovePrefix = (thisItem, prevItem) => {
  const isPreceded = (thisItem, prevItem) => {
    if (prevItem.comment || prevItem.depth !== thisItem.depth) {
      return true;
    }
    return false;
  };

  if (thisItem.move && thisItem.fen.includes(' b ')) {
    return thisItem.fen[thisItem.fen.length - 1] + '.';
  }

  if (
    thisItem.move &&
    thisItem.fen.includes(' w ') &&
    isPreceded(thisItem, prevItem)
  ) {
    return thisItem.fen[thisItem.fen.length - 1] - 1 + '...';
  }

  return '';
};
