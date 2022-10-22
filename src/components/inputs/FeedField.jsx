import React from 'react';

const FeedField = () => {
  return (
    <div className='bg-white bg-opacity-50 rounded-2 shadow-sm'>
      <textarea
        rows='4'
        placeholder='What’s on your mind!'
        className='border-0 bg-transparent shadow-none h-100 w-100 p-4'
      ></textarea>
      <div className='bg-white p-3 d-flex align-items-stretch justify-content-end gap-3'>
        <label
          htmlFor='upload'
          className='btn bg-primary bg-opacity-10 text-primary rounded-1 px-3 py-2 px-sm-5 py-sm-3'
        >
          <span className='fw-normal'>Upload Photo/video</span>
          <input type='file' name='upload' id='upload' className='d-none' />
        </label>
        <button
          type='button'
          className='btn btn-gray text-white rounded-1 px-3 py-2 px-sm-5 py-sm-3'
        >
          <span className='fw-semibold'>Post</span>
        </button>
      </div>
    </div>
  );
};

export default FeedField;
