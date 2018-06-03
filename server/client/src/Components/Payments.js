// Libraries
import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Payments extends Component{
  render(){
    return(
      <StripeCheckout amount={500}
                      name="eMail-e"
                      description="$1 for 10 email credits"
                      token={token => console.log(token)}
                      stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    )
  }
}

export default Payments