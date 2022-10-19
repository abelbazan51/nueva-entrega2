import React from 'react';
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <NavLink to="/"><h1>El mercadito</h1></NavLink> 

            <ul>
                <NavLink to='/category/almacen'>almacen</NavLink>
                <NavLink to='/category/bebidas'>bebidas</NavLink>
                <NavLink to='/category/carniceria'>cariniceria </NavLink>
            </ul>
            <Link to="/cart">
            <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
