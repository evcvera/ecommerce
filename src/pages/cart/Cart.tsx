import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "../../components/itemListContainer/ItemListContainer";

const CartPage: React.FC = () => {
    return (
        <div className="container">
            <ItemListContainer greeting={"Bienvenidos"}/>
        </div>
    );
};

export default CartPage;
