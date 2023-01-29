import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class SimilarProducts extends Component {
  render() {
    return (
      <div className='container mb-5'>
        <h5 className='text-secondary-color fw-bold'>Similar Products</h5>
        <p style={{color:"#575756"}}>You may like these products also</p>

        <div className='row'>
          <div className='col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0'>
            <ProductCard img="boy"/>
          </div>
          <div className='col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0'>
            <ProductCard img="product"/>
          </div>
          <div className='col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0'>
            <ProductCard img="boy"/>
          </div>
          <div className='col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0'>
            <ProductCard img="product"/>
          </div>
        </div>
      </div>
    )
  }
}
