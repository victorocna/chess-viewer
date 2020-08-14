import React, { useState } from 'react';

import Comment from './Comment';
import Move from './Move';
import { Chessboard } from '.';
import { getCloseItems } from '../functions/getCloseItems';
import jsonedGame from '../chess-games/partida-tibigi.json';

import '../index.css';
import MoveNavigator from './MoveNavigator';

const Viewer = () => {
  const [closeItems, setCloseItems] = useState({
    previousItem: null,
    currentItem: jsonedGame[0],
    nextItem: jsonedGame[1] ? jsonedGame[1] : null,
    currentItemIndex: 0,
  });

  const onMoveSelectedHandler = (itemIndex) => {
    setCloseItems(getCloseItems(itemIndex, jsonedGame));
    console.log(closeItems);
  };

  const onSelectPreviousMoveHandler = () => {
    if (closeItems.previousItem) {
      setCloseItems(getCloseItems(closeItems.currentItemIndex - 1, jsonedGame));
    }
  };

  const onSelectNextMoveHandler = () => {
    if (closeItems.nextItem) {
      setCloseItems(getCloseItems(closeItems.currentItemIndex + 1, jsonedGame));
    }
  };

  const showMoves = (item, index, array) => {
    return (
      <span key={item.depth + ' ' + item.fen}>
        {item.move && (
          <Move
            isActive={closeItems.currentItem.fen === item.fen}
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
      <div className="inline-block">
        <Chessboard fen={closeItems.currentItem.fen} viewOnly coordinates />
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
