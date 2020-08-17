import React, { useState } from 'react';

import Modali from 'modali';

const MoveChoiceModal = ({ onCloseModal = () => {}, variations = null }) => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
    onCloseModal();
  };

  const showVariations = (item, index, array) => {
    return <span key={index}>{item.item.move}</span>;
  };

  return (
    <Modali.Modal isModalVisible={showModal} hide={closeModal}>
      {variations.map(showVariations)}
    </Modali.Modal>
  );
};

export default MoveChoiceModal;
