import React, {useEffect, useState, createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from "./components/navBar/NavBar";
import LandingPage from "./pages/landing/Landing";
import CartPage from "./pages/cart/Cart";
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
                        <Route path="/sales/:productSearch"
                               element={<SalesPage/>}/>
                        <Route path="/item/:id" element={<ItemPage/>}/>
                        <Route path="/categories" element={<CategoriesPage/>}/>
                    </Routes>
                </CartContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
