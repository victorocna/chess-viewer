import { areConsecutivePositions } from './areConsecutivePositions';

export const getCommentSuffix = (thisItem, nextItem) => {
  let suffix = '';
  if (nextItem) {
    let depthStep = thisItem.depth - nextItem.depth;

    if (depthStep === 0) {
      if (!areConsecutivePositions(thisItem.fen, nextItem.move, nextItem.fen)) {
        suffix = suffix.concat(';');
      }
      if (thisItem.comment) {
        suffix = suffix.concat(' ');
      }
      return suffix;
    }

    if (depthStep > 0) {
      while (depthStep > 0) {
        suffix = suffix.concat(')');
        depthStep--;
      }
      suffix = suffix.concat(' ');
      return suffix;
    }

    if (depthStep < 0) {
      suffix = suffix.concat(' (');
      return suffix;
    }
  } else {
    suffix = suffix.concat('.......'); //final de partida
  }
  return suffix;
};
