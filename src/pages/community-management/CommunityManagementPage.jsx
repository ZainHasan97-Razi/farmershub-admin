import React from 'react';
import DatePickerCard from '../../components/cards/DatePickerCard';
import RecentCard from '../../components/cards/RecentCard';
import { DeleteIcon } from '../../components/icons/icons';
import FeedField from '../../components/inputs/FeedField';
import SearchField from '../../components/inputs/SearchField';

const CommunityManagementPage = () => {
  const categories = [
    { name: 'category One' },
    { name: 'category One' },
    { name: 'category One' },
  ];

  return (
    <main>
      {/* Header */}
      <section>
        <div className='d-flex flex-wrap align-items-center gap-3 bg-white px-4 py-3'>
          <h5 className='mb-0 fw-semibold me-auto'>Community Management</h5>
          <div className='d-flex flex-wrap align-items-stretch gap-3'>
            <div className='me-sm-auto'>
              <DatePickerCard isPlaceholder />
            </div>
            <SearchField />
          </div>
        </div>
      </section>
      {/* Header */}
      <section className='py-4 px-2 px-sm-4'>
        <div className='row gy-4'>
          <div className='col-12 col-md-8'>
            <div className='mb-4'>
              <FeedField />
            </div>
            <div>
              <h6 className='mb-3 text-gray fw-semibold'>Recents</h6>
              <ul className='nav flex-column gap-3'>
                <li>
                  <RecentCard />
                </li>
                <li>
                  <RecentCard />
                </li>
                <li>
                  <RecentCard />
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div
              className='bg-white bg-opacity-50 rounded-2 shadow-sm position-sticky'
              style={{ top: '4.375rem' }}
            >
              <div className='p-3'>
                <h6 className='mb-4 fw-semibold text-capitalize me-auto'>
                  On going categories
                </h6>
                <ul className='nav flex-column gap-4 list-decimal '>
                  {categories.map((data) => (
                    <li key={data.name}>
                      <div className='d-flex align-items-center gap-2'>
                        <p className='mb-0 text-gray h6 fw-normal text-capitalize me-auto'>
                          {data.name}
                        </p>
                        <button
                          type='button'
                          className='btn btn-sm bg-danger bg-opacity-10 text-danger d-flex align-items-center gap-2 rounded-3'
                        >
                          <span>
                            <DeleteIcon size='1rem' />
                          </span>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='bg-white mt-3 p-3 text-center'>
                <button
                  type='button'
                  className='btn btn-primary rounded-1 px-5 py-3'
                >
                  <span className='fw-semibold'>Create a category</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommunityManagementPage;
