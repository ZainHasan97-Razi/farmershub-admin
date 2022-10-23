import React, { useState } from 'react';
import { PlayIcon } from '../icons/icons';
import GalleryModal from '../modals/GalleryModal';

const AdCard = ({ data, gallery }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <GalleryModal
        gallery={gallery}
        show={show}
        onHide={() => setShow(false)}
      />

      <div className='ad-card bg-light rounded-3 shadow-sm p-3'>
        {/* Ads overlay */}
        <div
          className='bg-cover rounded-3 bg-dark bg-opacity-25'
          style={{
            backgroundImage: 'url(/assets/card-image-0.jpg)',
            height: '12.5rem',
          }}
        >
          <div
            onClick={() => setShow(true)}
            className={`h-100 d-flex flex-column justify-content-center align-items-center p-3 ad-card-overlay ${
              data.badge && 'active'
            }`}
          >
            {data.badge && (
              <span className='py-2 px-3 bg-white rounded-end text-warning text-uppercase fs-8 fw-bold position-absolute start-0 top-0 mt-3'>
                {data.badge}
              </span>
            )}
            <button
              type='button'
              className='btn p-0 link my-auto'
              style={{ height: '3.375rem', width: '3.375rem' }}
            >
              <PlayIcon size='100%' />
            </button>
            <h6 className='mb-0 fw-500 fs-6 text-white'>1 of 7</h6>
          </div>
        </div>
        {/* /Ads overlay */}
        {/* Ads body */}
        <ul className='nav flex-column gap-3 mt-3'>
          <li>
            <div className='d-flex align-items-center gap-2'>
              <h5 className='mb-0 fw-bold me-auto'>RS 73,000</h5>
              <span className='fs-7 fw-500 text-gray text-capitalize'>
                Negotiable
              </span>
            </div>
          </li>
          <li>
            <h6 className='mb-0 fw-500'>{data.title}</h6>
          </li>
          <li>
            <p className='mb-0 text-gray'>
              This is a Murrah cross buffalo. This Murrah cross buffalo is in
              second breeding and now gives 14 liters of milk.
            </p>
          </li>
        </ul>
        {/* /Ads body */}
      </div>
    </>
  );
};

export default AdCard;
