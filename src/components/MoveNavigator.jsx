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
    <div>
      <button onClick={selectPreviousMove}>previous</button>
      <button onClick={selectNextMove}>next</button>
    </div>
  );
};

export default MoveNavigator;
