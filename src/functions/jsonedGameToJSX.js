import React from 'react';

export const jsonedGameToJSX = (jsonedGame) => {
  const JSXedGame = jsonedGame.map((item, index) => {
    let blackToMove = false;
    let needPuncte = false;
    if (item.fen.includes(' w ')) {
      blackToMove = true;
      if (index > 0 && jsonedGame[index - 1].comment) {
        needPuncte = true;
      }
    }
    return [
      <div key={item.depth + ' ' + item.fen} className="inline">
        {index > 0 && jsonedGame[index - 1].depth < jsonedGame[index].depth && (
          <span> (</span>
        )}
        {index > 0 && jsonedGame[index - 1].depth > jsonedGame[index].depth && (
          <span>) </span>
        )}
        {item.move &&
          item.fen &&
          index > 0 &&
          (item.depth === 1 ? (
            <b>
              {' '}
              {!blackToMove &&
                jsonedGame[index].fen[jsonedGame[index].fen.length - 1] + '. '}
              {needPuncte &&
                jsonedGame[index].fen[jsonedGame[index].fen.length - 1] -
                  1 +
                  '...'}
              {item.move + ' '}
            </b>
          ) : (
            <i>
              {' '}
              {!blackToMove &&
                jsonedGame[index].fen[jsonedGame[index].fen.length - 1] + '. '}
              {needPuncte &&
                jsonedGame[index].fen[jsonedGame[index].fen.length - 1] -
                  1 +
                  '...'}
              {item.move + ' '}
            </i>
          ))}
        {item.comment && <span>{item.comment}</span>}
      </div>,
    ];
  });
  return JSXedGame;
};
