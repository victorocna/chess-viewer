import React from 'react';
import { Chessboard, Comment, Move } from '.';
import chessGame from '../chess-game.json';

const showMoments = (moment, index, array) => {
  const { comment, move, fen, depth } = moment;
  const previous = array[index - 1];

  return (
    <span key={`${move}-${fen}`}>
      {move && <Move previous={previous} {...moment} />}
      {comment && <Comment comment={comment} depth={depth} />}
    </span>
  );
};

const Viewer = () => (
  <div className="grid lg:grid-cols-2 gap-4 mb-4" tabIndex={0}>
    <div className="flex">
      <Chessboard viewOnly coordinates />
    </div>
    <div className="overflow-y-auto">{chessGame.map(showMoments)}</div>
  </div>
);

export default Viewer;
