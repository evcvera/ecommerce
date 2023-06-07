import React, {useContext, useEffect, useState} from 'react';
import itemCountCart from "../../modelServices/itemCountCart";
import Item from "../../components/item/Item";
import Loading from "../../components/loading/Loading";
import {CartContext} from "../../App";
import productService from "../../services/productService";
import {ResultsEntity} from "../../models/interfaces/iMeliSearch";
import {Link} from "react-router-dom";


const CartPage: React.FC = () => {
    let [meliSearch, setMeliSearch] = useState<ResultsEntity[] | undefined>(undefined);
    let myArray = itemCountCart.getMapKeys();
    const countAndTotal = useContext(CartContext);

    useEffect(() => {
        setMeliSearch(undefined);
        if (myArray.length > 0) {
            productService.searchItemsById(myArray).then((ms) => {
                setMeliSearch(ms);
            })
                .catch((error) => {
                    console.error(error)
                });
        }
    }, []);


    return (
        (
            <>  {
                myArray.length > 0 ?
                    <div className={"py-4 container"}>
                        <h1>Mi Carrito {countAndTotal.countAndTotal.count} Items</h1>
                        <h1>Monto Total a pagar ${countAndTotal.countAndTotal.sum}</h1>
                        <Link to="/checkout">
                            <button className="btn btn-primary mt-4">Comprar ahora</button>
                        </Link>
                        {(meliSearch && meliSearch.length > 0) ?
                            meliSearch?.map((item, i) => (
                                <div key={i}>{
                                    <Item item={item}/>
                                }
                                </div>
                            )) :
                            <Loading/>
                        }
                    </div> :
                    <div>
                        <h1 className={"mt-4"}>Opps, no tenes items en tu carrito.</h1>
                    </div>
            }
            </>

        ));
};


export default CartPage;
