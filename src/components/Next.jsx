import React from 'react';

const Next = ({ onClick }) => (
  <button
    type="button"
    className="mr-2 bg-green-700 py-1 px-3 rounded text-white"
    onClick={onClick}
  >
    <i className="fas fa-forward"></i>
  </button>
);

export default Next;
