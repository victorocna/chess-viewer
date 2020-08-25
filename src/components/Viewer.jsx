import React, { useState } from 'react';

import {
  Chessboard,
  Move,
  Comment,
  MoveChoiceModal,
  Previous,
  Next,
  Flip,
} from '.';
import { goPreviousMove, getNextMoves } from '../functions';
import jsonedGame from '../chess-games/partida-tibigi.json';

const Viewer = () => {
  const [isWhiteSide, setIsWhiteSide] = useState(true);
  const [currentItem, setCurrentItem] = useState(jsonedGame[0]);
  const [currentVariations, setCurrentVariations] = useState(null);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      previousMove();
    }
    if (event.key === 'ArrowRight') {
      nextMove();
    }
  };

  const onMoveSelected = (itemIndex) => {
    setCurrentItem(jsonedGame[itemIndex]);
  };

  const previousMove = () => {
    setCurrentVariations(null);
    setCurrentItem(goPreviousMove(jsonedGame, currentItem.index));
  };

  const nextMove = () => {
    let nextMoves = getNextMoves(jsonedGame, currentItem.index);
    if (nextMoves) {
      if (nextMoves.length === 1) {
        setCurrentItem(nextMoves[0]);
      } else {
        setCurrentVariations(nextMoves);
      }
    }
  };

  const flip = () => {
    setIsWhiteSide(!isWhiteSide);
  };

  const chooseVariation = (moveIndex) => {
    setCurrentItem(jsonedGame[moveIndex]);
  };

  const isMoveActive = (currentItem, item) => {
    try {
      return currentItem.fen === item.fen && currentItem.depth === item.depth;
    } catch (err) {
      return false;
    }
  };

  const showMoves = (item, index, array) => {
    const { comment, depth } = item;
    const previous = array[index - 1];

    return (
      <span key={index}>
        {item.move && (
          <Move
            isActive={isMoveActive(currentItem, item)}
            onMoveSelected={onMoveSelected}
            item={item}
            itemIndex={index}
            previous={previous}
          />
        )}
        {comment && <Comment comment={comment} depth={depth} />}
      </span>
    );
  };

  return (
    <div
      onKeyDown={onKeyDown}
      className="grid lg:grid-cols-2 gap-4 mb-4"
      tabIndex={0}
    >
      <div className="inline-block">
        {currentVariations && (
          <MoveChoiceModal
            chooseVariation={chooseVariation}
            variations={currentVariations}
          />
        )}
        <Chessboard
          orientation={isWhiteSide ? 'white' : 'black'}
          fen={currentItem.fen}
          viewOnly
          coordinates
        />
        <Previous onClick={previousMove} />
        <Next onClick={nextMove} />
        <Flip onClick={flip} />
      </div>
      <div className="inline">{jsonedGame.map(showMoves)}</div>
    </div>
  );
};

export default Viewer;
