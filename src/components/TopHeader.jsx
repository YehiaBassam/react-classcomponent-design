import React, { Component } from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default class TopHeader extends Component {
  render() {
    return (
      <div className='py-2 bg-primary-color'>
        <div className='container'>
          <div className='d-column d-lg-flex justify-content-between align-items-center'>
            <div>
              <img src='images/logo.svg' alt='logo' style={{width: '150px'}}/>
            </div>
            <div className='my-1 my-lg-0'>
              <IoIosArrowBack />
              <small className='mx-1'>
                Valentine’s Day Offers! Buy Two Get One Free 
                  <a className='text-dark fw-bold ms-2' href='##'>
                    Shop Now
                  </a>
              </small>
              <IoIosArrowForward />
            </div>
            <div className='d-flex'>
              <div className='flex-center ms-3'>
                <FiPhoneCall />
                <span className='ms-2 fw-bold'>Contact us</span>
              </div>
              <div className='flex-center ms-3'>
                <AiOutlineShoppingCart />
                <span className='ms-2 fw-bold'>Track Order</span>
              </div>
              <div className='flex-center ms-3'>
                <GrLocation />
                <span className='ms-2 fw-bold'>Find A Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
