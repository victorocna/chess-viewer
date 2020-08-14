import React, { useState } from 'react';
import { Chessground as ChessgroundWrapper } from '.';

/**
 * Chessground wrapper component
 */

const Chessground = ({ jsonedGame = [], fen = '', ...props }) => {
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
      <ChessgroundWrapper {...props} fen={fen} />
    </div>
  );
};

export default Chessground;
