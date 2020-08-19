import React from 'react';

// NOTE: destructure the props right when you define the function
// IMPORTANT NOTE: pass just the comment, not the whole moment
const Comment = ({ comment, depth }) => {
  const classes = ['text-sm mr-1'];
  if (depth === 1) {
    classes.push('text-purple-800');
  } else {
    classes.push('text-gray-700');
  }

  return <span className={classes.join(' ')}>{comment}</span>;
};

export default Comment;
