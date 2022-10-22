import React from 'react';
import UserManagementTable from '../../components/tables/UserManagementTable';

const UserManagementPage = () => {
  return (
    <main className='py-4 px-2 px-sm-4'>
      {/* Header */}
      <section>
        <h5 className='mb-4 fw-semibold'>User Management</h5>
      </section>
      {/* Header */}
      <section>
        <UserManagementTable />
      </section>
    </main>
  );
};

export default UserManagementPage;
