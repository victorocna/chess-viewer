import React, { useState } from 'react';
import { Chessground as ChessgroundWrapper } from '.';

/**
 * Chessground wrapper component
 */
// NOTE: when you just pass the props to the next component, one optimization
// is NOT to destructure them and just pass them along
const Chessground = (props) => {
  const [key, setKey] = useState(Math.random());

  let timeout;
  // debounce window resize event
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => setKey(Math.random()), 100);
    });
  }

  return (
    <div
      key={key}
      className="main-board green neo my-2 overflow-hidden rounded"
    >
      <ChessgroundWrapper {...props} />
    </div>
  );
};

export default Chessground;
