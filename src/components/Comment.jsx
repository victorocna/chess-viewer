import React from 'react';

import { getCommentSuffix } from '../functions/getCommentSuffix.js';

const Comment = (props) => {
  const { item, itemIndex, itemArray } = props;

  return (
    <span>
      {item.comment}
      {getCommentSuffix(item, itemArray[itemIndex + 1])}
    </span>
  );
};

export default Comment;
