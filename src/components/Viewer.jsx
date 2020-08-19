import React, { useState } from 'react';

import Comment from './Comment';
import Move from './Move';
import { Chessboard } from '.';
import { goPreviousMove } from '../functions/goPreviousMove';
import { getNextMoves } from '../functions/getNextMoves';
// import { getCommentSuffix } from '../functions/getCommentSuffix';
import jsonedGame from '../chess-games/partida-tibigi.json';

// import '../index.css'; // NOTE: not needed here, it is already imported
import MoveNavigator from './MoveNavigator';
import MoveChoiceModal from './MoveChoiceModal';
// NOTE: don't forget about destructured imports

const Viewer = () => {
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

  const onVariationPickedHandler = (moveIndex) => {
    setCurrentItem(jsonedGame[moveIndex]);
    setCurrentVariations(null);
  };

  const onCloseModalHandler = () => {
    setCurrentVariations(null);
  };

  const showMoves = (item, index, array) => {
    const { comment, depth } = item;
    return (
      <span key={index}>
        {item.move && (
          <Move
          // NOTE: this is the perfect place for an isMoveActive function
            isActive={
              currentItem.fen === item.fen && currentItem.depth === item.depth
            }
            onMoveSelected={onMoveSelectedHandler}
            item={item}
            itemIndex={index}
            itemArray={array}
          />
        )}
        {/* IMPORTANT NOTE: try to pass just what you need to components */}
        {comment && <Comment comment={comment} depth={depth} />}
        {/* NOTE: not needed, i guess. they will have different css styles based on depth */}
        {/* {getCommentSuffix(item, array[index + 1])} */}
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
        <Chessboard fen={currentItem.fen} viewOnly coordinates />
        <MoveNavigator
          onSelectPreviousMove={onSelectPreviousMoveHandler}
          onSelectNextMove={onSelectNextMoveHandler}
        />
      </div>
      <div className="inline">{jsonedGame.map(showMoves)}</div>
    </div>
  );
};

export default Viewer;
