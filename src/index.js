import React from 'react';
import ReactDOM from 'react-dom';
import chessMoments from 'chess-moments';
import { tibigi } from './examples';
import Viewer from './components/Viewer';
import './css/index.css';
import './css/chess.css';
import './css/coordinates.css';

ReactDOM.render(
  <Viewer pgn={chessMoments(tibigi)} />,
  document.getElementById('root')
);
