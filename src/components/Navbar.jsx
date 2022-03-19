import React, { Fragment } from 'react';
import logo from '../logo.svg';
import CartWidget from './Cartwidget';

const Navbar = () => {

    return (
        <Fragment>
            <navbar className='navlist'>
                <ul>
                    <img src={logo} className="App-logo" alt="logo" />
                    <li>Home</li>
                    <li>Productos</li>
                    <li>Destacados</li>
                    <li>Tu cuenta</li>
                    <CartWidget />
                </ul>
            </navbar>

        </Fragment>
    )

}


export default Navbar;

