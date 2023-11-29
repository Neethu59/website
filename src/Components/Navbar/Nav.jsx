import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xl-2 col-md-4 col-sm-6 navbar1'>
          <img
            src='https://img.freepik.com/premium-vector/initial-letter-p-logo-blue-shapes-origami-style-usable-business-people-logo-icon-flat_53295-458.jpg?size=626&ext=jpg&ga=GA1.1.2037967380.1654494456&semt=ais'
            style={{ width: '10vw' }}
            alt='Logo'
          />
        </div>
        <div className='col-xl-10 col-md-8 col-sm-6 navbar2 d-flex justify-content-end align-items-center'>
          <div className='card w-75 nav-card d-flex'>
            <div className='d-flex align-items-center'>
              <img
                src='https://t4.ftcdn.net/jpg/06/19/35/23/240_F_619352326_4msdkIUaBf2H3NK6oIFlztpDUayL4313.jpg'
                style={{ width: '25px' }}
                alt='Company Logo'
              />
              <div className='ml-2' style={{ fontSize: '1vw' }}>
                xyz Enterprises Pvt. Ltd
              </div>
            </div>
          </div>
          <div className='dropdown ml-2'>
            <button
              className='btn btn-default bg-light dropdown-toggle'
              data-toggle='dropdown'
            >
              <span className='caret'></span>
            </button>
            <ul className='dropdown-menu'>
              <li>
                <a href='#'>HTML</a>
              </li>
              <li>
                <a href='#'>CSS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

