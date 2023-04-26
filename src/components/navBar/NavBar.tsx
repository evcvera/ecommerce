import React, {FormEvent, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

import './navBar.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import CartWidget from "../cartWidget/CartWidget";

const NavBar: React.FC = () => {

    const location = useLocation();

    const [searchValue, setSearchValue] = useState<string>("");
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log('Valores del formulario:', searchValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {value} = event.target;
        setSearchValue(value);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-primary bg-primary d-flex justify-content-center">
                <div className="container w-100 d-flex">
                        <form className="form-inline d-flex" onSubmit={handleSubmit}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search" name="search" value={searchValue} onChange={handleInputChange}/>
                        </form>
                        <ul className="w-auto d-flex justify-content-center list-unstyled mb-0" >
                            <li className="nav-item header-item" >
                                <Link to="/" className={`nav-link ${location.pathname === '/' ? ' text-white' : ''}`}>
                                    <i className="bi bi-house"/>
                                    <div className="d-md-none d-sm-none d-none  d-lg-block">Home</div>
                                </Link>
                            </li>
                            <li className="nav-item header-item">
                                <Link to="/favorites" className={`nav-link ${location.pathname === '/favorites' ? ' text-white' : ''}`}>
                                    <i className="bi bi-heart"/>
                                    <div className="d-md-none d-sm-none d-none  d-lg-block">Favoritos</div>
                                </Link>
                            </li>

                            <li className="nav-item header-item">
                                <Link to="/cart" className={`nav-link ${location.pathname === '/cart' ? ' text-white' : ''}`}>
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
