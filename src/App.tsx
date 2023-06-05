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
import NotFoundPage from "./pages/notFound/notFound";
import {IProductCountAndTotal} from "./models/interfaces/iItemLocalStorage";
import PaymentFormPage from "./pages/checkoutForm/checkoutForm";
import TicketsPage from "./pages/tickets/Tickets";

interface IProductCountAndTotalContext {
    countAndTotal: IProductCountAndTotal;
    setContextCount: () => void;
}
export const CartContext = createContext<IProductCountAndTotalContext>({
    countAndTotal: {count: 0, sum: 0},
    setContextCount: () => {
    },
});

function App() {
    const [countAndTotal, setCountAndTotal] = useState({count: 0, sum: 0});

    const setContextCount = () => {
        setCountAndTotal(itemCountCart.sumMapValues())
    };

    useEffect(() => {
        setContextCount();
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <CartContext.Provider value={{countAndTotal, setContextCount}}>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/sales/:productSearch" element={<SalesPage/>}/>
                        <Route path="/item/:id" element={<ItemPage/>}/>
                        <Route path="/categories" element={<CategoriesPage/>}/>
                        <Route path="/checkout" element={<PaymentFormPage/>}/>
                        <Route path="/checkout/ticket/:id" element={<TicketsPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </CartContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
