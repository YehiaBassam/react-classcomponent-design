import React, { Component } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default class ProductImages extends Component {
  render() {
    return (
      <div>
        <div className='position-relative'>
          <img src='images/newproduct.jpg' className='img-fluid' alt='newproduct' style={{borderRadius:"10px"}} />
          <div className='bg-light img-fly px-4 py-2 flex-center' style={{boxShadow: '0px 0px 3px #00000040',borderRadius:'5px'}}>
            <img src="images/360.svg" className="imfg-fluid" alt="product" style={{width:'35px'}}/>
          </div>
        </div>

        <div className='d-flex align-items-center ms-5 mt-3 '>
          <IoIosArrowBack className='pointer' style={{color:'grey', fontSize:'30px'}}/>
          <div className='row'>
            <div className='col-6 col-lg-3 mb-2 mb-lg-0'>
              <img src='images/product-1.png' alt='product' className='pointer' style={{width: '80px'}}/>
            </div>
            <div className='col-6 col-lg-3 mb-2 mb-lg-0'>
              <img src='images/product-2.png' alt='product' className='pointer' style={{width: '80px'}}/>
            </div>
            <div className='col-6 col-lg-3 mb-2 mb-lg-0'>
              <img src='images/product-3.png' alt='product' className='pointer' style={{width: '80px'}}/>
            </div>
            <div className='col-6 col-lg-3 mb-2 mb-lg-0'>
              <img src='images/product-4.png' alt='product' className='pointer' style={{width: '80px'}}/>
            </div>
          </div>
          <IoIosArrowForward className='pointer' style={{color:'grey', fontSize:'30px'}}/>
        </div>
      </div>
    )
  }
}
