import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { ImageIcon } from '../icons/icons';
import PrimaryModal from './PrimaryModal';

const AddVetModal = () => {
  const [show, setShow] = useState('');

  const handleSubmit = () => {
    setShow('');
  };

  return (
    <>
      <PrimaryModal show={show === 'Add Vet'} onHide={() => setShow('')}>
        <h4 className='mb-4 fw-bold  text-capitalize'>Add Vet</h4>

        <form onSubmit={handleSubmit}>
          <ul className='nav flex-column gap-3'>
            <li>
              <Form.Label htmlFor='drName' className='fs-7 fw-500'>
                Name
              </Form.Label>
              <Form.Control
                className='bg-white rounded-2 py-3'
                placeholder='Dr strange'
                id='drName'
                name='drName'
                type='text'
                required
              />
            </li>
            <li>
              <Form.Label htmlFor='phoneNumber' className='fs-7 fw-500'>
                Phone number
              </Form.Label>
              <Form.Control
                className='bg-white rounded-2 py-3'
                placeholder='+92 333 1593578'
                id='phoneNumber'
                name='phoneNumber'
                type='tel'
                required
              />
            </li>
            <li>
              <Form.Label htmlFor='experience' className='fs-7 fw-500'>
                Experience
              </Form.Label>
              <div className='border rounded-2 py-3'>
                <InputGroup>
                  <Form.Control
                    className='bg-white border-0 py-0'
                    placeholder='Experience of years'
                    id='experience'
                    name='experience'
                    type='number'
                    required
                  />
                  <InputGroup.Text className='bg-white border-0 py-0 fs-7 fw-500 text-gray'>
                    Years
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </li>
            <li>
              <Form.Label htmlFor='drName' className='d-block fs-7 fw-500'>
                Upload picture
              </Form.Label>

              <label
                htmlFor='upload-picture'
                className='btn bg-gray bg-opacity-10 text-gray border border-2 rounded-2 p-3 w-100 d-flex justify-content-center gap-2'
                style={{ borderStyle: 'dashed !important' }}
              >
                <ImageIcon />
                <h6 className='h6 mb-0 fw-semibold'>Choose image</h6>
                <input
                  type='file'
                  name='upload-picture'
                  id='upload-picture'
                  className='d-none'
                />
              </label>
            </li>
          </ul>
          <div className='pt-4 d-flex gap-3'>
            <button
              type='button'
              onClick={() => setShow('')}
              className='flex-fill btn btn-gray text-white rounded-1 px-2 py-3'
            >
              <span className='fw-semibold'>Cancel</span>
            </button>
            <button
              type='submit'
              className='flex-fill btn btn-primary text-white rounded-1 px-2 py-3'
            >
              <span className='fw-semibold'>Save</span>
            </button>
          </div>
        </form>
      </PrimaryModal>

      <button
        onClick={() => setShow('Add Vet')}
        type='button'
        className='btn btn-sm btn-primary py-2 px-4 rounded-2 text-capitalize h-100'
      >
        Add Vet
      </button>
    </>
  );
};

export default AddVetModal;
