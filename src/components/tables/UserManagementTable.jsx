// libraries
import React from "react";
import { Table } from "react-bootstrap";
import { numberDate } from "../../lib/helper/helper";

// components
import DatePickerCard from "../cards/DatePickerCard";
import SearchField from "../inputs/SearchField";
import DeleteModal from "../modals/DeleteModal";
import ViewModal from "../modals/ViewModal";

const UserManagementTable = ({
  users,
  setfilterUsers,
  setDate,
  date,
  setOffset,
  setUsers,
}) => {
  const tableHeaderList = [
    { heading: "phone #" },
    { heading: "Name" },
    { heading: "member since" },
    { heading: "ads posted" },
    { heading: "Actions" },
  ];

  return (
    <div className="bg-white rounded shadow-sm">
      <div className="p-4 d-flex flex-wrap align-items-stretch gap-3">
        <div className="me-auto flex-fill flex-md-grow-0">
          <SearchField />
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
        </tbody>
      </Table>
    </div>
  );
};

export default UserManagementTable;
