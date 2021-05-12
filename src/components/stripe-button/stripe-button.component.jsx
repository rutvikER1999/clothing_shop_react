import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckoutBtton = ({ price }) => {
    const priceForStripe = (price * 100)
    const publishableKey = 'pk_test_51IqAZoSA4ZTeYDU6fNPxQXyMvLhtXyVvo8GwwRpt4KH38xFSI6Djr2jIaDZdtWgrMY13GKi7VWjia0ty1nGhsLa0007VorMAUW'

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripeCheckOut
            label= 'Pay Now'
            name = 'CLOTH SHOP Pvt Ltd'
            billingAddress
            shippingAddress
            image ='https://img.favpng.com/2/2/5/shopping-cart-royalty-free-stock-photography-png-favpng-YVw6RfDbwMK19uAWgqKGdD9NT.jpg'
            description={`Your Total Is ₹${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            currency="INR"
        />
    );
};
export default StripeCheckoutBtton;