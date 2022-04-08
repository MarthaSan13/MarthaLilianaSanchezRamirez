import React, { Fragment } from 'react';
import logo from '../assets/images/snakeMid.png';
import CartWidget from './Cartwidget';

const Navbar = () => {

    return (
        <Fragment>
            <nav className='navlist'>
                <ul>
                    <img src={logo} className="App-logo" alt="logo" />
                    <li>Home</li>
                    <li>Productos</li>
                    <li>Destacados</li>
                    <li>Tu cuenta</li>
                    <CartWidget />
                </ul>
            </nav>

        </Fragment>
    )

}


export default Navbar;

