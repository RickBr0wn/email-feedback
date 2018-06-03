// Libraries
import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

// Redux
import { connect } from 'react-redux'

// Actions
import * as actions from '../Actions'

class Payments extends Component{
  render(){
    return(
      <StripeCheckout amount={500}
                      name="eMail-e"
                      description="$1 for 10 email credits"
                      token={token => this.props.handleToken(token)}
                      stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Payments)