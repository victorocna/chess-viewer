import React from 'react';

import { Chessboard } from '.';
import { jsonedGameToJSX } from '../functions/jsonedGameToJSX';

import '../index.css';

const Viewer = () => {
  const JSXedGame = jsonedGameToJSX(jsonedGame);

  console.log(JSXedGame);

  return (
    <div className="grid lg:grid-cols-2 gap-4 mb-4" tabIndex={0}>
      <div className="flex">
        <Chessboard jsonedGame={jsonedGame} viewOnly coordinates />
      </div>
      <div>{JSXedGame}</div>
    </div>
  );
};

export default Viewer;
