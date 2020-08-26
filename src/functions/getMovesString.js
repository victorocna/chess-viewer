import { getMovePrefix } from './getMovePrefix';

export const getMovesString = (mainline) => {
  if (!mainline || !mainline.length) {
    throw new Error();
  }

  let dummyMove = { comment: 'comment' };

  let written = getMovePrefix(mainline[0], dummyMove) + mainline[0].move + ' ';

  mainline.forEach((item, index) => {
    if (index) {
      written = item.fen.includes(' b ')
        ? written.concat(
            getMovePrefix(item, mainline[index - 1]) + item.move + ' '
          )
        : written.concat(item.move + ' ');
    }
  });

  return written;
};
