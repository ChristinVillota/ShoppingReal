import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import homelogo from '../homelogo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
  render() {
    return <NavWrapper className="navbar navbar-expand-sm 
     navbar-dark px-sm-5">
          {/*
    https://www.iconfinder.com/icons/2867911/home_icon_icon
    Creative Commons (Attribution-Share Alike 3.0 Unported);
    https://www.iconfinder.com/iconsets/heroicons-ui */}

    <Link to='/home'>
        <img src={homelogo} alt="store" className="navbar-brand"/>
    </Link> 
    <ul className="navbar-nav align-items-center">
    <li className="nav-item ml-3">
    <Link to="/" className="nav-link">
    Products
    </Link>
    </li>
    </ul>
    <Link to='/cart' className="ml-auto">
    <ButtonContainer>
      <span className="mr-2">
      <i className="fas fa-cart-plus" />
      </span>
       My Cart 
    </ButtonContainer>
    </Link>
      </NavWrapper>
    
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlack);
.nav-link {
  color:var (--mainWhite) !important;
  font-size:1.3rem;
  text-transform: capitalize;
}
`
