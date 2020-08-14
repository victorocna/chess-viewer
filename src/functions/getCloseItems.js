export const getCloseItems = (index, array) => {
  if (index > array.length) {
    throw new Error();
  }

  return {
    previousItem: array[index - 1] ? array[index - 1] : null,
    currentItem: array[index],
    nextItem: array[index + 1] ? array[index + 1] : null,
    currentItemIndex: index,
  };
};
