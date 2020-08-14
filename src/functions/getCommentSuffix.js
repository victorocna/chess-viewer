export const getCommentSuffix = (prevItem, thisItem, nextItem) => {
  let suffix = '';
  if (nextItem) {
    let depthStep = thisItem.depth - nextItem.depth;
    console.log(depthStep);
    if (depthStep > 0) {
      while (depthStep > 0) {
        console.log(suffix);
        suffix = suffix.concat(')');
        paranthesisNumber--;
      }
      suffix.concat(' ');
    }
    if (depthStep < 0) {
      suffix.concat(" (");
    }
    if(depthStep === 0) {
      suffix.concat(" ");
    }
  } 
  return suffix;
};
