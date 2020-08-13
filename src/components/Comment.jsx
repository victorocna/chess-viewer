import React from 'react';

import getCommentParanthesis from '../functions/getCommentParanthesis';

const Comment = (props) => {
  const { item, itemIndex, itemArray } = props;

  return (
    <span>
      {getCommentParanthesis(itemArray[itemIndex - 1], item)}
      {item.comment}{' '}
    </span>
  );
};

export default Comment;
