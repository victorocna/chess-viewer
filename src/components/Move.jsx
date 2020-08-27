import React from 'react';
import { getMovePrefix } from '../functions';

const Move = (props) => {
  const { item, itemIndex, previous, isActive, onMoveSelected } = props;
  const { move, depth } = item;

  const selectMove = () => {
    onMoveSelected(itemIndex);
  };

  const classes = ['move text-sm cursor-pointer'];
  if (depth === 1) {
    classes.push('font-semibold');
  }
  if (depth > 1 && !isActive) {
    classes.push('text-gray-700');
  }
  if (isActive) {
    classes.push('text-white bg-green-800 rounded');
  }

  return (
    <span onClick={selectMove} className={classes.join(' ')}>
      {getMovePrefix(item, previous)}
      {move}
    </span>
  );
};

export default Move;
