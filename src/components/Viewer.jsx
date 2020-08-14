import React, { useState } from 'react';

import Comment from './Comment';
import Move from './Move';
import { Chessboard } from '.';
import jsonedGame from '../chess-games/partida-tibigi.json';

import '../index.css';

const Viewer = () => {
  const [boardFen, setBoardFen] = useState('');

  const onMoveSelectedHandler = (fen) => {
    setBoardFen(fen);
  };

  const showMoves = (item, index, array) => {
    return (
      <span key={item.depth + ' ' + item.fen}>
        {item.move && (
          <Move
            onMoveSelected={onMoveSelectedHandler}
            item={item}
            itemIndex={index}
            itemArray={array}
          />
        )}
        {item.comment && (
          <Comment item={item} itemIndex={index} itemArray={array} />
        )}
      </span>
    );
  };

  return (
    <div className="grid lg:grid-cols-2 gap-4 mb-4" tabIndex={0}>
      <div className="flex">
        <Chessboard fen={boardFen} viewOnly coordinates />
      </div>
      <div className="inline">{jsonedGame.map(showMoves)}</div>
    </div>
  );
};

export default Viewer;
