import React from 'react';
import Logo from './logo.png';

const header = () => {
  return(
    <header className="header">
      <img src={Logo} alt="logo" className="logo"/>
      <h1 className="logo-title">Human Sounds Records</h1>
      <section className="header-list">
      <ul>
        <li>
          <a >Home</a>
        </li>
        <li>
          <a >Artists</a>
        </li>
        <li>
          <a >Store</a>
        </li>
        <li>
          <a >Bandcamp</a>
        </li>
        <li>
          <a >About</a>
        </li>
      </ul>
    </section>
    </header>
  )
}

export default header; 