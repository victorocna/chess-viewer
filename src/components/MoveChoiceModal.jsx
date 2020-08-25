import React, { useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';

const MoveChoiceModal = ({ chooseVariation, variations }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(true);
  const [focus, setFocus] = useState(0);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setFocus((focus + 1) % variations.length);
    }
    if (event.key === 'ArrowUp') {
      setFocus((focus - 1 + variations.length) % variations.length);
    }
    if (event.key === 'ArrowLeft') {
      setShow(false);
    }
    if (event.key === 'ArrowRight') {
      chooseVariation(variations[focus].index);
      setShow(false);
    }
  };

  const showVariations = ({ index, move }, current) => {
    const classes = ['w-full'];
    if (focus === current) {
      classes.push('bg-green-200');
    }

    return (
      <button
        className={classes.join(' ')}
        onClick={() => chooseVariation(index)}
        key={move + ' ' + index}
      >
        {move}
      </button>
    );
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      onEntered={() => ref.current.focus()}
      autoFocus
      centered
    >
      <Modal.Body ref={ref} onKeyDown={onKeyDown} tabIndex={0}>
        {variations.map(showVariations)}
      </Modal.Body>
    </Modal>
  );
};

export default MoveChoiceModal;
