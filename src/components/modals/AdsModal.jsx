import React from 'react';
import AdCardHorizontal from '../cards/AdCardHorizontal';
import PrimaryModal from './PrimaryModal';

const AdsModal = ({ data, show, onHide }) => {
  const gallery = [
    { imageUrl: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    {
      videoUrl: 'https://www.w3schools.com/tags/movie.mp4',
    },
    {
      videoUrl:
        'https://maweshi-bucket.s3.ap-southeast-1.amazonaws.com/uploads/c7d948be-25ad-4864-b60e-2495e3c21fe1-VID_235610227_151145_396.mp4',
    },
    { imageUrl: 'https://swiperjs.com/demos/images/nature-3.jpg' },
    { imageUrl: 'https://swiperjs.com/demos/images/nature-4.jpg' },
    { imageUrl: 'https://swiperjs.com/demos/images/nature-5.jpg' },
    { imageUrl: 'https://swiperjs.com/demos/images/nature-6.jpg' },
  ];

  const list = [
    {
      title: '14 liters of milk | 8 months gestation | Second rate',
      postTime: '1 week ago',
      location: 'Islamabad (approx 6kms)',
      badge: 'Khass mall',
    },
    {
      title: '14 liters of milk | 8 months gestation | Second rate',
      postTime: '1 week ago',
      location: 'Islamabad (approx 6kms)',
    },
    {
      title: '14 liters of milk | 8 months gestation | Second rate',
      postTime: '1 week ago',
      location: 'Islamabad (approx 6kms)',
      badge: 'Khass mall',
    },
    {
      title: '14 liters of milk | 8 months gestation | Second rate',
      postTime: '1 week ago',
      location: 'Islamabad (approx 6kms)',
    },
  ];

  return (
    <PrimaryModal size='lg' show={show} onHide={onHide}>
      <h4 className='mb-2 fw-bold text-capitalize'>{data.name}</h4>
      <p className='mb-0 fs-7 text-gray'>{data.phoneNumber}</p>

      <ul
        className='nav flex-nowrap flex-column gap-3 mt-4 overflow-auto pe-2'
        style={{ maxHeight: '25rem' }}
      >
        {list.map((data) => (
          <AdCardHorizontal gallery={gallery} key={data.title} data={data} />
        ))}
      </ul>
    </PrimaryModal>
  );
};

export default AdsModal;
