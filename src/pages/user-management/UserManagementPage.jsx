// libraries
import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";

// components
import UserManagementTable from "../../components/tables/UserManagementTable";

// constants
import { apiRoutes } from "../../lib/contants";
import { onBottom } from "../../lib/helper/detectScroll";
import { getRequest } from "../../services/axios/axiosMethods";
import { formatDate } from "../../lib/helper/helper";

const UserManagementPage = () => {
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [filterUsers, setfilterUsers] = useState(false);
  const [date, setDate] = useState({
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
          apiRoutes.fetchUser
        }?limit=${limit}&offset=${offset}&searchText=${searchText}${
          filterUsers ? `&minDate=${startDate}&maxDate=${maxDate}` : ""
        }`
      );
      setCompleted(response.length < limit);
      setUsers([...users, ...response.users]);
      response && setLoading(false);
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

  return (
    <main className="py-4 px-2 px-sm-4">
      {/* Header */}
      <section>
        <h5 className="mb-4 fw-semibold">User Management</h5>
      </section>
      {/* Header */}
      <section>
        <UserManagementTable
          users={users}
          setfilterUsers={setfilterUsers}
          setDate={setDate}
          date={date}
          setOffset={setOffset}
          setUsers={setUsers}
          searchText={setSearchText}
          setSearchText={setSearchText}
          loading={loading}
          setLoading={setLoading}
        />
      </section>
    </main>
  );
};

export default UserManagementPage;
