import React from 'react';

import { getMovePrefix } from '../functions/getMovePrefix';

const Move = (props) => {
  const { item, itemIndex, itemArray, onMoveSelectedHandler } = props;
  const { move, fen, depth } = item;

  const onMoveSelected = (fen) => {
    onMoveSelectedHandler(fen);
  };

  return depth === 1 ? (
    <button onClick={onMoveSelected(fen)} className="move-button">
      <b>
        {getMovePrefix(item, itemArray[itemIndex - 1])}
        {move}
      </b>
    </button>
  ) : (
    <button onClick={onMoveSelected(fen)} className="move-button">
      <i>
        {getMovePrefix(item, itemArray[itemIndex - 1])}
        {move}
      </i>
    </button>
  );
};

export default Move;
