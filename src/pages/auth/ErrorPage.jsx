import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main className='d-md-flex flex-column flex-fill align-items-center justify-content-center'>
      <div className='d-flex align-items-center justify-content-center p-4'>
        <div className='text-center'>
          <h1 className='display-1 fw-bold'>404</h1>
          <p className='fs-3'>
            {' '}
            <span className='text-danger'>Opps!</span> Page not found.
          </p>
          <p className='lead'>The page you’re looking for doesn’t exist.</p>
          <Link to='/dashboard' className='btn btn-primary'>
            Back to dashboard
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
