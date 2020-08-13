export const getMovePrefix = (thisItem, prevItem) => {
  if (thisItem.move && thisItem.fen.includes(' b ')) {
    return thisItem.fen[thisItem.fen.length - 1] + ".";
  }
};
