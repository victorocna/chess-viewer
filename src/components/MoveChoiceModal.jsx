import React, { useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';

const MoveChoiceModal = ({ chooseVariation, varObj }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(true);
  const [focus, setFocus] = useState(0);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setFocus((focus + 1) % varObj.length);
    }
    if (event.key === 'ArrowUp') {
      setFocus((focus - 1 + varObj.length) % varObj.length);
    }
    if (event.key === 'ArrowLeft') {
      setShow(false);
    }
    if (event.key === 'ArrowRight') {
      chooseVariation(varObj[focus].moment.index);
      setShow(false);
    }
  };

  const showVariations = ({ moment, written }, current) => {
    const classes = ['w-full'];
    if (focus === current) {
      classes.push('bg-green-200');
    }

    return (
      <button
        className={classes.join(' ')}
        onClick={() => {
          chooseVariation(moment.index);
          setShow(false);
        }}
        key={moment.move + ' ' + moment.index}
      >
        {written}
      </button>
    );
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      onEntered={() => ref.current.focus()}
      backdrop="static"
      autoFocus
      centered
    >
      <Modal.Body ref={ref} onKeyDown={onKeyDown} tabIndex={0}>
        {varObj.map(showVariations)}
      </Modal.Body>
    </Modal>
  );
};

export default MoveChoiceModal;
