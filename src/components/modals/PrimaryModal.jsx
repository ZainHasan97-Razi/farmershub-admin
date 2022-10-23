import React from 'react';
import { Modal } from 'react-bootstrap';

const PrimaryModal = ({ show, onHide, children, ...props }) => {
  return (
    <Modal
      {...props}
      show={show}
      onHide={onHide}
      contentClassName='bg-transparent border-0'
      centered
    >
      <div className='text-end mb-2'>
        <button
          type='button'
          className='btn p-0'
          onClick={onHide}
          style={{ height: '2.25rem', width: '2.25rem' }}
        >
          <img
            className='d-block h-100 w-100'
            src='/assets/close-button.svg'
            alt='...'
          />
        </button>
      </div>
      <Modal.Body
        className={`${props.isBlack ? 'bg-black' : 'bg-white'} rounded-2`}
      >
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default PrimaryModal;
