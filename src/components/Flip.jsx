import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

const Flip = ({ onClick }) => (
  <button
    type="button"
    className="mr-2 bg-green-700 py-1 px-3 rounded text-white"
    onClick={onClick}
  >
    <FaExchangeAlt />
  </button>
);

export default Flip;
