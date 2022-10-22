import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { EmailIcon, LockIcon } from '../../components/icons/icons';
import Logo from '../../components/logos/Logo';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('dashboard');
  };

  return (
    <main>
      <section
        className='min-vh-100 bg-cover py-5 d-flex align-items-center'
        style={{ backgroundImage: `url(/assets/sign-in-hero.jpg)` }}
      >
        <div className='container'>
          <ul className='nav row row-cols-1 row-cols-lg-2 gy-4'>
            <li>
              <div className='h-100 d-flex align-items-end'>
                <h5 className='mb-0 fw-semibold text-white text-center text-lg-start'>
                  Pakistan's online cattle and livestock marketplace
                </h5>
              </div>
            </li>
            <li className='order-first order-lg-last'>
              <div className='bg-light rounded-4 shadow p-3'>
                <div className='bg-white p-4 p-lg-5'>
                  <Logo className='mx-auto mb-4' />
                  <h4 className='mb-4 fw-bold text-center'>
                    Login to Mall Maweshi
                  </h4>
                  <form onSubmit={handleSubmit}>
                    <ul className='nav flex-column gap-4'>
                      <li>
                        <Form.Label
                          htmlFor='email'
                          className='fs-7 fw-500 ps-2'
                        >
                          Email
                        </Form.Label>
                        <div className='border rounded-2 py-2'>
                          <InputGroup>
                            <InputGroup.Text className='bg-white border-0'>
                              <EmailIcon />
                            </InputGroup.Text>
                            <Form.Control
                              className='bg-white border-0'
                              placeholder='Infor@gmail.com'
                              id='email'
                              name='email'
                              type='email'
                              required
                            />
                          </InputGroup>
                        </div>
                      </li>
                      <li>
                        <Form.Label
                          htmlFor='password'
                          className='fs-7 fw-500 ps-2'
                        >
                          Password
                        </Form.Label>
                        <div className='border rounded-2 py-2'>
                          <InputGroup>
                            <InputGroup.Text className='bg-white border-0'>
                              <LockIcon />
                            </InputGroup.Text>
                            <Form.Control
                              className='bg-white border-0'
                              placeholder='************'
                              id='password'
                              name='password'
                              type='password'
                              required
                            />
                          </InputGroup>
                        </div>
                      </li>
                      <li className='mt-4'>
                        <button
                          type='submit'
                          className='btn btn-primary py-3 w-100 text-white text-uppercase'
                        >
                          <span className='fs-7 fw-bold'>LOGIN</span>
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
