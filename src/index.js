import React from 'react';
import ReactDOM from 'react-dom';
import chessMoments from 'chess-moments';
import { tibigi } from './examples';
import Viewer from './components/Viewer';
import './index.css';
import './chess.css';
import './coordinates.css';

ReactDOM.render(
  <Viewer pgn={chessMoments(tibigi)} />,
  document.getElementById('root')
);
