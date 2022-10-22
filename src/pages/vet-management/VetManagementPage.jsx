import React from 'react';
import VetManagementTable from '../../components/tables/VetManagementTable';

const VetManagementPage = () => {
  return (
    <main className='py-4 px-2 px-sm-4'>
      {/* Header */}
      <section>
        <h5 className='mb-4 fw-semibold'>Vet Management</h5>
      </section>
      {/* Header */}
      <section>
        <VetManagementTable />
      </section>
    </main>
  );
};

export default VetManagementPage;
