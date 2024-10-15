import React, { useState } from "react";
import PreviewImageModal from "./PreviewImageModal";
import { Card } from "react-bootstrap";
import "./css/VerificationDocumentCard.css";

const VerificarionDocumentCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (image) => {
    if (!image) return;
    setShowModal(true);
  };

  return (
    <div className="col-md-4">
      {/* Card */}
      <p>{props.title}</p>
      <div
        className={props.imageSrc ? "image-card-preview" : "image-card-plain"}
        onClick={() => openModal(props.imageSrc)}
      >
        {props.imageSrc ? (
          <img src={props.imageSrc} alt="Card" />
        ) : (
          <div style={{ marginTop: 100 }}>
            <i className="bi bi-search icon search-icon"></i>
          </div>
        )}
      </div>

      {/* Modal */}
      {props.imageSrc && (
        <PreviewImageModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          enlargedImageSrc={props.imageSrc}
          title={props.title}
        />
      )}
    </div>
  );
};
export default VerificarionDocumentCard;
