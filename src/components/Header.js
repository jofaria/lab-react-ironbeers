import React from 'react';
import header from './../assets/header.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to="/">
      <nav>
        <img
          src={header}
          alt=""
          style={{ width: '100%', marginBottom: '20px' }}
        />
      </nav>
    </Link>
  );
}

export default Header;
