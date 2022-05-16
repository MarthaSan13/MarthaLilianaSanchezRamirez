import React, { Fragment } from 'react';
import logo from '../assets/images/snakeMid.png';
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './Cartwidget';

const Navbar = () => {

    return (
        <>
            <div class="headerTBG">
                <>
                    <p class="headerT">
                        <span class="span1 neon neon--shadow1" data-text="R">R</span>
                        <span class="span2 neon neon--shadow2" data-text="A">A</span>
                        <span class="span3 neon neon--shadow3" data-text="I">I</span>
                        <span class="span4 neon neon--shadow4" data-text="N">N</span>
                        <span class="span5 neon neon--shadow5" data-text="B">B</span>
                        <span class="span6 neon neon--shadow6" data-text="O">O</span>
                        <span class="span7 neon neon--shadow7" data-text="W">W</span>
                    </p>
                    <p class="headerT">
                        <span class="span7 neon neon--shadow7" data-text="S">S</span>
                        <span class="span6 neon neon--shadow6" data-text="N">N</span>
                        <span class="span5 neon neon--shadow5" data-text="A">A</span>
                        <span class="span4 neon neon--shadow4" data-text="K">K</span>
                        <span class="span3 neon neon--shadow3" data-text="E">E</span>

                    </p>

                </>
            </div >
            <nav className='navlist'>
                <ul>
                    <Link to={`/`}> <img src={logo} className="App-logo" alt="logo" /></Link>
                    <li><Link className='myLink' to={`/category/electronics`}>Electronics</Link>  </li>
                    <li><Link className='myLink' to={`/category/jewelery`}>Jewelery</Link>  </li>
                    <li><Link className='myLink' to={`/category/men's clothing`}>Men's clothing</Link>  </li>
                    <li><Link className='myLink' to={`/category/women's clothing`}>Women's clothing</Link>  </li>
                    <Link className='myLink' to={`/cart`}><CartWidget /></Link>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;

