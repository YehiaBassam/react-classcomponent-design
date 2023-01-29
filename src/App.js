import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import TopHeader from './components/TopHeader.jsx';
import MainHeader from './components/MainHeader.jsx';
import MainFooter from './components/MainFooter.jsx';
import ProductShow from './components/Products/ProductShow.jsx';
import SimilarProducts from './components/Products/SimilarProducts.jsx';
import BreadCrumbs from './components/BreadCrumbs.jsx';
import Navbar from './components/Navbar.jsx';
import Cart from './components/Products/Cart.jsx';

class App extends React.Component {
  state = {
    isCartOpen: false,
    quantity: 0
  };

  openCartHandler = () => {
    this.setState({isCartOpen: true});
  };
  closeCartHandler = () => {
    this.setState({isCartOpen: false});
  };
  changeQuantity = (quantity) => {
    this.setState({quantity});
  };

  render() {  
    return (
      <>
        <TopHeader />
        <MainHeader openCart={this.openCartHandler} cartQuantity={this.state.quantity}/>
        <Cart show={this.state.isCartOpen} hide={this.closeCartHandler} cartQuantity={this.state.quantity}/>
        <Navbar />
        <BreadCrumbs />
        <ProductShow addToCart={this.changeQuantity}/>
        <SimilarProducts />
        <MainFooter />
      </>
    )
  }
}

export default App;
