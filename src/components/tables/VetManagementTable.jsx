import React from 'react';
import { Table } from 'react-bootstrap';
import DatePickerCard from '../cards/DatePickerCard';
import { DeleteIcon, EyeIcon } from '../icons/icons';
import SearchField from '../inputs/SearchField';

const VetManagementTable = () => {
  const tableHeaderList = [
    { heading: 'phone #' },
    { heading: 'Name' },
    { heading: 'member since' },
    { heading: 'ads posted' },
    { heading: 'Actions' },
  ];

  const tableList = [
    {
      phoneNumber: '(+33)7 00 55 59 27',
      name: 'Daniel Lokossou',
      memberSince: 'Mar 25, 2006',
      adsPosted: 12,
    },
    {
      phoneNumber: '(+33)7 35 55 21 02',
      name: 'Eric Ouinssou',
      memberSince: 'Feb 28, 2004',
      adsPosted: 1,
    },
    {
      phoneNumber: '(+33)7 75 55 45 48',
      name: 'Franck Acladje',
      memberSince: 'Sep 27, 2016',
      adsPosted: 2,
    },
    {
      phoneNumber: '(+33)6 55 52 17 33',
      name: 'Raphaël Kiki',
      memberSince: 'Aug 07, 2019',
      adsPosted: 4,
    },
    {
      phoneNumber: '(+33)7 00 55 55 11',
      name: 'Charles Sossou',
      memberSince: 'Apr 14, 2004',
      adsPosted: 7,
    },
  ];

  return (
    <div className='bg-white rounded shadow-sm'>
      <div className='p-4 d-flex flex-wrap align-items-stretch gap-3'>
        <div className='me-auto'>
          <SearchField />
        </div>
        <div className='d-flex flex-column flex-sm-row align-items-sm-center gap-2'>
          <DatePickerCard isPlaceholder />
          <button
            type='button'
            className='btn btn-sm btn-primary py-2 px-4 rounded-2 text-capitalize'
          >
            Add Vet
          </button>
        </div>
      </div>

      <Table responsive borderless hover>
        <thead className='bg-secondary bg-opacity-10'>
          <tr className='border-bottom'>
            {tableHeaderList.map((data) => (
              <th
                key={data.heading}
                className='p-4 fw-semibold h6 mb-0 text-center text-capitalize text-black text-nowrap'
              >
                {data.heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableList.map((data) => (
            <tr key={data.name} className='border-bottom'>
              <td className='p-4 fw-semibold h6 mb-0 text-center text-nowrap text-dark text-opacity-75'>
                {data.phoneNumber}
              </td>
              <td className='p-4 fw-semibold h6 mb-0 text-center text-nowrap text-dark text-opacity-75 text-capitalize'>
                {data.name}
              </td>
              <td className='p-4 fw-semibold h6 mb-0 text-center text-nowrap text-dark text-opacity-75'>
                {data.memberSince}
              </td>
              <td className='p-4 fw-semibold h6 mb-0 text-center text-nowrap text-primary text-decoration-underline'>
                {data.adsPosted}
              </td>
              <td className='p-4 text-center'>
                <div className='d-flex align-items-center justify-content-center gap-2'>
                  <button
                    type='button'
                    className='btn btn-sm bg-danger bg-opacity-10 text-danger d-flex align-items-center gap-2'
                  >
                    <span>
                      <DeleteIcon size='1rem' />
                    </span>
                    <span className='fw-normal'>Delete</span>
                  </button>
                  <button
                    type='button'
                    className='btn btn-sm bg-secondary bg-opacity-10 text-secondary d-flex align-items-center gap-2'
                  >
                    <span>
                      <EyeIcon size='1rem' />
                    </span>
                    <span className='fw-normal'>View</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VetManagementTable;
