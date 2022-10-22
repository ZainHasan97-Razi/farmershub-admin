import React from 'react';
import ReactApexChart from 'react-apexcharts';
import DatePickerCard from '../cards/DatePickerCard';
import { ArrowUpIcon } from '../icons/icons';

const SalesChart = () => {
  const series = [1200, 800];

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
              return val + '$';
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
              return series[0] + series[1] + '$';
            },
          },
        },
      },
    },
    labels: ['Orders', 'Revenue'],
    colors: ['#64D26F', '#E04B43'],
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
        <ul className='nav flex-column justify-content-center gap-3'>
          <li>
            <div className='d-flex align-items-center gap-2 justify-content-between'>
              <div className='d-flex align-items-center gap-2'>
                <span
                  className='d-inline-flex rounded-circle p-1'
                  style={{ backgroundColor: `${options.colors[0]}` }}
                />
                <span className='text-body text-opacity-75 text-capitalize fs-7 fw-normal'>
                  {options.labels[0]}
                </span>
              </div>
              <div className='d-flex align-items-center gap-2'>
                <h6 className='mb-0 fw-semibold'>${series[0]}</h6>
                <span
                  className={`badge px-1 bg-primary bg-opacity-10 fw-semibold fs-7 d-flex align-items-end ${
                    series[0] > 900
                      ? 'bg-primary text-primary '
                      : 'bg-danger text-danger'
                  }`}
                >
                  <ArrowUpIcon
                    style={{
                      transform: `rotate(${series[0] > 900 ? '0' : '180'}deg)`,
                    }}
                  />

                  <span>{series[0] * 0.1}%</span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className='d-flex align-items-center gap-2 justify-content-between'>
              <div className='d-flex align-items-center gap-2'>
                <span
                  className='d-inline-flex rounded-circle p-1'
                  style={{ backgroundColor: `${options.colors[1]}` }}
                />
                <span className='text-body text-opacity-75 text-capitalize fs-7 fw-normal'>
                  {options.labels[1]}
                </span>
              </div>
              <div className='d-flex align-items-center gap-2'>
                <h6 className='mb-0 fw-semibold'>${series[1]}</h6>
                <span
                  className={`badge px-1 bg-primary bg-opacity-10 fw-semibold fs-7 d-flex align-items-end ${
                    series[1] > 900
                      ? 'bg-primary text-primary'
                      : 'bg-danger text-danger'
                  }`}
                >
                  <ArrowUpIcon
                    style={{
                      transform: `rotate(${series[1] > 900 ? '0' : '180'}deg)`,
                    }}
                  />

                  <span>{series[1] * 0.1}%</span>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SalesChart;
