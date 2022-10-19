import React from 'react';

const Logo = (props) => {
  return (
    <div {...props} style={{ height: '3.25rem', width: '5.25rem' }}>
      <img className='d-block h-100 w-100' src='/assets/logo.svg' alt='logo' />
    </div>
  );
};

export default Logo;
