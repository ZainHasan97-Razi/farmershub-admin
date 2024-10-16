import React, { useCallback, useEffect, useMemo } from "react";
import { Form } from "react-bootstrap";
import "./UserVerificationPage.css"; // Import the CSS file
import VerificarionDocumentCard from "../../components/cards/VerificationDocumentCard";
import { getRequest, putRequest } from "../../services/axios/axiosMethods";
import { apiRoutes } from "../../lib/contants";
import { notifySuccess } from "../../lib/helper/toast";
import { useParams } from "react-router-dom";

const UserVerificationPage = () => {
  const [form, setForm] = React.useState({
    identity_status: "",
    rejection_reason: "",
  });

  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getRequest(
        `${apiRoutes.fetchUserDocumentVerification}/${id}`
      );
      setUser(user);
    };
    fetchUser();
  }, [id]);

  const onSubmitApi = async (formData) => {
    const res = await putRequest(
      `${apiRoutes.UserVerification}/${id}`,
      formData
    );
    if (res) {
      notifySuccess("User Status Updated Successfully");
    }
  };
  const onHandleVerification = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      // set Approved Status
      form.identity_status = "Verified";
      await onSubmitApi(form);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw new Error(e.message || "failed to submit..");
    }
    // Handle form submission here
  };

  const onHandleRejection = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      
      form.identity_status = "Not Verified";
      await onSubmitApi(form);
      
      setLoading(false);
    } catch(e) {
      setLoading(false);
      throw new Error(e.message || "failed to submit..");
    }
  }

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
            imageSrc={user?.identity_front_image || null}
          />
          <VerificarionDocumentCard
            title="Document (Back)"
            imageSrc={user?.identity_back_image || null}
          />
          <VerificarionDocumentCard
            title="User Selfie (Holding Document)"
            imageSrc={user?.selfie_holding_image || null}
          />
        </div>
        <Form>
          <Form.Group controlId="adminFeedback" className="mb-4">
            <Form.Label>
              Add Your Admin Feedback Message Here (If You Are Not Approving
              This User)
            </Form.Label>
            <Form.Control
              value={form.rejection_reason}
              as="textarea"
              onChange={(e) =>
                setForm((form) => ({
                  ...form,
                  rejection_reason: e.target.value,
                }))
              }
              rows={3}
              placeholder="Enter your Admin Feedback Message here"
              className="feedback-textarea"
            />
          </Form.Group>

          {/* <Form.Group controlId="automatedResponse" className="mb-4">
          <Form.Label>
            Add Your Admin Feedback Message Here (If You Are Not Approving This
            User)
          </Form.Label>
          <Form.Control
            as="textarea"
            value={form.approve_reason}
            onChange={(e)=> setForm((form) => ({...form, approve_reason: e.target.value}))}
            rows={3}
            placeholder="These verification proofs are not sufficient; please try again later with more proofs."
            className="feedback-textarea"
          />
        </Form.Group> */}

          <div className="d-flex flex-column justify-content-between button-container mb-5">
            <button
              onClick={onHandleVerification}
              disabled={loading ? true : false}
              className="verification-button"
            >
              {loading ? "loading" : "Mark this User as Verified"}
            </button>
            <button
              onClick={onHandleRejection}
              disabled={loading ? true : false}
              className="not-verification-button"
            >
              {loading ? "loading" : "Mark this User as Not Verified"}
            </button>
          </div>
        </Form>
      </section>
    </main>
  );
};

export default UserVerificationPage;
