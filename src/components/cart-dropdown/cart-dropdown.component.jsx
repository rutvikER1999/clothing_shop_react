import React from 'react';
import { selectCartItems } from '../../redux/cart/cart.selector'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux'
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      { cartItems.length ? ( 
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
        ))) 
        : <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <CustomButton onClick={()=> {
      history.push('/checkout');
      dispatch(toggleCartHidden())
    }} >GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProp = createStructuredSelector({
   cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProp)(CartDropdown));