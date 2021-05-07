import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux'
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => (
        <CartItem key={cartItem.key} item={cartItem} />
        ))}
    </div>
    <CustomButton>GO  TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProp =({ cart: { cartItems } }) => ({
   cartItems
})

export default connect(mapStateToProp)(CartDropdown);