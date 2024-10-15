import React from "react";
import { Modal, Button } from "react-bootstrap";

const PreviewImageModal = ({ show, handleClose, enlargedImageSrc, title }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img
          src={enlargedImageSrc}
          alt="Enlarged preview"
          className="img-fluid"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PreviewImageModal;
