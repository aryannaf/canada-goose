import React from 'react';
import './Header.scss';
import search from '../../assets/search.png';
import cart from '../../assets/shopping-bag.png';
import menu from '../../assets/menu.png';
import logo from '../../assets/cg-logo.svg';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
        <img className="header__menu" src={menu} alt="menu"/>
        <NavLink to='/'><img className="header__logo" src={logo} alt="Canada Goose logo"/></NavLink> 
        <div className="header__options">
            <img className="header__search" src={search} alt="search"/>
            <img className="header__cart" src={cart} alt="cart"/>
        </div>
    </div>
  )
}

export default Header