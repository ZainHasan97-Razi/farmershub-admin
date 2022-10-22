import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { SearchIcon } from '../icons/icons';

const SearchField = () => {
  return (
    <div className='bg-light rounded-2 py-1 flex-fill'>
      <form noValidate>
        <InputGroup>
          <InputGroup.Text className='bg-light border-0'>
            <button type='button' className='btn p-0 text-dark text-opacity-50'>
              <SearchIcon />
            </button>
          </InputGroup.Text>
          <Form.Control
            className='bg-light border-0'
            placeholder='Search for a user'
            id='searchUser'
            name='searchUser'
            type='search'
            required
          />
        </InputGroup>
      </form>
    </div>
  );
};

export default SearchField;
