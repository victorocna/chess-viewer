import { areConsecutiveColorAndMove } from '.';

export const getMainline = (jsonedGame, moveIndex, numberOfMoves) => {
  if (!jsonedGame || !jsonedGame.length || moveIndex >= jsonedGame.length) {
    throw new Error();
  }

  let movesFound = [jsonedGame[moveIndex]];

  if (numberOfMoves) {
    for (
      let i = moveIndex;
      i < jsonedGame.length &&
      movesFound.length < numberOfMoves &&
      jsonedGame[i].move;
      i++
    ) {
      if (jsonedGame[moveIndex].depth !== jsonedGame[i].depth) {
        continue;
      }
      if (
        areConsecutiveColorAndMove(jsonedGame[i].fen, jsonedGame[i + 1].fen)
      ) {
        movesFound.push(jsonedGame[i + 1]);
      }
    }
  } else {
    for (
      let i = moveIndex;
      i < jsonedGame.length && jsonedGame[i].move;
      i++
    ) {
      if (jsonedGame[moveIndex].depth !== jsonedGame[i].depth) {
        continue;
      }
      if (
        areConsecutiveColorAndMove(jsonedGame[i].fen, jsonedGame[i + 1].fen)
      ) {
        movesFound.push(jsonedGame[i + 1]);
      }
    }
  }

  return movesFound;
};
