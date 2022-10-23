import React, { useState } from 'react';
import { PlayIcon, ClockIcon, LocationIcon } from '../icons/icons';
import GalleryModal from '../modals/GalleryModal';

const AdCardHorizontal = ({ data, gallery }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <GalleryModal
        gallery={gallery}
        show={show}
        onHide={() => setShow(false)}
      />

      <div className='ad-card bg-light rounded-3 shadow-sm p-3 d-lg-flex gap-3'>
        {/* Ads overlay */}
        <div
          className='bg-cover rounded-3 bg-dark bg-opacity-25 px-0 col-lg-4'
          style={{
            backgroundImage: 'url(/assets/card-image-0.jpg)',
            height: '11.25rem',
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
        <ul className='nav flex-column gap-2 mt-3'>
          <li>
            <div className='d-flex align-items-center gap-2'>
              <div className='d-flex align-items-center flex-wrap justify-content-start gap-2 me-auto'>
                <h6 className='mb-0 fw-bold me-auto'>RS 73,000</h6>
                <span className='fs-7 fw-500 text-gray text-capitalize'>
                  Negotiable
                </span>
              </div>
              <div className='d-flex align-items-center flex-wrap justify-content-end gap-2'>
                <div className='text-gray fs-7'>
                  <ClockIcon className='me-1' />
                  <span className='small'>{data.postTime}</span>
                </div>
                <div className='text-gray fs-7'>
                  <LocationIcon className='me-1' />
                  <span className='small'>{data.location}</span>
                </div>
              </div>
            </div>
          </li>
          <li className='px-0 col-lg-9'>
            <h6 className='mb-0 fw-500'>{data.title}</h6>
          </li>
          <li className='px-0 col-lg-9'>
            <p className='mb-0 text-gray fs-7'>
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

export default AdCardHorizontal;
