import React from 'react';

const Comment = (props) => {
  const { item } = props;

  return <span>{item.comment}</span>;
};

export default Comment;
