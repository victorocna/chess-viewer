import React from 'react';

import { getCommentSuffix } from '../functions/getCommentParanthesis.js';

const Comment = (props) => {
  const { item, itemIndex, itemArray } = props;

  return (
    <span>
      {item.comment}
      {getCommentSuffix(
        itemArray[itemIndex - 1],
        item,
        itemArray[itemIndex + 1]
      )}
    </span>
  );
};

export default Comment;
