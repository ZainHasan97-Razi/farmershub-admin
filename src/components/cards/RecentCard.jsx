import React from 'react';
import { DotsVIcon } from '../icons/icons';

const RecentCard = () => {
  return (
    <div className='bg-white shadow-sm rounded-2 p-3'>
      <div className='d-flex align-items-center gap-2'>
        <div className='d-flex align-items-center gap-3 me-auto'>
          <div style={{ height: '2.875rem', minWidth: '2.875rem' }}>
            <img
              className='d-block h-100 w-100'
              src='/assets/user.png'
              alt='...'
            />
          </div>
          <div>
            <h6 className='mb-1 fw-semibold text-capitalize'>Ch aftab sahib</h6>
            <p className='mb-0 fs-7 fw-normal text-gray'>7 july at 9:22pm</p>
          </div>
        </div>
        <div>
          <button className='btn p-0 link'>
            <DotsVIcon />
          </button>
        </div>
      </div>
      <p className='mt-3 mb-0 fs-7 fw-normal text-gray lh-lg'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur
      </p>
    </div>
  );
};

export default RecentCard;
