import { areConsecutiveColorAndMove } from './areConsecutiveColorAndMove';

export const getNextMoves = (jsonedGame, currentIndex) => {
  if (currentIndex >= jsonedGame.length) {
    throw new Error();
  }

  if (currentIndex === jsonedGame.length - 1) {
    return null;
  }

  if (jsonedGame[currentIndex + 1].depth < jsonedGame[currentIndex].depth) {
    return null;
  }

  let possibleMoves = [];

  if (currentIndex + 1 === jsonedGame.length - 1) {
    if (
      jsonedGame[jsonedGame.length - 1].depth !== jsonedGame[currentIndex].depth
    ) {
      return null;
    } else {
      if (
        areConsecutiveColorAndMove(
          jsonedGame[currentIndex].fen,
          jsonedGame[currentIndex + 1].fen
        ) &&
        jsonedGame[currentIndex + 1].move
      ) {
        possibleMoves.push(jsonedGame[currentIndex + 1]);
      } else {
        return null;
      }
    }
  }

  if (currentIndex + 1 < jsonedGame.length - 1) {
    let mainlineIndex;
    if (
      jsonedGame[currentIndex + 1].depth - 1 ===
      jsonedGame[currentIndex].depth
    ) {
      for (let i = currentIndex + 2; i < jsonedGame.length; i++) {
        if (
          jsonedGame[i].depth === jsonedGame[currentIndex].depth &&
          jsonedGame[i].move
        ) {
          possibleMoves.push(jsonedGame[i]);
          mainlineIndex = i;
          break;
        } else {
          continue;
        }
      }
    } else if (
      areConsecutiveColorAndMove(
        jsonedGame[currentIndex].fen,
        jsonedGame[currentIndex + 1].fen
      )
    ) {
      possibleMoves.push(jsonedGame[currentIndex + 1]);
      mainlineIndex = currentIndex + 1;
    } else {
      return null;
    }

    if (!mainlineIndex) {
      return null;
    }

    if (
      jsonedGame[mainlineIndex + 1] &&
      jsonedGame[mainlineIndex + 1].depth - 1 === jsonedGame[currentIndex].depth
    ) {
      for (
        let i = mainlineIndex + 1;
        jsonedGame[i].depth !== jsonedGame[currentIndex].depth &&
        i < jsonedGame.length;
        i++
      ) {
        if (jsonedGame[i].depth - 1 !== jsonedGame[currentIndex].depth) {
          continue;
        } else {
          if (
            areConsecutiveColorAndMove(
              jsonedGame[currentIndex].fen,
              jsonedGame[i].fen
            ) &&
            jsonedGame[i].move
          ) {
            possibleMoves.push(jsonedGame[i]);
          }
        }
      }
    }
  }

  return possibleMoves;
};
