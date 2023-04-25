import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import CartWidget from "./components/cartWidget/CartWidget";
import LandingPage from "./pages/landing/Landing";
import NotFoundPage from "./pages/notFound/NotFound";
import CartPage from "./pages/cart/Cart";
import ContactPage from "./pages/contact/Contact";

function App() {
    return (
        <div className="App">
            <>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<LandingPage/>} />
                        <Route path="/cart" element={<CartPage/>} />
                        <Route path="/contact" element={<ContactPage/>} />
                        <Route path="*" element={<NotFoundPage/>} />
                    </Routes>
                </BrowserRouter>
            </>
        </div>
    );
}

export default App;
