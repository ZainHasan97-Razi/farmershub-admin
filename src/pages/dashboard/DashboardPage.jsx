import React from 'react';
import OverviewCard from '../../components/cards/OverviewCard';
import AdsChart from '../../components/charts/AdsChart';
import SalesChart from '../../components/charts/SalesChart';
import UsersChart from '../../components/charts/UsersChart';
import VetChart from '../../components/charts/VetChart';

const DashboardPage = () => {
  const overviewBox = [
    { value: '1596', per: 1.2, title: 'Total User' },
    { value: '$10.000', per: 0.2, title: 'New orders' },
    { value: '$10.000', per: 0.5, title: 'Total Revenue' },
  ];

  return (
    <main className='py-4 px-2 px-sm-4'>
      {/* Dashboard Header */}
      <section>
        <h5 className='mb-4 fw-semibold'>Overview</h5>
        <ul className='nav row row-cols-1 row-cols-md-2 row-cols-xxl-3 gy-4'>
          {overviewBox.map((data) => (
            <li key={data.title}>
              <OverviewCard data={data} />
            </li>
          ))}
        </ul>
      </section>
      {/* /Dashboard Header */}
      <section className='mt-4'>
        <div className='row gy-4'>
          <div className='col-12 col-md-7 col-xl-8'>
            <div className='bg-white shadow-sm p-4 rounded'>
              <UsersChart />
            </div>
          </div>
          <div className='col-12 col-md-5 col-xl-4'>
            <div className='bg-white shadow-sm p-4 rounded'>
              <AdsChart />
            </div>
          </div>
        </div>
      </section>
      {/* == */}
      <section className='mt-4'>
        <div className='row gy-4'>
          <div className='col-12 col-md-7 col-xl-8'>
            <div className='bg-white shadow-sm p-4 rounded'>
              <VetChart />
            </div>
          </div>
          <div className='col-12 col-md-5 col-xl-4'>
            <div className='bg-white shadow-sm p-4 rounded'>
              <SalesChart />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
