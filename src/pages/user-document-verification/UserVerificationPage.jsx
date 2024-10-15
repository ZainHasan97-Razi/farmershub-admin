import React from "react";
import { Form } from "react-bootstrap";
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
          <VerificarionDocumentCard
            title="Document (Front)"
            imageSrc={
              "https://d2b5q6wa3juaya.cloudfront.net/uploads/78e98df1-b369-4049-acdd-5caa5cad60a0-pngtree-document-vector-icon-png-image_3876242.jpg"
            }
          />
          <VerificarionDocumentCard
            title="Document (Back)"
            imageSrc={
              "https://plus.unsplash.com/premium_photo-1661698763470-55da05629e50?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBzaXplfGVufDB8fDB8fHww"
            }
          />
          <VerificarionDocumentCard
            title="User Selfie (Holding Document)"
            imageSrc={
              "https://images.pexels.com/photos/1388069/pexels-photo-1388069.jpeg?cs=srgb&dl=pexels-wildlittlethingsphoto-1388069.jpg&fm=jpg"
            }
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

        <div className="d-flex flex-column justify-content-between button-container mb-5">
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
