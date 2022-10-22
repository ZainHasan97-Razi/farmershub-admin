import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { DateRange } from 'react-date-range';
import { CalendarIcon } from '../icons/icons';

const DatePickerCard = ({ isPlaceholder }) => {
  const [showDate, setShowDate] = useState(false);

  const handleClose = () => setShowDate(false);
  const handleShow = () => setShowDate(true);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);
  return (
    <>
      <div className='position-relative h-100'>
        <button
          onClick={handleShow}
          type='button'
          className='h-100 btn btn-light text-dark text-opacity-75 py-2 px-3 rounded d-flex align-items-center gap-2'
        >
          <CalendarIcon
            className={`${isPlaceholder && 'text-body text-opacity-50'}`}
          />
          <span className='fs-7 fw-semibold'>
            {isPlaceholder ? (
              <span className='text-body text-opacity-50 fw-500'>
                Choose date range
              </span>
            ) : (
              <span>13 Aug - 20 Aug</span>
            )}
          </span>
        </button>
      </div>

      <Modal centered show={showDate} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='outline-primary'
            onClick={handleClose}
            className='px-4'
          >
            Close
          </Button>
          <Button variant='primary' onClick={handleClose} className='px-4'>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <div
        onClick={() => setShowDate(false)}
        className={`position-fixed h-100 w-100 bg-black bg-opacity-10 top-0 start-0 ${
          showDate ? 'd-block' : 'd-none'
        }`}
        style={{ zIndex: 30 }}
      /> */}
    </>
  );
};

export default DatePickerCard;
