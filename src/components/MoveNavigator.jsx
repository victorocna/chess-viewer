import React from 'react';

// TODO: break this into 2 separate components: Next.jsx and Previous.jsx
// why? single responsibility principle

// NOTE: destructure the props right when you define the function
const MoveNavigator = ({ onSelectPreviousMove, onSelectNextMove }) => {
  // NOTE: for one-line functions, just pass the prop to the event listener
  const selectPreviousMove = () => {
    onSelectPreviousMove();
  };

  // NOTE: same as above
  const selectNextMove = () => {
    onSelectNextMove();
  };

  return (
    <div className="flex">
      <button id="prev-move-button" onClick={onSelectPreviousMove}>
        previous
      </button>
      <button id="next-move-button" onClick={onSelectNextMove}>
        next
      </button>

    </div>
  );
};

export default MoveNavigator;
