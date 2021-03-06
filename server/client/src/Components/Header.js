// Libraries
import React from 'react'

// Redux
import { connect } from 'react-redux'

// Router
import { Link } from 'react-router-dom'

// Components
import Payments from './Payments'

class Header extends React.Component{
  renderContent(){
    switch(this.props.auth){
      case null:
        return
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="3" style={{ margin: "0 10px" }}>Credits: {this.props.auth.credits}</li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
        ] 
    }
  }

  render(){
    console.log(this.props)
    return(
      <nav>
        <div className="nav-wrapper teal">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo" style={{ margin: "0 10px" }}>
            eMail-e
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(Header)