import React, { useState } from 'react';
import CategoryCard from '../../components/cards/CategoryCard';
import DatePickerCard from '../../components/cards/DatePickerCard';
import RecentCard from '../../components/cards/RecentCard';
import FeedField from '../../components/inputs/FeedField';
import SearchField from '../../components/inputs/SearchField';
import PrimaryModal from '../../components/modals/PrimaryModal';

const CommunityManagementPage = () => {
  const [show, setShow] = useState('');

  const categories = [
    { name: 'category One' },
    { name: 'category One' },
    { name: 'category One' },
  ];

  return (
    <>
      <PrimaryModal
        show={show === 'Create a category'}
        onHide={() => setShow('')}
      >
        <h4 className='mb-2 fw-bold text-capitalize'>Add category</h4>
        <form noValidate>
          <div>
            <label htmlFor='name' className='fs-7 fw-500 mb-1'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='form-control form-control-sm bg-white p-3'
              placeholder='Category type'
            />
          </div>
        </form>
        <div className='pt-4 d-flex gap-3'>
          <button
            type='button'
            onClick={() => setShow('')}
            className='flex-fill btn btn-gray text-white rounded-1 px-2 py-3'
          >
            <span className='fw-semibold'>Cancel</span>
          </button>
          <button
            type='button'
            onClick={() => setShow('')}
            className='flex-fill btn btn-primary rounded-1 px-2 py-3'
          >
            <span className='fw-semibold'>Save</span>
          </button>
        </div>
      </PrimaryModal>

      <main>
        {/* Header */}
        <section>
          <div className='d-flex flex-wrap align-items-center gap-3 bg-white px-4 py-3'>
            <h5 className='mb-0 fw-semibold me-auto'>Community Management</h5>
            <div className='px-0 col-12 col-md-auto d-flex flex-wrap align-items-stretch gap-3'>
              <div className='me-sm-auto flex-fill'>
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
                        <CategoryCard data={data} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='bg-white mt-3 p-3 text-center'>
                  <button
                    type='button'
                    onClick={() => setShow('Create a category')}
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
    </>
  );
};

export default CommunityManagementPage;
