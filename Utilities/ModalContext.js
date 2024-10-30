import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const showModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
    console.log('show modal pressed')
  };

  const hideModal = () => {
    setModalVisible(false);
    setModalContent('');
    console.log('hide modal pressed')
  };

  return (
    <ModalContext.Provider value={{ modalVisible, modalContent, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);