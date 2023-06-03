import React, {useEffect, useState, createContext} from 'react';
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
import itemCountCart from "./modelServices/itemCountCart";


interface ProductContextType {
    count: number;
    setContextCount: () => void;
}

export const CartContext = createContext<ProductContextType>({
    count: 0,
    setContextCount: () => {
    },
});


function App() {
    const [count, setCount] = useState(0);

    const setContextCount = () => {
        setCount(itemCountCart.sumMapValues())
        //setCount(prevCount => prevCount + 1);
        //setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };

    useEffect(() => {
        setContextCount();
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <CartContext.Provider value={{count, setContextCount}}>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/favorites" element={<FavoritesPage/>}/>
                        <Route path="/sales/:productSearch"
                               element={<SalesPage/>}/>
                        <Route path="/item/:id" element={<ItemPage/>}/>
                        <Route path="/categories" element={<CategoriesPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </CartContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
