import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className="bg-dark py-2">
        <div className='container d-flex justify-content-between align-items-center'>
          <span className='text-light pointer'>Men</span>
          <span className='text-light pointer'>Women</span>
          <span className='text-light pointer'>Girls</span>
          <span className='text-light pointer'>Kids</span>
          <span className='text-light pointer'>Best Sellers</span>
          <span className='text-light pointer'>New Arrivals</span>
          <span className='text-danger pointer'>Offers</span>
        </div>
      </div>
    )
  }
}
