import React from 'react';

const Move = (props) => {
  const { item, itemIndex, itemArray } = props;
  const { move, fen, depth } = item;

  let blackToMove = false;
  let needPuncte = false;
  if (fen.includes(' w ')) {
    blackToMove = true;
    if (itemIndex > 0 && itemArray[itemIndex - 1].comment) {
      needPuncte = true;
    }
  }


  return ;
};

export default Move;
