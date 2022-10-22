import React from 'react';
import DeleteModal from '../modals/DeleteModal';

const CategoryCard = ({ data }) => {
  return (
    <>
      <div className='d-flex align-items-center gap-2'>
        <p className='mb-0 text-gray h6 fw-normal text-capitalize me-auto'>
          {data.name}
        </p>
        <DeleteModal />
      </div>
    </>
  );
};

export default CategoryCard;
