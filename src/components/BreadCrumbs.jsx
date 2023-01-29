import React, { Component } from 'react'

export default class BreadCrumbs extends Component {
  render() {
    return (
      <div className="breadcrumbs fw-bold py-3">
        <div className='container'>
          <a className='text-dark me-3' href='##'>Men</a>
          <a className='text-dark me-3' href='##'>Clothing</a>
          <a className='text-dark me-3' href='##'>Tops</a>
          <a className='text-dark me-1' href='##'>Adidas</a>
          <span> / </span>
          <span> Adidas Black T-Shirt </span>
        </div>
      </div>
    )
  }
}

