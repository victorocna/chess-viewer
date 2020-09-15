import React from 'react';
import ReactDOM from 'react-dom';
import Viewer from '../../src';
import tibigi from '../chess/tibigi';

ReactDOM.render(<Viewer pgn={tibigi} />, document.getElementById('root'));
