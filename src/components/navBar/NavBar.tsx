import React, {FormEvent, useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';

import './navBar.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import CartWidget from "../cartWidget/CartWidget";
import {CartContext} from "../../App";

const NavBar: React.FC = () => {
    const { count } = useContext(CartContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [productSearch, setProductSearch] = useState<string>("");
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        navigate(`sales/${productSearch}`);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {value} = event.target;
        setProductSearch(value);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-primary bg-primary d-flex justify-content-center">
                <div className="container w-100 d-flex">
                    <form className="form-inline d-flex" onSubmit={handleSubmit}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar productos"
                               aria-label="Search" name="search" value={productSearch}
                               onChange={handleInputChange}/>
                    </form>
                    <ul className="w-auto d-flex justify-content-center list-unstyled mb-0">
                        <li className="nav-item header-item">
                            <Link to="/"
                                  className={`nav-link ${location.pathname === '/' ? ' text-white' : ''}`}>
                                <i className="bi bi-house"/>
                                <div className="d-md-none d-sm-none d-none  d-lg-block">Home</div>
                            </Link>
                        </li>
                        <li className="nav-item header-item">
                            <Link to="/categories"
                                  className={`nav-link ${location.pathname === '/categories' ? ' text-white' : ''}`}>
                                <i className="bi bi-bookmark-star"/>
                                <div className="d-md-none d-sm-none d-none  d-lg-block">Categorias</div>
                            </Link>
                        </li>

                        <li className="nav-item header-item">
                            <Link to="/cart"
                                  className={`nav-link ${location.pathname === '/cart' ? ' text-white' : ''}`}>
                               <CartWidget itemCount={count}/>
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
