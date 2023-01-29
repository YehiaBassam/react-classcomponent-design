import React, { Component } from 'react'
import { TbBrandTelegram } from 'react-icons/tb'

export default class MainFooter extends Component {
  render() {
    return (
      <div className='py-4' style={{background:"#3C3C3B"}}>
        <div className='container pb-2' style={{borderBottom:"1px solid #454544"}}>
          <div className='row text-light'>
            <div className='col-12 col-md-6'>
              <div>
                <img className='mb-4' src='images/logo-2.svg' alt='logo' style={{width: '150px'}}/>
                <p style={{lineHeight: '1.1'}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br /><br /> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia <br /><br /> m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                </p>
              </div>
            </div>
            <div className='col-12 col-md-6 ps-4' style={{borderLeft:"1px solid #454544"}}>
              <div>
                <p>Subscribe to our newsletter</p>
                <div className="input-group mb-3">
                  <input 
                    type="email" 
                    className="form-control py-2" 
                    placeholder="Enter Your Mail" 
                    aria-label="Enter Your Mail" 
                    aria-describedby="button-addon2" 
                    style={{borderRadius: '24px',zIndex:"1"}}
                  />
                  <div>
                    <button className="btn bg-primary-color email-btn text-dark" type="button" id="button-addon2" >
                      <small className='fw-bold'> Subscribe </small>
                      <TbBrandTelegram className='ms-2' style={{fontSize:'20px'}}/>
                    </button>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-md-6 text-light' style={{borderRight:"1px solid #454544"}}>
                  <p className='mb-2 pointer'>About Us</p>
                  <p className='mb-2 pointer'>Contact Us</p>
                  <p className='mb-2 pointer'>Track Order</p>
                  <p className='mb-2 pointer'>Terms & Conditions</p>
                  <p className='mb-2 pointer'>Privacy Policy</p>
                  <p className='mb-2 pointer'>Sell With Us</p>
                  <p className='mb-2 pointer'>Shipping And Returns</p>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='ps-0 mt-3 mt-lg-0 ps-lg-4'>
                    <p className='pointer'>
                      <img className='me-2' src='images/facebook.svg' alt='facebook' style={{width: '25px'}}/>
                      /YESHTERY
                    </p>
                    <p className='pointer'>
                      <img className='me-2' src='images/linkedin.svg' alt='linkedin' style={{width: '25px'}}/>
                      /YESHTERY
                    </p>
                    <p className='pointer'>
                      <img className='me-2' src='images/instegram.svg' alt='instegram' style={{width: '25px'}}/>
                      /YESHTERY
                    </p>
                    <p className='pointer'>
                      <img className='me-2' src='images/twitter.svg' alt='twitter' style={{width: '25px'}}/>
                      /YESHTERY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container pt-4'>
          <div className='row flex-center text-light'>
            <div className='col-12 col-lg-4 mt-4 mt-lg-0'>
              © 2021 yeshtery, all rights reserved.
            </div>
            <div className='col-12 col-lg-4 mt-4 mt-lg-0'>
              <img className='me-3 pointer' src='images/cash.png' alt='cash' />
              <img className='me-3 pointer' src='images/visa.png' alt='visa' />
              <img className='me-3 pointer' src='images/mastercard.png' alt='mastercard' />
            </div>
            <div className='col-12 col-lg-4 mt-4 mt-lg-0'>
              Powered By
              <img className='ms-2 mb-1' src='images/nasnav.png' alt='nasnav' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
