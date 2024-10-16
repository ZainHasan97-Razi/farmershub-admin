import React from "react";
import { Modal } from "react-bootstrap";
import "./css/PreviewImageModal.css";

const PreviewImageModal = ({ show, handleClose, enlargedImageSrc, title }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="modal-dialog modal-xl"
    >
      <Modal.Body as="div" className="img-verification-doc-modal">
        <img
          src={enlargedImageSrc}
          alt="Enlarged preview"
          className="img-verification-doc-modal"
        />
      </Modal.Body>
    </Modal>
  );
};

export default PreviewImageModal;
