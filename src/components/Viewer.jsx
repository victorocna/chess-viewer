import React, { useState } from 'react';
import chessMoments from 'chess-moments';

import {
  Chessboard,
  Move,
  Comment,
  MoveChoiceModal,
  Previous,
  Next,
  Flip,
} from '.';
import {
  getPreviousMove,
  getNextMoves,
  getMovesString,
  getMainline,
} from '../functions';

import '../css/index.css';
import '../css/chess.css';
import '../css/coordinates.css';
import '../css/tailwind.css';

const Viewer = ({ pgn }) => {
  const [jsonedGame] = useState(chessMoments(pgn));
  const [isWhiteSide, setIsWhiteSide] = useState(true);
  const [currentItem, setCurrentItem] = useState(jsonedGame[0]);
  const [currentVarObj, setCurrentVarObj] = useState(null);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      if (!currentVarObj) {
        previousMove();
      }
    }
    if (event.key === 'ArrowRight') {
      if (!currentVarObj) {
        nextMove();
      }
    }
  };

  const onMoveSelected = (itemIndex) => {
    setCurrentVarObj(null);
    setCurrentItem(jsonedGame[itemIndex]);
  };

  const previousMove = () => {
    setCurrentVarObj(null);
    setCurrentItem(getPreviousMove(jsonedGame, currentItem.index));
  };

  const nextMove = () => {
    let nextMoves = getNextMoves(jsonedGame, currentItem.index);
    if (nextMoves) {
      if (nextMoves.length === 1) {
        setCurrentItem(nextMoves[0]);
      } else {
        setCurrentVarObj(
          nextMoves.map((item) => {
            return {
              moment: item,
              written: getMovesString(getMainline(jsonedGame, item.index, 5)),
            };
          })
        );
      }
    }
  };

  const flip = () => {
    setIsWhiteSide(!isWhiteSide);
  };

  const chooseVariation = (moveIndex) => {
    setCurrentVarObj(null);
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
        )}{' '}
        {comment && <Comment comment={comment} depth={depth} />}
      </span>
    );
  };

  return (
    <div
      onKeyDown={onKeyDown}
      className="grid lg:grid-cols-2 gap-4 my-2"
      tabIndex={0}
    >
      <div className="inline-block">
        {currentVarObj && (
          <MoveChoiceModal
            chooseVariation={chooseVariation}
            varObj={currentVarObj}
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
