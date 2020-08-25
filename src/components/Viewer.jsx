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

  const handleArrowKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      onSelectPreviousMoveHandler();
    }
    if (event.key === 'ArrowRight') {
      onSelectNextMoveHandler();
    }
  };

  const onMoveSelectedHandler = (itemIndex) => {
    setCurrentItem(jsonedGame[itemIndex]);
  };

  const onSelectPreviousMoveHandler = () => {
    setCurrentItem(goPreviousMove(jsonedGame, currentItem.index));
  };

  const onSelectNextMoveHandler = () => {
    let nextMoves = getNextMoves(jsonedGame, currentItem.index);
    if (nextMoves) {
      if (nextMoves.length === 1) {
        setCurrentItem(nextMoves[0]);
      } else {
        setCurrentVariations(nextMoves);
      }
    }
  };

  const onFlipBoardHandler = () => {
    setIsWhiteSide(!isWhiteSide);
  };

  const onVariationPickedHandler = (moveIndex) => {
    setCurrentItem(jsonedGame[moveIndex]);
    setCurrentVariations(null);
  };

  const onCloseModalHandler = () => {
    setCurrentVariations(null);
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
    return (
      <span key={index}>
        {item.move && (
          <Move
            isActive={isMoveActive(currentItem, item)}
            onMoveSelected={onMoveSelectedHandler}
            item={item}
            itemIndex={index}
            itemArray={array}
          />
        )}
        {comment && <Comment comment={comment} depth={depth} />}
      </span>
    );
  };

  return (
    <div
      onKeyDown={handleArrowKeyDown}
      className="grid lg:grid-cols-2 gap-4 mb-4"
      tabIndex={0}
    >
      <div className="inline-block">
        {currentVariations && (
          <MoveChoiceModal
            onVariationPicked={onVariationPickedHandler}
            onCloseModal={onCloseModalHandler}
            variations={currentVariations}
          />
        )}
        <Chessboard
          orientation={isWhiteSide ? 'white' : 'black'}
          fen={currentItem.fen}
          viewOnly
          coordinates
        />
        <Previous onClick={onSelectPreviousMoveHandler} />
        <Next onClick={onSelectNextMoveHandler} />
        <Flip onClick={onFlipBoardHandler} />
      </div>
      <div className="inline">{jsonedGame.map(showMoves)}</div>
    </div>
  );
};

export default Viewer;
