import React from 'react';
import { Chessboard } from '.';

const Viewer = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 mb-4" tabIndex={0}>
      <div className="flex">
        <Chessboard viewOnly coordinates />
      </div>
      <div className="flex">Display the moves here</div>
    </div>
  );
};

export default Viewer;
