import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";

import { Table } from "react-bootstrap";
import { formatDate } from "../../lib/helper/helper";
import SearchField from "../inputs/SearchField";
import AddVetModal from "../modals/AddVetModal";
import DeleteModal from "../modals/DeleteModal";
import ViewModal from "../modals/ViewModal";
import { getRequest } from "../../services/axios/axiosMethods";
import { apiRoutes } from "../../lib/contants";
import { onBottom } from "../../lib/helper/detectScroll";

const VetManagementTable = () => {
  const tableHeaderList = [
    { heading: "phone #" },
    { heading: "Name" },
    { heading: "member since" },
    { heading: "Experience" },
    { heading: "Actions" },
  ];
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [vets, setVets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [filterUsers] = useState(false);
  const [date] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });

  // increment offset at the end
  const scrollToEnd = () => {
    if (completed || loading) {
      return;
    }
    setOffset(offset + limit);
  };

  // detect scroll at bottom
  window.onscroll = debounce(() => {
    if (onBottom()) {
      scrollToEnd();
    }
  }, 100);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const startDate = formatDate(date.startDate);
      const maxDate = formatDate(date.endDate);

      const response = await getRequest(
        `${
          apiRoutes.fetchVets
        }?limit=${limit}&offset=${offset}&searchText=${searchText}${
          filterUsers ? `&minDate=${startDate}&maxDate=${maxDate}` : ""
        }`
      );
      setCompleted(response.length < limit);
      setVets([...vets, ...response.vet]);
      response && setLoading(false);
      // setOffset(response.next_offset);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    // if (!filterUsers) {
    //   return;
    // }
    fetchUsers();
    // eslint-disable-next-line
  }, [offset, filterUsers, date]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchUsers();
      // Send Axios request here
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  const handleChange = (value) => {
    setSearchText(value);
    setOffset(0);
    setVets([]);
    setLoading(true);
  };

  useEffect(() => {
    fetchUsers();
  }, [refresh]);

  return (
    <div className="bg-white rounded shadow-sm">
      <div className="p-4 d-flex flex-wrap align-items-stretch gap-3">
        <div className="me-auto flex-fill flex-md-grow-0">
          <SearchField handleChange={(value) => handleChange(value)} />
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3 flex-fill flex-md-grow-0">
          {/* <DatePickerCard isPlaceholder /> */}
          <AddVetModal
            handleChange={handleChange}
            setRefresh={setRefresh}
            refresh={refresh}
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
          {vets?.map((data) => (
            <tr key={data.name} className="border-bottom">
              <td className="p-4 fw-semibold h6 mb-0 text-center text-nowrap text-dark text-opacity-75">
                {data?.phone_number || "---"}
              </td>
              <td className="p-4 fw-semibold h6 mb-0 text-center text-nowrap text-dark text-opacity-75 text-capitalize">
                {data?.name || "---"}
              </td>
              <td className="p-4 fw-semibold h6 mb-0 text-center text-nowrap text-dark text-opacity-75">
                {formatDate(data?.createdAt) || "---"}
              </td>
              <td className="p-4 fw-semibold h6 mb-0 text-center text-nowrap text-primary text-decoration-underline">
                {data?.experience || "---"}
              </td>
              <td className="p-4 text-center">
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <DeleteModal
                    isText
                    data={data}
                    setUsers={setVets}
                    vet={true}
                  />

                  <ViewModal isText isAppointments data={data} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VetManagementTable;
