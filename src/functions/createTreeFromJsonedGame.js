import { areConsecutivePositions } from './areConsecutivePositions';

export const createTreeFromJsonedGame = (jsonedGame) => {
  let gameTree = [];
  let anchors = [];

  jsonedGame.forEach((item, index, array) => {
    console.log(gameTree);
    console.log(anchors);
    if (index === 0) {
      gameTree.push({ parent: null, information: jsonedGame[0], childern: [] });
      anchors.push(index);
    } else {
      if (areConsecutivePositions(array[index - 1].fen, item.move, item.fen)) {
        gameTree.push({ parent: index - 1, information: item, childern: [] });
        gameTree[index - 1].childern.push(index);
        console.log(gameTree[anchors[anchors.length - 1]]);
        if (
          gameTree[anchors[anchors.length - 1]].information.depth === item.depth
        ) {
          anchors.pop();
        }
        anchors.push(index - 1);
      } else {
        for (let i = anchors.length - 1; i >= 0; i--) {
          if (
            !areConsecutivePositions(
              gameTree[anchors[i] - 2].information.fen,
              gameTree[anchors[i] - 2].information.move,
              array[index - 1].fen

                // aici e buba
                // nu stiu care e pozitia de la care incep sa fac mutarea
                // ca sa compar cu ancora
            )
          ) {
            console.log(gameTree[anchors[i] - 1].information.fen);
            console.log(gameTree[anchors[i] - 1].information.move);
            console.log(array[index - 2].fen);
            anchors.pop();
            console.log('pop');
          } else {
            gameTree.push({
              parent: anchors[i],
              information: item,
              childern: [],
            });
            gameTree[anchors[i]].childern.push(index);
            anchors.push(index);
            break;
          }
        }
        gameTree.push({
          parent: anchors[anchors.length - 1],
          information: item,
          childern: [],
        });
        gameTree[anchors[anchors.length - 1]].children.push(item);
      }
    }
  });
};
