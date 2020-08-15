import React from 'react';

const MoveNavigator = (props) => {
  const { onSelectPreviousMove, onSelectNextMove } = props;

  const selectPreviousMove = () => {
    onSelectPreviousMove();
  };

  const selectNextMove = () => {
    onSelectNextMove();
  };

  return (
    <div className="flex">
      <button id="prev-move-button" onClick={selectPreviousMove}>
        previous
      </button>
      <button id="next-move-button" onClick={selectNextMove}>
        next
      </button>

    </div>
  );
};

export default MoveNavigator;
