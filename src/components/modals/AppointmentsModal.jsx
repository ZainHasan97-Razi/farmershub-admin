import React from 'react';
import { ClockIcon } from '../icons/icons';
import PrimaryModal from './PrimaryModal';

const AppointmentsModal = ({ data, show, onHide }) => {
  const appointmentList = [
    {
      title: 'SHEEP',
      bookedName: 'Ch Aftab Sahib',
      feePaid: 2500,
      time: 'Today at 7pm',
    },
    {
      title: 'GOAT',
      bookedName: 'Ch Aftab Sahib',
      feePaid: 2000,
      time: 'Today at 7pm',
    },
    {
      title: 'BULL',
      bookedName: 'Ch Aftab Sahib',
      feePaid: 3000,
      time: 'Today at 7pm',
    },
    {
      title: 'SHEEP',
      bookedName: 'Ch Aftab Sahib',
      feePaid: 2500,
      time: 'Today at 7pm',
    },
    {
      title: 'GOAT',
      bookedName: 'Ch Aftab Sahib',
      feePaid: 2000,
      time: 'Today at 7pm',
    },
    {
      title: 'BULL',
      bookedName: 'Ch Aftab Sahib',
      feePaid: 3000,
      time: 'Today at 7pm',
    },
  ];

  return (
    <PrimaryModal size='lg' show={show} onHide={onHide}>
      <h4 className='mb-2 fw-bold text-capitalize'>{data.name}</h4>
      <p className='mb-0 fs-7 text-gray'>{data.phoneNumber}</p>

      <ul
        className='nav flex-nowrap flex-column gap-3 mt-4 overflow-auto pe-2'
        style={{ maxHeight: '21.875rem' }}
      >
        {appointmentList.map((appointmentList) => (
          <li
            key={appointmentList.title}
            className='border shadow-sm rounded-2 py-2 px-3'
          >
            <div>
              <h5 className='mb-1 fw-bold text-uppercase'>
                {appointmentList.title}
              </h5>
              <div className='mb-1 text-gray fs-7'>
                <span className='d-block mb-0 text-capitalize'>
                  BOOKED BY: {appointmentList.bookedName}
                </span>
                <span className='d-block mb-0'>
                  Fee paid: {appointmentList.feePaid}
                </span>
              </div>
              <div className='text-gray fs-7'>
                <ClockIcon className='me-1' />
                <span className='small'>{appointmentList.time}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </PrimaryModal>
  );
};

export default AppointmentsModal;
