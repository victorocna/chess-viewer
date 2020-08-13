import React from 'react';

import { getMovePrefix } from '../functions/getMovePrefix';

const Move = (props) => {
  const { item, itemIndex, itemArray } = props;
  const { move, fen, depth } = item;

  return depth === 1 ? (
    <b>
      {getMovePrefix(item, itemArray[itemIndex - 1])}
      {move}{' '}
    </b>
  ) : (
    <i>
      {getMovePrefix(item, itemArray[itemIndex - 1])}
      {move}{' '}
    </i>
  );
};

export default Move;
