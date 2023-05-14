import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from "./components/navBar/NavBar";
import LandingPage from "./pages/landing/Landing";
import NotFoundPage from "./pages/notFound/NotFound";
import CartPage from "./pages/cart/Cart";
import FavoritesPage from './pages/favorites/Favorites';
import SalesPage from "./pages/sales/Sales";
import ItemPage from "./pages/item/item";
import CategoriesPage from "./pages/categories/Categories";


function App() {
    return (
        <div className="App">
            <>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<LandingPage/>} />
                        <Route path="/cart" element={<CartPage/>} />
                        <Route path="/favorites" element={<FavoritesPage/>} />
                        <Route path="/sales/:productSearch" element={<SalesPage/>} />
                        <Route path="/item/:id" element={<ItemPage/>} />
                        <Route path="/categories" element={<CategoriesPage/>} />
                        <Route path="*" element={<NotFoundPage/>} />
                    </Routes>
                </BrowserRouter>
            </>
        </div>
    );
}

export default App;
