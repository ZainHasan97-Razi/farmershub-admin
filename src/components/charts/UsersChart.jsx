import React from 'react';
import ReactApexChart from 'react-apexcharts';
import DatePickerCard from '../cards/DatePickerCard';

const UsersChart = () => {
  const series = [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      color: '#5564D7',
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      color: '#64D26F',
    },
  ];

  const options = {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        endingShape: 'rounded',
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        },
      },
    },
  };

  return (
    <div className='bars'>
      <div className='mb-4 d-flex align-items-center'>
        <h5 className='mb-0 text-capitalize fw-bold fs-6 me-auto'>Users</h5>
        <div>
          <DatePickerCard />
        </div>
      </div>
      <div style={{ height: '25rem' }}>
        <ReactApexChart
          options={options}
          series={series}
          type='bar'
          height='100%'
        />
      </div>
    </div>
  );
};

export default UsersChart;
