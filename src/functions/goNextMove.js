import { areConsecutivePositions } from './areConsecutivePositions';

export const goNextMove = (jsonedGame, currentIndex) => {
  if (currentIndex > jsonedGame.length) {
    throw new Error();
  }

  let possibleMoves = [];

  if (currentIndex + 1 <= jsonedGame.length) {
    for (let i = currentIndex + 1; i < jsonedGame.length; i++) {
      if (
        jsonedGame[i].move &&
        jsonedGame[i].depth >= jsonedGame[currentIndex].depth &&
        areConsecutivePositions(jsonedGame[currentIndex].fen, jsonedGame[i].fen)
      ) {
        if (
          !possibleMoves[0] &&
          jsonedGame[i].depth !== jsonedGame[currentIndex].depth
        ) {
          continue;
        }
        console.log(jsonedGame[i].depth, jsonedGame[currentIndex].depth);
        possibleMoves.push({ item: jsonedGame[i], index: i });
      }
    }
  }

  console.log(possibleMoves);

  return possibleMoves.length > 0
    ? possibleMoves[0]
    : { item: jsonedGame[currentIndex], index: currentIndex };
};
