import React, { Component } from 'react'

export default class ProductCard extends Component {
  render() {
    return (
      <div className="card p-1 product-card">
      { this.props.img === "boy" ? 
        <img src="images/boy.png" className="card-img-top" alt="product" />
      :
        <img src="images/product.png" className="card-img-top" alt="product" />
      }

        <img src="images/360.svg" className="img-fluid img-fly" alt="product" />
        <div className="card-body ps-2 pb-0">
          <h6 className="card-title fw-bold">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </h6>
          <div className='d-flex justify-content-between align-items-center'>
          <div>
            <p className='text-secondary-color fw-bold mb-0'>9,999 LE</p>
            <small className='fw-bold me-3' style={{textDecoration: 'line-through',color:"#A7A9AC"}}>9,999 LE</small>
            <small className='bg-primary-color py-1 px-2' style={{borderRadius: '8px'}}> 50 % </small>
          </div>

            <img src='images/adidas.svg' alt='adidas' style={{width:'60px'}}/>
          </div>

          <div className='d-flex justify-content-around align-items-center my-3'>
            <div>
              <img src="images/fullstar.svg" alt="fullstar" />
              <img src="images/fullstar.svg" alt="fullstar" />
              <img src="images/fullstar.svg" alt="fullstar" />
              <img src="images/fullstar.svg" alt="fullstar" />
              <img src="images/star.svg" alt="star" />
            </div>
            <span className='fw-bold'>4.2 of 5</span>
          </div>

          <div className='d-flex justify-content-between align-items-center my-3'>
            <div>
              <small>From: </small>
              <small className='fw-bold'> UK</small>
            </div>
            <div>
              <small>To: </small>
              <small className='fw-bold'> Egypt</small>
            </div>
            <div>
              <small>In: </small>
              <small className='fw-bold'> 10 Days</small>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
