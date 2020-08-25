import React from 'react';
import ReactDOM from 'react-dom';
import chessMoments from 'chess-moments';
import pgn from './examples/partida-tibigi';
import Viewer from './components/Viewer';
import './index.css';
import './chess.css';
import './coordinates.css';

ReactDOM.render(
  <Viewer pgn={chessMoments(pgn)} />,
  document.getElementById('root')
);
