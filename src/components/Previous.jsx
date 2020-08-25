import React from 'react';

const Previous = ({ onClick }) => (
  <button
    type="button"
    className="mr-2 bg-green-700 py-1 px-3 rounded text-white"
    onClick={onClick}
  >
    <i className="fas fa-backward"></i>
  </button>
);

export default Previous;
