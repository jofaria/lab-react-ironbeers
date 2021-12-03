import React from 'react';
import header from './../assets/header.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to="/">
      <nav>
        <img src={header} alt="" />
      </nav>
    </Link>
  );
}

export default Header;
