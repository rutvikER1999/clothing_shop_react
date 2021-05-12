import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import "./checkout.styles.scss";
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutBtton from "../../components/stripe-button/stripe-button.component";
const CheckoutPage = ({cartItems, total}) => (
<div className= 'checkout-page'>
    <div className="checkout-header">
        <div className="header-block">
            <span>Product</span>
        </div>
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>
    </div>
    {cartItems.map(cartItem =>(
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
        <span>TOTAL: ₹{total}</span>
        <StripeCheckoutBtton price={total}/>
    </div>
</div>
);

const mapStateToProps = createStructuredSelector({
cartItems: selectCartItems,
total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
