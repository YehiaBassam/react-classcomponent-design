import React, { Component, lazy } from 'react';
import ProductDetails from './ProductDeatils';

const ProductImages = lazy (() => import("./ProductImages"));

export default class ProductShow extends Component {
  render() {
    return (
      <div className='container py-4'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <ProductImages />
          </div>
          <div className='col-12 col-lg-6'>
            <ProductDetails addToCart={this.props.addToCart}/>
          </div>
        </div>
      </div>
    )
  }
}
