export const intoarceParanteza = (prevItem, thisItem) => {
  if (prevItem && thisItem.depth > prevItem.depth) {
    return '(';
  }
  if (prevItem && thisItem.depth < prevItem.depth) {
    return ') ';
  }
  return '';
};
