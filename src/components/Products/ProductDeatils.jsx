import React, { Component } from 'react'

export default class ProductDeatils extends Component {
  state = {
    quantity: 0,
  }

  increaseQuantity = () => {
    this.setState(prevQty => {
      return {
        ...prevQty,
        quantity: prevQty.quantity + 1,
      }
    })
  };
  decreaseQuantity = () => {
    if (this.state.quantity < 2)
    return;
    
    this.setState(prevQty => {
      return {
        ...prevQty,
        quantity: prevQty.quantity - 1,
      }
    })
  };
  addToCartHandler = () => {    
    this.props.addToCart(this.state.quantity);
    // to update similar quantities if chosen
    setTimeout(()=>{
      this.props.addToCart(0);
    }, 100);
    this.setState({quantity: 0})
  };

  render() {
    return (
      <div>
        <img src='images/adidas.svg' alt='adidas' style={{ width: '50px' }} />
        <h6 className='fw-bold my-2'>Adidas black t-shirt lorem ipsum dolor sit <br /> amet, consectetuer adipiscing elit.</h6>
        <p style={{ color: "#A7A9AC" }}>Men</p>

        <div className='d-flex'>
          <div>
            <img src="images/fullstar.svg" alt="fullstar" />
            <img src="images/fullstar.svg" alt="fullstar" />
            <img src="images/fullstar.svg" alt="fullstar" />
            <img src="images/fullstar.svg" alt="fullstar" />
            <img src="images/star.svg" alt="star" />
          </div>
          <span className='fw-bold mt-1 mx-3'>4.2 of 5</span>
          <span className='fw-bold mt-1' style={{ color: "#575756" }}>22 Rates</span>
        </div>

        <div className='d-flex align-items-center py-3 border-bottom'>
          <h5 className='fw-bold text-secondary-color'>9,999</h5>
          <h6 className='text-secondary-color mt-1 ms-2'>LE</h6>
          <small className='fw-bold mx-3 mb-1' style={{ textDecoration: 'line-through', color: "#A7A9AC" }}>9,999 LE</small>
          <small className='bg-primary-color py-1 px-2 fw-bold' style={{ borderRadius: '8px' }}> 30% Off </small>
        </div>

        <div className='py-3 border-bottom'>
          <h6 className='fw-bold mb-3'>Size</h6>
          <div className='d-flex'>
            <small className='size me-3 flex-center'>Small</small>
            <small className='size me-3 flex-center'>Medium</small>
            <small className='size me-3 flex-center' style={{ background: '#ECECEC' }}>Large</small>
            <small className='size me-3 flex-center'>X Large</small>
            <small className='size me-3 flex-center'>XX Large</small>
          </div>
        </div>

        <div className='py-3 border-bottom'>
          <h6 className='fw-bold mb-3'>Size</h6>
          <div className='d-flex'>
            <img src='images/color1.png' alt='product' style={{ width: '60px' }} className="me-3 pointer" />
            <img src='images/color2.png' alt='product' style={{ width: '60px' }} className="pointer" />
          </div>
        </div>

        <div className='py-3'>
          <h6 className='fw-bold mb-3'>Quantity</h6>
          <div className='d-flex justify-content-between align-items-center qty p-1'>
            <button className='btn bg-primary-color fw-bold qty-btn'  onClick={this.decreaseQuantity}>-</button>
            <span>{this.state.quantity}</span>
            <button className='btn bg-primary-color fw-bold qty-btn' onClick={this.increaseQuantity}>+</button>
          </div>

          <div className='mt-4'>
            <button 
              className='btn bg-secondary-color fw-bold text-light py-2 px-5' 
              style={{ borderRadius: "27px" }} 
              onClick={this.addToCartHandler}
            > 
              Add To Cart 
            </button>
            <button className='btn bg-primary-color fw-bold text-dark py-2 px-5 mt-3 mt-md-0 ms-sm-4' style={{ borderRadius: "27px" }}> Pickup From Store </button>
          </div>
        </div>
      </div>
    )
  }
}
