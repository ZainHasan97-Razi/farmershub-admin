import React from "react";
import { Form, Button } from "react-bootstrap";
import "./UserVerificationPage.css"; // Import the CSS file
import VerificarionDocumentCard from "../../components/cards/VerificationDocumentCard";

const UserVerificationPage = () => {
  return (
    <main className="verification-container py-4 px-2 px-sm-4">
      <section>
        <h4 className="title mb-4 fw-semibold">
          View Submitted Verification Proofs
        </h4>
        <p className="instructions mb-4">
          Please make a decision based on the verification proofs this user has
          provided.
        </p>

        <div className="row mb-4 icon-section">
          <VerificarionDocumentCard title="Document (Front)" imageSrc={null} />
          <VerificarionDocumentCard title="Document (Back)" imageSrc={null} />
          <VerificarionDocumentCard
            title="User Selfie (Holding Document)"
            imageSrc={null}
          />
        </div>

        <Form.Group controlId="adminFeedback" className="mb-4">
          <Form.Label>
            Add Your Admin Feedback Message Here (If You Are Not Approving This
            User)
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your Admin Feedback Message here"
            className="feedback-textarea"
          />
        </Form.Group>

        <Form.Group controlId="automatedResponse" className="mb-4">
          <Form.Label>
            Add Your Admin Feedback Message Here (If You Are Not Approving This
            User)
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="These verification proofs are not sufficient; please try again later with more proofs."
            className="feedback-textarea"
          />
        </Form.Group>

        <div className="d-flex justify-content-between button-container">
          <button /*disabled*/ className="verification-button">
            Mark this User as Verified
          </button>
          <button className="not-verification-button">
            Mark this User as Not Verified
          </button>
        </div>
      </section>
    </main>
  );
};

export default UserVerificationPage;
