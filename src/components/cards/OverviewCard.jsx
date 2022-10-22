import React from 'react';
import { ArrowUpIcon } from '../icons/icons';

const OverviewCard = ({ data }) => {
  return (
    <div className='overview-card bg-white shadow-sm p-4 rounded d-flex justify-content-center'>
      <div className='d-flex align-items-center'>
        <span
          className='d-inline-block me-2 me-xl-4'
          style={{ height: '2.5rem', minWidth: '5rem' }}
        >
          <img
            className='d-block h-100 w-100'
            src={`/assets/${
              data.per > 0.2 ? 'line-success' : 'line-danger'
            }.svg`}
            alt='..'
          />
        </span>
        <div>
          <div className='d-flex align-items-center gap-2'>
            <h3 className='mb-0 fw-bold'>{data.value}</h3>
            <span
              className={`badge px-1 bg-primary bg-opacity-10 fw-semibold fs-7 d-flex align-items-end ${
                data.per > 0.2
                  ? 'bg-primary text-primary '
                  : 'bg-danger text-danger'
              }`}
            >
              <ArrowUpIcon
                style={{
                  transform: `rotate(${data.per > 0.2 ? '0' : '180'}deg)`,
                }}
              />
              <span>{data.per}%</span>
            </span>
          </div>
          <div className='d-flex align-items-center gap-1 mt-1'>
            <span className='d-inline-flex bg-info rounded-circle p-1' />
            <span className='text-body text-opacity-75 text-capitalize fs-7 fw-normal'>
              {data.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
