import React from 'react';

import { getMovePrefix } from '../functions/getMovePrefix';

const Move = (props) => {
  const { item, itemIndex, previous, isActive, onMoveSelected } = props;
  const { move, depth } = item;

  const selectMove = () => {
    onMoveSelected(itemIndex);
  };

  return depth === 1 ? (
    <button
      onClick={selectMove}
      className={`move-button ${isActive && 'move-button--active'}`}
    >
      <b>
        {getMovePrefix(item, previous)}
        {move}
      </b>
    </button>
  ) : (
    <button
      onClick={selectMove}
      className={`move-button ${isActive && 'move-button--active'}`}
    >
      <i>
        {getMovePrefix(item, previous)}
        {move}
      </i>
    </button>
  );
};

export default Move;
