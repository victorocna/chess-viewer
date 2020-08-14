export const getCommentSuffix = (thisItem, nextItem) => {
  let suffix = '';
  if (nextItem) {
    let depthStep = thisItem.depth - nextItem.depth;

    if (depthStep > 0) {
      while (depthStep > 0) {
        suffix = suffix.concat(')');
        depthStep--;
      }
      suffix = suffix.concat(' ');
    }

    if (depthStep < 0) {
      suffix = suffix.concat(' (');
    }

    if (depthStep === 0) {
      suffix = suffix.concat(' ');
    }
    
  } else {
    suffix = suffix.concat('.......'); //final de partida
  }
  return suffix;
};
