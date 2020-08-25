import React, { useEffect, useState, useRef } from 'react';

import Modali from 'modali';

const MoveChoiceModal = ({
  onVariationPicked = () => {},
  onCloseModal = () => {},
  variations = null,
}) => {
  const ref = useRef(null);
  const [focusedButtonIndex, setFocusedButtonIndex] = useState(null);

  const closeModal = () => {
    onCloseModal();
  };

  useEffect(() => {
    setFocusedButtonIndex(0);
    ref.current.children[0].focus();
  }, [setFocusedButtonIndex]);

  const onKeyDownHandler = (event) => {
    if (event.key === 'ArrowDown') {
      ref.current.children[
        (focusedButtonIndex + 1) % ref.current.children.length
      ].focus();
      setFocusedButtonIndex(
        (focusedButtonIndex + 1) % ref.current.children.length
      );
    }
    if (event.key === 'ArrowUp') {
      if (focusedButtonIndex === 0) {
        ref.current.children[ref.current.children.length - 1].focus();
        setFocusedButtonIndex(ref.current.children.length - 1);
      } else {
        ref.current.children[
          (focusedButtonIndex - 1) % ref.current.children.length
        ].focus();
        setFocusedButtonIndex(
          (focusedButtonIndex - 1) % ref.current.children.length
        );
      }
    }
    if (event.key === 'ArrowLeft') {
      closeModal();
    }
    if (event.key === 'ArrowRight') {
      ref.current.children[focusedButtonIndex].click();
    }
  };

  const showVariations = ({ index, move }) => {
    return (
      <button
        className="w-full"
        onClick={() => onVariationPicked(index)}
        key={move + ' ' + index}
      >
        {move}
      </button>
    );
  };

  return (
    <Modali.Modal isModalVisible={true} hide={closeModal}>
      <div ref={ref} onKeyDown={onKeyDownHandler}>
        {variations.map(showVariations)}
      </div>
    </Modali.Modal>
  );
};

export default MoveChoiceModal;
