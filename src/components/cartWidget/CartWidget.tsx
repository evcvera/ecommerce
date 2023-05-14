import React, {useEffect, useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './cartWidget.css'
import itemCountCart from "../../modelServices/itemCountCart";

const CartWidget: React.FC = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(itemCountCart.sumMapValues);
    }, [localStorage.getItem('myMap'), localStorage.getItem('myMap')]);

    return (
        <>
            <i className="bi bi-cart"/>
            <span className="item-count">{count}</span>
        </>
    )
};

export default CartWidget;
