// libraries
import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";

// components
import UserManagementTable from "../../components/tables/UserManagementTable";

// constants
import { apiRoutes } from "../../lib/contants";
import { onBottom } from "../../lib/helper/detectScroll";
import { getRequest } from "../../services/axios/axiosMethods";

const UserManagementPage = () => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

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
      const response = await getRequest(
        `${apiRoutes.fetchUser}?limit=${limit}&offset=${offset}`
      );
      setCompleted(response.length !== 10);
      setUsers([...users, ...response.users]);
      response && setLoading(false);
      // setOffset(response.next_offset);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, [offset]);

  return (
    <main className="py-4 px-2 px-sm-4">
      {/* Header */}
      <section>
        <h5 className="mb-4 fw-semibold">User Management</h5>
      </section>
      {/* Header */}
      <section>
        <UserManagementTable users={users} />
      </section>
    </main>
  );
};

export default UserManagementPage;
