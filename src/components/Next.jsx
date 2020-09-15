import React from 'react';
import { FaForward } from 'react-icons/fa';

const Next = ({ onClick }) => (
  <button
    type="button"
    className="mr-2 bg-green-700 py-1 px-3 rounded text-white"
    onClick={onClick}
  >
    <FaForward />
  </button>
);

export default Next;
