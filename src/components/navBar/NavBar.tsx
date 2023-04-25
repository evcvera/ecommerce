import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import './navBar.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import CartWidget from "../cartWidget/CartWidget";

const NavBar: React.FC = () => {

    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-primary bg-primary d-flex justify-content-center">
                <div className="container w-100 d-flex">
                        <form className="form-inline d-flex">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                        </form>
                        <ul className="w-auto d-flex justify-content-center list-unstyled mb-0" >
                            <li className="nav-item active" >
                                <Link to="/" className={location.pathname === '/' ? 'nav-link text-white' : 'nav-link'}>
                                    <i className="bi bi-house"/>
                                    <div className="d-md-none d-sm-none d-none  d-lg-block">Home</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link text-white' : 'nav-link'}>
                                    <i className="bi bi-whatsapp"/>
                                    <div className="d-md-none d-sm-none d-none  d-lg-block">Contact</div>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/cart" className={location.pathname === '/cart' ? 'nav-link text-white' : 'nav-link'}>
                                    <CartWidget/>
                                    <div className="d-md-none d-sm-none d-none  d-lg-block">Cart</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
    )
};

export default NavBar;
