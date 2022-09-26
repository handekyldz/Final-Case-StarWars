import React from 'react'
import {ReactComponent as Logo} from "../../assets/star-wars-two.svg"
import "../../App.css"

function Header() {
  return (
    <header className='header-container'>
        <Logo  className='header-logo' />
    </header>
  );
};

export default Header