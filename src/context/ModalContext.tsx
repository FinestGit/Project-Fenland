import { ReactElement, ReactNode, useContext, useState } from "react";
import { ModalContextProperties } from "../models/interface/ModalContextProperties";
import React from "react";
import "../styles/context/modalContext.scss";

interface ModalProviderProperties {
  children: ReactNode;
  modalContent: ReactElement;
}

const ModalContext = React.createContext<ModalContextProperties | undefined>(
  undefined
);

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be within a ModalProvider");
  }
  return context;
};

const ModalProvider: React.FC<ModalProviderProperties> = ({
  children,
  modalContent,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      <div className={isModalOpen ? "app-blur" : ""}>{children}</div>
      {isModalOpen && React.cloneElement(modalContent, { closeModal })}
    </ModalContext.Provider>
  );
};

export { useModalContext, ModalProvider };
