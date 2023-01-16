import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Formik } from "formik";

import { ImageIcon } from "../icons/icons";
import PrimaryModal from "./PrimaryModal";
import { intialStateVet, validateVetSchema } from "../../models/inset-vet";
import { postRequest } from "../../services/axios/axiosMethods";
import { apiRoutes } from "../../lib/contants";
import { notifySuccess } from "../../lib/helper/toast";

const AddVetModal = ({ handleChange, setRefresh, refresh }) => {
  const [show, setShow] = useState("");
  const insertVet = (values, actions) => {
    try {
      actions.setSubmitting(true);
      const response = postRequest(apiRoutes.fetchVets, values);
      if (response) {
        setShow("");
        actions.setSubmitting(false);
        handleChange("");
        notifySuccess("Vets added successfully");
        setRefresh(!refresh);
      }
    } catch (error) {
      setShow("");
      actions.setSubmitting(false);
    }
  };

  const uploadFile = async (e, setFieldValue) => {
    let files = e.target.files;
    if (files && files?.length > 0) {
      let file = new FormData();
      file.append("file", files[0]);
      try {
        const response = await postRequest(apiRoutes.uploadFile, file);
        setFieldValue("picture", response?.result?.Location);
      } catch (error) {}
    }
  };

  return (
    <>
      <PrimaryModal show={show === "Add Vet"} onHide={() => setShow("")}>
        <h4 className="mb-4 fw-bold  text-capitalize">Add Vet</h4>
        <Formik
          validationSchema={validateVetSchema}
          onSubmit={(values, actions) => {
            console.log("values*****", values);
            insertVet(values, actions);
          }}
          initialValues={intialStateVet}
          enableReinitialize={true}
        >
          {({
            handleChange,
            values,
            errors,
            setFieldValue,
            touched,
            handleSubmit,
            setSubmitting,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit} noValidate>
              <ul className="nav flex-column gap-3">
                <li>
                  <Form.Label htmlFor="name" className="fs-7 fw-500">
                    Name
                  </Form.Label>
                  <Form.Control
                    className="bg-white rounded-2 py-3"
                    placeholder="Dr strange"
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    isValid={touched.name}
                    isInvalid={!!errors.name}
                    required
                  />
                </li>
                <li>
                  <Form.Label htmlFor="phone_number" className="fs-7 fw-500">
                    Phone number
                  </Form.Label>
                  <Form.Control
                    className="bg-white rounded-2 py-3"
                    placeholder="+92 333 1593578"
                    id="phone_number"
                    name="phone_number"
                    type="tel"
                    onChange={handleChange}
                    value={values.phone_number}
                    isValid={touched.phone_number}
                    isInvalid={!!errors.phone_number}
                    required
                  />
                </li>
                <li>
                  <Form.Label htmlFor="experience" className="fs-7 fw-500">
                    Experience
                  </Form.Label>
                  <div className="border rounded-2 py-3">
                    <InputGroup>
                      <Form.Control
                        className="bg-white border-0 py-0"
                        placeholder="Experience of years"
                        id="experience"
                        name="experience"
                        type="number"
                        onChange={handleChange}
                        value={values.experience}
                        isValid={touched.experience}
                        isInvalid={!!errors.experience}
                        required
                      />
                      <InputGroup.Text className="bg-white border-0 py-0 fs-7 fw-500 text-gray">
                        Years
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                </li>
                <li>
                  <Form.Label htmlFor="picture" className="d-block fs-7 fw-500">
                    Upload picture
                  </Form.Label>

                  <label
                    htmlFor="picture"
                    className="btn bg-gray bg-opacity-10 text-gray border border-2 rounded-2 p-3 w-100 d-flex justify-content-center gap-2"
                    style={{ borderStyle: "dashed !important" }}
                  >
                    <ImageIcon />
                    <h6 className="h6 mb-0 fw-semibold">Choose image</h6>
                    <input
                      type="file"
                      name="picture"
                      id="picture"
                      className="d-none"
                      onChange={(e) => uploadFile(e, setFieldValue)}
                      isValid={touched.picture}
                      isInvalid={!!errors.picture}
                    />
                  </label>
                </li>
              </ul>
              <div className="pt-4 d-flex gap-3">
                <button
                  type="button"
                  onClick={() => setShow("")}
                  className="flex-fill btn btn-gray text-white rounded-1 px-2 py-3"
                >
                  <span className="fw-semibold">Cancel</span>
                </button>
                <button
                  type="submit"
                  className="flex-fill btn btn-primary text-white rounded-1 px-2 py-3"
                  disabled={isSubmitting}
                >
                  <span className="fw-semibold">Save</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </PrimaryModal>

      <button
        onClick={() => setShow("Add Vet")}
        type="button"
        className="btn btn-sm btn-primary py-2 px-4 rounded-2 text-capitalize h-100"
      >
        Add Vet
      </button>
    </>
  );
};

export default AddVetModal;
