// Libraries
import React from 'react'

// Image
import Background from './banner.jpeg'

const Landing = () => {
  const styles = {
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    height: '93vh',
    paddingTop: '50px',
    color: '#fff'
  }
  return(
    <div style={styles}>
      <h1>eMail-e</h1>
      <h4>Collect <strong>REAL</strong> feedback from your customers!!</h4>
  </div>
  )
}

export default Landing