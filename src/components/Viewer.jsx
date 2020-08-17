import React, { useState, useEffect } from 'react';

import Comment from './Comment';
import Move from './Move';
import { Chessboard } from '.';
import { goPreviousMove } from '../functions/goPreviousMove';
import { getNextMoves } from '../functions/getNextMoves';
import { getCommentSuffix } from '../functions/getCommentSuffix';
import jsonedGame from '../chess-games/partida-tibigi.json';

import '../index.css';
import MoveNavigator from './MoveNavigator';
import MoveChoiceModal from './MoveChoiceModal';

const Viewer = () => {
  const [currentItemInfo, setCurrentItemInfo] = useState({
    item: jsonedGame[0],
    index: 0,
  });

  const [currentVariations, setCurrentVariations] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleArrowKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      onSelectPreviousMoveHandler();
    }
    if (event.key === 'ArrowRight') {
      onSelectNextMoveHandler();
    }
  };

  useEffect(() => {
    let viewer = document.getElementById('viewer');
    viewer.addEventListener('keydown', handleArrowKeyDown);

    return () => {
      viewer.removeEventListener('keydown', handleArrowKeyDown);
    };
  });

  const onMoveSelectedHandler = (itemIndex) => {
    setCurrentItemInfo({ item: jsonedGame[itemIndex], index: itemIndex });
  };

  const onSelectPreviousMoveHandler = () => {
    setCurrentItemInfo(goPreviousMove(jsonedGame, currentItemInfo.index));
  };

  const onSelectNextMoveHandler = () => {
    let nextMoves = getNextMoves(jsonedGame, currentItemInfo.index);
    if (nextMoves) {
      if (nextMoves.length === 1) {
        setCurrentItemInfo(nextMoves[0]);
      } else {
        setCurrentVariations(nextMoves);
        setShowModal(true);
      }
    }
  };

  const onCloseModalHandler = () => {
    setShowModal(false);
    setCurrentVariations(null);
  };

  const showMoves = (item, index, array) => {
    return (
      <span key={index}>
        {item.move && (
          <Move
            isActive={
              currentItemInfo.item.fen === item.fen &&
              currentItemInfo.item.depth === item.depth
            }
            onMoveSelected={onMoveSelectedHandler}
            item={item}
            itemIndex={index}
            itemArray={array}
          />
        )}
        {item.comment && (
          <Comment item={item} itemIndex={index} itemArray={array} />
        )}
        {getCommentSuffix(item, array[index + 1])}
      </span>
    );
  };

  return (
    <div id="viewer" className="grid lg:grid-cols-2 gap-4 mb-4" tabIndex={0}>
      <div className="inline-block">
        {showModal && (
          <MoveChoiceModal
            onCloseModal={onCloseModalHandler}
            variations={currentVariations}
          />
        )}
        <Chessboard fen={currentItemInfo.item.fen} viewOnly coordinates />
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
