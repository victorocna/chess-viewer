import { areConsecutivePositions } from './areConsecutivePositions';

export const getPreviousMove = (jsonedGame, currentIndex) => {
  if (currentIndex > jsonedGame.length) {
    throw new Error();
  }

  if (currentIndex > 0) {
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (
        (jsonedGame[i].move || i === 0) &&
        jsonedGame[i].depth <= jsonedGame[currentIndex].depth &&
        areConsecutivePositions(
          jsonedGame[i].fen,
          jsonedGame[currentIndex].move,
          jsonedGame[currentIndex].fen
        )
      ) {
        return jsonedGame[i];
      }
    }
  }

  return jsonedGame[currentIndex];
};