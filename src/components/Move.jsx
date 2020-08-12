import React from 'react';
import { showIndex } from '../functions';

const Move = ({ move, fen, depth, previous }) => {
  const side = fen.split(' ')[1];
  const fullmove = fen.split(' ')[5];
  const moveIndex = fullmove - (side === 'w' ? 1 : 0);
  const dots = side === 'w' ? '...' : '.';

  const classes = ['mr-1 text-sm'];
  if (depth === 1) {
    classes.push('font-semibold');
  } else {
    classes.push('text-gray-700');
  }

  return (
    <span className={classes.join(' ')}>
      {showIndex(previous, fen, depth) && (
        <span className="mr-1">
          {moveIndex}
          {dots}
        </span>
      )}
      {move}
    </span>
  );
};

export default Move;
