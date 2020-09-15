import React from 'react';
import { FaBackward } from 'react-icons/fa';

const Previous = ({ onClick }) => (
  <button
    type="button"
    className="mr-2 bg-green-700 py-1 px-3 rounded text-white"
    onClick={onClick}
  >
    <FaBackward />
  </button>
);

export default Previous;
