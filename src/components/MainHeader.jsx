import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineUser } from 'react-icons/hi';

export default class MainHeader extends Component {
  state = {
    quantity: 0,
  }
  
  componentDidUpdate(prevProps) {
    if ((this.props.cartQuantity !== prevProps.cartQuantity)) {
      this.setState(prevQty => {
        return {
          ...prevQty,
          quantity: prevQty.quantity + this.props.cartQuantity,
        }
      })
    } 
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='d-column d-lg-flex justify-content-between align-items-center'>
            <div className='mt-2'>
              <div className="search-bar input-group mb-3">
                <span className="flex-center" id="basic-addon1">
                  <BiSearch />
                </span>
                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
              </div>
            </div>

            <div className='mt-2 mb-3 my-lg-0 text-center'>
              <img src='images/adidas.svg' alt='logo' style={{width: '70px'}}/>
            </div>

            <div className='flex-center mb-2 mb-lg-0'>
              <div className='flex-center ms-4 pointer' onClick={this.props.openCart}>
                <FiShoppingCart />
                <small className='flex- center cart-fly'>
                  {this.state.quantity}
                </small>
                <span className='fw-bold'>Cart</span>
              </div>
              <div className='flex-center ms-4 pointer'>
                <AiOutlineHeart />
                <span className='ms-1 fw-bold'>Wishlist</span>
              </div>
              <div className='flex-center ms-4 pointer'>
                <HiOutlineUser />
                <span className='ms-1 fw-bold'>Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

