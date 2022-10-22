import React from 'react';
import AdsComponent from '../../components/AdsComponent';
import DatePickerCard from '../../components/cards/DatePickerCard';
import SearchField from '../../components/inputs/SearchField';

const AdsManagementPage = () => {
  const pendingAds = [
    { title: '14 liters of milk | 8 months gestation | Second rate' },
    { title: '14 liters of milk | 8 months gestation | Second rate' },
  ];

  const approvedAds = [
    { title: '14 liters of milk | 8 months gestation | Second rate' },
  ];

  const expiredAds = [
    { title: '14 liters of milk | 8 months gestation | Second rate' },
  ];

  return (
    <main className='bg-white py-4 px-2 px-sm-4'>
      {/* Header */}
      <section>
        <div className='mb-4 d-flex flex-wrap align-items-center gap-3'>
          <h5 className='mb-0 fw-semibold me-auto'>Ads Management</h5>
          <div className='d-flex flex-wrap align-items-stretch gap-3'>
            <div className='me-sm-auto'>
              <DatePickerCard isPlaceholder />
            </div>
            <SearchField />
          </div>
        </div>
      </section>
      {/* Header */}
      <section>
        <ul className='nav row flex-nowrap flex-xl-wrap overflow-auto row-cols-1 row-cols-sm-2 row-cols-xl-3 gy-4'>
          <li>
            <AdsComponent title='Pending Ads' list={pendingAds} />
          </li>
          <li>
            <AdsComponent title='Approved Ads' list={approvedAds} />
          </li>
          <li>
            <AdsComponent title='Expired Ads' list={expiredAds} />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default AdsManagementPage;
