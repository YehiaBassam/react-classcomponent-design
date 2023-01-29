import React, { Component } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsCartX } from 'react-icons/bs';

export default class Cart extends Component {
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
        <Offcanvas
          show={this.props.show}
          onHide={this.props.hide}
          placement='end'
        >
          <Offcanvas.Header closeButton  style={{justifyContent: 'end'}}/>
          <Offcanvas.Body>
          <div className='text-center'>
            <h4 className='fw-bold text-secondary-color'>My Cart</h4>
          </div>

          { this.state.quantity !== 0 &&
            <div>
              <h6 className='fw-bold'>Cart Summary</h6>
              <div className='product-cart d-flex p-1 my-3'>
                <img src='images/newproduct.jpg' alt='product' />
                <div className='ps-3 w-100'>
                  <p className='mb-1 fw-bold'>Lorem ipsum dolor sit amet,<br /> consecte adipiscing elit.</p>
                  <p className='mb-1'>Quantity: { this.state.quantity }</p>
                  <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <span className='text-secondary-color fw-bold'>1,000</span>
                    <span className='text-secondary-color'> LE</span>

                  </div>
                    <span className="badge bg-primary-color text-dark ms-5 pointer">Remove</span>
                  </div>
                </div>
              </div>

              <div className='text-center'>
                <h5 className='fw-bold'>Total: { this.state.quantity * 1000} LE</h5>
              </div>

              <div className='mt-4 text-center'>
                <button className='btn btn-sm bg-primary-color fw-bold text-dark px-4 py-2 me-3' style={{borderRadius: "27px"}}> Review Cart </button>
                <button className='btn btn-sm bg-secondary-color fw-bold text-light px-4 py-2' style={{borderRadius: "27px"}}> Complete Checkout </button>
              </div>
            </div>
          }

          {
            !this.state.quantity && 
            <div className='text-center'>
              <h5 className='my-4'>The cart is empty</h5>
              <BsCartX style={{fontSize: '120px'}}/>
            </div>
            
          }
            
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    )
  }
}
