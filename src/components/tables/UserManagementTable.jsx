import React from 'react';
import { Table } from 'react-bootstrap';
import DatePickerCard from '../cards/DatePickerCard';
import SearchField from '../inputs/SearchField';
import DeleteModal from '../modals/DeleteModal';
import ViewModal from '../modals/ViewModal';

const UserManagementTable = () => {
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
        <div className='me-auto flex-fill flex-md-grow-0'>
          <SearchField />
        </div>
        <div className='flex-fill flex-md-grow-0'>
          <DatePickerCard isPlaceholder />
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
                  <DeleteModal isText />
                  <ViewModal isText isAds data={data} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserManagementTable;
