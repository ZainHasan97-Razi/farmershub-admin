import React from 'react';
import AdCard from './cards/AdCard';
import { DotsIcon } from './icons/icons';

const AdsComponent = ({ title, list }) => {
  return (
    <div>
      {/* Ads Header */}
      <div className='bg-light rounded-3 shadow-sm p-3 d-flex align-items-center mb-3'>
        <h6 className='text-black mb-0 fw-500 text-capitalize me-auto'>
          {title}
        </h6>
        <button className='btn p-0 link'>
          <DotsIcon />
        </button>
      </div>
      {/* /Ads Header */}
      <ul className='nav flex-column gap-3'>
        {list.map((data) => (
          <AdCard key={data.name} data={data} />
        ))}
      </ul>
    </div>
  );
};

export default AdsComponent;
