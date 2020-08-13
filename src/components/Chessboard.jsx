import React, { useState } from 'react';
import { Chessground as ChessgroundWrapper } from '.';
import { useEffect } from 'react';

/**
 * Chessground wrapper component
 */

const Chessground = ({ jsonedGame = [], ...props }) => {
  const [fen, setFen] = useState('');
  const [, setItemsChecked] = useState(0);
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    if (jsonedGame.length) {
      if (jsonedGame[0].depth === 1) {
        setTimeout(() => {
          setFen(jsonedGame.shift().fen);
        }, 1000);
      } else {
        jsonedGame.shift();
      }
      setItemsChecked((i) => i + 1);
    }
  }, [setFen, jsonedGame.length, jsonedGame, fen]);

  console.log(jsonedGame.length); //-> apare de 2 ori / valoare (17,17,16,16...)

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
