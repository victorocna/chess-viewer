import React, { useEffect, useState } from 'react';

import Modali from 'modali';

const MoveChoiceModal = ({
  onVariationPicked = () => {},
  onCloseModal = () => {},
  variations = null,
}) => {
  const [variationButtons, setVariationButtons] = useState(null);
  const [focusedButtonIndex, setFocusedButtonIndex] = useState(null);

  const closeModal = () => {
    onCloseModal();
  };

  useEffect(() => {
    let buttons = [];
    for (let i = 0; i < variations.length; i++) {
      buttons.push(document.getElementById(`variation-button-${i}`));
    }
    setFocusedButtonIndex(0);
    buttons[0].focus();
    setVariationButtons(buttons);
  }, [variations, setFocusedButtonIndex, setVariationButtons]);

  const pickVariation = (moveIndex) => {
    onVariationPicked(moveIndex);
  };

  const onKeyDownHandler = (event) => {
    if (event.key === 'ArrowDown') {
      variationButtons[
        (focusedButtonIndex + 1) % variationButtons.length
      ].focus();
      setFocusedButtonIndex((focusedButtonIndex + 1) % variationButtons.length);
    }
    if (event.key === 'ArrowUp') {
      if (focusedButtonIndex === 0) {
        variationButtons[variationButtons.length - 1].focus();
        setFocusedButtonIndex(variationButtons.length - 1);
      } else {
        variationButtons[
          (focusedButtonIndex - 1) % variationButtons.length
        ].focus();
        setFocusedButtonIndex(
          (focusedButtonIndex - 1) % variationButtons.length
        );
      }
    }
    if (event.key === 'ArrowLeft') {
      closeModal();
    }
    if (event.key === 'ArrowRight') {
      variationButtons[focusedButtonIndex].click();
    }
  };

  const showVariations = (item, index) => {
    return (
      <button
        className="w-full"
        onClick={() => {
          pickVariation(item.index);
        }}
        id={`variation-button-${index}`}
        key={item.index}
      >
        {item.move}
      </button>
    );
  };

  return (
    <Modali.Modal isModalVisible={true} hide={closeModal}>
      <div onKeyDown={onKeyDownHandler}>{variations.map(showVariations)}</div>
    </Modali.Modal>
  );
};

export default MoveChoiceModal;
