import React, { useState } from 'react';
import { EyeIcon } from '../icons/icons';
import PrimaryModal from './PrimaryModal';

const ViewModal = ({ data, ...props }) => {
  const [show, setShow] = useState('');

  return (
    <>
      <PrimaryModal
        show={show === 'View Appointments'}
        onHide={() => setShow('')}
      >
        <h4 className='mb-2 fw-bold text-capitalize'>{data.name}</h4>
        <p className='mb-0 fs-7 text-gray'>{data.phoneNumber}</p>

        <div
          className='mx-auto mt-4'
          style={{ height: '9.6875rem', width: '9.6875rem' }}
        >
          <img
            className='d-block h-100 w-100'
            src='/assets/user-1.png'
            alt='...'
          />
        </div>

        <div className='pt-5 d-flex gap-3'>
          <button
            type='button'
            onClick={() => setShow('')}
            className='flex-fill btn btn-primary text-white rounded-1 px-2 py-3'
          >
            <span className='fw-semibold'>
              {props.isAds && 'View Ads posted'}
              {props.isAppointments && 'View Appointments'}
            </span>
          </button>
        </div>
      </PrimaryModal>

      <button
        onClick={() => setShow('View Appointments')}
        type='button'
        className='btn btn-sm bg-secondary bg-opacity-10 text-secondary d-flex align-items-center gap-2'
      >
        <span>
          <EyeIcon size='1rem' />
        </span>
        {props.isText && <span className='fw-normal'>View</span>}
      </button>
    </>
  );
};

export default ViewModal;
