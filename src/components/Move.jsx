import React from 'react';

import { getMovePrefix } from '../functions/getMovePrefix';

const Move = (props) => {
  const { item, itemIndex, itemArray, isActive, onMoveSelected } = props;
  const { move, fen, depth } = item;

  const selectMove = () => {
    onMoveSelected(fen);
  };

  return depth === 1 ? (
    <button
      onClick={selectMove}
      className={`move-button ${isActive && 'move-button--active'}`}
    >
      <b>
        {getMovePrefix(item, itemArray[itemIndex - 1])}
        {move}
      </b>
    </button>
  ) : (
    <button
      onClick={selectMove}
      className={`move-button ${isActive && 'move-button--active'}`}
    >
      <i>
        {getMovePrefix(item, itemArray[itemIndex - 1])}
        {move}
      </i>
    </button>
  );
};

export default Move;
