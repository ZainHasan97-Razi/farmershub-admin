// libraries
import React, { useCallback } from "react";
import { Table, Spinner } from "react-bootstrap";
import { numberDate } from "../../lib/helper/helper";
import { useNavigate } from "react-router-dom";

// components
import DatePickerCard from "../cards/DatePickerCard";
import SearchField from "../inputs/SearchField";
import DeleteModal from "../modals/DeleteModal";
import ViewModal from "../modals/ViewModal";
import StatusFilters from "../inputs/StatusFilters";

const statusEnum = {
  "Not Submitted": { color: "text-dark", text: "Not Submitted" },
  Pending: { color: "text-warning", text: "Pending" },
  Verified: { color: "text-success", text: "Verified" },
  Rejected: { color: "text-danger", text: "Not Verified" },
};

const UserManagementTable = ({
  users,
  setfilterUsers,
  setDate,
  date,
  setOffset,
  setUsers,
  searchText,
  setSearchText,
  loading,
  setLoading,
  setStatus,
  status
}) => {
  const navigate = useNavigate();

  const tableHeaderList = [
    { heading: "phone #" },
    { heading: "Name" },
    { heading: "Verification Status" },
    { heading: "member since" },
    { heading: "ads posted" },
    { heading: "Actions" },
  ];

  const handleChange = (value) => {
    setSearchText(value);
    setOffset(0);
    setUsers([]);
    setLoading(true);
  };

  const onChangeStatus = (value) => {
    setStatus(value);
    setOffset(0);
    setUsers([]);
    setLoading(true);
  }

  return (
    <div className="bg-white rounded shadow-sm">
      <div className="p-4 d-flex flex-wrap align-items-stretch gap-3">
        <div className="me-auto flex-fill flex-md-grow-0">
          <SearchField handleChange={handleChange} value={searchText} />
        </div>
        <div className="me-auto flex-fill flex-md-grow-0">
          <StatusFilters handleChange={onChangeStatus} selected={status} value={status} />
        </div>
        <div className="flex-fill flex-md-grow-0">
          <DatePickerCard
            isPlaceholder
            setfilterUsers={setfilterUsers}
            setDate={setDate}
            date={date}
            setOffset={setOffset}
            setUsers={setUsers}
          />
        </div>
      </div>

      <Table responsive borderless hover>
        <thead className="bg-secondary bg-opacity-10">
          <tr className="border-bottom">
            {tableHeaderList.map((data) => (
              <th
                key={data.heading}
                className="p-4 fw-semibold h6 mb-0 text-center text-capitalize text-black text-nowrap"
              >
                {data.heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((data) => (
            <tr key={data._id} className="border-bottom">
              <td className="p-4 fw-semibold h6 mb-0 text-center text-nowrap text-dark text-opacity-75">
                {data?.phone_number || "--"}
              </td>
              <td className="p-4 fw-semibold h6 mb-0 text-center text-nowrap text-dark text-opacity-75 text-capitalize">
                {data?.name || "--"}
              </td>
              <td
                onClick={() => navigate(`/user-verification/${data._id}`)}
                className={`p-4 fw-semibold h6 mb-0 text-center text-nowrap ${
                  statusEnum[data?.identity_status || "Not Submitted"].color
                } text-opacity-75 text-capitalize`}
              >
                {data?.identity_status || "--"}
              </td>
              <td className="p-4 fw-semibold h6 mb-0 text-center text-nowrap text-dark text-opacity-75">
                {numberDate(data?.createdAt) || "--"}
              </td>
              <td className="p-4 fw-semibold h6 mb-0 text-center text-nowrap text-primary text-decoration-underline">
                {data?.posts_length || 0}
              </td>
              <td className="p-4 text-center">
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <DeleteModal isText data={data} setUsers={setUsers} />
                  <ViewModal isText isAds data={data} />
                </div>
              </td>
            </tr>
          ))}
          {loading ? (
            <div className="w-100 text-center p-2">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <></>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default UserManagementTable;
