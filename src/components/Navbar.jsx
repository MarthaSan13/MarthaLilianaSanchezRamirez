import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { Container, Form, FormControl, InputGroup, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/images/snakeMid.png';
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './Cartwidget';
import Categories from './Categories';

const Navbar = () => {

    return (
        <nav className='navlist'>
            <ul>
                <Link to={`/`}> <img src={logo} className="App-logo" alt="logo" /></Link>
                <li><Link className='myLink' to={`/`}>Home</Link></li>
                <li><Link className='myLink' to={`/categories`}>Categorias</Link>  </li>
                <li>Destacados</li>
                <li>Tu cuenta</li>
                <Link className='myLink' to={`/cart`}><CartWidget /></Link>


            </ul>
        </nav>
    )
}
export default Navbar;

