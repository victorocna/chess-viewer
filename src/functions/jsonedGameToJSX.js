import React from 'react';

export const jsonedGameToJSX = (
  { move, fen, comment, depth },
  index,
  jsonedGame
) => {
  let blackToMove = false;
  let needPuncte = false;
  if (fen.includes(' w ')) {
    blackToMove = true;
    if (index > 0 && jsonedGame[index - 1].comment) {
      needPuncte = true;
    }
  }
  console.log(index);
  return [
    <div key={depth + ' ' + fen} className="inline">
      {index > 0 && jsonedGame[index - 1].depth < jsonedGame[index].depth && (
        <span> (</span>
      )}
      {index > 0 && jsonedGame[index - 1].depth > jsonedGame[index].depth && (
        <span>) </span>
      )}
      {move &&
        fen &&
        index > 0 &&
        (depth === 1 ? (
          <b>
            {' '}
            {!blackToMove &&
              jsonedGame[index].fen[jsonedGame[index].fen.length - 1] + '. '}
            {needPuncte &&
              jsonedGame[index].fen[jsonedGame[index].fen.length - 1] -
                1 +
                '...'}
            {move + ' '}
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
            {move + ' '}
          </i>
        ))}
      {comment && <span>{comment}</span>}
    </div>,
  ];
};
