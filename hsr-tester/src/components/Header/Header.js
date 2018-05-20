import React from 'react';
import Logo from './logo.png';

const header = () => {
  return(
    <header className="header">
      <img src={Logo} alt="logo" className="logo"/>
      <h1 className="logo-title">Human Sounds Records</h1>
    </header>
  )
}

export default header;