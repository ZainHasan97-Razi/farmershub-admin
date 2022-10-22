import React from 'react';
import ReactApexChart from 'react-apexcharts';
import DatePickerCard from '../cards/DatePickerCard';

const AdsChart = () => {
  const series = [44, 55, 70];

  //   const options = {
  //     labels: ['Active', 'Expired', 'Sold'],
  //     plotOptions: {
  //       pie: {
  //         startAngle: -120,
  //         endAngle: 120,
  //         offsetY: 10,
  //         donut: {
  //           size: '85%',
  //         },
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },

  //     legend: {
  //       position: 'bottom',
  //     },

  //     grid: {
  //       padding: {
  //         bottom: -50,
  //       },
  //     },
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {
  //           legend: {
  //             position: 'bottom',
  //           },
  //         },
  //       },
  //     ],
  //   };

  const options = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        endAngle: 250,
        dataLabels: {
          name: {
            fontSize: '0.875rem',
            fontWeight: 400,
            offsetY: 30,
          },

          value: {
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#36414F',
            offsetY: -15,
            formatter: function (val) {
              return val;
            },
          },
          legend: {
            position: 'bottom',
          },
          total: {
            show: true,
            label: 'Total',
            color: '#36414F',
            fontSize: '1rem',
            fontWeight: 400,

            formatter: function () {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return series[0] + series[1] + series[2] + '+';
            },
          },
        },
      },
    },
    labels: ['Active', 'Expired', 'Sold'],
    colors: ['#64D26F', '#5564D7', '#F1BE5B'],
  };

  return (
    <div>
      <div className='mb-4 d-flex align-items-center'>
        <h5 className='mb-0 text-capitalize fw-bold fs-6 me-auto'>Ads</h5>
        <div>
          <DatePickerCard />
        </div>
      </div>
      <div style={{ height: '21.875rem' }}>
        <ReactApexChart
          options={options}
          series={series}
          type='radialBar'
          height='100%'
        />
      </div>
      <div>
        <ul className='nav justify-content-center gap-3 gap-xl-4'>
          <li>
            <div className='d-flex align-items-center gap-3'>
              <span
                className='d-inline-flex rounded-circle p-1'
                style={{ backgroundColor: `${options.colors[0]}` }}
              />
              <div>
                <h6 className='mb-0 fw-semibold'>{series[0]}</h6>
                <span className='text-body text-opacity-75 text-capitalize fs-7 fw-normal'>
                  {options.labels[0]}
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className='d-flex align-items-center gap-3'>
              <span
                className='d-inline-flex rounded-circle p-1'
                style={{ backgroundColor: `${options.colors[1]}` }}
              />
              <div>
                <h6 className='mb-0 fw-semibold'>{series[1]}</h6>
                <span className='text-body text-opacity-75 text-capitalize fs-7 fw-normal'>
                  {options.labels[1]}
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className='d-flex align-items-center gap-3'>
              <span
                className='d-inline-flex rounded-circle p-1'
                style={{ backgroundColor: `${options.colors[2]}` }}
              />
              <div>
                <h6 className='mb-0 fw-semibold'>{series[2]}</h6>
                <span className='text-body text-opacity-75 text-capitalize fs-7 fw-normal'>
                  {options.labels[2]}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdsChart;
