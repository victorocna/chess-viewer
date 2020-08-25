import React from 'react'

const Flip = ({ onClick }) => (
    <button
      type="button"
      className="mr-2 bg-green-700 py-1 px-3 rounded text-white"
      onClick={onClick}
    >
      <i className="fas fa-redo-alt"></i>
    </button>
  );

export default Flip
