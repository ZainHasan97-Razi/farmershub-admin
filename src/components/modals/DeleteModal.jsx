import React, { useState } from "react";
import { apiRoutes } from "../../lib/contants";
import { notifySuccess } from "../../lib/helper/toast";
import { deleteRequest } from "../../services/axios/axiosMethods";
import { DeleteIcon } from "../icons/icons";
import PrimaryModal from "./PrimaryModal";

const DeleteModal = ({ isText, data, setUsers, vet = false }) => {
  const [show, setShow] = useState("");
  const [loading, setLoading] = useState(false);

  const deleteUser = async () => {
    try {
      setLoading(true);
      const deleted = await deleteRequest(
        `${vet ? apiRoutes.fetchVets : apiRoutes.deleteUser}${data._id}`
      );
      setLoading(deleted ? false : true);
      setShow("");
      notifySuccess("User deleted successfully");
      // remove items from array
      deleted &&
        setUsers((users) => users.filter((user) => user._id !== data._id));
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <PrimaryModal
        show={show === "Delete a category"}
        onHide={() => setShow("")}
        className="text-center"
      >
        <DeleteIcon size="2.5rem" className="mt-3 mx-auto text-danger" />
        <h4 className="mt-3 mb-2 fw-bold text-capitalize">Are you sure?</h4>
        <p className="mb-0 lh-base fs-6 text-gray py-1">
          Do you really want to delete these records? This process cannot be
          undone.
        </p>

        <div className="pt-4 d-flex gap-3">
          <button
            type="button"
            onClick={() => setShow("")}
            className="flex-fill btn btn-gray text-white rounded-1 px-2 py-3"
          >
            <span className="fw-semibold">Cancel</span>
          </button>
          <button
            type="button"
            className="flex-fill btn btn-danger text-white rounded-1 px-2 py-3"
            onClick={deleteUser}
            disabled={loading}
          >
            <span className="fw-semibold">Delete</span>
          </button>
        </div>
      </PrimaryModal>

      <button
        type="button"
        onClick={() => setShow("Delete a category")}
        className="btn btn-sm bg-danger bg-opacity-10 text-danger d-flex align-items-center gap-2 rounded-3"
      >
        <span>
          <DeleteIcon size="1rem" />
        </span>
        {isText && <span className="fw-normal">Delete</span>}
      </button>
    </>
  );
};

export default DeleteModal;
