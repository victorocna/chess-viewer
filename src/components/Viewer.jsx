import React, { useState } from 'react';

import Comment from './Comment';
import Move from './Move';
import { Chessboard } from '.';
import jsonedGame from '../chess-games/partida-tibigi.json';

import '../index.css';
import MoveNavigator from './MoveNavigator';

const Viewer = () => {
  const [currentItemInfo, setCurrentItemInfo] = useState({
    item: jsonedGame[0],
    index: 0,
  });

  const onMoveSelectedHandler = (itemIndex) => {
    setCurrentItemInfo({ item: jsonedGame[itemIndex], index: itemIndex });
  };

  const onSelectPreviousMoveHandler = () => {
    if (jsonedGame[currentItemInfo.index - 1]) {
      setCurrentItemInfo({
        item: jsonedGame[currentItemInfo.index - 1],
        index: currentItemInfo.index - 1,
      });
    }
  };

  const onSelectNextMoveHandler = () => {
    if (jsonedGame[currentItemInfo.index + 1]) {
      setCurrentItemInfo({
        item: jsonedGame[currentItemInfo.index + 1],
        index: currentItemInfo.index + 1,
      });
    }
  };

  const showMoves = (item, index, array) => {
    return (
      <span key={item.depth + ' ' + item.fen}>
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
      </span>
    );
  };

  return (
    <div className="grid lg:grid-cols-2 gap-4 mb-4" tabIndex={0}>
      <div className="inline-block">
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
