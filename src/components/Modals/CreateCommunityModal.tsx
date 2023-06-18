import React from "react";
import { useModalContext } from "../../context/ModalContext";
import "../../styles/components/Modals/createCommunityModal.scss";

const CreateCommunityModal: React.FC = () => {
  const { closeModal } = useModalContext();
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>Modal content...</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default CreateCommunityModal;
